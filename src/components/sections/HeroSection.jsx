import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className='container flex flex-col gap-2 mx-auto h-full lg:h-[90vh]'>
      <div className='flex flex-col lg:flex-row items-center flex-1'>
        <div className='lg:w-1/2 h-fit px-0 lg:px-10'>
          <Image
            src='/logo colores.png'
            alt='Dra. Nadia Homsi Logo Colores'
            width={600}
            height={300}
            className='mb-8'
            style={{ width: 'auto', height: 'auto' }}
          />
          <p className='text-2xl text-center text-[var(--text-dark)] mb-6 lg:h-[20%]'>
            Te acompaño a encontrar y tratar el origen de
            las patologías físicas y emocionales. <br /> Con
            un enfoque integral cuerpo, mente, emociones y
            espíritu.{' '}
          </p>
          <a
            href='https://wa.me/59164903531?text=Hola%20Dra.%20Nadia,%20quisiera%20saber%20m%C3%A1s%20acerca%20de...'
            target='_blank'
            rel='noopener noreferrer'
            className='block mx-auto w-fit'
          >
            <Button
              variant='default'
              size='lg'
              className=''
            >
              Consulta Ahora
            </Button>
          </a>
        </div>
        <div className='lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center h-[80%]'>
          <Image
            src='/imgs/nadia_doc.png'
            alt='Dra. Nadia Homsi'
            width={500}
            height={500}
            className='rounded-3xl shadow-2xl  w-auto h-full float-right'
          />
        </div>
      </div>
    </section>
  )
}
