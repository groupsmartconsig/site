import ShimmerButton from "@/components/ui/shimmer-button";

export function ShimmerButtonDialog({ title }: { title: string }) {
  return (
    <div className="z-10 flex items-center justify-center">
      <ShimmerButton className="shadow-2xl shadow-lime-900">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-lime-300">
          {title}
        </span>
      </ShimmerButton>
    </div>
  );
}
