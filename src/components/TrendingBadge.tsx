import { Flame } from "lucide-react";

export function TrendingBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-orange-300/25 bg-orange-400/12 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-orange-200">
      <Flame aria-hidden="true" className="h-3.5 w-3.5" />
      En alza
    </span>
  );
}
