import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Términos y condiciones",
  description:
    "Condiciones básicas de uso para navegar Zona Viral, portal informativo de tendencias y cultura digital.",
  path: "/terminos-y-condiciones"
});

export default function TermsPage() {
  return (
    <Container className="py-12">
      <Breadcrumbs items={[{ label: "Términos y condiciones", href: "/terminos-y-condiciones" }]} />
      <article className="article-content mx-auto max-w-4xl">
        <h1 className="text-balance text-4xl font-black text-white md:text-5xl">Términos y condiciones</h1>
        <p>
          Al navegar Zona Viral aceptás estas condiciones generales de uso. Este texto es una base
          informativa para un sitio de contenidos y no reemplaza asesoramiento legal profesional.
        </p>
        <h2>Uso del contenido</h2>
        <p>
          Los contenidos se publican con fines informativos, explicativos y de entretenimiento. No
          deben interpretarse como asesoramiento profesional, legal, financiero o médico.
        </p>
        <h2>Responsabilidad editorial</h2>
        <p>
          Trabajamos para publicar información clara y contextualizada. Aun así, los temas virales
          pueden evolucionar rápidamente y parte de la información puede actualizarse con el tiempo.
        </p>
        <h2>Enlaces externos</h2>
        <p>
          El sitio puede incluir enlaces a recursos externos. Zona Viral no controla el contenido ni
          las políticas de terceros.
        </p>
      </article>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Términos y condiciones", path: "/terminos-y-condiciones" }
        ])}
      />
    </Container>
  );
}
