import BoxReveal from "@/components/magic-ui/box-reveal";

import { Share2Icon } from "lucide-react";
import { FormButtonDialog } from "./form-button-dialog";

export async function BoxRevealContainer() {
  return (
    <div className="size-full w-full items-center justify-center overflow-hidden text-black px-4 md:max-w-lg md:px-0">
      <BoxReveal boxColor={"#18181b"} duration={0.5}>
        <p className="text-4xl text-center font-semibold leading-snug md:text-[3.5rem] md:text-left">
          Quais são os benefícios<span className="text-[#ec3237]">?</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#18181b"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem] px-2 text-center md:px-0 md:text-left">
          Nossos clientes possuem diversas{" "}
          <span className="text-[#ec3237]">vantagens</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#18181b"} duration={0.5}>
        <ol className="pt-6 list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Ao realizar a Portabilidade conosco, você automaticamente consegue um {""}
            <span className="font-semibold text-[#ec3237]">
              aumento de margem consignável
            </span>.
          </li>
          <li className="mb-2">
            Com a portabilidade você pode garantir um {""}
            <span className="font-semibold text-[#ec3237]">
              aumento de salário
            </span>, {""}
            proporcionando mais conforto e estabilidade financeira.
          </li>
          <li className="mb-2">
            Você pode desfrutar da {""}
            <span className="font-semibold text-[#ec3237]">
              liberação de valor
            </span>, {""}
            proporcionando flexibilidade financeira para realizar seus planos, projetos e sonhos.
          </li>
          <li className="mb-2">
            Comparamos todas as oportunidades de redução de juros dos seus contratos antigos em mais de 15 bancos, {""}
            te mostrando sempre as {""}
            <span className="font-semibold text-[#ec3237]">
              melhores taxas
            </span>.
          </li>
          <li className="mb-2">
            Nosso processo é {""}
            <span className="font-semibold text-[#ec3237]">
              100% gratuito
            </span>, {""}
            sem taxas escondidas ou encargos adicionais. Total transparência com o cliente final.
          </li>
        </ol>
      </BoxReveal>

      <BoxReveal boxColor={"#18181b"} duration={0.5}>
        <div className="mt-12 ml-8 sm:ml-0 md:mt-6">
          <FormButtonDialog 
            title="Realize uma simulação gratuita"
            icon={<Share2Icon className="size-4" />}
          />
        </div>
      </BoxReveal>
    </div>
  );
}
