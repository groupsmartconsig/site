import ShimmerButton from "@/components/ui/shimmer-button";

import { RocketIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../ui/dialog";
import { Separator } from "../ui/separator";

export function ShimmerButtonDialog({ title }: { title: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="z-10 flex items-center justify-center">
          <ShimmerButton className="shadow-2xl shadow-zinc-800">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-lime-300">
              {title}
            </span>
          </ShimmerButton>
        </div>
      </DialogTrigger>
      <DialogContent className="px-0">
        <div className="flex items-center space-x-6 w-full pt-2 px-8">
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
        <div className="w-full flex flex-col space-y-6 py-4 px-8">
          <div className="w-full h-52">
            <img 
              src="https://scontent.fgru9-1.fna.fbcdn.net/v/t39.30808-6/217141455_119414690391667_4233051245573163133_n.png?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=dKrbRSh9jYMQ7kNvgH9BpbU&_nc_ht=scontent.fgru9-1.fna&_nc_gid=Al_A0OO2FehLiXU4IyPvcT9&oh=00_AYCY26Vb3Ka0QYe2XKfaM1mgcIWRZSzFi9zBGzWhbnV6ww&oe=67079187" 
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
        <DialogFooter className="w-full pt-2 pb-0 px-8">
          <div className="flex items-center space-x-3 pr-16">
            <span className="h-2 w-2 bg-black rounded-full"></span>
            <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
            <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
          </div>
          <div className="flex justify-end items-center">
            <Button className="font-medium px-6 rounded-full hover:text-lime-300">
              Vamos começar?
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  );
}
