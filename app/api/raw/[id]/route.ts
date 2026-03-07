import { getResourceById, getResources } from '@/lib/resources';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const resources = await getResources();
  return resources.map((resource) => {
    id: resource.id,
  }));
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const resource = await getResourceById(id);

  if (!resource) {
    return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
  }

  return NextResponse.json(resource);
}
