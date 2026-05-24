import { Container } from "@/src/ui/components/container";
import { Header } from "@/src/ui/containers/header";
import { Logo } from "@/src/ui/containers/logo";
import { SignUpForm } from "@/src/ui/containers/SignUp/sign-up-form";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const handleSignUp = () => {};

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
