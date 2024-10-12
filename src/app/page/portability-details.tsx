"use client";

import { cn } from "@/lib/utils";
import { CircleCheckBigIcon, CoinsIcon } from "lucide-react";
import { FormButtonDialog } from "../../components/motions/form-button-dialog";

import AnimatedGridPattern from "@/components/magic-ui/animated-grid-pattern";

export function PortabilityDetails() {
  return (
    <div className="relative flex h-[780px] max-w-full w-full mx-auto flex-col items-center justify-center rounded-xl overflow-hidden pt-24 md:h-[720px] md:pt-0">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#8a090d] via-[#e42c33] to-[#e42c33] bg-clip-text text-center text-5xl font-bold leading-none tracking-tighter text-transparent px-4 sm:text-6xl">
        A melhor opção para você
      </span>

      <ul className="flex flex-col items-center space-y-6 pt-12 px-6 md:items-start md:px-0">
        <li className="flex gap-2 text-black text-lg">
          <CircleCheckBigIcon className="size-6 text-green-400 mt-0.5" />
          Uma solução que permite transferir sua dívida <br />
          de um Banco para outro, diminuindo o valor da <br />
          sua parcela e do seu juros.
        </li>
        <li className="flex gap-2 text-black text-lg">
          <CircleCheckBigIcon className="size-6 text-green-400 mt-0.5" />
          Diminuindo a parcela, é possível colocar o <br />
          valor de até 10 parcelas de volta no seu bolso.
        </li>
        <li className="flex gap-2 text-black text-lg">
          <CircleCheckBigIcon className="size-6 text-green-400 mt-0.5" />
          Economize através da portabilidade <br />
          de forma 100% segura e online.
        </li>
      </ul>

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      
      <div className="py-12">
        <FormButtonDialog
          title="Desejo fazer minha portabilidade"
          icon={<CoinsIcon className="size-4" />}
        />
      </div>
    </div>
  );
}
