import { useFeedbackServiceContext } from "@/src/infra/feedbackService/feedback-service-provider";
import {
  useAppMutation,
  UseAppMutationOptions,
} from "@/src/infra/operations/useAppMutation";
import { useRepositoryContext } from "@/src/infra/repositories/repository-provider";
import { UserAuthSignUpParams } from "../userAuthRepository";

export const useAuthSignUp = (options?: UseAppMutationOptions<void>) => {
  const { auth } = useRepositoryContext();
  const feedbackService = useFeedbackServiceContext();

  return useAppMutation<void, UserAuthSignUpParams>({
    mutateFn: (params) => auth.signUp(params),
    onSuccess: () => {
      options?.onSuccess?.();
      feedbackService.send({
        type: "success",
        message: "Account created with success",
      });
    },
    onError: (error) => {
      options?.onError?.(error);
      feedbackService.send({
        type: "error",
        message: "Error on creating account",
      });
    },
  });
};
