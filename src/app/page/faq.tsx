import { BorderBeam } from "@/components/magic-ui/border-beam";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import AnimatedGridPattern from "@/components/magic-ui/animated-grid-pattern";

export function FaqAccordion() {
  return (
    <div
      className="bg-black h-[600px] w-full relative flex flex-col items-center justify-center border-2 border-zinc-700 rounded-xl overflow-hidden md:h-[540px] md:shadow-xl"
    >
      <div className="w-full flex flex-col space-y-12 py-8 sm:py-0">
        <p className="z-10 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter bg-gradient-to-b from-[#f48c06] via-[#f42f36] to-[#ec3237] bg-clip-text text-transparent md:text-5xl">
          <strong className="text-3xl">FAQ</strong><br />
          Perguntas e respostas
        </p>
        
        <Accordion type="single" collapsible className="w-full mx-auto text-white px-3 pb-6 md:max-w-3xl md:px-0">
          <AccordionItem value="item-1">
            <AccordionTrigger>É necessário pagar alguma taxa adicional?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              Gostaríamos de informar que nosso processo é totalmente gratuito, sem taxas ou encargos extras. Realizamos simulações em todos os seus contratos, buscando redução de juros no que for mais vantajoso para você.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>O que é preciso para realizar a Portabilidade?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              A Portabilidade está disponível para aposentados ou pensionistas do INSS com até 72 anos que possuam empréstimo consignado em qualquer banco. Não exigimos uma quantidade mínima de parcelas pagas em seu contrato; realizamos a redução mesmo com ‘zero pagas’.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Acabei de fazer um empréstimo consignado, posso reduzir o juros e valor de parcela?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              Mesmo para aqueles que acabaram de adquirir um empréstimo consignado, a redução da taxa de juros é uma opção válida, resultando na diminuição da parcela. Essa redução não apenas afeta positivamente o contrato atual, mas também abre espaço para o aumento da margem, permitindo a liberação de um novo valor.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Os serviços oferidos pela Smart Consig são confiáveis?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              Sua segurança é nossa prioridade e sua tranquilidade é nossa missão. Com mais de 5 anos de atuação, garantimos 100% de segurança em nossos serviços. Somos uma empresa regularizada pela ANEPS e autorizada pelo BACEN como correspondente bancário, proporcionando confiança e integridade em cada transação.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Meu benefício é o LOAS, posso fazer ?</AccordionTrigger>
            <AccordionContent className="whitespace-pre-line">
              Para esclarecimento, não efetuamos a redução de juros para clientes LOAS com números de benefício 87 e 88. Não atendemos a clientela PCD (Pessoas com Deficiência). Contudo, estamos disponíveis para beneficiários de pensão por morte, desde que a idade seja superior a 45 anos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  )
}
