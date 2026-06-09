import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryCard } from "@/components/CategoryCard";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { categories } from "@/data/categories";
import { posts } from "@/data/posts";
import { createMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Categorías virales",
  description:
    "Explorá noticias y tendencias por categorías: redes sociales, IA, tecnología, deportes, entretenimiento, música y memes.",
  path: "/categorias"
});

export default function CategoriesPage() {
  return (
    <Container className="py-12">
      <Breadcrumbs items={[{ label: "Categorías", href: "/categorias" }]} />
      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-viral-yellow">Explorar</p>
        <h1 className="text-balance text-4xl font-black text-white md:text-5xl">Categorías virales</h1>
        <p className="mt-5 text-lg leading-8 text-gray-300">
          Navegá por secciones para encontrar tendencias, tecnología, deportes, entretenimiento,
          música, memes y cultura digital.
        </p>
      </header>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            category={category}
            count={posts.filter((post) => post.category === category.slug).length}
            key={category.slug}
          />
        ))}
      </div>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Categorías", path: "/categorias" }])}
      />
    </Container>
  );
}
