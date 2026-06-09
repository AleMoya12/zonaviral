import Link from "next/link";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Container } from "./Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-bold text-gray-100">
            <Zap aria-hidden="true" className="h-4 w-4 text-viral-yellow" />
            Tendencias, memes y cultura digital
          </div>
          <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-normal text-white md:text-6xl">
            Zona Viral: las tendencias, noticias y temas más comentados del día
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            Descubrí qué está pasando en redes, tecnología, entretenimiento, deportes y cultura
            digital, explicado de forma simple y rápida.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-viral-pink to-viral-orange px-6 py-4 font-black text-white shadow-glow transition hover:scale-[1.02]"
              href="/blog"
            >
              Ver últimas noticias
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-6 py-4 font-black text-white transition hover:border-viral-yellow hover:text-viral-yellow"
              href="/tendencias"
            >
              <Sparkles aria-hidden="true" className="h-5 w-5" />
              Explorar tendencias
            </Link>
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-viral-purple via-viral-pink to-viral-orange opacity-90 shadow-glow" />
          <div className="absolute inset-3 rounded-[1.65rem] border border-white/25 bg-viral-black/38 p-5 backdrop-blur-md">
            <div className="grid h-full grid-rows-[auto_1fr_auto] gap-4">
              <div className="flex items-center justify-between rounded-3xl bg-white/10 p-4">
                <span className="text-sm font-black uppercase tracking-[0.18em] text-viral-yellow">
                  En vivo
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-viral-black">
                  +24 temas
                </span>
              </div>
              <div className="grid gap-4">
                {["IA en el trabajo", "Meme de la semana", "Videos comentados", "Fútbol y redes"].map(
                  (item, index) => (
                    <div
                      className="flex items-center justify-between rounded-3xl bg-black/26 p-4"
                      key={item}
                    >
                      <span className="font-black text-white">{item}</span>
                      <span className="text-sm font-black text-viral-yellow">#{index + 1}</span>
                    </div>
                  )
                )}
              </div>
              <div className="rounded-3xl bg-white/12 p-5">
                <p className="text-sm font-bold leading-7 text-white">
                  Explicaciones cortas, contexto claro y enlaces internos para seguir cada tema.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
