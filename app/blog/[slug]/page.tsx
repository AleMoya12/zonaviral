import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { PostCard } from "@/components/PostCard";
import { ShareButtons } from "@/components/ShareButtons";
import { getCategory } from "@/data/categories";
import { getPostBySlug, getRelatedPosts, posts } from "@/data/posts";
import { createMetadata } from "@/lib/seo";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { absoluteUrl, formatDate, slugify } from "@/lib/utils";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article"
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = getCategory(post.category);
  const related = getRelatedPosts(post);
  const url = absoluteUrl(`/blog/${post.slug}`);

  return (
    <Container className="py-12">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: category?.name ?? "Categoría", href: `/categoria/${post.category}` },
          { label: post.title, href: `/blog/${post.slug}` }
        ]}
      />

      <article>
        <header className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-viral-yellow">
            {category?.name ?? post.category}
          </p>
          <h1 className="text-balance text-4xl font-black leading-tight text-white md:text-6xl">
            {post.title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">{post.description}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400">
            <span>Publicado: {formatDate(post.publishedAt)}</span>
            <span>Actualizado: {formatDate(post.updatedAt)}</span>
            <span>{post.author}</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="mt-7 flex justify-center">
            <ShareButtons title={post.title} url={url} />
          </div>
        </header>

        <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-3xl border border-white/10">
          <Image
            alt={post.imageAlt}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            src={post.image}
          />
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="glass rounded-3xl p-6">
              <h2 className="text-lg font-black text-white">Índice de contenido</h2>
              <ol className="mt-4 grid gap-3 text-sm text-gray-300">
                {post.content.map((section) => (
                  <li key={section.heading}>
                    <a className="hover:text-viral-yellow" href={`#${slugify(section.heading)}`}>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="article-content">
            {post.content.map((section, index) => (
              <section id={slugify(section.heading)} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {index === 0 && post.externalLink ? (
                  <p>
                    {post.externalLink.prefix}{" "}
                    <a href={post.externalLink.url} rel="noopener noreferrer" target="_blank">
                      {post.externalLink.label}
                    </a>
                    {post.externalLink.suffix ?? ""}
                  </p>
                ) : null}
                {section.subheading ? <h3>{section.subheading}</h3> : null}
                {section.subparagraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            {post.internalLinks?.length ? (
              <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.055] p-6">
                <h2 className="!mt-0 !text-2xl">Enlaces internos</h2>
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-black">
                  {post.internalLinks.map((link) => (
                    <a
                      className="rounded-full bg-white/10 px-4 py-2 text-white hover:text-viral-yellow"
                      href={link.path}
                      key={link.path}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-gray-200" key={tag}>
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.055] p-6">
              <h2 className="!mt-0 !text-2xl">Seguir explorando</h2>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-black">
                <a className="rounded-full bg-white/10 px-4 py-2 text-white hover:text-viral-yellow" href="/blog">
                  Blog
                </a>
                <a className="rounded-full bg-white/10 px-4 py-2 text-white hover:text-viral-yellow" href="/tendencias">
                  Tendencias
                </a>
                <a className="rounded-full bg-white/10 px-4 py-2 text-white hover:text-viral-yellow" href={`/categoria/${post.category}`}>
                  {category?.name ?? "Categoría"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="mt-20">
        <h2 className="mb-6 text-3xl font-black text-white">Artículos relacionados</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((relatedPost) => (
            <PostCard key={relatedPost.slug} post={relatedPost} />
          ))}
        </div>
      </section>

      <JsonLd data={articleJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: category?.name ?? "Categoría", path: `/categoria/${post.category}` },
          { name: post.title, path: `/blog/${post.slug}` }
        ])}
      />
    </Container>
  );
}
