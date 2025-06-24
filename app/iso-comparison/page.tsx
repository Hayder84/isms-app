import { supabase } from '@/lib/supabase';

export default async function ISOComparisonPage() {
  const { data } = await supabase.from('iso_controls').select('*');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">ISO 27001:2013 vs 2022</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">2013 Control</th>
              <th className="py-2 px-4 border-b">2022 Control</th>
              <th className="py-2 px-4 border-b">Changes</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((control) => (
              <tr key={control.id}>
                <td className="py-2 px-4 border-b">{control.control_2013}</td>
                <td className="py-2 px-4 border-b">{control.control_2022}</td>
                <td className="py-2 px-4 border-b">{control.changes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}