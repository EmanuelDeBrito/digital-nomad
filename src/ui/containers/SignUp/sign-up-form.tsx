import {
  signUpSchema,
  SignUpSchemaType,
} from "@/src/ui/containers/SignUp/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Box } from "../../components/box";
import { Button } from "../../components/button";
import { TextInput } from "../../components/text-input";

type SignUpFormProps = {
  onSubmit: (data: SignUpSchemaType) => void;
};

export const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  const { control, handleSubmit } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <Box>
      <Controller
        control={control}
        name="fullName"
        render={({ field, fieldState }) => (
          <TextInput
            testID="name-input"
            label="Nome Completo"
            placeholder="Digite seu nome"
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <TextInput
            testID="email-input"
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
          <TextInput
            testID="password-input"
            label="Senha"
            placeholder="Digite sua senha"
            secureTextEntry
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field, fieldState }) => (
          <TextInput
            testID="confirm-password-input"
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            secureTextEntry
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Button
        testID="signup-button"
        mt="s16"
        title="Criar conta"
        onPress={handleSubmit(onSubmit)}
      />
    </Box>
  );
};
