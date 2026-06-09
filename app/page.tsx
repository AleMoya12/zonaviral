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
    "Descubrí las tendencias, noticias virales, memes, tecnología, redes sociales y entretenimiento más comentados del día.",
  path: "/"
});

export default function HomePage() {
  const featured = latestPosts.find((post) => post.featured) ?? latestPosts[0];

  return (
    <>
      <Hero />
      <Container className="space-y-20">
        <section>
          <SectionTitle
            description="Temas que aparecen fuerte en redes, buscadores y conversaciones de Argentina y Latinoamérica."
            eyebrow="Ahora"
            title="Tendencias del día"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {trendingPosts.slice(0, 6).map((post) => (
              <article className="rounded-3xl border border-white/10 bg-white/[0.055] p-6" key={post.slug}>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Link className="text-xs font-black uppercase text-viral-yellow" href={`/categoria/${post.category}`}>
                    {getCategoryName(post.category)}
                  </Link>
                  <TrendingBadge />
                </div>
                <h3 className="text-xl font-black leading-tight text-white">
                  <Link className="hover:text-viral-yellow" href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">{post.description}</p>
                <Link
                  className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white hover:text-viral-yellow"
                  href={`/blog/${post.slug}`}
                >
                  Leer artículo
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle
            description="Historias recientes con contexto claro, imágenes optimizadas y enlaces internos para seguir leyendo."
            eyebrow="Novedades"
            title="Últimas noticias"
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
            description="Un acceso rápido a los temas que más crecen dentro del portal."
            eyebrow="Explorá"
            title="Categorías populares"
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
            description="Notas para entender rápido qué significa un tema, por qué creció y qué contexto conviene tener antes de compartir."
            eyebrow="Guías"
            title="Explicado simple"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {["Qué significa...", "Por qué se volvió viral...", "Quién es...", "Qué pasó con..."].map((title) => (
              <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6" key={title}>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  Formatos pensados para responder dudas concretas con contexto, cuidado editorial y lectura rápida.
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
