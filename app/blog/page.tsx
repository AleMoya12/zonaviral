import type { Metadata } from "next";
import { BlogExplorer } from "@/components/BlogExplorer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { MostRead } from "@/components/MostRead";
import { PostCard } from "@/components/PostCard";
import { SectionTitle } from "@/components/SectionTitle";
import { categories } from "@/data/categories";
import { latestPosts } from "@/data/posts";
import { createMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Blog de tendencias y noticias virales",
  description:
    "Leé las últimas noticias virales, tendencias de redes sociales, tecnología, entretenimiento, memes y cultura digital.",
  path: "/blog"
});

export default function BlogPage() {
  const latestNews = latestPosts.slice(0, 6);
  const techPosts = latestPosts.filter((post) =>
    ["tecnologia", "inteligencia-artificial", "ciberseguridad", "seo", "diseno-web", "marketing-digital"].includes(post.category)
  );
  const priorityBusinessSlugs = [
    "defensa-it-ciberseguridad-pymes-argentina",
    "seo-sitios-en-orbita-seo-diseno-web-ia",
    "pagina-web-arg-diseno-web-pymes-emprendedores"
  ];
  const priorityBusinessPosts = priorityBusinessSlugs
    .map((slug) => latestPosts.find((post) => post.slug === slug))
    .filter((post): post is (typeof latestPosts)[number] => Boolean(post));
  const businessPosts = latestPosts.filter((post) =>
    ["negocios-digitales", "ciberseguridad", "seo", "diseno-web", "marketing-digital"].includes(post.category)
    && !priorityBusinessSlugs.includes(post.slug)
  );
  const recommendedPosts = latestPosts.filter((post) => post.featured || post.trending).slice(0, 6);

  return (
    <Container className="space-y-16 py-12">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      <header className="max-w-3xl">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-viral-yellow">Blog</p>
        <h1 className="text-balance text-4xl font-black text-white md:text-5xl">
          Blog de tendencias y noticias virales
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-300">
          Leé explicaciones rápidas sobre redes sociales, inteligencia artificial, memes,
          entretenimiento, tecnología, negocios digitales y actualidad liviana.
        </p>
      </header>

      <section>
        <SectionTitle
          description="Las notas más recientes del portal, organizadas para leer rápido y seguir cada tema."
          title="Últimas noticias"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          description="IA, apps, ciberseguridad, Google, diseño web, SEO y plataformas digitales en clave simple."
          title="Tecnología viral"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techPosts.slice(0, 6).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          description="Notas para PyMEs, emprendedores y equipos que miran SEO, seguridad, IA, Google Ads y WhatsApp."
          title="Negocios digitales"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...priorityBusinessPosts, ...businessPosts].slice(0, 6).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <SectionTitle
            description="Selección editorial de temas que conectan tendencias, tecnología y cultura digital."
            title="Notas recomendadas"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {recommendedPosts.slice(0, 4).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
        <MostRead posts={latestPosts} />
      </section>

      <section>
        <SectionTitle
          description="Filtrá por palabra clave, categoría o etiqueta dentro de todos los artículos publicados."
          title="Buscar en todo el blog"
        />
        <BlogExplorer categories={categories} posts={latestPosts} />
      </section>

      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Blog", path: "/blog" }])} />
    </Container>
  );
}
