'use client'

import { useState } from 'react'

const MethodologyCard = ({
  title,
  description,
  image,
  onShowDetails,
}) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className='h-[400px] w-full min-w-[300px] perspective'
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div
          className='absolute w-full h-full backface-hidden rounded-2xl shadow-lg flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat overflow-hidden'
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className='absolute inset-0 rounded-2xl bg-[var(--secondary-color)] opacity-50'></div>

          {/* Title on top */}
          <h3 className='relative z-10 text-2xl font-semibold text-center text-white tracking-wide bg-black/50 backdrop-blur-sm p-4 rounded-lg'>
            {title}
          </h3>
        </div>

        {/* Back of card */}
        <div className='absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl shadow-lg p-6 flex flex-col'>
          <p className='text-base text-[var(--text-dark)] text-center overflow-y-auto flex items-center flex-grow'>
            {description}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onShowDetails()
            }}
            className='text-secondary hover:text-primary underline underline-offset-4 text-center mt-4'
          >
            ¿Qué hace?
          </button>
        </div>
      </div>
    </div>
  )
}

export default MethodologyCard
