import { createClient } from "@supabase/supabase-js";
import "expo-sqlite/localStorage/install";
import { Database } from "./types";

const getSupabaseEnvs = (): {
  supabaseUrl: string;
  supabasePublishableKey: string;
} => {
  const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const supabasePublishableKey =
    process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error("Environment variables wasn't defined");
  }

  // console.log("Conexão com o supabase concluída com sucesso!");

  return {
    supabaseUrl,
    supabasePublishableKey,
  };
};

const { supabaseUrl, supabasePublishableKey } = getSupabaseEnvs();

export const supabase = createClient<Database>(
  supabaseUrl,
  supabasePublishableKey,
  {
    auth: {
      storage: localStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
);
