import { AnimatedBeamCard } from "@/components/motions/animated-beam-card";
import { BoxRevealContainer } from "@/components/motions/box-reveal-container";
import { MainContainer } from "@/components/motions/main-container";
import { PortabilityContainer } from "@/components/motions/portability-container";
import { FaqAccordion } from "./page/faq";
import { Footer } from "./page/footer";

export default function Home() {
  return (
    <div>
      <MainContainer />
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 items-center gap-y-16 md:grid-cols-2 md:pb-28">
        <BoxRevealContainer />
        <AnimatedBeamCard />
      </div>
      <div className="max-w-6xl w-full mx-auto pt-12 px-3 md:px-0 md:pt-0 md:pb-16">
        <FaqAccordion />
      </div>
      <div className="max-w-6xl w-full mx-auto py-8 px-4 sm:px-0">
        <PortabilityContainer />
        <Footer />
      </div>
    </div>
  );
}
