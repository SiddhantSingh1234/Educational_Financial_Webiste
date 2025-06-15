import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/app/models/User';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    await connectDB();
    const { username, email, password, school, city } = await req.json();

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Create new user
    const user = await User.create({
      username,
      email,
      password,
      school,
      city
    });

    return NextResponse.json(
      { message: 'User created successfully', userId: user._id },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}