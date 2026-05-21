export type FeedbackType = "success" | "error";

type Feedback = {
  type: FeedbackType;
  message: string;
  description?: string;
};

export interface FeedbackServiceInterface {
  send(feedback: Feedback): void;
}
