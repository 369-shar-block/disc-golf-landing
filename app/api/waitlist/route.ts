import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Send email notification to you
    await resend.emails.send({
      from: 'Disc Golf Waitlist <onboarding@resend.dev>',
      to: '369shar@gmail.com',
      subject: '🎉 New Waitlist Signup!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea;">New Waitlist Signup</h2>
          <p style="font-size: 16px; color: #333;">Someone just joined your disc golf app waitlist!</p>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 18px; color: #667eea; font-weight: bold;">
              ${normalizedEmail}
            </p>
          </div>

          <p style="font-size: 14px; color: #666;">
            Signed up at: ${new Date().toLocaleString('en-US', {
              timeZone: 'America/New_York',
              dateStyle: 'full',
              timeStyle: 'short'
            })}
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

          <p style="font-size: 12px; color: #999;">
            This email was sent from your Disc Golf Form Analyzer waitlist form.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Successfully added to waitlist' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to add to waitlist' },
      { status: 500 }
    );
  }
}

// Optional GET endpoint
export async function GET() {
  return NextResponse.json({
    message: 'Waitlist API is running. Use POST to submit an email.'
  });
}
