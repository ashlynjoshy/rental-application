import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://frjibbvaansbryavrwlt.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyamliYnZhYW5zYnJ5YXZyd2x0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNzAzMTQsImV4cCI6MjA2MjY0NjMxNH0.Ehol1GDo0WijdU8BBdyGvC6IoUwv2PJhrHjqnPYUuyQ";

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseAnonKey ? "Loaded" : "Not Loaded");


const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
