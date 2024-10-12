import simulation from "@/app/assets/images/simulations.png";
import Image from "next/image";

export function SimulationCard() {
  return (
    <div className="w-full">
      <span className="bg-gradient-to-b from-[#8a090d] via-[#e42c33] to-[#e42c33] bg-clip-text text-center text-[34px] font-bold leading-none tracking-tighter text-transparent px-2.5 sm:hidden">
        Exemplo de simulação
      </span>
      <p className="text-center font-medium pt-3 px-6 sm:hidden">
      Reduzimos os juros e o valor das parcelas do seu empréstimo, garantindo economia até o fim do contrato. Além disso, sua margem consignável e benefício irão aumentar, liberando novo crédito. Simule agora e aproveite!
      </p>
      <Image
        src={simulation}
        width={3375}
        height={4800}
        className="h-[700px] w-auto rounded-xl"
        alt="Simulação de crédito"
      />
    </div>
  )
}