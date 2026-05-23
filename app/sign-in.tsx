import { useAuthSignIn } from "@/src/domain/auth/operations/useAuthSignIn";
import { Button } from "@/src/ui/components/button";
import { Container } from "@/src/ui/components/container";
import { Text } from "@/src/ui/components/text";
import { TextInput } from "@/src/ui/components/text-input";
import { useState } from "react";
import { Image } from "react-native";
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
        <Image
          style={{
            alignSelf: "center",
            width: 150,
            height: 60,
            marginTop: 40,
            marginBottom: 60,
          }}
          source={require("@/assets/images/logo.png")}
          resizeMode="cover"
        />
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
        <Text mb="s16" textAlign="right" variant="text14" color="primary">
          Esqueceu sua senha?
        </Text>
        <Button title="Login" onPress={handleSignIn} />
        <Text textAlign="center" mt="s20" variant="text16" color="gray2">
          Ainda não tem uma conta?{" "}
          <Text variant="title16" color="primary">
            Criar
          </Text>
        </Text>
      </SafeAreaView>
    </Container>
  );
};

export default SignInScreen;
