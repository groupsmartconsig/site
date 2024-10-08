import ShimmerButton from "@/components/ui/shimmer-button";

interface ShimmerButtonDialogProps {
  title: string;
  icon?: React.ReactNode | null;
}

export function ShimmerButtonDialog({ title, icon }: ShimmerButtonDialogProps) {
  return (
    // <Dialog>
    //   <DialogTrigger asChild>
    <div className="z-10 flex items-center justify-center">
      <ShimmerButton className="shadow-2xl shadow-zinc-800 p-3 md:px-6">
        <div className="flex items-center gap-2">
          <span className="whitespace-pre-wrap text-center text-xs sm:text-sm font-medium leading-none tracking-tight text-green-400">
            {title}
          </span>
          {icon}
        </div>
      </ShimmerButton>
    </div>
    //   </DialogTrigger>
    //   <DialogContent className="px-0">
    //     <DialogForm />
    //   </DialogContent>
    // </Dialog >
  );
}
