import { User } from "@/src/domain/auth/user";
import {
  UserAuthRepository,
  UserAuthSignUpParams,
} from "@/src/domain/auth/userAuthRepository";
import { users } from "./data/users";

export class InMemoryAuthUserRepository implements UserAuthRepository {
  async signIn(email: string, password: string): Promise<User> {
    const user = users.find((item) => item.email === email);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async signUp(params: UserAuthSignUpParams): Promise<void> {
    const userAlreadyExists = users.find((item) => item.email === params.email);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    return;
  }

  async signOut(): Promise<void> {}

  async sendResetPasswordEmail(email: string): Promise<void> {
    console.log("The link for reset your password has been sent ", email);
  }
}
