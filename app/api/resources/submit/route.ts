import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, url, category, submitted_by } = body;

    const { data, error } = await supabase
      .from('resources')
      .insert([
        { 
          name, 
          description, 
          url, 
          category, 
          submitted_by,
          status: 'pending' 
        }
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}