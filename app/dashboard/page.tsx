import DocumentUploader from '@/components/DocumentUploader';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function Dashboard() {
  const { userId } = auth();

  if (!userId) redirect('/login');

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">ISO 27001 Document Analyzer</h1>
      <DocumentUploader />
    </main>
  );
}