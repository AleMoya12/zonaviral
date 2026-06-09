import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { FeaturedPostCard } from "@/components/FeaturedPostCard";
import { JsonLd } from "@/components/JsonLd";
import { PostCard } from "@/components/PostCard";
import { SectionTitle } from "@/components/SectionTitle";
import { latestPosts, trendingPosts } from "@/data/posts";
import { createMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Tendencias del día en internet",
  description:
    "Conocé los temas virales del día, lo más buscado, lo más compartido y lo más comentado en redes sociales.",
  path: "/tendencias"
});

export default function TrendsPage() {
  const featuredTrend = trendingPosts[0];
  const technologyPosts = latestPosts.filter((post) =>
    ["inteligencia-artificial", "tecnologia", "redes-sociales", "ciberseguridad", "marketing-digital", "diseno-web", "seo"].includes(post.category)
  );
  const businessSlugs = [
    "defensa-it-ciberseguridad-pymes-argentina",
    "seo-sitios-en-orbita-seo-diseno-web-ia",
    "pagina-web-arg-diseno-web-pymes-emprendedores"
  ];
  const priorityBusinessPosts = businessSlugs
    .map((slug) => latestPosts.find((post) => post.slug === slug))
    .filter((post): post is (typeof latestPosts)[number] => Boolean(post));
  const businessPosts = latestPosts.filter(
    (post) =>
      !businessSlugs.includes(post.slug) &&
      ["negocios-digitales", "seo", "ciberseguridad", "diseno-web", "marketing-digital"].includes(post.category)
  );
  const socialTopics = ["TikTok", "Instagram", "X", "YouTube", "Google", "WhatsApp"];

  return (
    <Container className="space-y-16 py-12">
      <Breadcrumbs items={[{ label: "Tendencias", href: "/tendencias" }]} />
      <header className="max-w-3xl">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-viral-yellow">En tendencia</p>
        <h1 className="text-balance text-4xl font-black text-white md:text-5xl">
          Tendencias del día en internet
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-300">
          Un resumen simple de los temas que más se están hablando en redes, tecnología,
          entretenimiento, deportes y cultura digital.
        </p>
      </header>

      <section>
        <SectionTitle
          description="Cards destacadas con los temas que más conversación están generando."
          title="Ahora es tendencia"
        />
        {featuredTrend ? <FeaturedPostCard post={featuredTrend} /> : null}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trendingPosts.slice(1, 7).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          description="Inteligencia artificial, apps, redes sociales, ciberseguridad, Google, marketing digital y herramientas online."
          title="Tecnología viral"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologyPosts.slice(0, 6).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          description="Plataformas y conversaciones que suelen empujar tendencias del día."
          title="Lo más comentado en redes"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialTopics.map((topic, index) => (
            <article className="rounded-3xl border border-white/10 bg-white/[0.055] p-6" key={topic}>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-viral-yellow">#{index + 1}</p>
              <h2 className="mt-3 text-2xl font-black text-white">{topic}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Conversaciones, búsquedas y formatos que pueden convertir una publicación en tema viral.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          description="SEO, páginas web, ciberseguridad, IA, Google Ads, herramientas para emprendedores y WhatsApp para empresas."
          title="Tendencias para negocios"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...priorityBusinessPosts, ...businessPosts].slice(0, 9).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Tendencias", path: "/tendencias" }])}
      />
    </Container>
  );
}
