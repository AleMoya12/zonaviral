import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { posts } from "@/data/posts";
import { siteUrl } from "@/lib/utils";

const staticPages = [
  "",
  "/blog",
  "/tendencias",
  "/categorias",
  "/sobre-nosotros",
  "/politica-de-privacidad",
  "/terminos-y-condiciones",
  "/politica-de-cookies",
  "/aviso-legal"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticUrls = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7
  }));

  const postUrls = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly" as const,
    priority: post.featured ? 0.9 : 0.8
  }));

  const categoryUrls = categories.map((category) => ({
    url: `${siteUrl}/categoria/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75
  }));

  return [...staticUrls, ...categoryUrls, ...postUrls];
}
