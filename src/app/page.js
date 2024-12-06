import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { LeafIcon, HeartPulseIcon, BrainIcon, SunIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Navigation */}
      <nav className="bg-[#7C9082] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image src="/logo blanco.png" alt="Dra. Nadia Homsi Logo" width={200} height={70} />
          <div className="space-x-4">
            <Button variant="ghost" className="text-white hover:text-[#4A4063]">Inicio</Button>
            <Button variant="ghost" className="text-white hover:text-[#4A4063]">Sobre Mí</Button>
            <Button variant="ghost" className="text-white hover:text-[#4A4063]">Servicios</Button>
            <Button variant="ghost" className="text-white hover:text-[#4A4063]">Contacto</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto mt-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 pr-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A4063] mb-4">Hola, soy la Dra. Nadia</h1>
          <p className="text-xl text-[#2D2D2D] mb-6">Médica clínica y terapeuta holística. Co-fundadora del Centro Médico Holístico Sananda.</p>
          <Button className="bg-[#7C9082] hover:bg-[#4A4063] text-white">Consulta Ahora</Button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image src="/artwork.png" alt="Dra. Nadia Homsi" width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 mt-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#4A4063] mb-8">Mi Camino de Transformación</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8">
              <p className="text-[#2D2D2D] mb-4">
                Hace unos años tuve una crisis existencial en mi vida, donde me di cuenta que tenía problemas de autoestima, relaciones toxicas, problemas de salud como faringitis y amigdalitis a repetición, no me sentía con un propósito ejerciendo la medicina.
              </p>
              <p className="text-[#2D2D2D] mb-4">
                Sentía una profunda sensación de vacío y desconexión y gracias a la herramienta de la meditación comencé un camino de autoconocimiento y transformación que continua hasta el día de hoy.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image src="/IMG_20230619_205237_892.jpg" alt="Dra. Nadia meditando" width={400} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center text-[#4A4063] mb-8">Mi Metodología</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-[#F5F1E8] border-[#7C9082]">
            <CardContent className="flex flex-col items-center p-6">
              <LeafIcon className="w-12 h-12 text-[#7C9082] mb-4" />
              <h3 className="text-xl font-semibold text-[#4A4063] mb-2">Bioneuroemoción</h3>
              <p className="text-center text-[#2D2D2D]">Integración de emociones y biología</p>
            </CardContent>
          </Card>
          <Card className="bg-[#F5F1E8] border-[#7C9082]">
            <CardContent className="flex flex-col items-center p-6">
              <HeartPulseIcon className="w-12 h-12 text-[#7C9082] mb-4" />
              <h3 className="text-xl font-semibold text-[#4A4063] mb-2">Psiconeuroinmunología</h3>
              <p className="text-center text-[#2D2D2D]">Conexión mente-cuerpo-sistema inmune</p>
            </CardContent>
          </Card>
          <Card className="bg-[#F5F1E8] border-[#7C9082]">
            <CardContent className="flex flex-col items-center p-6">
              <BrainIcon className="w-12 h-12 text-[#7C9082] mb-4" />
              <h3 className="text-xl font-semibold text-[#4A4063] mb-2">Reprogramación de creencias</h3>
              <p className="text-center text-[#2D2D2D]">Transformación de patrones mentales</p>
            </CardContent>
          </Card>
          <Card className="bg-[#F5F1E8] border-[#7C9082]">
            <CardContent className="flex flex-col items-center p-6">
              <SunIcon className="w-12 h-12 text-[#7C9082] mb-4" />
              <h3 className="text-xl font-semibold text-[#4A4063] mb-2">Terapias energéticas</h3>
              <p className="text-center text-[#2D2D2D]">Equilibrio y sanación energética</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#7C9082] py-16 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Mi Visión</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8">
              <p className="mb-4">
                Mi visión es salir del paradigma de la separación, dejar de ver al cuerpo separado de la mente o de las emociones, como nos dice la medicina convencional.
              </p>
              <p>
                Para las enfermedades crónicas, necesitamos una solución real que vaya más allá de la medicación de por vida. Debemos reconocer que no somos solo un cuerpo físico.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image src="/IMG_20231214_094124.jpg" alt="Dra. Nadia en la playa" width={400} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold text-[#4A4063] mb-4">¿Listo para comenzar tu viaje de sanación?</h2>
        <p className="text-xl text-[#2D2D2D] mb-8">Descubre el poder de la medicina holística y transforma tu vida.</p>
        <Button className="bg-[#4A4063] hover:bg-[#7C9082] text-white text-lg px-8 py-3">Agenda tu Consulta</Button>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A4063] text-white py-8">
        <div className="container mx-auto text-center">
          <Image src="/logo blanco.png" alt="Dra. Nadia Homsi Logo" width={180} height={60} className="mx-auto mb-4" />
          <p>&copy; 2024 Dra. Nadia Homsi. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}