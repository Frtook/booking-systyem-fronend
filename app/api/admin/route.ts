import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/adminEndpoints';

export async function GET(request: Request) {
  const authHeader = request.headers.get('Authorization');

  if (!authHeader) {
    return NextResponse.json({ error: 'Authorization header missing' }, { status: 401 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 100000); // 5-second timeout

  try {
    const response = await fetch(ENDPOINTS.VIEW_DOCTOR, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': authHeader, // Include the authorization header
      },
      signal: controller.signal, // Attach the abort signal
    });

    clearTimeout(timeout); // Clear the timeout if the request succeeds

    

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    clearTimeout(timeout); // Clear the timeout in case of an error

    if (error === 'AbortError') {
      console.error('Fetch request timed out');
      return NextResponse.json({ error: 'Request timed out' }, { status: 504 });
    }

    console.error('Fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}