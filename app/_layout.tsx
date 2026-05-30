import { AuthProvider } from "@/src/domain/auth/auth-context";
import { Toast } from "@/src/infra/feedbackService/adapters/toast/toast";
import { ToastFeedback } from "@/src/infra/feedbackService/adapters/toast/toastFeedback";
import { FeedbackServiceProvider } from "@/src/infra/feedbackService/feedback-service-provider";
import { InMemoryRepository } from "@/src/infra/repositories/adapters/inMemory";
import { RepositoryProvider } from "@/src/infra/repositories/repository-provider";
import { AsyncStorageAdapter } from "@/src/infra/storage/adapters/async-storage";
import { StorageProvider } from "@/src/infra/storage/storage-provider";
import { AppStack } from "@/src/ui/navigation/app-stack";
import theme from "@/src/ui/theme/theme";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export const unstable_settings = {
  anchor: "(tabs)",
};

if (__DEV__) {
  require("../ReactotronConfig");
}

const RootLayout = () => {
  const [loaded] = useFonts({
    IcoMoon: require("../assets/icons/icomoon.ttf"),
    PoppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    PoppinsBlackItalic: require("../assets/fonts/Poppins-BlackItalic.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsBoldItalic: require("../assets/fonts/Poppins-BoldItalic.ttf"),
    PoppinsExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsExtraBoldItalic: require("../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    PoppinsExtraLight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
    PoppinsExtraLightItalic: require("../assets/fonts/Poppins-ExtraLightItalic.ttf"),
    PoppinsItalic: require("../assets/fonts/Poppins-Italic.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppinsLightItalic: require("../assets/fonts/Poppins-LightItalic.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsMediumItalic: require("../assets/fonts/Poppins-MediumItalic.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsSemiBoldItalic: require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
    PoppinsThin: require("../assets/fonts/Poppins-Thin.ttf"),
    PoppinsThinItalic: require("../assets/fonts/Poppins-ThinItalic.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <StorageProvider storage={AsyncStorageAdapter}>
      <AuthProvider>
        <FeedbackServiceProvider value={ToastFeedback}>
          <RepositoryProvider value={InMemoryRepository}>
            <ThemeProvider theme={theme}>
              <AppStack />
              <Toast />
              <StatusBar style="light" />
            </ThemeProvider>
          </RepositoryProvider>
        </FeedbackServiceProvider>
      </AuthProvider>
    </StorageProvider>
  );
};

export default RootLayout;
