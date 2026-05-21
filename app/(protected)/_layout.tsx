import { Redirect, Stack } from "expo-router";

const isLogged = false;

const ProtectedLayout = () => {
  if (!isLogged) {
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
