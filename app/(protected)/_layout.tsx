import { Redirect, Stack } from "expo-router";

const isLogged = false;

const ProtectedLayout = () => {
  if (!isLogged) {
    return <Redirect href={"/sign-in"} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default ProtectedLayout;
