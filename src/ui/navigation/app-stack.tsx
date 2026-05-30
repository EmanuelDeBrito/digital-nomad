import { Stack } from "expo-router";
import theme from "../theme/theme";

export const AppStack = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background },
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
    >
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="reset-password" />
    </Stack>
  );
};
