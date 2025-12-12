import { NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const WAITLIST_FILE = path.join(DATA_DIR, 'waitlist.json');

interface WaitlistEntry {
  email: string;
  timestamp: string;
}

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

    // Create data directory if it doesn't exist
    if (!existsSync(DATA_DIR)) {
      await mkdir(DATA_DIR, { recursive: true });
    }

    // Read existing waitlist or create new one
    let waitlist: WaitlistEntry[] = [];
    if (existsSync(WAITLIST_FILE)) {
      const fileContent = await readFile(WAITLIST_FILE, 'utf-8');
      waitlist = JSON.parse(fileContent);
    }

    // Check if email already exists
    const emailExists = waitlist.some(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 400 }
      );
    }

    // Add new entry
    const newEntry: WaitlistEntry = {
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
    };

    waitlist.push(newEntry);

    // Save to file
    await writeFile(WAITLIST_FILE, JSON.stringify(waitlist, null, 2), 'utf-8');

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

// Optional: GET endpoint to view waitlist count
export async function GET() {
  try {
    if (!existsSync(WAITLIST_FILE)) {
      return NextResponse.json({ count: 0 });
    }

    const fileContent = await readFile(WAITLIST_FILE, 'utf-8');
    const waitlist: WaitlistEntry[] = JSON.parse(fileContent);

    return NextResponse.json({ count: waitlist.length });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json({ count: 0 });
  }
}
