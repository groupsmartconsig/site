import { Header } from '@/app/page/header';
import { HeroTitle } from '@/components/motions/hero-title';

export function MainContainer() {
  return (
    <>
      <div className="pt-8">
        <Header />
        <div className="relative pt-10 flex flex-col items-center overflow-hidden sm:pt-20">
          <HeroTitle />
        </div>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-primary-red via-[#ffaa40] to-danger-red"></div>
    </>
  )
}