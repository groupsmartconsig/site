import logo from "@/app/assets/images/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src={logo}
          alt="logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center text-muted-foreground sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>Atualmente em desenvolvimento, em breve o site será publicado.</li>
          <li className="mb-2">
            Acesse o site antigo {" "}
            <code className="bg-white/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              https://gruposmartconsig.com.br
            </code>
            .
          </li>
        </ol>
      </main>
    </div>
  );
}
