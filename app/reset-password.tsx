import { Button } from "@/src/ui/components/button";
import { Container } from "@/src/ui/components/container";
import { Header } from "@/src/ui/containers/header";
import { Logo } from "@/src/ui/containers/logo";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPassowordScreen = () => {
  const handleResetPassword = () => {};

  return (
    <Container>
      <SafeAreaView>
        <Header title="Recuperar Senha" />
        <Button title="Enviar link" onPress={handleResetPassword} />
        <Logo />
      </SafeAreaView>
    </Container>
  );
};

export default ResetPassowordScreen;
