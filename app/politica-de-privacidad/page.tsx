import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title: "Política de privacidad",
  description:
    "Información básica sobre el tratamiento de datos personales en Zona Viral, sitio informativo de Argentina.",
  path: "/politica-de-privacidad"
});

export default function PrivacyPage() {
  return (
    <Container className="py-12">
      <Breadcrumbs items={[{ label: "Política de privacidad", href: "/politica-de-privacidad" }]} />
      <article className="article-content mx-auto max-w-4xl">
        <h1 className="text-balance text-4xl font-black text-white md:text-5xl">Política de privacidad</h1>
        <p>
          Esta política describe de forma general cómo Zona Viral puede tratar información de los
          usuarios que visitan el sitio. El texto es informativo y no constituye asesoramiento legal
          profesional.
        </p>
        <h2>Datos que podríamos recibir</h2>
        <p>
          Podemos recibir datos enviados voluntariamente en formularios, como nombre, email y
          mensaje. También pueden registrarse datos técnicos habituales, como navegador, dispositivo
          y páginas visitadas, con fines estadísticos y de seguridad.
        </p>
        <h2>Finalidad</h2>
        <p>
          La información se utiliza para responder consultas, mejorar contenidos, analizar el
          funcionamiento del sitio y proteger la experiencia de navegación.
        </p>
        <h2>Derechos de los usuarios</h2>
        <p>
          Las personas usuarias pueden solicitar acceso, actualización o eliminación de datos que
          hayan enviado voluntariamente a través de los canales editoriales disponibles.
        </p>
      </article>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Política de privacidad", path: "/politica-de-privacidad" }
        ])}
      />
    </Container>
  );
}
