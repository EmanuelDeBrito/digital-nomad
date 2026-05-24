import { useAuthSignUp } from "@/src/domain/auth/operations/useAuthSignUp";
import { Container } from "@/src/ui/components/container";
import { Header } from "@/src/ui/containers/header";
import { Logo } from "@/src/ui/containers/logo";
import { SignUpForm } from "@/src/ui/containers/SignUp/sign-up-form";
import { SignUpSchemaType } from "@/src/ui/containers/SignUp/signUpSchema";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const { mutate: signUp } = useAuthSignUp({ onSuccess: router.back });

  const handleSignUp = (data: SignUpSchemaType) => {
    signUp({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Container>
      <SafeAreaView>
        <Header title="Criar Conta" />
        <SignUpForm onSubmit={handleSignUp} />
        <Logo />
      </SafeAreaView>
    </Container>
  );
};

export default SignUpScreen;
