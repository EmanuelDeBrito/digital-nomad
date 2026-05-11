import { supabase } from "./supabase";

const getAllCities = async () => {
  const cities = await supabase.from("cities").select("*");
  console.log({ cities });
};

export const supabaseService = {
  getAllCities,
};
