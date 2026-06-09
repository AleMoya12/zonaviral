import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Aviso legal",
  description:
    "Aviso legal básico de Zona Viral, portal argentino de noticias virales, tendencias y cultura digital.",
  path: "/aviso-legal"
});

export default function LegalNoticePage() {
  return (
    <Container className="py-12">
      <Breadcrumbs items={[{ label: "Aviso legal", href: "/aviso-legal" }]} />
      <article className="article-content mx-auto max-w-4xl">
        <h1 className="text-balance text-4xl font-black text-white md:text-5xl">Aviso legal</h1>
        <p>
          Zona Viral es un sitio informativo y de entretenimiento orientado a tendencias, cultura
          digital y temas populares de Argentina y Latinoamérica. Este aviso es una base general y no
          constituye asesoramiento legal profesional.
        </p>
        <h2>Contenido editorial</h2>
        <p>
          Los artículos publicados son originales, ficticios cuando se indican como ejemplos y
          creados para explicar fenómenos virales sin difundir acusaciones reales sin contexto.
        </p>
        <h2>Propiedad intelectual</h2>
        <p>
          La marca, textos, diseño y estructura del sitio pertenecen a Zona Viral, salvo indicación
          expresa en contrario.
        </p>
        <h2>Consultas editoriales</h2>
        <p>
          Para consultas o solicitudes vinculadas al sitio, se pueden utilizar los canales
          editoriales que Zona Viral habilite públicamente.
        </p>
      </article>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Aviso legal", path: "/aviso-legal" }])}
      />
    </Container>
  );
}
