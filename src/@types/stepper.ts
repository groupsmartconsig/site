export interface StepperProps {
  currentStep: number;
  onStepChange?: (step: number) => void;
  steps: {
    label: string;
    content: React.ReactNode;
  }[];
}