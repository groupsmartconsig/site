import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { RocketIcon } from "lucide-react";

import portabilityBanner from "@/app/assets/images/banner.png";
import Image from "next/image";
import { NextStepButton } from "./next-step";

export function FormInit() {
  return (
    <>
      <div className="flex items-center space-x-6 w-full pt-2 pb-4 px-8">
        <span className="p-3 border rounded-lg">
          <RocketIcon className="text-primary-red" />
        </span>
        <DialogHeader>
          <DialogTitle className="text-primary-red">
            Faça uma simulação grátis
          </DialogTitle>
          <DialogDescription>
            Vamos identificar se existem propostas para você.
          </DialogDescription>
        </DialogHeader>
      </div>
      <div className="w-full flex flex-col space-y-6 pt-4 pb-6 px-8">
        <div className="w-full h-52">
          <Image
            src={portabilityBanner}
            width={820}
            height={312}
            className="object-cover h-full w-full rounded-lg"
            alt="Crédito consignado com segurança e velocidade."
          />
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Checkbox checked />
          Concordo com os termos de serviços e privacidade.
        </div>
      </div>
      <Separator />
      <DialogFooter className="w-full pt-6 pb-0 px-8">
        <div className="flex justify-end items-center">
          <NextStepButton
            title="Vamos começar?" 
            className="font-medium px-6 rounded-full hover:text-lime-300"
          />
        </div>
      </DialogFooter>
    </>
  )
}