import { Button } from "@/src/ui/components/button";
import { Container } from "@/src/ui/components/container";
import { Header } from "@/src/ui/containers/header";
import { Logo } from "@/src/ui/containers/logo";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const handleSignUp = () => {};

  return (
    <Container>
      <SafeAreaView>
        <Header title="Criar Conta" />
        <Button title="Criar conta" onPress={handleSignUp} />
        <Logo />
      </SafeAreaView>
    </Container>
  );
};

export default SignUpScreen;
