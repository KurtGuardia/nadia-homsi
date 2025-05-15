'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    text: 'La verdad llega del inconscientemente y de tus sombras, tus sesiónes me ayudaron a mirar a esa oscuridad, y con cada sesión observarla, liberarla y equilibrar mi vibración ✨Ahora se mucho más de mi de lo que sabia antes sobre mi! Esto me permite ser amable, paciente y más amorosa conmigo misma👑♥️ como efectos secundarios a nivel físico mejoró mi sueño, mi alimentación y nuevas oportunidades laborales llegaron a mi vida! Gracias querida Nadia por la confianza, por tu Luz y tu labor 🫶🏻💝 cambias vida con tu magia 💯top!',
    author: 'Candy - Portugal',
  },
  {
    text: 'Desde que empecé hacer terapia en Sananda holística realmente marcó una diferencia en mi vida. Las terapias que realizamos me ayudaron a sentirme más equilibrado, tanto física como emocionalmente. Me sentí comprendido y acompañado durante todo el proceso, lo cual me dio mucha confianza. Gracias a tu enfoque integral, logré mejorar en áreas donde sentía estancamiento, y aprendí a conectar mejor conmigo mismo. Estoy muy agradecido por todo lo que me aporto la Dra. Nadia Sin duda recomendaría sus terapias a quienes busquen una transformación real en sus vidas.',
    author: 'Angelo - Bolivia',
  },
  {
    text: 'A través de una amiga, conocí a Nadia, con quien exploré la pregunta de si deseaba ser madre?  Y si algo me estaba bloqueando en ese proceso? En la primera sesión, nos adentramos profundamente en mi subconsciente y pude ver claramente que el deseo de ser madre era el anhelo de mi alma. También pude identificar los miedos que me estaba bloqueando. En las sesiones posteriores, trabajamos sobre esos miedos, conectando con mi niña interior y acompañándola a verlo de otra manera.... (continuación en el siguiente testimonio)',
    author: 'Arwa - Países Bajos',
  },
  {
    text: 'Realmente re-programar tu mente. Las sesiones siempre me ofrecieron exactamente lo que necesitaba en cada momento. Nadia trabaja con algo mucho más grande que ella misma y me acompaña con una facilidad y sin juicio, sabiendo exactamente qué decir en el momento justo. Inicialmente tomé las sesiones de forma presencial, pero cuando regresé a mi país, decidí continuar las sesiones en línea. Y me sentí muy feliz de poder anunciar, en una de nuestras primeras sesiones en línea, que estaba embarazada. No podía creerlo!.... (continuación en el siguiente testimonio)',
    author: 'Arwa - Países Bajos',
  },
  {
    text: '...tengo 43 años y todo se orquestó de una manera tan hermosa después de las sesiones con Nadia; estaba lista y abierta para recibir a esta alma el dia que regrese devuelta a mi pareja. Estoy muy agradecida de que Nadia haya cruzado mi camino, y ahora, después de tres meses, la he pedido que continúe acompañándome con un par de sesiones para ayudarme a prepararme en este hermoso viaje de ser madre, entregándome y siendo un canal para esta nueva personita que viene a la tierra.',
    author: 'Arwa - Países Bajos',
  },
  {
    text: 'Hola Nadia!! Soy Candy te cuento que cambié de número, sólo te quería agradecer por todo tú trabajo y el amor que le pones a lo que haces, no sabes todo lo que me ayudaste a entender y sanar 🩷🫶🏻🪄 si alguna vez quieres enseñar lo que haces seré tu primera inscrita☺️ te mando un abrazo!!',
    author: 'Candy - Portugal',
  },
  {
    text: 'MI RECONOCIMIENTO Y GRATITUD A LA DRA. NADIA HOMSI. MEDICO Y TERAPISTA BIONEUROEMOCIONAL Y TERAPIA MELQUIZEDEC TERAPIAS QUE RECIBÍ A DISTANCIA ESTOY EN BRUSELAS. FELICITO A ESTA SERVIDORA DE LA HUMANIDAD POR SU CARISMA Y PROFECIONALISMO. ADEMÁS DE SU PACIENCIA. ESTAS TERAPIAS HAN SIDO DE MUCHA AYUDA PARA MÍ… PARA LIBERAR. SANAR. Y DEJAR IR. … DEBO TAMBIÉN COMENTAR QUE TODA TERAPIA SIRVE PARA AYUDARNOS CON LOS OTROS TRATAMIENTOS. ES UNA OTRA HERRAMIENTA MARAVILLOSA AL SERVICIO … GRACIAS ABRAZOS DE LUZ DIVINA.',
    author: 'Mimita Mal Chal - Bruselas, Bélgica',
  },
  {
    text: 'Yo vivo en Bruselas-Bélgica tuve varias terapias a distancia, las recomiendo con certeza fueron de mucho crecimiento espiritual y sanación para mí…. Un encuentro con mi ser superior una hermosa experiencia de vida maravillosa. Agradezco de manera muy especial a la Dra. Nadia Homsi muy profesional. ¡Estoy muy contenta! 🍀 Namaste 🍀',
    author: 'Tatiana Maldonado - Bruselas, Bélgica',
  },
  {
    text: 'La Terapia Melquizedec aun hecha a gran distancia con la Dra Nadia Homsi ha sido una experiencia maravillosa y efectiva para sanar trauma emocional. La recomiendo 100 % 🙏',
    author: 'Jaqueline Maldonado - Estados Unidos',
  },
]

const TestimonySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const CurvyQuote = ({ className }) => (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path d='M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z' />
    </svg>
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1
          ? 0
          : prevIndex + 1,
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id='testimonies'
      className='py-20 bg-gradient-to-b from-[#F9F5F6] to-white'
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-5xl font-bold text-center text-secondary font-handwritten tracking-wider mb-12'>
          Testimonios
        </h2>

        <div className='max-w-3xl mx-auto relative h-[530px] md:h-[300px] overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className='text-center'
            >
              <div className='relative mb-8'>
                <CurvyQuote className='w-5 h-5 text-[var(--secondary-color)] inline-block transform rotate-180 absolute top-[-3%] left-[-1%]' />
                <p className='text-lg text-gray-700 italic px-4 inline'>
                  {testimonials[currentIndex].text}
                </p>
                <CurvyQuote className='w-5 h-5 text-[var(--secondary-color)] inline-block absolute top-[96%]' />
              </div>

              <p className='text-[var(--secondary-color)] font-semibold'>
                - {testimonials[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className='flex justify-center gap-2 mt-8'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[var(--secondary-color)]'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonySection
