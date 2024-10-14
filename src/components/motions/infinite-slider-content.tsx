import { InfiniteSlider } from '@/components/magic-ui/infinite-slider';

import Image from 'next/image';

export function InfiniteSliderContent() {
  return (
    <div className="bg-gray-100 py-6 sm:bg-white sm:py-12">
      <div className="w-full mx- flex flex-col items-center space-y-6 py-6">
        <span className="text-3xl text-center font-bold sm:text-4xl sm:text-center sm:font-bold">
          Única instituição autorizada por todos os Bancos.
        </span>
        <p className="w-full text-center text-base font-medium px-6 sm:max-w-5xl">
          Somos a única instituição autorizada por todos os bancos para garantir segurança e
          confiança nas suas operações financeiras. Com a nossa expertise, você tem a tranquilidade
          de contar com as melhores condições de mercado.
        </p>
      </div>
      <InfiniteSlider className="h-28 pt-3 sm:h-auto sm:pt-6" gap={24} reverse>
        <Image
          src="/banrisul.png"
          alt="Banco banrisul"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
          priority
        />
        <Image
          src="/bmg.png"
          alt="Banco bmg"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
          priority
        />
        <Image
          src="/bradesco.png"
          alt="Banco bradesco"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
          priority
        />
        <Image
          src="/c6.png"
          alt="Banco c6"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
          priority
        />
        <Image
          src="/caixa.png"
          alt="Banco caixa"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
          priority
        />
        <Image
          src="/crefisa.png"
          alt="Banco crefisa"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
          priority
        />
        <Image
          src="/daycoval.png"
          alt="Banco daycoval"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
          priority
        />
        <Image
          src="/itau.png"
          alt="Banco itau"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
          priority
        />
        <Image
          src="/pan.png"
          alt="Banco pan"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
          priority
        />
        <Image
          src="/safra.png"
          alt="Banco safra"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
          priority
        />
        <Image
          src="/santander.png"
          alt="Banco santander"
          className="h-[120px] w-auto"
          width={1080}
          height={1080}
          priority
        />
      </InfiniteSlider>
    </div>
  );
}
