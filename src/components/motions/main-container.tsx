import { Header } from '@/app/page/header';
import { HeroTitle } from '@/components/motions/hero-title';
import { cn } from '@/lib/utils';
import { AnimatedShinySpan } from './animated-shiny-span';

import logo from "@/app/assets/images/logo.png";
import Image from 'next/image';
import DotPattern from '../magic-ui/dot-pattern';

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
      <div className="bg-[url('/elderly-background.jpg')] bg-contain bg-no-repeat p-8 sm:bg-cover sm:bg-[url('/elderly-background-large.jpg')]">
        <div className="relative flex flex-col items-center overflow-hidden pt-40 sm:items-start sm:pt-12">
          <Header />
          <HeroTitle />
          <DotPattern
            className={cn(
              "sm:hidden [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
          />
        </div>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-primary-red via-[#ffaa40] to-danger-red"></div>
    </>
  )
}