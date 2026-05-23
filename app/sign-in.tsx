import { useAuthSignIn } from "@/src/domain/auth/operations/useAuthSignIn";
import { Container } from "@/src/ui/components/container";
import { TextInput } from "@/src/ui/components/text-input";
import { useState } from "react";
import { Button } from "react-native";
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
        <Button title="Login" onPress={handleSignIn} />
      </SafeAreaView>
    </Container>
  );
};

export default SignInScreen;
