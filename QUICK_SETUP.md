# 🚀 Quick Setup Guide - Fix API Errors

## 🔴 Current Issue: API Errors When Submitting Forms

The API errors you're experiencing are because the **Supabase API key is not configured**. Here's how to fix it:

## ✅ **Step 1: Get Your Supabase API Key**

1. **Go to your Supabase dashboard**: https://rdcfkqmvwqihegkexztv.supabase.co
2. **Navigate to Settings → API**
3. **Copy the "anon/public" key** (starts with `eyJ...`)

## ✅ **Step 2: Create Environment File**

1. **Create a new file** in your project root called `.env.local`
2. **Add this content** (replace with your actual key):

```env
REACT_APP_SUPABASE_URL=https://rdcfkqmvwqihegkexztv.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your_actual_key_here
```

## ✅ **Step 3: Create Database Tables**

1. **Go to Supabase SQL Editor**: https://rdcfkqmvwqihegkexztv.supabase.co/project/sql
2. **Copy the contents** of `supabase-schema.sql` file from your project
3. **Paste and run** the SQL to create all required tables

## ✅ **Step 4: Restart Development Server**

```bash
# Stop your current server (Ctrl+C)
# Then restart:
npm start
```

## 🔍 **Verify Setup**

After restarting, **check your browser console** - you should see:

```
🔍 Running EzyElders Setup Check...

✅ Environment Variables: Supabase API key is configured
✅ Database Connection: Connected to Supabase successfully!
✅ Database Tables: All required tables exist
⚠️ Email Service: Resend API key not set (emails will be logged to console)

🎉 Setup complete! All forms should work correctly.
```

## 🎯 **Test Forms**

1. **Try submitting any form** (member, volunteer, contact, newsletter)
2. **Success message should show** with a **Request ID** like: `EE-LNZ123-ABC456`
3. **No more API errors!**

## 🆘 **Still Having Issues?**

### If you see errors like:
- `"Invalid API key"` → Double-check your API key in `.env.local`
- `"Table doesn't exist"` → Run the SQL schema in Supabase
- `"Network error"` → Check your internet connection

### Helpful Console Commands:
```javascript
// Test connection manually in browser console:
import('./lib/supabase').then(({ supabaseUtils }) => {
  supabaseUtils.testConnection().then(console.log);
});
```

## 📧 **Email Setup (Optional)**

For production email sending to `ezyelders@gmail.com`:

1. **Sign up at** [resend.com](https://resend.com)
2. **Get API key** from dashboard
3. **Add to `.env.local`**:
```env
REACT_APP_RESEND_API_KEY=re_your_resend_key_here
```

**Note**: Without Resend key, emails are logged to console (fine for testing).

## 🎉 **Expected Result After Setup**

- ✅ **No API errors** when submitting forms
- ✅ **Success messages** with unique request IDs
- ✅ **Data saved** to Supabase database
- ✅ **Email notifications** logged to console (or sent if Resend configured)
- ✅ **Professional user experience** with loading states and error handling

---

**Need help?** Check the browser console for detailed setup validation and error messages! 