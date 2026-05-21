import { Alert } from "react-native";
import { FeedbackServiceInterface } from "../../feedbackServiceInterface";

export const AlertFeedback: FeedbackServiceInterface = {
  send: (feedback) => {
    Alert.alert(feedback.type, feedback.message);
  },
};
