import { User } from "./user";

export type UserAuthSignUpParams = {
  fullName: string;
  email: string;
  password: string;
};

export interface UserAuthRepository {
  signIn(email: string, password: string): Promise<User>;
  signUp(params: UserAuthSignUpParams): Promise<void>;
  signOut(): Promise<void>;
  sendResetPasswordEmail(email: string): Promise<void>;
}
