import { User } from "@/src/domain/auth/user";
import {
  UserAuthRepository,
  UserAuthSignUpParams,
} from "@/src/domain/auth/userAuthRepository";
import { supabase } from "./supabase";
import { supabaseAdapter } from "./supabaseAdapter";

const signIn = async (email: string, password: string): Promise<User> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("User not found!");
  }

  return supabaseAdapter.toUser(data.user);
};

export const signUp = async (params: UserAuthSignUpParams): Promise<void> => {
  const { error } = await supabase.auth.signUp({
    email: params.email,
    password: params.password,
    options: {
      data: {
        fullname: params.fullName,
      },
    },
  });

  if (error) {
    throw new Error("Error on creating new user");
  }

  return;
};

export const signOut = async (): Promise<void> => {
  await supabase.auth.signOut();
};

export const sendResetPasswordEmail = async (): Promise<void> => {
  return;
};

export const SupabaseAuthRepository: UserAuthRepository = {
  signIn,
  signUp,
  signOut,
  sendResetPasswordEmail,
};
