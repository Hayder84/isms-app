import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  // Simulated analysis
  const mockAnalysis = {
    fileName: file.name,
    missingControls: ['A.12.1.2', 'A.14.2.5'],
    recommendations: 'Implement access control policies to meet A.12.1.2...',
  };

  // Save to Supabase
  await supabase.from('documents').insert({
    file_name: file.name,
    analysis: mockAnalysis,
  });

  return NextResponse.json(mockAnalysis);
}