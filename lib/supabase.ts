import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ggvicnvxartibwtbrhho.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndmljbnZ4YXJ0aWJ3dGJyaGhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NTU2MzksImV4cCI6MjA3OTMzMTYzOX0.I9NUBfWbkwIHnabty-hW0cJ1y83Z1vz-AJ1sma36j6w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
