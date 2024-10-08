import { portabilityFormSchema } from "@/@types/portability";
import { PortabilityService } from "@/services/proposals-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  portabilityForm: portabilityFormSchema,
});

export type DialogFormData = z.infer<typeof formSchema>;

export function DialogForm() {
  const form = useForm<DialogFormData>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    const formData = {
      document: data.portabilityForm.document,
    };

    try {
      await PortabilityService.getContractsByCustomerDocument(formData.document);
      toast.success("CONSULTA REALIZADA COM SUCESSO",
        {
          description: "Você possui propostas disponíveis para portabilidade.",
        }
      );
    } catch {
      toast.error("OCORREU UM ERRO NA SIMULAÇÃO",
        {
          description: "Verifique os dados digitados e tente novamente.",
        }
      );
    }
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit}>
      </form>
    </FormProvider>
  )
}