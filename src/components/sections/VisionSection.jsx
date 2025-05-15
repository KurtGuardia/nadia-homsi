import Image from 'next/image'

export default function VisionSection() {
  return (
    <section
      id='vision'
      className='bg-primary py-16 md:py-24 lg:py-32 text-white'
    >
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-bold text-center text-background mb-8 font-handwritten'>
          Mi Visión
        </h2>
        <div className='flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto'>
          <div className='md:w-1/2 md:pr-12 lg:pr-16 max-w-lg'>
            <p className='text-2xl mb-4'>
              Mi visión es crear un espacio donde la
              medicina convencional y las terapias
              holísticas se unan para ofrecer una atención
              integral y personalizada. <br />
              <br />
              Creo en un enfoque que no solo trata los
              síntomas, sino que busca la raíz emocional y
              energética de cada condición, promoviendo una
              verdadera sanación desde adentro hacia afuera.
            </p>
          </div>
          <div className='md:w-1/2 mt-8 md:mt-0 flex items-center justify-center'>
            <div className='overflow-hidden rounded-2xl'>
              <Image
                src='/imgs/nadia_playa.jpg'
                alt='Dra. Nadia en la playa'
                width={400}
                height={400}
                className='rounded-2xl shadow-lg transition-transform duration-700 scale-110 hover:scale-100'
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
