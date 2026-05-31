import z from "zod";

export const signInSchema = z.object({
  email: z
    .string({ error: "Campo obrigatório" })
    .min(1, "O E-mail é obrigatório")
    .pipe(z.email({ error: "E-mail inválido" })),
  password: z
    .string({ error: "Campo obrigatório" })
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;
