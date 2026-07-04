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
    color: "#ea580c",
    gradient: "from-red-700 to-orange-500"
  },
  {
    name: "Redes Sociales",
    slug: "redes-sociales",
    description: "Movimientos, formatos y debates que nacen en TikTok, Instagram, X y otras plataformas.",
    color: "#c2410c",
    gradient: "from-orange-700 to-amber-400"
  },
  {
    name: "Inteligencia Artificial",
    slug: "inteligencia-artificial",
    description: "Herramientas, usos y cambios cotidianos impulsados por la IA.",
    color: "#b45309",
    gradient: "from-amber-600 to-orange-400"
  },
  {
    name: "Tecnología",
    slug: "tecnologia",
    description: "Apps, dispositivos, seguridad digital y novedades útiles explicadas simple.",
    color: "#fb923c",
    gradient: "from-orange-500 to-yellow-400"
  },
  {
    name: "Ciberseguridad",
    slug: "ciberseguridad",
    description: "Riesgos digitales, phishing, ransomware, auditorías y protección para empresas.",
    color: "#dc2626",
    gradient: "from-red-700 to-orange-400"
  },
  {
    name: "Marketing Digital",
    slug: "marketing-digital",
    description: "SEO, Google Ads, IA, GEO y estrategias digitales que ayudan a crecer online.",
    color: "#f97316",
    gradient: "from-orange-600 to-amber-400"
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
    color: "#fb923c",
    gradient: "from-orange-500 to-amber-300"
  },
  {
    name: "Negocios Digitales",
    slug: "negocios-digitales",
    description: "Herramientas, seguridad, automatización y presencia online para PyMEs y emprendedores.",
    color: "#f59e0b",
    gradient: "from-amber-500 to-yellow-300"
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
    color: "#f59e0b",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    name: "Deportes",
    slug: "deportes",
    description: "Fenómenos deportivos que cruzan la cancha, las redes y la cultura popular.",
    color: "#d97706",
    gradient: "from-orange-600 to-yellow-400"
  },
  {
    name: "Música",
    slug: "musica",
    description: "Canciones, artistas ficticios de ejemplo, sonidos y tendencias que se comparten mucho.",
    color: "#ea580c",
    gradient: "from-red-600 to-orange-400"
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
    color: "#f97316",
    gradient: "from-orange-500 to-yellow-400"
  },
  {
    name: "Mundo Viral",
    slug: "mundo-viral",
    description: "Historias livianas, curiosas y populares que viajan rápido por Latinoamérica.",
    color: "#c2410c",
    gradient: "from-red-700 to-amber-500"
  }
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
