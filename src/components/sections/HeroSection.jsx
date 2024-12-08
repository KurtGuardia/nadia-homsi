import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HeroSection () {
  return (
    <section className="container mx-auto mt-16 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 pr-8">
        <Image
          src="/logo colores.png"
          alt="Dra. Nadia Homsi Logo Colores"
          width={600}
          height={300}
          className="mb-8"
        />
        <p className="text-xl text-[#2D2D2D] mb-6 font-sans">Médica clínica y terapeuta holística. Co-fundadora del Centro Médico Holístico Sananda.</p>
        <a href="https://wa.me/59164903531?text=Hola%20Dra.%20Nadia,%20quisiera%20saber%20m%C3%A1s%20acerca%20de..." target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#7C9082] hover:bg-[#4A4063] text-white font-sans">Consulta Ahora</Button>
        </a>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image src="/nadia_doc.png" alt="Dra. Nadia Homsi" width={500} height={500} className="rounded-lg shadow-lg" />
      </div>
    </section>
  )
}
