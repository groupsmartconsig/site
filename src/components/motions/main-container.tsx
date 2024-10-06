import { Header } from '@/app/page/header';
import { HeroTitle } from '@/components/motions/hero-title';

export function MainContainer() {
  return (
    <div className="pt-8 pb-16">
      <Header />
      <div className="pt-20 flex flex-col items-center overflow-hidden">
        <HeroTitle />
      </div>
    </div>
  )
}