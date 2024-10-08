"use client";

import { cn } from "@/lib/utils";
import { CircleCheckBigIcon, CoinsIcon } from "lucide-react";
import { ShimmerButtonDialog } from "../../components/motions/shimmer-button-dialog";

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export function PortabilityDetails() {
  return (
    <div className="relative flex h-[720px] w-full flex-col items-center justify-center rounded-xl overflow-hidden">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#f48c06] via-[#ff2975] to-[#ec3237] bg-clip-text text-center text-6xl px-4 font-bold leading-none tracking-tighter text-transparent">
        A melhor opção para você
      </span>

      <ul className="flex flex-col space-y-6 pt-12">
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
        <ShimmerButtonDialog
          title="Desejo fazer minha portabilidade"
          icon={<CoinsIcon className="size-4 text-green-400" />}
        />
      </div>
    </div>
  );
}
