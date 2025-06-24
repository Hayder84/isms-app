import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.https://oudkpdyzvuiagjxcuodp.supabase.co!;
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91ZGtwZHl6dnVpYWdqeGN1b2RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5ODM3MDUsImV4cCI6MjA2NTU1OTcwNX0.gDvYCAvTuScPDglT8WV7GkNKVU0GTDSSfqnCpgrBK0Y!;

export const supabase = createClient(supabaseUrl, supabaseKey);