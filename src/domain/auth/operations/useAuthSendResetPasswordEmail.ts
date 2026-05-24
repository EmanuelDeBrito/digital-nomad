import { useFeedbackServiceContext } from "@/src/infra/feedbackService/feedback-service-provider";
import {
  useAppMutation,
  UseAppMutationOptions,
} from "@/src/infra/operations/useAppMutation";
import { useRepositoryContext } from "@/src/infra/repositories/repository-provider";

export const useAuthSendResetPasswordEmail = (
  options?: UseAppMutationOptions<void>,
) => {
  const { auth } = useRepositoryContext();
  const feedbackService = useFeedbackServiceContext();

  return useAppMutation<void, { email: string }>({
    mutateFn: ({ email }) => auth.sendResetPasswordEmail(email),
    onSuccess: () => {
      options?.onSuccess?.();
      feedbackService.send({
        type: "success",
        message: "Verify your email inbox",
      });
    },
    onError: (error) => {
      options?.onError?.(error);
      feedbackService.send({ type: "error", message: "Email not found" });
    },
  });
};
