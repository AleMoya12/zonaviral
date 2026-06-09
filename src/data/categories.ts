export type Category = {
  name: string;
  slug: string;
  description: string;
  color: string;
  gradient: string;
};

export const categories: Category[] = [
  {
    name: "Tendencias",
    slug: "tendencias",
    description: "Temas que se instalan fuerte en redes, buscadores y conversaciones digitales.",
    color: "#ec4899",
    gradient: "from-pink-500 to-orange-500"
  },
  {
    name: "Redes Sociales",
    slug: "redes-sociales",
    description: "Movimientos, formatos y debates que nacen en TikTok, Instagram, X y otras plataformas.",
    color: "#2563eb",
    gradient: "from-blue-600 to-cyan-400"
  },
  {
    name: "Inteligencia Artificial",
    slug: "inteligencia-artificial",
    description: "Herramientas, usos y cambios cotidianos impulsados por la IA.",
    color: "#7c3aed",
    gradient: "from-violet-600 to-fuchsia-500"
  },
  {
    name: "Tecnología",
    slug: "tecnologia",
    description: "Apps, dispositivos, seguridad digital y novedades útiles explicadas simple.",
    color: "#14b8a6",
    gradient: "from-teal-500 to-blue-500"
  },
  {
    name: "Ciberseguridad",
    slug: "ciberseguridad",
    description: "Riesgos digitales, phishing, ransomware, auditorías y protección para empresas.",
    color: "#0ea5e9",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    name: "Marketing Digital",
    slug: "marketing-digital",
    description: "SEO, Google Ads, IA, GEO y estrategias digitales que ayudan a crecer online.",
    color: "#ec4899",
    gradient: "from-pink-500 to-violet-600"
  },
  {
    name: "SEO",
    slug: "seo",
    description: "Posicionamiento web, SEO técnico, contenidos, búsquedas e inteligencia artificial.",
    color: "#facc15",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    name: "Diseño Web",
    slug: "diseno-web",
    description: "Sitios rápidos, modernos, responsive y orientados a convertir visitas en clientes.",
    color: "#f97316",
    gradient: "from-orange-500 to-pink-500"
  },
  {
    name: "Negocios Digitales",
    slug: "negocios-digitales",
    description: "Herramientas, seguridad, automatización y presencia online para PyMEs y emprendedores.",
    color: "#22c55e",
    gradient: "from-emerald-500 to-teal-400"
  },
  {
    name: "Famosos",
    slug: "famosos",
    description: "Historias de figuras públicas tratadas con contexto, cuidado y sin rumores vacíos.",
    color: "#f97316",
    gradient: "from-orange-500 to-yellow-400"
  },
  {
    name: "Entretenimiento",
    slug: "entretenimiento",
    description: "Series, programas, videos, streamers y conversaciones populares del momento.",
    color: "#facc15",
    gradient: "from-yellow-400 to-pink-500"
  },
  {
    name: "Deportes",
    slug: "deportes",
    description: "Fenómenos deportivos que cruzan la cancha, las redes y la cultura popular.",
    color: "#22c55e",
    gradient: "from-emerald-500 to-lime-400"
  },
  {
    name: "Música",
    slug: "musica",
    description: "Canciones, artistas ficticios de ejemplo, sonidos y tendencias que se comparten mucho.",
    color: "#a855f7",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Cine y Series",
    slug: "cine-y-series",
    description: "Estrenos, recomendaciones y conversaciones virales alrededor de la pantalla.",
    color: "#ef4444",
    gradient: "from-red-500 to-orange-500"
  },
  {
    name: "Memes",
    slug: "memes",
    description: "El origen, el sentido y el contexto de los memes que explotan en internet.",
    color: "#facc15",
    gradient: "from-yellow-300 to-orange-500"
  },
  {
    name: "Argentina",
    slug: "argentina",
    description: "Tendencias locales, conversaciones populares y cultura digital argentina.",
    color: "#38bdf8",
    gradient: "from-sky-400 to-blue-600"
  },
  {
    name: "Mundo Viral",
    slug: "mundo-viral",
    description: "Historias livianas, curiosas y populares que viajan rápido por Latinoamérica.",
    color: "#ec4899",
    gradient: "from-fuchsia-500 to-violet-600"
  }
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
