import { StepperProps } from "@/@types/stepper";
import { StepperContext } from "@/context/stepper-context";
import { useCallback } from "react";

export function Stepper({
  steps,
  currentStep,
  onStepChange,
}: StepperProps) {
  const previousStep = useCallback(() => {
    const newStep = Math.max(0, currentStep - 1);
    onStepChange?.(newStep);
  }, [currentStep, onStepChange]);

  const nextStep = useCallback(() => {
    const newStep = Math.min(steps.length - 1, currentStep + 1);
    onStepChange?.(newStep);
  }, [currentStep, steps.length, onStepChange]);

  return (
    <StepperContext.Provider value={{ previousStep, nextStep }}>
      <div>
        {steps[currentStep]?.content}
      </div>
    </StepperContext.Provider>
  )
}