import { BoxRevealContainer } from "@/components/motions/box-reveal-container";
import { MainContainer } from "@/components/motions/main-container";
import { PortabilityContainer } from "@/components/motions/portability-container";
import { FaqAccordion } from "./page/faq";
import { Footer } from "./page/footer";

export default function Home() {
  return (
    <div>
      <MainContainer />
      <div className="max-w-6xl w-full mx-auto grid grid-cols-2 items-center py-28">
        <BoxRevealContainer />
      </div>
      <div className="max-w-6xl w-full mx-auto pb-16">
        <FaqAccordion />
      </div>
      <div className="max-w-6xl w-full mx-auto py-8">
        <PortabilityContainer />
        <Footer />
      </div>
    </div>
  );
}
