import Image from 'next/image'

export default function AboutSection () {
  return (
    <section id="sobre-mi" className="bg-white py-20 mt-16">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-secondary mb-8 font-handwritten">Un poco sobre mi</h2>
        <div className="flex justify-center mb-6">
          <p className="text-lg text-xl text-[var(--text-dark)] text-justify mb-12">
            Soy Co fundadora del Centro Terapéutico Yeshua Sananda, un espacio donde encontraras medicina convencional integrada con tratamientos alternativos como electrobiomagnetismo, musicoterapia, bioneuroemoción, biodecodificación, danza terapia, terapias energéticas, y muchas herramientas más que combinamos según la necesidad del paciente, para lograr una sanación real profunda y duradera.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          <div className="md:w-1/3 mt-8 md:mt-0 flex items-center justify-center">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/nadia_yoga.jpg"
                alt="Dra. Nadia meditando"
                width={400}
                height={400}
                className="rounded-lg shadow-lg transition-transform duration-700 scale-110 hover:scale-100"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12 lg:pl-16">
            <p className="text-3xl text-[var(--secondary-color)] font-bold mb-4">
              Médica y Terapeuta holística </p>
            <p className="text-xl text-[var(--text-dark)] mb-4 text-justify">
              Estoy formada como Medica Cirujana de la Universidad Mayor de San Simón, graduada como medica convencional, continúe mi camino en Argentina con la idea de realizar Neurología como especialidad, durante este proceso comencé a descubrir el mundo de terapias alternativas, que sin la necesidad de tratamientos farmacológicos que inevitablemente dañan nuestro sistema, comencé a mejorar mi vida en todos los ámbitos. Comencé a fortalecer mi autoestima, mi salud mejoró, mis relaciones personales mejoraron, me sentía con más vitalidad y propósito, lo cual me llevo a renunciar al Hospital donde me encontraba, ya que en ese lugar no podía compartir todo lo que estaba aprendiendo. Es por eso que decidí ser parte del Centro Sananda y poner al servicio todas las herramientas que me ayudaron en mi propio proceso de transformación, para acompañar a los pacientes desde el corazón con empatía y amor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
