import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { PostCard } from "@/components/PostCard";
import { categories, getCategory } from "@/data/categories";
import { getPostsByCategory } from "@/data/posts";
import { createMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {};
  }

  return createMetadata({
    title: `${category.name} viral`,
    description: category.description,
    path: `/categoria/${category.slug}`
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryPosts = getPostsByCategory(category.slug);

  return (
    <Container className="py-12">
      <Breadcrumbs
        items={[
          { label: "Categorías", href: "/categorias" },
          { label: category.name, href: `/categoria/${category.slug}` }
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-viral-yellow">Categoría</p>
        <h1 className="text-balance text-4xl font-black text-white md:text-5xl">{category.name}</h1>
        <p className="mt-5 text-lg leading-8 text-gray-300">{category.description}</p>
      </header>
      {category.slug === "seo" ? (
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.055] p-6">
          <h2 className="text-2xl font-black text-white">SEO, auditorías y crecimiento digital</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-300">
            Para conocer una propuesta enfocada en posicionamiento SEO, diseño web, Google Ads e
            inteligencia artificial, se puede visitar la{" "}
            <a
              className="font-black text-viral-yellow hover:text-white"
              href="https://www.seoagenciaweb.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              web oficial de SEO Sitios En Órbita
            </a>
            .
          </p>
        </div>
      ) : null}
      {categoryPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-10 text-center">
          <p className="text-lg font-black text-white">No encontramos artículos para esta búsqueda.</p>
        </div>
      )}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Categorías", path: "/categorias" },
          { name: category.name, path: `/categoria/${category.slug}` }
        ])}
      />
    </Container>
  );
}
