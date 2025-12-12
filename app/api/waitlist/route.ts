import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

interface WaitlistEntry {
  email: string;
  timestamp: string;
}

const WAITLIST_KEY = 'disc-golf-waitlist';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

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

    // Get existing waitlist from KV
    let waitlist: WaitlistEntry[] = await kv.get(WAITLIST_KEY) || [];

    // Check if email already exists
    const emailExists = waitlist.some(
      (entry) => entry.email === normalizedEmail
    );

    if (emailExists) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 400 }
      );
    }

    // Add new entry
    const newEntry: WaitlistEntry = {
      email: normalizedEmail,
      timestamp: new Date().toISOString(),
    };

    waitlist.push(newEntry);

    // Save to KV
    await kv.set(WAITLIST_KEY, waitlist);

    return NextResponse.json(
      { message: 'Successfully added to waitlist', count: waitlist.length },
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

// GET endpoint to view waitlist count
export async function GET() {
  try {
    const waitlist: WaitlistEntry[] = await kv.get(WAITLIST_KEY) || [];
    return NextResponse.json({ count: waitlist.length });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json({ count: 0 });
  }
}
