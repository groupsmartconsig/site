"use client";

import RetroGrid from "@/components/ui/retro-grid";

import { CircleCheckBigIcon } from "lucide-react";
import { ShimmerButtonDialog } from "./shimmer-button-dialog";

export function RetroGridContainer() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#f48c06] via-[#ff2975] to-[#ec3237] bg-clip-text text-center text-6xl px-4 font-bold leading-none tracking-tighter text-transparent">
        A melhor opção para você
      </span>
      <ul className="flex flex-col space-y-6 pt-12">
        <li className="flex gap-2 text-white text-lg">
          <CircleCheckBigIcon className="size-6 text-lime-300 mt-0.5" />
          Uma solução que permite transferir sua dívida <br />
          de um Banco para outro, diminuindo o valor da <br />
          sua parcela e do seu juros.
        </li>
        <li className="flex gap-2 text-white text-lg">
          <CircleCheckBigIcon className="size-6 text-lime-300 mt-0.5" />
          Diminuindo a parcela, é possível colocar o <br />
          valor de até 10 parcelas de volta no seu bolso.
        </li>
        <li className="flex gap-2 text-white text-lg">
          <CircleCheckBigIcon className="size-6 text-lime-300 mt-0.5" />
          Economize através da portabilidade <br />
          de forma 100% segura e online.
        </li>
      </ul>
      <div className="py-12">
        <ShimmerButtonDialog title="Desejo fazer minha portabilidade" />
      </div>
      <RetroGrid />
    </div>
  );
}
