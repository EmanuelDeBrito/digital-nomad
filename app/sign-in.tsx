import { useAuthSignIn } from "@/src/domain/auth/operations/useAuthSignIn";
import { Button } from "@/src/ui/components/button";
import { Container } from "@/src/ui/components/container";
import { TextInput } from "@/src/ui/components/text-input";
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
    <Container>
      <SafeAreaView>
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
        <Button title="Login" mt="s16" onPress={handleSignIn} />
      </SafeAreaView>
    </Container>
  );
};

export default SignInScreen;
