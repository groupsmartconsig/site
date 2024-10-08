/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Button } from "@/components/ui/button";
import { useStepper } from "@/hooks/use-stepper";
import { AuthService } from "@/services/auth-service";

export function NextStepButton({
  type = "button",
  size = "default",
  title,
  className,
  onClick,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const { nextStep } = useStepper();

  const handleNextStep = async () => {
    const loginData = {
      username: process.env.NEXT_PUBLIC_USERNAME,
      password: process.env.NEXT_PUBLIC_PASSWORD,
    };

    try {
      await AuthService.signIn(loginData.username, loginData.password);

      const token = localStorage.getItem("token");
      if (!token) throw new Error("401 Server Error: Token not found.");

      nextStep();
    } catch (error) {
      console.error("Erro ao autenticar:", error);
    }
  };

  return (
    <Button
      type={type}
      className={className}
      size={size}
      onClick={handleNextStep}
      {...props}
    >
      {title}
    </Button>
  );
}
