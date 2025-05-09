// app/components/PartnersSection.jsx
import React from 'react'
import Image from 'next/image' // If you want to use logos/profile pics later
import { FaInstagram } from 'react-icons/fa'

// IMPORTANT: You need to verify these names and associations by checking the IG profiles.
// The 'displayName' is what will be shown. The 'nameFromIG' is a placeholder for you to fill after checking.
const partnersData = [
  {
    // Based on client: "Lorena (@balance_nutricionintegrativa...)"
    displayName: 'Victoria', // Or the actual name/brand from the IG profile
    handle: '@balance_nutricionintegrativa',
    url: 'https://www.instagram.com/balance_nutricionintegrativa/',
    // nameFromIG: "Actual Name/Brand for @balance_nutricionintegrativa", // TODO: You verify and update
  },
  {
    // Assuming Victoria is next as per "Victoria, Mishel, Lorena" and the second handle
    displayName: 'Mishel', // Or the actual name/brand from the IG profile
    handle: '@danzando.con.la.vida',
    url: 'https://www.instagram.com/danzando.con.la.vida/',
    // nameFromIG: "Actual Name/Brand for @danzando.con.la.vida", // TODO: You verify and update
  },
  {
    // Assuming Mishel is last as per "Victoria, Mishel, Lorena" and the third handle
    displayName: 'Paula', // Or the actual name/brand from the IG profile
    handle: '@centro_holistico_alas',
    url: 'https://www.instagram.com/centro_holistico_alas_/',
    // nameFromIG: "Actual Name/Brand for @centro_holistico_alas", // TODO: You verify and update
  },
]

const PartnersSection = () => {
  return (
    <section
      id='partners'
      className='py-12 md:py-16 bg-slate-100'
    >
      {' '}
      {/* Slightly different bg for visual separation */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10 md:mb-14'>
          <h2 className='text-3xl sm:text-4xl font-bold tracking-tight text-gray-900'>
            Colaboraciones
          </h2>
          <p className='mt-3 text-lg text-gray-600 sm:mt-4 max-w-2xl mx-auto'>
            Trabajo en conjunto con estas maravillosas
            profesionales. ¡Conoce más sobre ellas!
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {partnersData.map((partner) => (
            <a
              key={partner.handle}
              href={partner.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Visita el perfil de Instagram de ${partner.displayName} (${partner.handle})`}
              className='group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col items-center text-center transform hover:-translate-y-1'
            >
              {/* Optional: Placeholder for a profile picture or logo
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden group-hover:ring-4 group-hover:ring-teal-300 transition-all duration-300">
                {partner.image ? (
                  <Image src={partner.image} alt={partner.displayName} width={96} height={96} className="object-cover w-full h-full" />
                ) : (
                  <span className="flex items-center justify-center w-full h-full text-3xl text-gray-400">
                    {partner.displayName.charAt(0)}
                  </span>
                )}
              </div>
              */}
              <h3 className='text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300'>
                {partner.displayName}
              </h3>
              <p className='text-sm text-teal-500 group-hover:text-teal-700 transition-colors duration-300 mt-1 mb-3 flex items-center'>
                <FaInstagram className='w-4 h-4 mr-1.5' />
                {partner.handle}
              </p>
              <span className='mt-auto text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300 border-t border-gray-200 pt-2 w-full'>
                Visitar perfil en Instagram
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
