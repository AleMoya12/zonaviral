import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Migas de pan" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-300">
      <Link aria-label="Inicio" className="inline-flex items-center gap-1 hover:text-viral-yellow" href="/">
        <Home aria-hidden="true" className="h-4 w-4" />
        Inicio
      </Link>
      {items.map((item, index) => (
        <span className="inline-flex items-center gap-2" key={item.href}>
          <ChevronRight aria-hidden="true" className="h-4 w-4 text-gray-500" />
          {index === items.length - 1 ? (
            <span className="font-semibold text-white">{item.label}</span>
          ) : (
            <Link className="hover:text-viral-yellow" href={item.href}>
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
