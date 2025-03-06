import Image from 'next/image'

export default function AboutSection () {
  return (
    <section id="sobre-mi" className="bg-white py-20 mt-16">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-secondary mb-8 font-handwritten">Mi Camino de Transformación</h2>
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/nadia_yoga.jpg"
                alt="Dra. Nadia meditando"
                width={300}
                height={300}
                className="rounded-lg shadow-lg transition-transform duration-700 scale-110 hover:scale-100"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 lg:pl-16 max-w-lg">
            <p className="text-xl text-[var(--text-dark)] mb-4">
              Hace unos años tuve una crisis existencial en mi vida, donde me di cuenta que tenía problemas de autoestima, relaciones toxicas, problemas de salud como faringitis y amigdalitis a repetición, no me sentía con un propósito ejerciendo la medicina.
            </p>
            <p className="text-xl text-[var(--text-dark)] mb-4">
              Sentía una profunda sensación de vacío y desconexión y gracias a la herramienta de la meditación comencé un camino de autoconocimiento y transformación que continua hasta el día de hoy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
