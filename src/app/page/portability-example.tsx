"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";

export function PortabilityExample() {
  return (
    <div className="bg-gradient-to-br from-black to-zinc-900 relative flex h-[760px] w-full flex-col items-center justify-center overflow-hidden border-2 border-zinc-700 px-6 sm:h-[720px] sm:rounded-xl sm:px-0 md:shadow-xl">
      <p className="z-10 flex items-center gap-3 whitespace-pre-wrap text-2xl font-medium tracking-tighter text-white pt-6 sm:text-3xl">
        <InfoIcon className="size-7 md:size-8" />
        Exemplo de operação
      </p>
      <div className="flex flex-col items-center py-6">
        <p className="text-primary-red text-2xl font-medium">
          Seu saldo devedor atual
        </p>
        <span className="text-4xl font-bold text-white">
          R$ 18.545,98
        </span>
      </div>
      <div className="max-w-md w-full flex flex-col space-y-6 py-3">
        <p className="text-primary-red text-2xl font-medium">
          Valor da parcela
        </p>
        <div className="max-w-md mx-auto w-full flex justify-between items-center">
          <div className="flex flex-col">
            <small className="tex-lg font-medium text-white">
              Atual
            </small>
            <span className="text-2xl font-bold text-white">
              R$ 450,00
            </span>
          </div>
          <div className="flex flex-col">
            <small className="tex-lg font-medium text-white">
              Reduzida
            </small>
            <span className="text-2xl font-bold text-green-400">
              R$ 150,00
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-md w-full flex flex-col space-y-6 py-3">
        <p className="text-primary-red text-2xl font-medium">
          Parcelas
        </p>
        <div className="max-w-md mx-auto w-full flex justify-between items-center">
          <div className="flex flex-col">
            <small className="tex-lg font-medium text-white">
              Atual
            </small>
            <span className="text-2xl font-bold text-white">
              70 parcelas
            </span>
          </div>
          <div className="flex flex-col">
            <small className="tex-lg font-medium text-white">
              Reduzidas
            </small>
            <span className="text-2xl font-bold text-green-400">
              60 parcelas
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-md w-full flex flex-col space-y-6 py-3">
        <p className="text-primary-red text-2xl font-medium">
          Taxa de juros
        </p>
        <div className="max-w-md mx-auto w-full flex justify-between items-center">
          <div className="flex flex-col">
            <small className="tex-lg font-medium text-white">
              Atual
            </small>
            <span className="text-2xl font-bold text-white">
              1,91% a.m.
            </span>
          </div>
          <div className="flex flex-col">
            <small className="tex-lg font-medium text-white">
              Reduzidas
            </small>
            <span className="text-2xl font-bold text-green-400">
              1,38% a.m.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-6">
        <p className="text-white text-2xl font-medium">
          Coloque de volta no seu bolso
        </p>
        <span className="text-4xl font-bold text-green-400">
          R$ 3.042,33
        </span>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
