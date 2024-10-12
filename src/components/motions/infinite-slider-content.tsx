import { InfiniteSlider } from '@/components/magic-ui/infinite-slider';

import Image from 'next/image';

export function InfiniteSliderContent() {
  return (
    <div className="py-12">
      <div className='max-w-64 w-full mx-auto text-3xl font-medium py-6 sm:text-4xl sm:text-center sm:font-bold sm:max-w-full'>
        Única instituição autorizada por todos os Bancos.
      </div>
      <InfiniteSlider className="h-28 pt-3 sm:h-auto sm:pt-6" gap={24} reverse>
        <Image
          src="/banrisul.png"
          alt="Banco banrisul"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
        />
        <Image
          src="/bmg.png"
          alt="Banco bmg"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
        />
        <Image
          src="/bradesco.png"
          alt="Banco bradesco"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
        />
        <Image
          src="/c6.png"
          alt="Banco c6"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
        />
        <Image
          src="/caixa.png"
          alt="Banco caixa"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
        />
        <Image
          src="/crefisa.png"
          alt="Banco crefisa"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
        />
        <Image
          src="/daycoval.png"
          alt="Banco daycoval"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
        />
        <Image
          src="/itau.png"
          alt="Banco itau"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
        />
        <Image
          src="/pan.png"
          alt="Banco pan"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
        />
        <Image
          src="/safra.png"
          alt="Banco safra"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
        />
        <Image
          src="/santander.png"
          alt="Banco santander"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
        />
      </InfiniteSlider>
    </div>
  );
}
