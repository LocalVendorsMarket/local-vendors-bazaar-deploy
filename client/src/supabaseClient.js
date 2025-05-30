import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mqbupivdzznzjbvkaacy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xYnVwaXZkenpuempidmthYWN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NTg5NDUsImV4cCI6MjA2NDAzNDk0NX0.-aEjLd4n1eqT2BYe5BabGXCZGYAr0lDjl_aeMfLCzzg';

export const supabase = createClient(supabaseUrl, supabaseKey);
