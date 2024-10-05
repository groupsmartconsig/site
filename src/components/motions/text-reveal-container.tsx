import TextReveal from "@/components/ui/text-reveal";

export function TextRevealContainer() {
  return (
    <div className="z-10 min-h-64 flex flex-col items-center bg-gradient-to-bl from-black via-stone-950 to-zinc-900">
      <TextReveal text="Uma solução que permite transferir sua dívida de um Banco para outro, diminuindo o valor da sua parcela e do seu juros." />
      <TextReveal text="Diminuindo a parcela, é possível colocar o valor de até 10 parcelas de volta no seu bolso." />
      <TextReveal text="Economize através da portabilidade de forma 100% segura e online." />
    </div>
  )
}