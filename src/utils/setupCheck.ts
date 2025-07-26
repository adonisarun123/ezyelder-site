import { supabaseUtils } from '../lib/supabase';

interface SetupCheckResult {
  step: string;
  status: 'success' | 'warning' | 'error';
  message: string;
  action?: string;
}

export const runSetupCheck = async (): Promise<SetupCheckResult[]> => {
  const results: SetupCheckResult[] = [];

  // Check 1: Environment Variables
  const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
  const resendKey = process.env.REACT_APP_RESEND_API_KEY;

  if (!supabaseKey) {
    results.push({
      step: 'Environment Variables',
      status: 'error',
      message: 'REACT_APP_SUPABASE_ANON_KEY is not set',
      action: 'Create .env.local file with your Supabase API key'
    });
  } else if (supabaseKey === 'your_anon_key_here' || supabaseKey === 'demo_key') {
    results.push({
      step: 'Environment Variables',
      status: 'error',
      message: 'Supabase API key is using placeholder value',
      action: 'Replace with your actual Supabase anon key from dashboard'
    });
  } else {
    results.push({
      step: 'Environment Variables',
      status: 'success',
      message: 'Supabase API key is configured'
    });
  }

  if (!resendKey) {
    results.push({
      step: 'Email Service',
      status: 'warning',
      message: 'Resend API key not set (emails will be logged to console)',
      action: 'Add REACT_APP_RESEND_API_KEY for production email sending'
    });
  } else {
    results.push({
      step: 'Email Service',
      status: 'success',
      message: 'Resend API key is configured'
    });
  }

  // Check 2: Database Connection
  try {
    const connectionResult = await supabaseUtils.testConnection();
    if (connectionResult.success) {
      results.push({
        step: 'Database Connection',
        status: 'success',
        message: connectionResult.message
      });
    } else {
      results.push({
        step: 'Database Connection',
        status: 'error',
        message: connectionResult.message,
        action: connectionResult.needsSetup ? 'Configure API keys' : 'Check network connection'
      });
    }
  } catch (error: any) {
    results.push({
      step: 'Database Connection',
      status: 'error',
      message: error.message || 'Connection test failed',
      action: 'Check API key and network connection'
    });
  }

  // Check 3: Database Tables
  try {
    const tableResults = await supabaseUtils.checkDatabaseSetup();
    const missingTables = tableResults.filter(t => !t.exists);
    
    if (missingTables.length === 0) {
      results.push({
        step: 'Database Tables',
        status: 'success',
        message: 'All required tables exist'
      });
    } else {
      results.push({
        step: 'Database Tables',
        status: 'error',
        message: `Missing tables: ${missingTables.map(t => t.table).join(', ')}`,
        action: 'Run the SQL schema in your Supabase dashboard'
      });
    }
  } catch (error: any) {
    results.push({
      step: 'Database Tables',
      status: 'warning',
      message: 'Could not check table setup (may be connection issue)',
      action: 'Ensure connection works first'
    });
  }

  return results;
};

export const logSetupCheck = async (): Promise<void> => {
  console.log('🔍 Running EzyElders Setup Check...\n');
  
  const results = await runSetupCheck();
  
  results.forEach((result, index) => {
    const icon = result.status === 'success' ? '✅' : result.status === 'warning' ? '⚠️' : '❌';
    console.log(`${icon} ${result.step}: ${result.message}`);
    if (result.action) {
      console.log(`   → Action: ${result.action}`);
    }
  });

  const hasErrors = results.some(r => r.status === 'error');
  const hasWarnings = results.some(r => r.status === 'warning');

  if (hasErrors) {
    console.log('\n🚨 Setup issues found! Please fix the errors above before submitting forms.');
    console.log('\n📖 Setup Guide: Check SUPABASE_SETUP.md for detailed instructions');
  } else if (hasWarnings) {
    console.log('\n⚠️ Setup mostly complete with minor warnings.');
  } else {
    console.log('\n🎉 Setup complete! All forms should work correctly.');
  }
  
  console.log('\n🔗 Useful Links:');
  console.log('   • Supabase Dashboard: https://rdcfkqmvwqihegkexztv.supabase.co');
  console.log('   • API Settings: https://rdcfkqmvwqihegkexztv.supabase.co/project/settings/api');
  console.log('   • SQL Editor: https://rdcfkqmvwqihegkexztv.supabase.co/project/sql');
};

// Auto-run setup check in development
if (process.env.NODE_ENV === 'development') {
  // Run after a short delay to allow other logs to finish
  setTimeout(() => {
    logSetupCheck();
  }, 2000);
} 