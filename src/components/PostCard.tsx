import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Post } from "@/data/posts";
import { getCategoryName } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { TrendingBadge } from "./TrendingBadge";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="glass group overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-white/25">
      <Link className="block" href={`/blog/${post.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            alt={post.imageAlt}
            className="object-cover transition duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={post.image}
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <Link
            className="rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase text-viral-yellow"
            href={`/categoria/${post.category}`}
          >
            {getCategoryName(post.category)}
          </Link>
          {post.trending ? <TrendingBadge /> : null}
        </div>
        <h3 className="text-xl font-black leading-tight text-white">
          <Link className="transition hover:text-viral-yellow" href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-300">{post.description}</p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-gray-400">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock aria-hidden="true" className="h-4 w-4" />
            {post.readingTime}
          </span>
        </div>
        <Link
          className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white transition hover:text-viral-yellow"
          href={`/blog/${post.slug}`}
        >
          Leer más
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
