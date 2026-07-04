import Link from "next/link";
import { Container } from "./Container";

const footerColumns = [
  {
    title: "Secciones",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Tendencias", href: "/tendencias" },
      { label: "Blog", href: "/blog" },
      { label: "Categorias", href: "/categorias" },
      { label: "Tecnologia", href: "/categoria/tecnologia" },
      { label: "Negocios digitales", href: "/categoria/negocios-digitales" }
    ]
  },
  {
    title: "Categorias",
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
      { label: "Politica de Privacidad", href: "/politica-de-privacidad" },
      { label: "Terminos y Condiciones", href: "/terminos-y-condiciones" },
      { label: "Politica de Cookies", href: "/politica-de-cookies" },
      { label: "Aviso Legal", href: "/aviso-legal" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/20">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.35fr_2fr]">
        <div>
          <Link className="flex items-center gap-3" href="/">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-red-700 via-orange-500 to-amber-300 font-black text-stone-950">
              ZV
            </span>
            <span className="font-display text-xl font-black tracking-[-0.03em] text-stone-50">
              Zona Viral
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-stone-300/90">
            Portal de tendencias, tecnologia, redes sociales, entretenimiento y cultura digital.
            Explicamos de forma simple los temas que mas se hablan en internet.
          </p>
          <p className="mt-5 max-w-md rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-stone-300/90">
            Zona Viral publica contenidos informativos, explicativos y de entretenimiento sobre
            temas populares en internet. Verificamos la informacion disponible y evitamos difundir
            rumores sin contexto.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <nav aria-label={column.title} key={column.title}>
              <h2 className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-stone-50">
                {column.title}
              </h2>
              <div className="grid gap-3">
                {column.links.map((link) => (
                  <Link
                    className="text-sm font-medium text-stone-300 transition hover:text-orange-300"
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
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Zona Viral. Todos los derechos reservados.</p>
        <p>
          Sitio web desarrollado por{" "}
          <a
            className="font-bold text-stone-200 transition hover:text-orange-300"
            href="https://www.paginawebarg.com.ar/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Pagina Web Arg
          </a>
        </p>
      </Container>
    </footer>
  );
}
