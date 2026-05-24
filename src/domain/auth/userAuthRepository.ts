import { User } from "./user";

export interface UserAuthRepository {
  signIn(email: string, password: string): Promise<User>;
  signOut(): Promise<void>;
  sendResetPasswordEmail(email: string): Promise<void>;
}
