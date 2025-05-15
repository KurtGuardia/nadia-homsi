import Image from 'next/image'

export default function Footer() {
  const date = new Date()
  const currentYear = date.getFullYear()
  const month =
    date
      .toLocaleString('es-ES', { month: 'short' })
      .charAt(0)
      .toUpperCase() +
    date
      .toLocaleString('es-ES', { month: 'short' })
      .slice(1)
  const copyrightYear = `${month}/${currentYear}`

  return (
    <footer className='bg-[var(--secondary-color)] text-white py-8'>
      <div className='container mx-auto text-center'>
        <Image
          src='/logo blanco.png'
          alt='Dra. Nadia Homsi Logo'
          width={250}
          height={80}
          className='mx-auto mb-4'
          style={{ width: 'auto', height: 'auto' }}
        />
        <p>
          &copy; {copyrightYear} desarrollado por
          <span className='inline-block transition-all duration-300 ease-in-out hover:rotate-[10deg] hover:scale-110 hover:animate-pulse'>
            <a
              href='https://kurtguardia.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              &nbsp; Kurt Guardia.
            </a>
          </span>
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
