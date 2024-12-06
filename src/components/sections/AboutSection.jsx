import Image from 'next/image'

export default function AboutSection() {
  return (
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
            <Image src="/nadia_yoga.jpg" alt="Dra. Nadia meditando" width={400} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
