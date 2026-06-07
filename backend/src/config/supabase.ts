import { createClient } from "@supabase/supabase-js";
import { env } from "./env";

export const supabase = createClient(env.supabaseUrl, env.supabaseServiceKey);

export const supabaseAnon = createClient(env.supabaseUrl, env.supabaseAnonKey);
