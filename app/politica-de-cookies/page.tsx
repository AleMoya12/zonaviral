import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Política de cookies",
  description:
    "Información básica sobre el posible uso de cookies técnicas, analíticas y de preferencias en Zona Viral.",
  path: "/politica-de-cookies"
});

export default function CookiesPage() {
  return (
    <Container className="py-12">
      <Breadcrumbs items={[{ label: "Política de cookies", href: "/politica-de-cookies" }]} />
      <article className="article-content mx-auto max-w-4xl">
        <h1 className="text-balance text-4xl font-black text-white md:text-5xl">Política de cookies</h1>
        <p>
          Zona Viral puede usar cookies o tecnologías similares para mejorar la navegación, recordar
          preferencias y analizar el rendimiento del sitio. Este texto es informativo y no constituye
          asesoramiento legal profesional.
        </p>
        <h2>Qué son las cookies</h2>
        <p>
          Son pequeños archivos que el navegador puede guardar para reconocer preferencias o medir
          interacciones técnicas con una página web.
        </p>
        <h2>Tipos posibles</h2>
        <p>
          Podemos utilizar cookies técnicas necesarias, cookies de análisis para entender el uso del
          sitio y cookies de preferencias si se agregan funciones personalizadas.
        </p>
        <h2>Gestión</h2>
        <p>
          Cada usuario puede configurar, bloquear o eliminar cookies desde las opciones de su
          navegador.
        </p>
      </article>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Política de cookies", path: "/politica-de-cookies" }
        ])}
      />
    </Container>
  );
}
