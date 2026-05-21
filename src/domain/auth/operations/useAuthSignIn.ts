import { useFeedbackServiceContext } from "@/src/infra/feedbackService/feedback-service-provider";
import { useAppMutation } from "@/src/infra/operations/useAppMutation";
import { useRepositoryContext } from "@/src/infra/repositories/repository-provider";
import { User } from "../user";

export const useAuthSignIn = () => {
  const { auth } = useRepositoryContext();
  const feedbackService = useFeedbackServiceContext();

  return useAppMutation<User, { email: string; password: string }>({
    mutateFn: ({ email, password }) => auth.signIn(email, password),
    onSuccess: (user) =>
      feedbackService.send({
        type: "success",
        message: "Success: " + user.email,
      }),
    onError: (error) =>
      feedbackService.send({ type: "error", message: "User not found" }),
  });
};
