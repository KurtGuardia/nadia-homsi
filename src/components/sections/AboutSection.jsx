import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id='sobre-mi' className='bg-white py-20 mt-16'>
      <div className='container mx-auto text-center md:text-justify'>
        <h2 className='text-5xl font-bold text-secondary text-center mb-8 font-handwritten'>
          Un poco sobre mi
        </h2>
        <div className='flex justify-center mb-6'>
          <p className='text-xl text-[var(--text-dark)] mb-0 md:mb-12'>
            Soy Médica Cirujana, formada en la Universidad
            Mayor de San Simón. Me gradué como médica
            convencional y luego continué mi camino en
            Argentina con la intención de especializarme en
            Neurología. Sin embargo, durante ese proceso
            —tras una crisis emocional y física— descubrí el
            mundo de las terapias alternativas, y todo
            comenzó a transformarse.
            <br />
            <br />
            Empecé a experimentar en mí misma cómo, sin
            recurrir a tratamientos farmacológicos —que
            muchas veces terminan dañando nuestro sistema—,
            era posible sanar. Mi salud mejoró notablemente,
            fortalecí mi autoestima, mis relaciones
            personales se volvieron más sanas, y me sentía
            con mayor vitalidad y propósito.
          </p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto'>
          <div className='md:w-1/3 my-8 md:my-0 flex items-center justify-center'>
            <div className='overflow-hidden rounded-2xl'>
              <Image
                src='/imgs/nadia.jpeg'
                alt='Dra. Nadia meditando'
                width={400}
                height={400}
                className='rounded-2xl shadow-lg transition-transform duration-700 scale-110 hover:scale-100'
              />
            </div>
          </div>
          <div className='md:w-2/3 md:pl-12 lg:pl-16'>
            <p className='text-3xl text-[var(--secondary-color)] font-bold mb-4'>
              Médica y Terapeuta holística{' '}
            </p>
            <p className='text-xl text-[var(--text-dark)] mb-4'>
              Esa transformación profunda me llevó a tomar
              una decisión importante: renunciar al hospital
              en el que trabajaba, ya que no podía compartir
              desde allí todo lo que estaba aprendiendo y
              viviendo.
              <br />
              <br />
              Hoy formo parte del Centro Sananda, un espacio
              donde integramos la medicina convencional con
              terapias alternativas como el
              electrobiomagnetismo, la musicoterapia, la
              bioneuroemoción, la biodecodificación, la
              danzaterapia y las terapias energéticas.
              <br />
              <br />
              Acompaño a cada persona desde el corazón, con
              empatía y amor. Creo en el amor propio como
              base de todo proceso de sanación, en la
              posibilidad de generar cambios profundos y
              duraderos, y en transformar el dolor en amor.
              Lo digo con certeza, porque lo he vivido:
              sanar es posible cuando nos atrevemos a mirar
              más allá
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
