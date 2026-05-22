import { useFeedbackServiceContext } from "@/src/infra/feedbackService/feedback-service-provider";
import { useAppMutation } from "@/src/infra/operations/useAppMutation";
import { useRepositoryContext } from "@/src/infra/repositories/repository-provider";
import { useAuthContext } from "../auth-context";

export const useAuthSignOut = () => {
  const { auth } = useRepositoryContext();
  const { removeAuthUser } = useAuthContext();
  const feedbackService = useFeedbackServiceContext();

  return useAppMutation({
    mutateFn: () => auth.signOut(),
    onSuccess: () => {
      removeAuthUser();
      feedbackService.send({
        type: "success",
        message: "Logout made with success",
      });
    },
  });
};
