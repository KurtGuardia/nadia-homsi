import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id='sobre-mi' className='bg-white py-20 mt-16'>
      <div className='container mx-auto text-center lg:text-justify'>
        <h2 className='text-5xl font-bold text-secondary text-center mb-8 font-handwritten'>
          Un poco sobre mi
        </h2>
        <div className='flex justify-center mb-6'>
          <p className='text-xl text-[var(--text-dark)] mb-0 lg:mb-12'>
            Soy Médica Cirujana, formada en la Universidad
            Mayor de San Simón. Me gradué como médica
            convencional y luego continué mi camino en
            Argentina con la intención de especializarme en
            Neurología. Sin embargo, durante ese proceso
            —tras una crisis emocional y física— descubrí el
            mundo de las terapias alternativas, y fue a
            través de la meditación como herramienta de
            transformación que todo empezó a cambiar.
            <br />
            <br />
            Al experimentar en mí misma, comprendí que la
            sanación no siempre requiere tratamientos
            farmacológicos que, en muchos casos, terminan
            dañando nuestro sistema. Mi salud mejoró
            notablemente, mi autoestima se fortaleció, mis
            relaciones se volvieron más sanas, y empecé a
            sentir una energía y un propósito que antes no
            conocía.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto'>
          <div className='lg:w-1/3 my-8 lg:my-0 flex items-center justify-center'>
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
          <div className='lg:w-2/3 lg:pl-12 lg:pl-16'>
            <p className='text-3xl text-[var(--secondary-color)] font-bold mb-4'>
              Médica y Terapeuta holística{' '}
            </p>
            <p className='text-xl text-[var(--text-dark)] mb-4'>
              Esa transformación profunda me llevó a tomar
              una decisión importante: renunciar al hospital
              en el que trabajaba. Necesitaba compartir y
              aplicar todo lo que había aprendido, pero
              dentro del sistema convencional no encontraba
              el espacio para hacerlo.
              <br />
              <br />
              Hoy soy especialista en Bioneuroemoción,
              certificada por el Enric Corbera Institute
              (España), certificada en Biodecodificación por
              el Centro Argentino de Psicología Integral, y
              en Psiconeuroinmunología por la Universidad
              Tecnológica de España. Además, cuento con
              diversas certificaciones en terapias
              energéticas y actualmente curso la
              certificación en Somatic Experiencing en el
              Trauma Institute.
              <br />
              <br />
              Este camino me llevó a cofundar el Centro
              Sananda, un espacio donde integramos la
              medicina convencional con terapias
              alternativas mencionadas además de
              electrobiomagnetismo, la energía escalar, la
              danzaterapia, entre otros.
              <br />
              <br />
              Hoy, reúno todo lo aprendido y vivido para
              crear mis propios métodos y protocolos.
              Acompaño a cada persona con empatía y amor,
              desde el corazón. Creo firmemente en el amor
              propio como la base de todo proceso de
              sanación, en la posibilidad de generar cambios
              profundos y duraderos, y en la capacidad de
              transformar el dolor en amor. Lo sé con
              certeza, porque lo he vivido: sanar es posible
              cuando nos atrevemos a mirar más allá.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
