import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/categories";

export function CategoryCard({ category, count }: { category: Category; count?: number }) {
  return (
    <Link
      className="group block rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-orange-300/25"
      href={`/categoria/${category.slug}`}
    >
      <span
        aria-hidden="true"
        className={`mb-6 block h-[3px] w-24 rounded-full bg-gradient-to-r ${category.gradient}`}
      />
      <h3 className="font-display text-xl font-black tracking-[-0.02em] text-stone-50">{category.name}</h3>
      <p className="mt-3 min-h-20 text-sm leading-7 text-stone-300/90">{category.description}</p>
      <div className="mt-5 flex items-center justify-between gap-3 text-sm font-extrabold text-orange-300">
        <span>{typeof count === "number" ? `${count} articulos` : "Explorar"}</span>
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
