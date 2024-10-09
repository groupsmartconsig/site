"use client"

import { useState } from "react";
import { FormFinished } from "./form-finished";
import { FormInit } from "./form-init";
import { Form } from "./form-person";
import { Stepper } from "./stepper";

export function DialogForm() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <form>
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
            {
              label: "Instruções para realizar a portabilidade",
              content: <FormFinished />,
            }
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </form>
    </>
  )
}