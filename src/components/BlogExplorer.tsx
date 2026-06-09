"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Category } from "@/data/categories";
import type { Post } from "@/data/posts";
import { PostCard } from "./PostCard";

type BlogExplorerProps = {
  posts: Post[];
  categories: Category[];
};

export function BlogExplorer({ posts, categories }: BlogExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("todas");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory = category === "todas" || post.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [post.title, post.description, post.category, ...post.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, posts, query]);

  return (
    <div>
      <div className="glass mb-8 grid gap-4 rounded-3xl p-4 md:grid-cols-[1fr_260px]">
        <label className="relative">
          <span className="sr-only">Buscar artículos</span>
          <Search aria-hidden="true" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.08] pl-12 pr-4 text-white outline-none transition placeholder:text-gray-400 focus:border-viral-yellow"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por tema, tag o título"
            value={query}
          />
        </label>
        <label>
          <span className="sr-only">Filtrar por categoría</span>
          <select
            className="h-14 w-full rounded-2xl border border-white/10 bg-viral-panel px-4 text-white outline-none transition focus:border-viral-yellow"
            onChange={(event) => setCategory(event.target.value)}
            value={category}
          >
            <option value="todas">Todas las categorías</option>
            {categories.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-10 text-center">
          <p className="text-lg font-black text-white">No encontramos artículos para esta búsqueda.</p>
        </div>
      )}
    </div>
  );
}
