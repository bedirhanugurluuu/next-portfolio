import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, to, subject } = await request.json();

    // Gmail SMTP transporter oluştur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Gmail adresiniz
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
      },
    });

    // Email seçenekleri
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: to,
      replyTo: email,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Portfolio Contact Form</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">New message from your portfolio website</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Details</h2>
              
              <div style="margin: 20px 0;">
                <p style="margin: 10px 0; color: #555;">
                  <strong style="color: #333; display: inline-block; width: 80px;">Name:</strong> 
                  <span style="color: #667eea; font-weight: 500;">${name}</span>
                </p>
                <p style="margin: 10px 0; color: #555;">
                  <strong style="color: #333; display: inline-block; width: 80px;">Email:</strong> 
                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                </p>
              </div>
              
              <div style="margin: 25px 0;">
                <h3 style="color: #333; margin-bottom: 15px;">Message:</h3>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea; font-style: italic; color: #555; line-height: 1.6;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; text-align: center;">
                <p style="color: #666; font-size: 14px; margin: 0;">
                  This message was sent from your portfolio contact form at ${new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    // Email gönder
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ 
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
