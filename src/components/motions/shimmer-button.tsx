import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";

export function ShimmerButtonLink() {
  return (
    <Link href="#" className="z-10 flex items-center justify-center">
      <ShimmerButton className="shadow-2xl shadow-zinc-700">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-lime-300">
          Fale conosco
        </span>
      </ShimmerButton>
    </Link>
  );
}
