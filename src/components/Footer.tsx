import Link from "next/link";
import { Container } from "./Container";

const footerColumns = [
  {
    title: "Secciones",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Tendencias", href: "/tendencias" },
      { label: "Blog", href: "/blog" },
      { label: "Categorías", href: "/categorias" },
      { label: "Tecnología", href: "/categoria/tecnologia" },
      { label: "Negocios digitales", href: "/categoria/negocios-digitales" }
    ]
  },
  {
    title: "Categorías",
    links: [
      { label: "Inteligencia Artificial", href: "/categoria/inteligencia-artificial" },
      { label: "Redes Sociales", href: "/categoria/redes-sociales" },
      { label: "Ciberseguridad", href: "/categoria/ciberseguridad" },
      { label: "SEO", href: "/categoria/seo" },
      { label: "Diseño Web", href: "/categoria/diseno-web" },
      { label: "Entretenimiento", href: "/categoria/entretenimiento" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidad", href: "/politica-de-privacidad" },
      { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
      { label: "Política de Cookies", href: "/politica-de-cookies" },
      { label: "Aviso Legal", href: "/aviso-legal" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/25">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.35fr_2fr]">
        <div>
          <Link className="flex items-center gap-3" href="/">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-viral-pink via-viral-purple to-viral-blue font-black text-white">
              ZV
            </span>
            <span className="text-xl font-black text-white">Zona Viral</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-gray-300">
            Portal de tendencias, tecnología, redes sociales, entretenimiento y cultura digital.
            Explicamos de forma simple los temas que más se hablan en internet.
          </p>
          <p className="mt-5 max-w-md rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-gray-300">
            Zona Viral publica contenidos informativos, explicativos y de entretenimiento sobre
            temas populares en internet. Verificamos la información disponible y evitamos difundir
            rumores sin contexto.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <nav aria-label={column.title} key={column.title}>
              <h2 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-white">
                {column.title}
              </h2>
              <div className="grid gap-3">
                {column.links.map((link) => (
                  <Link
                    className="text-sm font-semibold text-gray-300 transition hover:text-viral-yellow"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          ))}
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Zona Viral. Todos los derechos reservados.</p>
        <p>
          Sitio web desarrollado por{" "}
          <a
            className="font-bold text-gray-200 transition hover:text-viral-yellow"
            href="https://www.paginawebarg.com.ar/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Página Web Arg
          </a>
        </p>
      </Container>
    </footer>
  );
}
