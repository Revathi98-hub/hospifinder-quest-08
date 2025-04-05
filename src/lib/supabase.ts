
import { createClient } from '@supabase/supabase-js';

// Check for Supabase URL and key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a dummy client if environment variables are missing
// This prevents runtime errors while allowing the app to load
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Missing Supabase environment variables. Please connect to Supabase through the Lovable interface.'
  );
}

// Create a single supabase client for interacting with your database
// Using a default URL and key (empty strings) if environment variables are missing
// The Supabase client will be non-functional, but the app will still load
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);
