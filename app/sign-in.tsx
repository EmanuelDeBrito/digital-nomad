import { useAuthSignIn } from "@/src/domain/auth/operations/useAuthSignIn";
import { Button } from "@/src/ui/components/button";
import { Container } from "@/src/ui/components/container";
import { Text } from "@/src/ui/components/text";
import { TextInput } from "@/src/ui/components/text-input";
import { Logo } from "@/src/ui/containers/logo";
import { TextLink } from "@/src/ui/containers/text-link";
import { Link } from "expo-router";
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
        <TextInput
          label="E-mail"
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Link href={"/reset-password"} asChild>
          <Text mb="s16" textAlign="right" variant="text14" color="primary">
            Esqueceu sua senha?
          </Text>
        </Link>
        <Button title="Login" onPress={handleSignIn} />
        <TextLink
          text="Ainda não tem uma conta?"
          highlighted="Criar"
          href={"/sign-up"}
        />
      </SafeAreaView>
    </Container>
  );
};

export default SignInScreen;
