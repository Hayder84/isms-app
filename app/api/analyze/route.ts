import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    // Simulated analysis
    const mockAnalysis = {
      fileName: file.name,
      missingControls: ['A.12.1.2', 'A.14.2.5'],
      recommendations: 'Implement access control policies...',
    };

    // Save to Supabase
    const { error } = await supabase
      .from('documents')
      .insert({
        file_name: file.name,
        analysis: mockAnalysis,
      });

    if (error) throw error;

    return NextResponse.json(mockAnalysis);
    
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}