import Toast from "react-native-toast-message";
import { FeedbackServiceInterface } from "../../feedbackServiceInterface";

export const ToastFeedback: FeedbackServiceInterface = {
  send: (feedback) => {
    Toast.show({ props: feedback });
  },
};
