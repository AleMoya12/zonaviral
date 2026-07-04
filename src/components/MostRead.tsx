import Link from "next/link";
import type { Post } from "@/data/posts";
import { getCategoryName } from "@/data/posts";

export function MostRead({ posts }: { posts: Post[] }) {
  return (
    <aside className="glass rounded-[2rem] p-6">
      <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-orange-300">Ranking</p>
      <h2 className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-stone-50">
        Lo mas leido
      </h2>
      <ol className="mt-6 grid gap-5">
        {posts.slice(0, 5).map((post, index) => (
          <li
            className="grid grid-cols-[auto_1fr] gap-4 border-b border-white/8 pb-5 last:border-b-0 last:pb-0"
            key={post.slug}
          >
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-orange-400 to-amber-300 text-sm font-black text-stone-950">
              {index + 1}
            </span>
            <div>
              <Link
                className="font-display font-black leading-snug text-stone-50 transition hover:text-orange-300"
                href={`/blog/${post.slug}`}
              >
                {post.title}
              </Link>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-stone-400">
                {getCategoryName(post.category)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}
