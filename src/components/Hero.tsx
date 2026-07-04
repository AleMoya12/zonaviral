import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import type { Post } from "@/data/posts";
import { getCategoryName } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { Container } from "./Container";
import { TrendingBadge } from "./TrendingBadge";

type HeroProps = {
  featured: Post;
  ranking: Post[];
  trendLabels: string[];
};

export function Hero({ featured, ranking, trendLabels }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <Container className="py-8 md:py-10 lg:py-12">
        <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-orange-300">Portada</p>
            <h1 className="font-display mt-3 max-w-4xl text-balance text-4xl font-black leading-[0.98] tracking-[-0.05em] text-stone-50 md:text-5xl lg:text-[4.1rem]">
              Noticias virales, cultura digital y tendencias contadas con criterio editorial.
            </h1>
          </div>
          <p className="max-w-md text-sm leading-7 text-stone-300/90 md:text-base">
            Una portada pensada para leer rapido: tema principal, ranking lateral y claves de
            conversacion para seguir lo que se mueve hoy.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {trendLabels.map((label) => (
            <span
              className="inline-flex items-center rounded-full border border-orange-300/20 bg-white/[0.04] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-stone-200"
              key={label}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.55fr)_360px]">
          <article className="glass overflow-hidden rounded-[2.25rem]">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <Link className="relative min-h-[320px] lg:min-h-[520px]" href={`/blog/${featured.slug}`}>
                <Image
                  alt={featured.imageAlt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 62vw"
                  src={featured.image}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
              </Link>

              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <Link
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-300"
                      href={`/categoria/${featured.category}`}
                    >
                      {getCategoryName(featured.category)}
                    </Link>
                    {featured.trending ? <TrendingBadge /> : null}
                  </div>

                  <h2 className="font-display text-balance text-3xl font-black leading-tight tracking-[-0.04em] text-stone-50 md:text-4xl">
                    <Link className="transition hover:text-orange-300" href={`/blog/${featured.slug}`}>
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="mt-5 text-base leading-8 text-stone-300/90 md:text-lg">
                    {featured.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <div className="mb-5 flex flex-wrap gap-4 text-sm text-stone-400">
                    <span>{formatDate(featured.publishedAt)}</span>
                    <span>{featured.readingTime}</span>
                    <span>{featured.author}</span>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-700 via-orange-500 to-amber-300 px-6 py-4 text-sm font-extrabold text-stone-950 shadow-glow transition hover:scale-[1.02]"
                      href={`/blog/${featured.slug}`}
                    >
                      Leer noticia principal
                      <ArrowRight aria-hidden="true" className="h-5 w-5" />
                    </Link>
                    <Link
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-extrabold text-stone-100 transition hover:border-orange-300/40 hover:text-orange-300"
                      href="/blog"
                    >
                      Ver cobertura completa
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <aside className="glass rounded-[2rem] p-6">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-orange-300">Ahora</p>
                <h3 className="font-display mt-2 text-2xl font-black tracking-[-0.03em] text-stone-50">
                  Ranking lateral
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-400/10 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-orange-200">
                <TrendingUp aria-hidden="true" className="h-3.5 w-3.5" />
                En foco
              </span>
            </div>

            <ol className="mt-5 grid gap-5">
              {ranking.map((post, index) => (
                <li
                  className="grid grid-cols-[auto_1fr] gap-4 border-b border-white/8 pb-5 last:border-b-0 last:pb-0"
                  key={post.slug}
                >
                  <span className="font-display text-3xl font-black leading-none tracking-[-0.05em] text-orange-300/85">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-stone-400">
                      {getCategoryName(post.category)}
                    </p>
                    <Link
                      className="mt-2 block font-display text-lg font-black leading-snug tracking-[-0.02em] text-stone-50 transition hover:text-orange-300"
                      href={`/blog/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                    <p className="mt-2 text-sm leading-6 text-stone-300/85">{post.readingTime}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </Container>
    </section>
  );
}
