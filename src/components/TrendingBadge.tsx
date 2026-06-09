import { Flame } from "lucide-react";

export function TrendingBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-viral-yellow px-3 py-1 text-xs font-black uppercase tracking-wide text-viral-black">
      <Flame aria-hidden="true" className="h-3.5 w-3.5" />
      viral
    </span>
  );
}
