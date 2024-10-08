import { Button } from "@/components/ui/button";
import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStepper } from "@/hooks/use-stepper";
import { cn } from "@/lib/utils";
import { Loader2Icon, TriangleIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";
import type { DialogFormData } from "./index";

import MaskedInput from "react-input-mask";

export function Form() {
  const {
    trigger,
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<DialogFormData>();

  const { nextStep } = useStepper();

  async function handleNextStep() {
    const isValid = await trigger("portabilityForm");
    if (isValid) nextStep();
  }

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
                errors.portabilityForm?.fullName
                  ? "border-primary-red focus-visible:ring-0"
                  : "border-input"
              )}
              {...register("portabilityForm.fullName")}
            />
            {errors.portabilityForm?.fullName?.message && (
              <span className="pl-2 text-xs text-primary-red font-medium italic">
                {errors.portabilityForm?.fullName?.message}
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
                errors.portabilityForm?.document
                  ? "border border-primary-red focus-visible:ring-0 flex h-9 w-full rounded-full bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  : "flex h-9 w-full rounded-full border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              )}
              {...register("portabilityForm.document")}
            />
            {errors.portabilityForm?.document?.message && (
              <span className="pl-2 text-xs text-primary-red font-medium italic">
                {errors.portabilityForm?.document?.message}
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
          type="submit"
          className="font-medium px-6 rounded-full hover:text-lime-300 mx-8"
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
