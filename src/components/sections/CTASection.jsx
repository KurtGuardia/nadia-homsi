import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section className="container mx-auto py-16 text-center">
      <h2 className="text-3xl font-bold text-[#4A4063] mb-4">¿Listo para comenzar tu viaje de sanación?</h2>
      <p className="text-xl text-[#2D2D2D] mb-8">Descubre el poder de la medicina holística y transforma tu vida.</p>
      <Button className="bg-[#4A4063] hover:bg-[#7C9082] text-white text-lg px-8 py-3">Agenda tu Consulta</Button>
    </section>
  )
}
