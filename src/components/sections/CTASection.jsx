import { Button } from '@/components/ui/button'

export default function CTASection () {
  return (
    <section id="contacto" className="container mx-auto py-16 md:py-24 lg:py-32 text-center">
      <h2 className="text-5xl font-bold text-center text-secondary-color mb-8 font-handwritten">¿List@ para comenzar tu viaje?</h2>
      <p className="text-xl text-[var(--text-dark)] mb-8">Descubre el poder de la medicina holística y transforma tu vida.</p>
      <a href="https://wa.me/59164903531?text=Hola%20Dra.%20Nadia,%20quisiera%20saber%20m%C3%A1s%20acerca%20de..." target="_blank" rel="noopener noreferrer" className="block mx-auto w-fit">
        <Button className="bg-[var(--secondary-color)] hover:bg-primary text-white text-lg px-8 py-3">Agenda tu Consulta</Button> </a>
    </section>
  )
}
