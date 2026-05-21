import { useAppMutation } from "@/src/infra/operations/useAppMutation";
import { useRepositoryContext } from "@/src/infra/repositories/repository-provider";
import { User } from "../user";

export const useAuthSignIn = () => {
  const { auth } = useRepositoryContext();

  return useAppMutation<User, { email: string; password: string }>({
    mutateFn: ({ email, password }) => auth.signIn(email, password),
    onSuccess: (user) => console.log("Success: ", user.email),
    onError: (error) => console.log("Error: ", error.message),
  });
};
