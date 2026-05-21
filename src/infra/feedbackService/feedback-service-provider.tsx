import React from "react";
import { FeedbackServiceInterface } from "./feedbackServiceInterface";

export const FeedbackServiceContext =
  React.createContext<FeedbackServiceInterface>({} as FeedbackServiceInterface);

export const FeedbackServiceProvider = FeedbackServiceContext.Provider;

export const useFeedbackServiceContext = () => {
  const context = React.useContext(FeedbackServiceContext);

  if (!context) {
    throw new Error(
      "Feedback Service Context should be used within a Feedback Service Context Provider",
    );
  }

  return context;
};
