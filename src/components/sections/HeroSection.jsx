import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HeroSection () {
  return (
    <section className="container flex flex-col gap-2 mx-auto h-[90vh]">
      <div className="flex flex-col md:flex-row items-center flex-1">
        <div className="md:w-1/2 h-fit">
          <Image
            src="/logo colores.png"
            alt="Dra. Nadia Homsi Logo Colores"
            width={600}
            height={300}
            className="mb-8"
          />
          <a href="https://wa.me/59164903531?text=Hola%20Dra.%20Nadia,%20quisiera%20saber%20m%C3%A1s%20acerca%20de..." target="_blank" rel="noopener noreferrer" className="block mx-auto w-fit">
            <Button className="bg-[#7C9082] hover:bg-[#4A4063] text-white">Consulta Ahora</Button>
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center h-[80%]">
          <Image src="/nadia_doc.png" alt="Dra. Nadia Homsi" width={500} height={500} className="rounded-3xl shadow-2xl  w-auto h-full float-right" />
        </div>
      </div>
      <p className="text-xl text-center text-[#2D2D2D] h-[20%] mb-6">Médica clínica y terapeuta holística. <br /> Co-fundadora del Centro Médico Holístico Sananda.</p>
    </section>
  )
}
