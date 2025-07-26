import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://rdcfkqmvwqihegkexztv.supabase.co';

// Get Supabase anon key from environment variables
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Validate API key configuration
if (!supabaseAnonKey || supabaseAnonKey === 'your_anon_key_here') {
  console.error('🚨 SUPABASE SETUP REQUIRED: Please add your Supabase API key to environment variables');
  console.error('Add REACT_APP_SUPABASE_ANON_KEY=your_actual_key to .env.local file');
  console.error('Get your API key from: https://rdcfkqmvwqihegkexztv.supabase.co/project/settings/api');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey || 'demo_key');

// Database table definitions (types)
export interface Member {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  address: string;
  city: string;
  emergency_contact: string;
  emergency_phone: string;
  medical_conditions?: string;
  interests: string[];
  membership_type: string;
  hear_about_us?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Volunteer {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  occupation?: string;
  skills: string[];
  availability: string[];
  experience?: string;
  motivation: string;
  preferred_area: string;
  background_check: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ContactInquiry {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status?: 'new' | 'in_progress' | 'resolved' | 'closed';
  created_at?: string;
  updated_at?: string;
}

export interface NewsletterSubscription {
  id?: string;
  email: string;
  status?: 'active' | 'unsubscribed';
  source?: 'blog' | 'homepage' | 'contact' | 'other';
  subscribed_at?: string;
  unsubscribed_at?: string;
}

// Member operations
export const memberService = {
  // Create a new member
  async createMember(memberData: Omit<Member, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from('members')
        .insert([memberData])
        .select()
        .single();
      
      if (error) {
        console.error('Member creation error:', error);
        const enhancedError = new Error(getDetailedError(error));
        (enhancedError as any).originalError = error;
        throw enhancedError;
      }
      
      // Add request ID to the response
      const requestId = generateRequestId();
      console.log(`✅ Member created successfully - Request ID: ${requestId}`, data);
      
      return { ...data, requestId };
    } catch (error: any) {
      console.error('Member service error:', error);
      throw error;
    }
  },

  // Get all members
  async getMembers() {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Get member by ID
  async getMemberById(id: string) {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update member
  async updateMember(id: string, memberData: Partial<Member>) {
    const { data, error } = await supabase
      .from('members')
      .update(memberData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete member
  async deleteMember(id: string) {
    const { error } = await supabase
      .from('members')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Volunteer operations
export const volunteerService = {
  // Create a new volunteer
  async createVolunteer(volunteerData: Omit<Volunteer, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from('volunteers')
        .insert([volunteerData])
        .select()
        .single();
      
      if (error) {
        console.error('Volunteer creation error:', error);
        const enhancedError = new Error(getDetailedError(error));
        (enhancedError as any).originalError = error;
        throw enhancedError;
      }
      
      // Add request ID to the response
      const requestId = generateRequestId();
      console.log(`✅ Volunteer created successfully - Request ID: ${requestId}`, data);
      
      return { ...data, requestId };
    } catch (error: any) {
      console.error('Volunteer service error:', error);
      throw error;
    }
  },

  // Get all volunteers
  async getVolunteers() {
    const { data, error } = await supabase
      .from('volunteers')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Get volunteer by ID
  async getVolunteerById(id: string) {
    const { data, error } = await supabase
      .from('volunteers')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update volunteer
  async updateVolunteer(id: string, volunteerData: Partial<Volunteer>) {
    const { data, error } = await supabase
      .from('volunteers')
      .update(volunteerData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete volunteer
  async deleteVolunteer(id: string) {
    const { error } = await supabase
      .from('volunteers')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Contact inquiry operations
export const contactService = {
  // Create a new contact inquiry
  async createContactInquiry(inquiryData: Omit<ContactInquiry, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data, error } = await supabase
        .from('contact_inquiries')
        .insert([inquiryData])
        .select()
        .single();
      
      if (error) {
        console.error('Contact inquiry creation error:', error);
        const enhancedError = new Error(getDetailedError(error));
        (enhancedError as any).originalError = error;
        throw enhancedError;
      }
      
      // Add request ID to the response
      const requestId = generateRequestId();
      console.log(`✅ Contact inquiry created successfully - Request ID: ${requestId}`, data);
      
      return { ...data, requestId };
    } catch (error: any) {
      console.error('Contact service error:', error);
      throw error;
    }
  },

  // Get all contact inquiries
  async getContactInquiries() {
    const { data, error } = await supabase
      .from('contact_inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Get contact inquiry by ID
  async getContactInquiryById(id: string) {
    const { data, error } = await supabase
      .from('contact_inquiries')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update contact inquiry status
  async updateContactInquiry(id: string, inquiryData: Partial<ContactInquiry>) {
    const { data, error } = await supabase
      .from('contact_inquiries')
      .update(inquiryData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete contact inquiry
  async deleteContactInquiry(id: string) {
    const { error } = await supabase
      .from('contact_inquiries')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Newsletter subscription operations
export const newsletterService = {
  // Create a new newsletter subscription
  async createSubscription(subscriptionData: Omit<NewsletterSubscription, 'id' | 'subscribed_at' | 'unsubscribed_at'>) {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .insert([subscriptionData])
        .select()
        .single();
      
      if (error) {
        console.error('Newsletter subscription error:', error);
        const enhancedError = new Error(getDetailedError(error));
        (enhancedError as any).originalError = error;
        throw enhancedError;
      }
      
      // Add request ID to the response
      const requestId = generateRequestId();
      console.log(`✅ Newsletter subscription created successfully - Request ID: ${requestId}`, data);
      
      return { ...data, requestId };
    } catch (error: any) {
      console.error('Newsletter service error:', error);
      throw error;
    }
  },

  // Get all newsletter subscriptions
  async getSubscriptions() {
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .order('subscribed_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Get subscription by email
  async getSubscriptionByEmail(email: string) {
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .eq('email', email)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Unsubscribe from newsletter
  async unsubscribe(email: string) {
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .update({ 
        status: 'unsubscribed',
        unsubscribed_at: new Date().toISOString()
      })
      .eq('email', email)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Reactivate subscription
  async reactivateSubscription(email: string) {
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .update({ 
        status: 'active',
        unsubscribed_at: null
      })
      .eq('email', email)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// Utility functions
export const generateRequestId = (): string => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `EE-${timestamp}-${randomStr}`.toUpperCase();
};

export const getDetailedError = (error: any): string => {
  // Check for common Supabase errors
  if (error.message?.includes('Invalid API key')) {
    return 'Configuration Error: Invalid Supabase API key. Please check your environment variables.';
  }
  
  if (error.message?.includes('relation') && error.message?.includes('does not exist')) {
    return 'Database Error: Required tables not found. Please run the database schema setup.';
  }
  
  if (error.message?.includes('network') || error.message?.includes('fetch')) {
    return 'Network Error: Unable to connect to the database. Please check your internet connection.';
  }
  
  if (error.code === '23505') {
    return 'This email is already registered in our system.';
  }
  
  if (error.code === '42P01') {
    return 'Database tables not found. Please contact support with error code: DB-SETUP-REQUIRED';
  }
  
  // Generic error
  return error.message || 'An unexpected error occurred. Please try again.';
};

// General utility functions
export const supabaseUtils = {
  // Test connection and configuration
  async testConnection() {
    try {
      // First check if API key is configured
      if (!supabaseAnonKey || supabaseAnonKey === 'demo_key') {
        return { 
          success: false, 
          message: 'Setup Required: Supabase API key not configured. Check console for setup instructions.',
          needsSetup: true 
        };
      }

      // Test actual connection
      const { error } = await supabase
        .from('members')
        .select('count')
        .limit(1);
      
      if (error) {
        const detailedMessage = getDetailedError(error);
        return { 
          success: false, 
          message: detailedMessage,
          originalError: error.message 
        };
      }
      
      return { success: true, message: 'Connected to Supabase successfully!' };
    } catch (error: any) {
      const detailedMessage = getDetailedError(error);
      return { 
        success: false, 
        message: detailedMessage,
        originalError: error.message 
      };
    }
  },

  // Get table schema
  async getTableInfo(tableName: string) {
    const { data, error } = await supabase
      .rpc('get_table_info', { table_name: tableName });
    
    if (error) throw error;
    return data;
  },

  // Check if all required tables exist
  async checkDatabaseSetup() {
    const requiredTables = ['members', 'volunteers', 'contact_inquiries', 'newsletter_subscriptions'];
    const results = [];
    
    for (const table of requiredTables) {
      try {
        const { error } = await supabase.from(table).select('count').limit(1);
        results.push({ table, exists: !error, error: error?.message });
      } catch (error: any) {
        results.push({ table, exists: false, error: error.message });
      }
    }
    
    return results;
  }
}; 