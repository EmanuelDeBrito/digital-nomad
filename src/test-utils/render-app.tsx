import HomeScreen from "@/app/(protected)/(tabs)";
import TabLayout from "@/app/(protected)/(tabs)/_layout";
import ExploreScreen from "@/app/(protected)/(tabs)/explore";
import ProfileScreen from "@/app/(protected)/(tabs)/profile";
import ProtectedLayout from "@/app/(protected)/_layout";
import CityDetailsScreen from "@/app/(protected)/city-details/[id]";
import ResetPasswordScreen from "@/app/reset-password";
import SignInScreen from "@/app/sign-in";
import SignUpScreen from "@/app/sign-up";
import { ThemeProvider } from "@shopify/restyle";
import { renderRouter } from "expo-router/testing-library";
import React from "react";
import { AuthProvider } from "../domain/auth/auth-context";
import { Toast } from "../infra/feedbackService/adapters/toast/toast";
import { ToastFeedback } from "../infra/feedbackService/adapters/toast/toastFeedback";
import { FeedbackServiceProvider } from "../infra/feedbackService/feedback-service-provider";
import { InMemoryRepository } from "../infra/repositories/adapters/inMemory";
import { RepositoryProvider } from "../infra/repositories/repository-provider";
import { inMemoryStorage } from "../infra/storage/adapters/inMemoryStorage";
import { StorageProvider } from "../infra/storage/storage-provider";
import { AppStack } from "../ui/navigation/app-stack";
import theme from "../ui/theme/theme";

export const RenderApp = () => {
  const Wrapper = ({ children }: React.PropsWithChildren) => {
    return (
      <StorageProvider storage={inMemoryStorage}>
        <AuthProvider>
          <FeedbackServiceProvider value={ToastFeedback}>
            <RepositoryProvider value={InMemoryRepository}>
              <ThemeProvider theme={theme}>
                {children}
                <Toast />
              </ThemeProvider>
            </RepositoryProvider>
          </FeedbackServiceProvider>
        </AuthProvider>
      </StorageProvider>
    );
  };

  renderRouter(
    {
      _layout: () => <AppStack />,
      "(protected)/_layout": () => <ProtectedLayout />,
      "(protected)/(tabs)/_layout": () => <TabLayout />,
      "(protected)/(tabs)/index": () => <HomeScreen />,
      "(protected)/(tabs)/explore": () => <ExploreScreen />,
      "(protected)/(tabs)/profile": () => <ProfileScreen />,
      "(protected)/city-details/[id]": () => <CityDetailsScreen />,
      "sign-in": () => <SignInScreen />,
      "sign-up": () => <SignUpScreen />,
      "reset-password": () => <ResetPasswordScreen />,
    },
    { wrapper: Wrapper, initialUrl: "/" },
  );
};
