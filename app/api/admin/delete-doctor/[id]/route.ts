import { NextResponse } from 'next/server';
import { ENDPOINTS } from '@/constants/adminEndpoints';

export async function DELETE(request: Request, { params }: { params: Promise< { id: string }> })
:Promise<NextResponse> {
  const authHeader = request.headers.get('Authorization');

  if (!authHeader) {
    return NextResponse.json({ error: 'Authorization header missing' }, { status: 401 });
  }
  const token = authHeader.split(' ')[1]; // This assumes the header format is "Bearer <token>"

  if (!token) {
    return NextResponse.json({ error: 'Token is missing' }, { status: 401 });
  }

  const { id } =await params; // Extract the chat room ID from the URL params
  console.log(`Deleting doctor with ID: ${id}`);

  // Simulate a call to your backend to delete the chat room
  const response = await fetch(`${ENDPOINTS.DELETE_DOCTOR}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Forward the Authorization header
    },
  });

  if (response.ok) {
    return NextResponse.json({ message: 'doctor deleted successfully' });
  } else {
    return NextResponse.json({ error: 'Failed to delete doctor' }, { status: 500 });
  }
}