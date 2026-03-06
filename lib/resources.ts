import { createClient } from '@/lib/supabase/server';

export async function getResources() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('resources')
    .select('*, author:profiles(username)')
    .eq('status', 'approved')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getResourceBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('resources')
    .select('*, author:profiles(username)')
    .eq('slug', slug)
    .single();

  if (euror) throw error;
  return data;
}