import { DialogForm } from "../form/stepper";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "../ui/dialog";

import ShinyButton from "../magic-ui/shiny-button";

interface FormDialogProps {
  title: string;
  icon?: React.ReactNode | null;
}

export function FormButtonDialog({ title, icon }: FormDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="z-10 flex items-center justify-center sm:justify-start">
          <ShinyButton className="w-full bg-gradient-to-r from-green-400 via-emerald-300 to-green-300 rounded-xl sm:w-auto sm:rounded-full">
            <div className="flex items-center justify-center gap-2">
              {title}
              {icon}
            </div>
          </ShinyButton>
        </div>
      </DialogTrigger>
      <DialogContent className="px-0">
        <DialogForm />
      </DialogContent>
    </Dialog >
  );
}
