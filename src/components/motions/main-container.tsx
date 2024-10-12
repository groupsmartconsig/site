import { Header } from '@/app/page/header';
import { HeroTitle } from '@/components/motions/hero-title';
import { AnimatedShinySpan } from './animated-shiny-span';

import logo from "@/app/assets/images/logo.png";
import Image from 'next/image';

export function MainContainer() {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-zinc-900 flex justify-between items-center p-6 sm:hidden">
        <Image
          src={logo}
          width={100}
          height={20}
          alt="logo"
          priority
        />
        <AnimatedShinySpan />
      </div>
      <div className="bg-[url('/banner.png')] bg-contain bg-no-repeat py-8 px-4 sm:bg-cover sm:bg-[url('/elderly-background-large.jpg')] sm:p-8">
        <div className="relative flex flex-col items-center h-[540px] mt-6 overflow-hidden pt-44 sm:h-[600px] sm:items-start sm:pt-12">
          <Header />
          <HeroTitle />
        </div>
      </div>
      <div className="hidden sm:block w-full h-1 bg-gradient-to-r from-primary-red via-[#ffaa40] to-danger-red"></div>
    </>
  )
}