import { Resend } from 'resend';

// Initialize Resend with API key from environment
// For now, we'll use a fallback for demonstration
const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY || 'demo_key');

const ADMIN_EMAIL = 'ezyelders@gmail.com';
const FROM_EMAIL = 'EzyElders <no-reply@ezyhelpers.com>'; // Replace with your verified domain

export interface EmailTemplate {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Email templates
export const emailTemplates = {
  // Member application notification
  memberApplication: (memberData: any): EmailTemplate => ({
    to: ADMIN_EMAIL,
    subject: `New Membership Application - ${memberData.first_name} ${memberData.last_name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e91e63;">New Membership Application Received</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Member Information</h3>
          <p><strong>Name:</strong> ${memberData.first_name} ${memberData.last_name}</p>
          <p><strong>Email:</strong> ${memberData.email}</p>
          <p><strong>Phone:</strong> ${memberData.phone}</p>
          <p><strong>Date of Birth:</strong> ${memberData.date_of_birth}</p>
          <p><strong>Address:</strong> ${memberData.address}, ${memberData.city}</p>
          <p><strong>Membership Type:</strong> ${memberData.membership_type}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Emergency Contact</h3>
          <p><strong>Name:</strong> ${memberData.emergency_contact}</p>
          <p><strong>Phone:</strong> ${memberData.emergency_phone}</p>
        </div>

        ${memberData.medical_conditions ? `
        <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Medical Conditions</h3>
          <p>${memberData.medical_conditions}</p>
        </div>
        ` : ''}

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Interests</h3>
          <p>${memberData.interests.join(', ')}</p>
        </div>

        ${memberData.hear_about_us ? `
        <p><strong>How they heard about us:</strong> ${memberData.hear_about_us}</p>
        ` : ''}

        <div style="margin: 30px 0; padding: 20px; background: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0;"><strong>Next Steps:</strong> Please contact the member within 48 hours to complete their membership setup.</p>
        </div>
      </div>
    `,
    text: `New Membership Application from ${memberData.first_name} ${memberData.last_name} (${memberData.email})`
  }),

  // Volunteer application notification
  volunteerApplication: (volunteerData: any): EmailTemplate => ({
    to: ADMIN_EMAIL,
    subject: `New Volunteer Application - ${volunteerData.first_name} ${volunteerData.last_name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #06b6d4;">New Volunteer Application Received</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Volunteer Information</h3>
          <p><strong>Name:</strong> ${volunteerData.first_name} ${volunteerData.last_name}</p>
          <p><strong>Email:</strong> ${volunteerData.email}</p>
          <p><strong>Phone:</strong> ${volunteerData.phone}</p>
          <p><strong>Address:</strong> ${volunteerData.address}, ${volunteerData.city}</p>
          ${volunteerData.occupation ? `<p><strong>Occupation:</strong> ${volunteerData.occupation}</p>` : ''}
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Skills & Expertise</h3>
          <p>${volunteerData.skills.join(', ')}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Availability</h3>
          <p>${volunteerData.availability.join(', ')}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Preferred Area</h3>
          <p>${volunteerData.preferred_area}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Motivation</h3>
          <p>${volunteerData.motivation}</p>
        </div>

        ${volunteerData.experience ? `
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Previous Experience</h3>
          <p>${volunteerData.experience}</p>
        </div>
        ` : ''}

        <div style="background: ${volunteerData.background_check ? '#e8f5e8' : '#fff3cd'}; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Background Check</h3>
          <p>${volunteerData.background_check ? '✅ Agreed to background check' : '⚠️ Background check not agreed'}</p>
        </div>

        <div style="margin: 30px 0; padding: 20px; background: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0;"><strong>Next Steps:</strong> Please contact the volunteer within 48 hours to discuss next steps and schedule an interview.</p>
        </div>
      </div>
    `,
    text: `New Volunteer Application from ${volunteerData.first_name} ${volunteerData.last_name} (${volunteerData.email})`
  }),

  // Contact inquiry notification
  contactInquiry: (contactData: any): EmailTemplate => ({
    to: ADMIN_EMAIL,
    subject: `New Contact Inquiry - ${contactData.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e91e63;">New Contact Inquiry Received</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone}</p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Message</h3>
          <p style="white-space: pre-wrap;">${contactData.message}</p>
        </div>

        <div style="margin: 30px 0; padding: 20px; background: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0;"><strong>Next Steps:</strong> Please respond to this inquiry within 24 hours.</p>
        </div>
      </div>
    `,
    text: `New Contact Inquiry from ${contactData.name} (${contactData.email}): ${contactData.subject}`
  }),

  // Newsletter subscription notification
  newsletterSubscription: (subscriptionData: any): EmailTemplate => ({
    to: ADMIN_EMAIL,
    subject: `New Newsletter Subscription`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #06b6d4;">New Newsletter Subscription</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Email:</strong> ${subscriptionData.email}</p>
          <p><strong>Source:</strong> ${subscriptionData.source}</p>
          <p><strong>Subscribed At:</strong> ${new Date().toLocaleString()}</p>
        </div>

        <div style="margin: 30px 0; padding: 20px; background: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0;"><strong>Action:</strong> This subscriber has been added to your newsletter list.</p>
        </div>
      </div>
    `,
    text: `New newsletter subscription: ${subscriptionData.email}`
  })
};

// Email service functions
export const emailService = {
  // Send email using Resend
  async sendEmail(template: EmailTemplate): Promise<boolean> {
    try {
      // For development/demo, we'll log the email instead of sending
      if (process.env.NODE_ENV === 'development' || !process.env.REACT_APP_RESEND_API_KEY || process.env.REACT_APP_RESEND_API_KEY === 'demo_key') {
        console.log('📧 Email would be sent:', {
          to: template.to,
          subject: template.subject,
          preview: template.text || 'Email notification'
        });
        return true;
      }

      // Send actual email in production
      const { data, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [template.to],
        subject: template.subject,
        html: template.html,
        text: template.text
      });

      if (error) {
        console.error('Email sending failed:', error);
        return false;
      }

      console.log('Email sent successfully:', data);
      return true;
    } catch (error) {
      console.error('Email service error:', error);
      return false;
    }
  },

  // Send member application notification
  async notifyMemberApplication(memberData: any): Promise<boolean> {
    const template = emailTemplates.memberApplication(memberData);
    return await this.sendEmail(template);
  },

  // Send volunteer application notification
  async notifyVolunteerApplication(volunteerData: any): Promise<boolean> {
    const template = emailTemplates.volunteerApplication(volunteerData);
    return await this.sendEmail(template);
  },

  // Send contact inquiry notification
  async notifyContactInquiry(contactData: any): Promise<boolean> {
    const template = emailTemplates.contactInquiry(contactData);
    return await this.sendEmail(template);
  },

  // Send newsletter subscription notification
  async notifyNewsletterSubscription(subscriptionData: any): Promise<boolean> {
    const template = emailTemplates.newsletterSubscription(subscriptionData);
    return await this.sendEmail(template);
  }
}; 