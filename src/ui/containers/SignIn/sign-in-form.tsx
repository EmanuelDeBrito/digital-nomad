import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Box } from "../../components/box";
import { Button } from "../../components/button";
import { Text } from "../../components/text";
import { TextInput } from "../../components/text-input";
import { TextLink } from "../text-link";
import { signInSchema, SignInSchemaType } from "./signInSchema";

type SignInFormProps = {
  onSubmit: (data: SignInSchemaType) => void;
};

export const SignInForm = ({ onSubmit }: SignInFormProps) => {
  const { control, handleSubmit } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });

  return (
    <Box>
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <TextInput
            label="E-mail"
            placeholder="Digite seu email"
            keyboardType="email-address"
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <>
            <TextInput
              label="Senha"
              placeholder="Digite sua senha"
              secureTextEntry
              errorMessage={fieldState.error?.message}
              value={field.value}
              onChangeText={field.onChange}
            />
            <Link href={"/reset-password"} asChild>
              <Text
                mt="s2"
                mb="s16"
                textAlign="right"
                variant="text14"
                color="primary"
              >
                Esqueceu sua senha?
              </Text>
            </Link>
          </>
        )}
      />
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <TextLink
        text="Ainda não tem uma conta?"
        highlighted="Criar"
        href={"/sign-up"}
      />
    </Box>
  );
};
