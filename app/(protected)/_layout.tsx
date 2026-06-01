import { useAuthContext } from "@/src/domain/auth/auth-context";
import { Redirect, Stack } from "expo-router";

const ProtectedLayout = () => {
  const { authUser, isReady } = useAuthContext();

  // if (!isReady) {
  //   return null;
  // }

  if (!authUser) {
    return <Redirect href={"/sign-in"} />;
  }

  return (
    <Stack
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="city-details/[id]" />
    </Stack>
  );
};

export default ProtectedLayout;
