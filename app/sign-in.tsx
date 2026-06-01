import { useAuthSignIn } from "@/src/domain/auth/operations/useAuthSignIn";
import { Container } from "@/src/ui/components/container";
import { Text } from "@/src/ui/components/text";
import { Logo } from "@/src/ui/containers/logo";
import { SignInForm } from "@/src/ui/containers/SignIn/sign-in-form";
import { SignInSchemaType } from "@/src/ui/containers/SignIn/signInSchema";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = () => {
  const { mutate } = useAuthSignIn();

  const handleSignIn = (data: SignInSchemaType) => {
    mutate({ email: data.email, password: data.password });
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
