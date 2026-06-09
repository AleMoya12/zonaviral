import Link from "next/link";
import type { Post } from "@/data/posts";
import { getCategoryName } from "@/data/posts";

export function MostRead({ posts }: { posts: Post[] }) {
  return (
    <aside className="glass rounded-3xl p-6">
      <h2 className="text-2xl font-black text-white">Lo más leído</h2>
      <ol className="mt-6 grid gap-5">
        {posts.slice(0, 5).map((post, index) => (
          <li className="grid grid-cols-[auto_1fr] gap-4" key={post.slug}>
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-sm font-black text-viral-black">
              {index + 1}
            </span>
            <div>
              <Link className="font-black leading-snug text-white transition hover:text-viral-yellow" href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
              <p className="mt-1 text-xs font-bold uppercase text-gray-400">{getCategoryName(post.category)}</p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}
