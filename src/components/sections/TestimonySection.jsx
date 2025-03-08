'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    text: "La verdad llega del inconscientemente y de tus sombras, tus sesiónes me ayudaron a mirar a esa oscuridad, y con cada sesión observarla, liberarla y equilibrar mi vibración ✨Ahora se mucho más de mi de lo que sabia antes sobre mi! Esto me permite ser amable, paciente y más amorosa conmigo misma👑♥️ como efectos secundarios a nivel físico mejoró mi sueño, mi alimentación y nuevas oportunidades laborales llegaron a mi vida! Gracias querida Nadia por la confianza, por tu Luz y tu labor 🫶🏻💝 cambias vida con tu magia 💯top!",
    author: "Anonymus"
  },
  {
    text: "Hola Nadia!! Soy Candy te cuento que cambié de número, sólo te quería agradecer por todo tú trabajo y el amor que le pones a lo que haces, no sabes todo lo que me ayudaste a entender y sanar 🩷🫶🏻🪄 si alguna vez quieres enseñar lo que haces seré tu primera inscrita☺️ te mando un abrazo!!",
    author: "Anonymus"
  },
  {
    text: "MI RECONOCIMIENTO Y GRATITUD A LA DRA. NADIA HOMSI. MEDICO Y TERAPISTA BIONEUROEMOCIONAL Y TERAPIA MELQUIZEDEC TERAPIAS QUE RECIBÍ A DISTANCIA ESTOY EN BRUSELAS. FELICITO A ESTA SERVIDORA DE LA HUMANIDAD POR SU CARISMA Y PROFECIONALISMO. ADEMÁS DE SU PACIENCIA. ESTAS TERAPIAS HAN SIDO DE MUCHA AYUDA PARA MÍ… PARA LIBERAR. SANAR. Y DEJAR IR. … DEBO TAMBIÉN COMENTAR QUE TODA TERAPIA SIRVE PARA AYUDARNOS CON LOS OTROS TRATAMIENTOS. ES UNA OTRA HERRAMIENTA MARAVILLOSA AL SERVICIO … GRACIAS ABRAZOS DE LUZ DIVINA.",
    author: "Mimita Mal Chal"
  },
  {
    text: "Yo vivo en Bruselas-Bélgica tuve varias terapias a distancia, las recomiendo con certeza fueron de mucho crecimiento espiritual y sanación para mí…. Un encuentro con mi ser superior una hermosa experiencia de vida maravillosa. Agradezco de manera muy especial a la Dra. Nadia Homsi muy profesional. ¡Estoy muy contenta! 🍀 Namaste 🍀",
    author: "Tatiana Maldonado"
  },
  {
    text: "La Terapia Melquizedec aun hecha a gran distancia con la Dra Nadia Homsi ha sido una experiencia maravillosa y efectiva para sanar trauma emocional. La recomiendo 100 % 🙏",
    author: "Jaqueline Maldonado"
  }
]

const TestimonySection = () => {
  const [currentIndex, setCurrentIndex] = useState( 0 )

  const CurvyQuote = ( { className } ) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
    </svg>
  )

  useEffect( () => {
    const interval = setInterval( () => {
      setCurrentIndex( ( prevIndex ) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000 )

    return () => clearInterval( interval )
  }, [] )

  return (
    <section className="py-20 bg-gradient-to-b from-[#F9F5F6] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#7C3E66]">
          Testimonios
        </h2>

        <div className="max-w-3xl mx-auto relative h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="relative mb-8">
                <CurvyQuote className="w-5 h-5 text-[#7C3E66] inline-block align-top transform rotate-180 absolute top-[-15%] left-[-2%]" />
                <p className="text-lg text-gray-700 italic px-4 inline">
                  {testimonials[currentIndex].text}
                </p>
                <CurvyQuote className="w-5 h-5 text-[#7C3E66] inline-block align-top absolute top-[90%]" />
              </div>

              <p className="text-[#7C3E66] font-semibold">
                - {testimonials[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map( ( _, index ) => (
            <button
              key={index}
              onClick={() => setCurrentIndex( index )}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#7C3E66]' : 'bg-gray-300'
                }`}
            />
          ) )}
        </div>
      </div>
    </section>
  )
}

export default TestimonySection
