import Image from 'next/image'

export default function VisionSection() {
  return (
    <section className="bg-[#7C9082] py-16 md:py-24 lg:py-32 text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#F5F1E8] mb-8 font-handwritten">Mi Visión</h2>
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          <div className="md:w-1/2 md:pr-12 lg:pr-16 max-w-lg">
            <p className="text-xl mb-4">
              Mi visión es crear un espacio donde la medicina convencional y las terapias holísticas se unan para ofrecer una atención integral y personalizada.
            </p>
            <p className="text-xl mb-4">
              Creo en un enfoque que no solo trata los síntomas, sino que busca la raíz emocional y energética de cada condición, promoviendo una verdadera sanación desde adentro hacia afuera.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
            <div className="overflow-hidden rounded-lg">
              <Image 
                src="/nadia_playa.jpg" 
                alt="Dra. Nadia en la playa" 
                width={400} 
                height={400} 
                className="rounded-lg shadow-lg transition-transform duration-700 hover:scale-110" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
