import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="container mx-auto mt-16 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 pr-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4A4063] mb-4">Hola, soy la Dra. Nadia</h1>
        <p className="text-xl text-[#2D2D2D] mb-6">Médica clínica y terapeuta holística. Co-fundadora del Centro Médico Holístico Sananda.</p>
        <Button className="bg-[#7C9082] hover:bg-[#4A4063] text-white">Consulta Ahora</Button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image src="/nadia_doc.png" alt="Dra. Nadia Homsi" width={500} height={500} className="rounded-lg shadow-lg" />
      </div>
    </section>
  )
}
