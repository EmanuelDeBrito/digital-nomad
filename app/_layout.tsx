import { AuthProvider } from "@/src/domain/auth/auth-context";
import { ConsoleFeedback } from "@/src/infra/feedbackService/adapters/console/consoleFeedback";
import { FeedbackServiceProvider } from "@/src/infra/feedbackService/feedback-service-provider";
import { InMemoryRepository } from "@/src/infra/repositories/adapters/inMemory";
import { RepositoryProvider } from "@/src/infra/repositories/repository-provider";
import { AsyncStorageAdapter } from "@/src/infra/storage/adapters/async-storage";
import { StorageProvider } from "@/src/infra/storage/storage-provider";
import theme from "@/src/ui/theme/theme";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
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
        <FeedbackServiceProvider value={ConsoleFeedback}>
          <RepositoryProvider value={InMemoryRepository}>
            <ThemeProvider theme={theme}>
              <Stack
                screenOptions={{
                  contentStyle: { backgroundColor: theme.colors.background },
                  headerShown: false,
                  fullScreenGestureEnabled: true,
                }}
              >
                <Stack.Screen
                  name="(protected)"
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="sign-in" />
                <Stack.Screen name="sign-up" />
                <Stack.Screen name="reset-password" />
                <Stack.Screen
                  name="modal"
                  options={{ presentation: "modal", title: "Modal" }}
                />
              </Stack>
              <StatusBar style="light" />
            </ThemeProvider>
          </RepositoryProvider>
        </FeedbackServiceProvider>
      </AuthProvider>
    </StorageProvider>
  );
};

export default RootLayout;
