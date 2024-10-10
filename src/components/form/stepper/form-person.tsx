import { portabilityFormSchema } from "@/@types/portability";
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStepper } from "@/hooks/use-stepper";
import { cn } from "@/lib/utils";
import { CustomerService } from "@/services/customer-service";
import { PortabilityService } from "@/services/proposals-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, TriangleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import MaskedInput from "react-input-mask";

type DialogFormData = z.infer<typeof formSchema>;

const formSchema = z.object({
  portabilityForm: portabilityFormSchema,
});

export function Form() {
  const { nextStep } = useStepper();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DialogFormData>({
    resolver: zodResolver(formSchema)
  });

  const handleSubmitForm = handleSubmit(async (data) => {
    try {
      const formData = {
        name: data.portabilityForm.name,
        phoneNumber: data.portabilityForm.phoneNumber,
        cpf: data.portabilityForm.cpf,
      };

      await PortabilityService.getContractsByCustomerDocument(formData.cpf);

      const replacePhoneValue = formData.phoneNumber.replace(/[\s-]/g, "");
      const replaceDocumentValue = formData.cpf.replace(/\D/g, "");

      await CustomerService.createCustomer(
        formData.name, replacePhoneValue, replaceDocumentValue
      )

      nextStep();
    } catch (error) {
      console.error("Erro:", error);
      toast.warning("NENHUMA PROPOSTA ENCONTRADA PARA O CPF INFORMADO", {
        description: "Infelizmente no momento não encontramos propostas de portabilidade para você.",
        duration: 5000,
      })
    }
  });

  return (
    <>
      <div className="flex items-center space-x-6 w-full pt-2 pb-4 px-8">
        <span className="p-3 border rounded-lg">
          <TriangleIcon className="text-primary-red" />
        </span>
        <DialogHeader>
          <DialogTitle className="text-primary-red">
            Informe os seus dados pessoais
          </DialogTitle>
          <DialogDescription>
            Preencha o formulário corretamente para a consulta.
          </DialogDescription>
        </DialogHeader>
      </div>

      <div className="max-w-sm w-full mx-auto pb-6">
        <div className="grid grid-cols-1 gap-4 py-5">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nome completo</Label>
            <Input
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              maxLength={100}
              className={cn(
                errors.portabilityForm?.name
                  ? "border-primary-red focus-visible:ring-0"
                  : "border-input"
              )}
              {...register("portabilityForm.name")}
            />
            {errors.portabilityForm?.name?.message && (
              <span className="pl-2 text-xs text-primary-red font-medium italic">
                {errors.portabilityForm?.name?.message}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="document">CPF</Label>
            <MaskedInput
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              mask="999.999.999-99"
              maskChar=""
              className={cn(
                errors.portabilityForm?.cpf
                  ? "border border-primary-red focus-visible:ring-0 flex h-9 w-full rounded-full bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  : "flex h-9 w-full rounded-full border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              )}
              {...register("portabilityForm.cpf")}
            />
            {errors.portabilityForm?.cpf?.message && (
              <span className="pl-2 text-xs text-primary-red font-medium italic">
                {errors.portabilityForm?.cpf?.message}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Telefone</Label>
            <MaskedInput
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              mask="99 99999-9999"
              maskChar=""
              className={cn(
                errors.portabilityForm?.phoneNumber
                  ? "border border-primary-red focus-visible:ring-0 flex h-9 w-full rounded-full bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  : "flex h-9 w-full rounded-full border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              )}
              {...register("portabilityForm.phoneNumber")}
            />
            {errors.portabilityForm?.phoneNumber?.message && (
              <span className="pl-2 text-xs text-primary-red font-medium italic">
                {errors.portabilityForm?.phoneNumber?.message}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end space-x-6 pt-6 border-t">
        <Button
          type="button"
          className="font-medium px-6 rounded-full hover:text-lime-300 mx-8"
          onClick={handleSubmitForm}
        >
          {!isSubmitting && <span>Simular propostas</span>}
          {isSubmitting && (
            <div className="flex items-center gap-2">
              Buscando propostas
              <Loader2Icon className="size-4 animate-spin" />
            </div>
          )}
        </Button>
      </div>
    </>
  );
}
