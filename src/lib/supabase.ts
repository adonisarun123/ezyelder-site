import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://rdcfkqmvwqihegkexztv.supabase.co';

// TODO: Replace with your actual Supabase anon key
// You can find this in your Supabase project dashboard under Settings > API
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your_anon_key_here';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
    const { data, error } = await supabase
      .from('members')
      .insert([memberData])
      .select()
      .single();
    
    if (error) throw error;
    return data;
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
    const { data, error } = await supabase
      .from('volunteers')
      .insert([volunteerData])
      .select()
      .single();
    
    if (error) throw error;
    return data;
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
    const { data, error } = await supabase
      .from('contact_inquiries')
      .insert([inquiryData])
      .select()
      .single();
    
    if (error) throw error;
    return data;
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
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .insert([subscriptionData])
      .select()
      .single();
    
    if (error) {
      // Handle duplicate email error gracefully
      if (error.code === '23505') {
        throw new Error('This email is already subscribed to our newsletter.');
      }
      throw error;
    }
    return data;
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

// General utility functions
export const supabaseUtils = {
  // Test connection
  async testConnection() {
    try {
      const { error } = await supabase
        .from('members')
        .select('count')
        .limit(1);
      
      if (error) throw error;
      return { success: true, message: 'Connected to Supabase successfully!' };
    } catch (error) {
      return { success: false, message: `Connection failed: ${error}` };
    }
  },

  // Get table schema
  async getTableInfo(tableName: string) {
    const { data, error } = await supabase
      .rpc('get_table_info', { table_name: tableName });
    
    if (error) throw error;
    return data;
  }
}; 