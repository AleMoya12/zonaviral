import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.22em] text-viral-yellow">404</p>
        <h1 className="mt-3 text-4xl font-black text-white">Página no encontrada</h1>
        <p className="mt-4 text-gray-300">El enlace puede haber cambiado o la nota ya no está disponible.</p>
        <Link className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-black text-viral-black" href="/">
          Volver al inicio
        </Link>
      </div>
    </Container>
  );
}
