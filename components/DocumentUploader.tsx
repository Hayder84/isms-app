'use client';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function DocumentUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => setFile(acceptedFiles[0]),
  });

  const analyzeDocument = async () => {
    if (!file) return;

    // Simulated analysis (replace with real API call)
    const mockAnalysis = {
      fileName: file.name,
      missingControls: ['A.12.1.2', 'A.14.2.5'],
      recommendations: 'Add encryption policies to meet control A.12.1.2...',
    };

    // Save to Supabase
    await supabase.from('documents').insert({
      file_name: file.name,
      analysis: mockAnalysis,
    });

    setAnalysis(mockAnalysis);
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50"
      >
        <input {...getInputProps()} />
        <p>Drag & drop a PDF/DOCX file here, or click to select</p>
      </div>

      {file && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium">Selected file: {file.name}</p>
          <button
            onClick={analyzeDocument}
            className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Analyze Document
          </button>
        </div>
      )}

      {analysis && (
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Analysis Results</h3>
          <pre className="bg-gray-50 p-2 rounded text-sm overflow-x-auto">
            {JSON.stringify(analysis, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}