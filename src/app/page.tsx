import { PortabilityDetails } from "@/app/page/portability-details";
import { AnimatedBeamCard } from "@/components/motions/animated-beam-card";
import { BoxRevealContainer } from "@/components/motions/box-reveal-container";
import { HeroVideoReview } from "@/components/motions/hero-video-review";
import { InfiniteSliderContent } from "@/components/motions/infinite-slider-content";
import { MainContainer } from "@/components/motions/main-container";
import { PortabilityContainer } from "@/components/motions/portability-container";
import { ReviewsContainer } from "@/components/motions/reviews-container";
import { FaqAccordion } from "./page/faq";
import { Footer } from "./page/footer";

import simulation from "@/app/assets/images/simulation-card.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MainContainer />
      <div className="bg-white w-full">
        <InfiniteSliderContent />
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center py-12 md:my-16 md:flex-row md:justify-between md:space-x-12">
          <Image 
            src={simulation}
            width={1080}
            height={1920}
            className="h-[700px] w-auto rounded-xl"
            alt="Simulação de crédito"
          />
          <PortabilityDetails />
        </div>
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 items-center gap-y-16 md:grid-cols-2 md:py-16">
          <BoxRevealContainer />
          <AnimatedBeamCard />
        </div>
        <div className="max-w-6xl w-full mx-auto pt-12 px-3 md:px-0 md:pt-0">
          <PortabilityContainer />
          <HeroVideoReview />
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-primary-red via-[#ffaa40] to-danger-red"></div>
      </div>
      <section className="pt-12 pb-24">
        <ReviewsContainer />
      </section>
      <div className="max-w-full w-full mx-auto py-8 px-4 sm:max-w-6xl sm:px-0">
        <FaqAccordion />
        <Footer />
      </div>
    </div>
  );
}
