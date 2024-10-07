import ShimmerButton from "@/components/ui/shimmer-button";


export function ShimmerButtonDialog({ title }: { title: string }) {
  return (
    // <Dialog>
    //   <DialogTrigger asChild>
        <div className="z-10 flex items-center justify-center">
          <ShimmerButton className="shadow-2xl shadow-zinc-800 p-3 md:px-6">
            <span className="whitespace-pre-wrap text-center text-xs sm:text-sm font-medium leading-none tracking-tight text-lime-300">
              {title}
            </span>
          </ShimmerButton>
        </div>
    //   </DialogTrigger>
    //   <DialogContent className="px-0">
    //     <DialogForm />
    //   </DialogContent>
    // </Dialog >
  );
}
