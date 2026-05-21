import { Container } from "@/src/ui/components/container";
import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log({ email, password });
  };

  return (
    <Container>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholderTextColor={"#FFF"}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={"#FFF"}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleSignIn} />
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 10,
    marginVertical: 10,
    color: "#FFF",
    fontSize: 20,
    borderWidth: 1.5,
    borderColor: "#FFF",
    borderRadius: 10,
  },
});

export default SignInScreen;
