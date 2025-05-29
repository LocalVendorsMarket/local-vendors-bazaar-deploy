import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mqbupivdzznzjbvkaacy.supabase.co';
const supabaseAnonKey = 'YOUR_ANON_PUBLIC_KEY_HERE'; // 🔐 From Supabase → Project Settings → API → anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
