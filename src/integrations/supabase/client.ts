import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lbcegablbwinncistshk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiY2VnYWJsYndpbm5jaXN0c2hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMjExMDksImV4cCI6MjA1OTc5NzEwOX0.FSrtwKXp6ElSWvw1yEtmGPgGTsp1inkQjl9qVNZXfl0";
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
