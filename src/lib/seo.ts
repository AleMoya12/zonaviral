import type { Metadata } from "next";
import { absoluteUrl, siteName, siteUrl } from "./utils";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/og-image.jpg",
  type = "website"
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "es_AR",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteName}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zona Viral | Tendencias, noticias virales y cultura digital",
    template: "%s | Zona Viral"
  },
  description:
    "Portal de tendencias, noticias virales, redes sociales, tecnología, entretenimiento, deportes, memes e inteligencia artificial.",
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "Zona Viral | Tendencias, noticias virales y cultura digital",
    description:
      "Portal de tendencias, noticias virales, redes sociales, tecnología, entretenimiento, deportes, memes e inteligencia artificial.",
    url: siteUrl,
    siteName,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zona Viral"
      }
    ]
  },
  twitter: {
    card: "summary_large_image"
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  robots: {
    index: true,
    follow: true
  }
};
