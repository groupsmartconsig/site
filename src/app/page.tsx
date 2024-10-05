import { MainContainer } from "@/components/motions/main-container";
import { Footer } from "./footer";

export default function Home() {
  return (
    <div>
      <MainContainer />
      <div className="p-8">
        <Footer />
      </div>
    </div>
  );
}
