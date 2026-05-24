import { z } from "zod";

export const signUpSchema = z
  .object({
    fullName: z
      .string({ error: "Campo obrigatório!" })
      .min(7, "Nome muito curto"),
    email: z
      .string({ error: "Campo obrigatório!" })
      .min(1, "O e-mail é obrigatório")
      .pipe(z.email({ error: "E-mail inválido" })),
    password: z
      .string({ error: "Campo obrigatório!" })
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z
      .string({ error: "Campo obrigatório!" })
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
