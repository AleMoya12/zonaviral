import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { Container } from "@/components/Container";
import { FeaturedPostCard } from "@/components/FeaturedPostCard";
import { Hero } from "@/components/Hero";
import { MostRead } from "@/components/MostRead";
import { PostCard } from "@/components/PostCard";
import { SectionTitle } from "@/components/SectionTitle";
import { TrendingBadge } from "@/components/TrendingBadge";
import { categories } from "@/data/categories";
import { getCategoryName, latestPosts, posts, trendingPosts } from "@/data/posts";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Zona Viral | Tendencias, noticias virales y cultura digital",
  description:
    "Descubri las tendencias, noticias virales, memes, tecnologia, redes sociales y entretenimiento mas comentados del dia.",
  path: "/"
});

export default function HomePage() {
  const featured = latestPosts.find((post) => post.featured) ?? latestPosts[0];
  const heroRanking = trendingPosts.slice(0, 5);
  const trendLabels = [
    "IA generativa",
    "TikTok",
    "Buscadores con IA",
    "Seguridad digital",
    "Series y memes"
  ];

  return (
    <>
      <Hero featured={featured} ranking={heroRanking} trendLabels={trendLabels} />
      <Container className="space-y-20 pt-10">
        <section>
          <SectionTitle
            description="Temas que aparecen fuerte en redes, buscadores y conversaciones de Argentina y Latinoamerica."
            eyebrow="Ahora"
            title="Tendencias del dia"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {trendingPosts.slice(0, 6).map((post) => (
              <article className="glass rounded-[2rem] p-6" key={post.slug}>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Link
                    className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-300"
                    href={`/categoria/${post.category}`}
                  >
                    {getCategoryName(post.category)}
                  </Link>
                  <TrendingBadge />
                </div>
                <h3 className="font-display text-xl font-black leading-tight tracking-[-0.02em] text-stone-50">
                  <Link className="hover:text-orange-300" href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-300/90">{post.description}</p>
                <Link
                  className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-stone-100 hover:text-orange-300"
                  href={`/blog/${post.slug}`}
                >
                  Leer articulo
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle
            description="Historias recientes con contexto claro, imagenes optimizadas y enlaces internos para seguir leyendo."
            eyebrow="Novedades"
            title="Ultimas noticias"
          />
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-8">
              <FeaturedPostCard post={featured} />
              <div className="grid gap-6 md:grid-cols-2">
                {latestPosts.slice(1, 5).map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
            <MostRead posts={posts} />
          </div>
        </section>

        <section>
          <SectionTitle
            description="Un acceso rapido a los temas que mas crecen dentro del portal."
            eyebrow="Explora"
            title="Categorias populares"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.slice(0, 8).map((category) => (
              <CategoryCard
                category={category}
                count={posts.filter((post) => post.category === category.slug).length}
                key={category.slug}
              />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle
            description="Notas para entender rapido que significa un tema, por que crecio y que contexto conviene tener antes de compartir."
            eyebrow="Guias"
            title="Explicado simple"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {["Que significa...", "Por que se volvio viral...", "Quien es...", "Que paso con..."].map((title) => (
              <div className="glass rounded-[2rem] p-6" key={title}>
                <h3 className="font-display text-xl font-black tracking-[-0.02em] text-stone-50">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300/90">
                  Formatos pensados para responder dudas concretas con contexto, cuidado editorial y lectura rapida.
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
