import { z } from "zod";

export const portabilityFormSchema = z.object({
  name: z.string().min(4, "O nome completo é um campo obrigatório."),
  cpf: z.string().min(11, "O CPF é obrigatório! Informe um CPF válido."),
  phoneNumber: z.string().min(11, "Informe um telefone com DDD válido."),
  isWhatsappPhoneNumber: z.boolean().optional(),
})