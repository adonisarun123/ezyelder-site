-- EzyElders Supabase Database Schema
-- Run this SQL in your Supabase SQL Editor to create the required tables

-- Enable Row Level Security
-- Note: You may want to configure RLS policies based on your security requirements

-- Create Members table
CREATE TABLE IF NOT EXISTS public.members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    date_of_birth DATE NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(255) NOT NULL,
    emergency_contact VARCHAR(255) NOT NULL,
    emergency_phone VARCHAR(20) NOT NULL,
    medical_conditions TEXT,
    interests JSONB DEFAULT '[]'::jsonb,
    membership_type VARCHAR(50) NOT NULL CHECK (membership_type IN ('basic', 'premium', 'family')),
    hear_about_us VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create Volunteers table
CREATE TABLE IF NOT EXISTS public.volunteers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(255) NOT NULL,
    occupation VARCHAR(255),
    skills JSONB DEFAULT '[]'::jsonb,
    availability JSONB DEFAULT '[]'::jsonb,
    experience TEXT,
    motivation TEXT NOT NULL,
    preferred_area VARCHAR(100) NOT NULL CHECK (preferred_area IN ('health', 'technology', 'social', 'spiritual', 'outings', 'admin', 'any')),
    background_check BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_members_email ON public.members(email);
CREATE INDEX IF NOT EXISTS idx_members_membership_type ON public.members(membership_type);
CREATE INDEX IF NOT EXISTS idx_members_created_at ON public.members(created_at);

CREATE INDEX IF NOT EXISTS idx_volunteers_email ON public.volunteers(email);
CREATE INDEX IF NOT EXISTS idx_volunteers_preferred_area ON public.volunteers(preferred_area);
CREATE INDEX IF NOT EXISTS idx_volunteers_created_at ON public.volunteers(created_at);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at columns
DROP TRIGGER IF EXISTS members_updated_at ON public.members;
CREATE TRIGGER members_updated_at
    BEFORE UPDATE ON public.members
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS volunteers_updated_at ON public.volunteers;
CREATE TRIGGER volunteers_updated_at
    BEFORE UPDATE ON public.volunteers
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Optional: Create Row Level Security (RLS) policies
-- Uncomment and modify these based on your security requirements

-- Enable RLS on tables
-- ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;

-- Example RLS policies (modify as needed)
-- Allow public to insert (for registration forms)
-- CREATE POLICY "Allow public insert" ON public.members FOR INSERT TO public WITH CHECK (true);
-- CREATE POLICY "Allow public insert" ON public.volunteers FOR INSERT TO public WITH CHECK (true);

-- Allow authenticated users to read their own data
-- CREATE POLICY "Users can view own data" ON public.members FOR SELECT TO authenticated USING (auth.email() = email);
-- CREATE POLICY "Users can view own data" ON public.volunteers FOR SELECT TO authenticated USING (auth.email() = email);

-- Grant permissions (if needed)
-- GRANT USAGE ON SCHEMA public TO anon, authenticated;
-- GRANT ALL ON public.members TO anon, authenticated;
-- GRANT ALL ON public.volunteers TO anon, authenticated;

-- Create Contact Inquiries table
CREATE TABLE IF NOT EXISTS public.contact_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create Newsletter Subscriptions table
CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
    source VARCHAR(100) DEFAULT 'blog' CHECK (source IN ('blog', 'homepage', 'contact', 'other')),
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for new tables
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email ON public.contact_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON public.contact_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON public.contact_inquiries(created_at);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON public.newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON public.newsletter_subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_source ON public.newsletter_subscriptions(source);

-- Create triggers for updated_at columns on new tables
DROP TRIGGER IF EXISTS contact_inquiries_updated_at ON public.contact_inquiries;
CREATE TRIGGER contact_inquiries_updated_at
    BEFORE UPDATE ON public.contact_inquiries
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Insert sample data (optional - for testing)
-- INSERT INTO public.members (
--     first_name, last_name, email, phone, date_of_birth, 
--     address, city, emergency_contact, emergency_phone, 
--     interests, membership_type
-- ) VALUES (
--     'John', 'Doe', 'john.doe@example.com', '+91-9876543210', '1955-06-15',
--     '123 Main Street', 'Mumbai', 'Jane Doe', '+91-9876543211',
--     '["Health & Wellness", "Social Outings"]'::jsonb, 'premium'
-- );

-- INSERT INTO public.volunteers (
--     first_name, last_name, email, phone, address, city, 
--     occupation, skills, availability, motivation, preferred_area
-- ) VALUES (
--     'Alice', 'Smith', 'alice.smith@example.com', '+91-9876543212', 
--     '456 Oak Avenue', 'Delhi', 'Retired Teacher',
--     '["Teaching/Training", "Counseling"]'::jsonb, 
--     '["Monday Morning", "Wednesday Evening"]'::jsonb,
--     'I want to share my teaching experience with seniors', 'social'
-- );

-- INSERT INTO public.contact_inquiries (
--     name, email, phone, subject, message
-- ) VALUES (
--     'Test User', 'test@example.com', '+91-9876543213',
--     'General Inquiry', 'This is a test contact message.'
-- );

-- INSERT INTO public.newsletter_subscriptions (email, source) VALUES 
-- ('newsletter@example.com', 'blog'); 