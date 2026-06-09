import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/data/posts";
import { getCategoryName } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { TrendingBadge } from "./TrendingBadge";

export function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <article className="glass grid overflow-hidden rounded-3xl lg:grid-cols-[1.1fr_0.9fr]">
      <Link className="relative min-h-72 overflow-hidden lg:min-h-full" href={`/blog/${post.slug}`}>
        <Image
          alt={post.imageAlt}
          className="object-cover transition duration-500 hover:scale-105"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          src={post.image}
        />
      </Link>
      <div className="p-7 md:p-10">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <Link
            className="rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase text-viral-yellow"
            href={`/categoria/${post.category}`}
          >
            {getCategoryName(post.category)}
          </Link>
          {post.trending ? <TrendingBadge /> : null}
        </div>
        <h2 className="text-balance text-3xl font-black leading-tight text-white md:text-4xl">
          <Link className="transition hover:text-viral-yellow" href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <p className="mt-5 text-base leading-8 text-gray-300">{post.description}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-400">
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readingTime}</span>
        </div>
        <Link
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-viral-black transition hover:bg-viral-yellow"
          href={`/blog/${post.slug}`}
        >
          Leer artículo
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
