"use client";

import { Check, Copy, Facebook, Send, Twitter } from "lucide-react";
import { useState } from "react";

type ShareButtonsProps = {
  title: string;
  url: string;
};

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <a
        aria-label="Compartir por WhatsApp"
        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.08] text-white transition hover:border-viral-yellow hover:text-viral-yellow"
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
      </a>
      <a
        aria-label="Compartir en X"
        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.08] text-white transition hover:border-viral-yellow hover:text-viral-yellow"
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Twitter aria-hidden="true" className="h-4 w-4" />
      </a>
      <a
        aria-label="Compartir en Facebook"
        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.08] text-white transition hover:border-viral-yellow hover:text-viral-yellow"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Facebook aria-hidden="true" className="h-4 w-4" />
      </a>
      <button
        aria-label="Copiar enlace"
        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.08] text-white transition hover:border-viral-yellow hover:text-viral-yellow"
        onClick={copy}
        type="button"
      >
        {copied ? <Check aria-hidden="true" className="h-4 w-4" /> : <Copy aria-hidden="true" className="h-4 w-4" />}
      </button>
    </div>
  );
}
