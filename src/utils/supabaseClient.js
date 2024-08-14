import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL; // SupabaseプロジェクトのURL
const supabaseAnonKey = process.env.SUPABASE_KEY; // キー

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
