import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Sobre nosotros",
  description:
    "Conocé la propuesta editorial de Zona Viral, un portal argentino de tendencias, cultura digital y temas populares.",
  path: "/sobre-nosotros"
});

export default function AboutPage() {
  return (
    <Container className="py-12">
      <Breadcrumbs items={[{ label: "Sobre nosotros", href: "/sobre-nosotros" }]} />
      <article className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-viral-yellow">Institucional</p>
        <h1 className="text-balance text-4xl font-black text-white md:text-5xl">Sobre Zona Viral</h1>
        <div className="article-content mt-8">
          <p>
            En Zona Viral buscamos explicar de manera simple qué temas se están volviendo
            tendencia, por qué se hablan en redes y cuál es el contexto detrás de cada historia.
          </p>
          <h2>Nuestra mirada editorial</h2>
          <p>
            Publicamos contenidos informativos, explicativos y de entretenimiento sobre temas
            populares en internet. Verificamos la información disponible y evitamos difundir rumores
            sin contexto.
          </p>
          <h2>Qué cubrimos</h2>
          <p>
            Tendencias del día, redes sociales, inteligencia artificial, tecnología, entretenimiento,
            deportes, música, cine, series, memes, Argentina y mundo viral.
          </p>
        </div>
      </article>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Sobre nosotros", path: "/sobre-nosotros" }])}
      />
    </Container>
  );
}
