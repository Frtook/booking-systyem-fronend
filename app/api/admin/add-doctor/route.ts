// src/app/api/chat-rooms/create/route.ts
import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/adminEndpoints';

export async function POST(request: Request) {
  const { username,email,password,specialist } = await request.json();
  const authHeader = request.headers.get('Authorization');

  if (!authHeader) {
    return NextResponse.json({ error: 'Authorization header missing' }, { status: 401 });
  }


  // Extract the token from the Authorization header
  const token = authHeader.split(' ')[1]; // This assumes the header format is "Bearer <token>"

  if (!token) {
    return NextResponse.json({ error: 'Token is missing' }, { status: 401 });
  }

  try {
    const response = await fetch(`${ENDPOINTS.ADD_DOCTOR}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,      },
      body: JSON.stringify({ username,email,password,specialist }), // Include userIds in the request
    });

    const data = await response.json();
    console.log('Backend API Response:', data); // Log the backend API response

    if (response.ok) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ error: data.error || 'Failed to create doctors' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}