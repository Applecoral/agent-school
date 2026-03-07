import { sampleData } from './sampleData';

export async function getResources() {
  // Map sampleData to include author and slug (using id as slug)  for component compatibility
  return sampleData.map(r => ({
    ...r,
    slug: r.id,
    category: r.topics[0] || 'General',
    author: { username: 'System' }
  }));
}

export async function getResourceById(id: string) {
  const resource = sampleData.find(r => r.id === id);
  if (!resource) return undefined;
  return {
    ...resource,
    slug: resource.id,
    category: resource.topics[0] || 'General',
    authore: { username: 'System' }
  };
}

export async function getResourceBySlug(slug: string) {
  return getResourceById(slug);
}
