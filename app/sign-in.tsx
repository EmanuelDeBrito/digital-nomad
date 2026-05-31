import { useAuthSignIn } from "@/src/domain/auth/operations/useAuthSignIn";
import { Container } from "@/src/ui/components/container";
import { Text } from "@/src/ui/components/text";
import { Logo } from "@/src/ui/containers/logo";
import { SignInForm } from "@/src/ui/containers/SignIn/sign-in-form";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useAuthSignIn();

  const handleSignIn = () => {
    mutate({ email, password });
  };

  return (
    <Container scrollable>
      <SafeAreaView>
        <Logo />
        <Text mb="s16" textAlign="center" variant="title22">
          Bem-vindo
        </Text>
        <SignInForm onSubmit={handleSignIn} />
      </SafeAreaView>
    </Container>
  );
};

export default SignInScreen;
