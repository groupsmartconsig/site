import { MainContainer } from "@/components/motions/main-container";
import { FaqAccordion } from "./page/faq";
import { Footer } from "./page/footer";

export default function Home() {
  return (
    <div>
      <MainContainer />
      <div className="max-w-6xl w-full mx-auto pb-16">
        <FaqAccordion />
      </div>
      <div className="max-w-6xl w-full mx-auto py-8">
        <Footer />
      </div>
    </div>
  );
}
