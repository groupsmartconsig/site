"use client"

import { portabilityFormSchema } from "@/@types/portability";
import { PortabilityService } from "@/services/proposals-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { FormInit } from "./form-init";
import { Form } from "./form-person";
import { Stepper } from "./stepper";

const formSchema = z.object({
  portabilityForm: portabilityFormSchema,
});

export type DialogFormData = z.infer<typeof formSchema>;

export function DialogForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<DialogFormData>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const formData = {
        document: data.portabilityForm.document,
      };

      await PortabilityService.getContractsByCustomerDocument(formData.document);

      toast.success("VOCÊ SERÁ REDIRECIONADO(a) EM INSTANTES", {
        description: "Você possui propostas disponíveis para portabilidade.",
      });

      setTimeout(() => {
        window.location.href = "https://www.redirectmais.com/run/anuncio-teste";
      }, 2000);
    } catch (error) {
      console.error("Erro:", error);
      toast.error("OCORREU UM ERRO NA SIMULAÇÃO", {
        description: "Verifique os dados digitados e tente novamente.",
      });
    }
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit}>
        <Stepper
          steps={[
            {
              label: "Instruções para cadastro",
              content: <FormInit />,
            },
            {
              label: "Formulário de dados pessoais",
              content: <Form />,
            },
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </form>
    </FormProvider>
  )
}