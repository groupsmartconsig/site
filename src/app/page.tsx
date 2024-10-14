import { PortabilityDetails } from "@/app/page/portability-details";
import { AnimatedBeamCard } from "@/components/motions/animated-beam-card";
import { BoxRevealContainer } from "@/components/motions/box-reveal-container";
import { HeroVideoReview } from "@/components/motions/hero-video-review";
import { InfiniteSliderContent } from "@/components/motions/infinite-slider-content";
import { MainContainer } from "@/components/motions/main-container";
import { ReviewsContainer } from "@/components/motions/reviews-container";
import { FaqAccordion } from "./page/faq";
import { Footer } from "./page/footer";
import { SimulationCard } from "./page/simulation-card";

export default function LandingPage() {
  return (
    <div>
      <MainContainer />
      <div className="bg-white w-full">
        <InfiniteSliderContent />
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center py-0 md:my-16 md:flex-row md:justify-between md:space-x-12">
          <SimulationCard />
          <PortabilityDetails />
        </div>

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 items-center md:grid-cols-2 md:py-16">
          <BoxRevealContainer />
          <AnimatedBeamCard />
        </div>
        
        <div className="max-w-6xl w-full mx-auto pt-16 px-3 md:px-0 md:pt-20">
          <HeroVideoReview />
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-primary-red via-[#ffaa40] to-danger-red"></div>
      </div>
      
      <section className="pt-12 pb-16 bg-gradient-to-br from-black to-zinc-950 sm:bg-transparent">
        <ReviewsContainer />
      </section>
      
      <div className="max-w-full w-full mx-auto py-8 px-2 bg-gradient-to-br from-black to-zinc-950 sm:bg-transparent sm:max-w-6xl sm:px-0">
        <FaqAccordion />
        <Footer />
      </div>
    </div>
  );
}