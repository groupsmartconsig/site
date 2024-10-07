import BoxReveal from "@/components/ui/box-reveal";
import { ShimmerButtonDialog } from "./shimmer-button-dialog";

export async function BoxRevealContainer() {
  return (
    <div className="size-full w-full items-center justify-center overflow-hidden text-white px-4 md:max-w-lg md:px-0">
      <BoxReveal boxColor={"#18181b"} duration={0.5}>
        <p className="text-3xl font-semibold pl-6 leading-snug md:text-[3.5rem] md:pl-0">
          Quais são os benefícios<span className="text-[#ec3237]">?</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#18181b"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
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
        <div className="pl-28 pt-6 md:pl-0">
          <ShimmerButtonDialog title="Faça uma simulação" />
        </div>
      </BoxReveal>
    </div>
  );
}
