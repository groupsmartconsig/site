import { cn } from "@/lib/utils";
import { LockKeyholeIcon } from "lucide-react";

import AnimatedShinyText from "@/components/magic-ui/animated-shiny-text";

export async function AnimatedShinySpan() {
  return (
    <div className="z-10 flex items-center sm:hidden">
      <div
        className={cn(
          "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer border-white/15 bg-gradient-to-r from-neutral-900 to-zinc-800 hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center gap-2 px-4 py-1 transition ease-out text-sm text-neutral-400 hover:text-neutral-600 hover:duration-300">
          <LockKeyholeIcon className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          <span>Site seguro</span>
        </AnimatedShinyText>
      </div>
    </div>
  );
}
