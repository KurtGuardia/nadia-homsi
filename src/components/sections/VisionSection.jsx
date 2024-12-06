import Image from 'next/image'

export default function VisionSection() {
  return (
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
            <Image src="/nadia_playa.jpg" alt="Dra. Nadia en la playa" width={400} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
