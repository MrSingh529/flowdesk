import nodemailer from 'nodemailer';

// Create transporter with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
  },
});

export async function sendWaitlistWelcomeEmail(userEmail: string) {
  try {
    const { subject, html, text } = await import('./emailTemplate').then(
      (mod) => mod.getWelcomeEmailTemplate(userEmail)
    );

    const mailOptions = {
      from: `"FlowDesk" <${process.env.GMAIL_USER}>`,
      to: userEmail,
      subject: subject,
      html: html,
      text: text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error };
  }
}

// Optional: Send admin notification when someone joins
export async function sendAdminNotification(userEmail: string) {
  try {
    const adminEmail = process.env.GMAIL_USER;
    
    const mailOptions = {
      from: `"FlowDesk" <${process.env.GMAIL_USER}>`,
      to: adminEmail,
      subject: `🎉 New Waitlist Signup: ${userEmail}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Waitlist Signup! 🎉</h2>
          <p><strong>Email:</strong> ${userEmail}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          <p>Total signups: Check your Supabase waitlist table.</p>
          <hr />
          <p style="color: #666; font-size: 12px;">FlowDesk Admin Notification</p>
        </div>
      `,
      text: `New Waitlist Signup!\n\nEmail: ${userEmail}\nTime: ${new Date().toLocaleString('en-IN')}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Admin notification sent:', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return { success: false, error: error };
  }
}