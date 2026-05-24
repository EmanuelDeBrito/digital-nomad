import { Button } from "@/src/ui/components/button";
import { Container } from "@/src/ui/components/container";
import { Text } from "@/src/ui/components/text";
import { TextInput } from "@/src/ui/components/text-input";
import { Header } from "@/src/ui/containers/header";
import { Logo } from "@/src/ui/containers/logo";
import { TextLink } from "@/src/ui/containers/text-link";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPassowordScreen = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {};

  return (
    <Container>
      <SafeAreaView>
        <Header title="Recuperar Senha" />
        <Text mb="s16">
          Digite o endereço de e-mail associado à sua conta e enviaremos
          instruções para redefinir sua senha
        </Text>
        <TextInput
          label="E-mail"
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Enviar link" onPress={handleResetPassword} />
        <TextLink
          text="Lembrou sua senha?"
          highlighted="Voltar para login"
          goBack
        />
        <Logo />
      </SafeAreaView>
    </Container>
  );
};

export default ResetPassowordScreen;
