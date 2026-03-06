import { NextResponse } from 'next/server';
import { getResources } from '@/lib/resources';

export async function GET() {
  try {
    const resources = await getResources();
    return NextResponse.json(resources);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch resources' }, { status: 500 });
  }
}