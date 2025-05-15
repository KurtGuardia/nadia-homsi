'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-[var(--primary)] fixed top-0 left-0 right-0 z-50 shadow-xl'>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <Link href='/' passHref>
          <Image
            src='/logo blanco.png'
            alt='Dra. Nadia Homsi Logo'
            width={120}
            height={40}
            style={{ width: 'auto', height: 'auto' }}
          />
        </Link>
        <div className='space-x-4 lg:flex hidden'>
          <Link href='#sobre-mi' passHref>
            <Button
              variant='ghost'
              className='text-white hover:bg-primary hover:text-[var(--accent)] p-2 xl:p-4'
            >
              Sobre Mí
            </Button>
          </Link>
          <Link href='#metodologia' passHref>
            <Button
              variant='ghost'
              className='text-white hover:bg-primary hover:text-[var(--accent)] p-2 xl:p-4'
            >
              Metodología
            </Button>
          </Link>
          <Link href='#vision' passHref>
            <Button
              variant='ghost'
              className='text-white hover:bg-primary hover:text-[var(--accent)] p-2 xl:p-4'
            >
              Visión
            </Button>
          </Link>
          <Link href='#courses' passHref>
            <Button
              variant='ghost'
              className='text-white hover:bg-primary hover:text-[var(--accent)] p-2 xl:p-4'
            >
              Cursos y Talleres
            </Button>
          </Link>
          <Link href='#ig' passHref>
            <Button
              variant='ghost'
              className='text-white hover:bg-primary hover:text-[var(--accent)] p-2 xl:p-4'
            >
              IG
            </Button>
          </Link>
          <Link href='#partners' passHref>
            <Button
              variant='ghost'
              className='text-white hover:bg-primary hover:text-[var(--accent)] p-2 xl:p-4'
            >
              Colaboraciones
            </Button>
          </Link>
          <Link href='#contacto' passHref>
            <Button
              variant='ghost'
              className='text-white hover:bg-primary hover:text-[var(--accent)] p-2 xl:p-4'
            >
              Contacto
            </Button>
          </Link>
        </div>
        <div className='lg:hidden'>
          <button
            onClick={toggleMenu}
            className='relative z-10'
          >
            <svg
              className='w-8 h-8 text-white fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <title>Menu</title>
              <path
                d={
                  isOpen
                    ? 'M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z'
                    : 'M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V15z'
                }
              />
            </svg>
          </button>
          {isOpen && (
            <div className='fixed top-0 left-0 bottom-0 right-0 bg-primary rounded p-4 flex items-center justify-center'>
              <div className='text-center'>
                <Link
                  href='#sobre-mi'
                  onClick={() => setIsOpen(false)}
                  passHref
                >
                  <Button
                    variant='ghost'
                    className='text-2xl text-white hover:text-[var(--text-gray)] hover:bg-background w-full block mb-4'
                  >
                    Sobre Mí
                  </Button>
                </Link>
                <Link
                  href='#metodologia'
                  onClick={() => setIsOpen(false)}
                  passHref
                >
                  <Button
                    variant='ghost'
                    className='text-2xl text-white hover:text-[var(--text-gray)] hover:bg-background w-full block mb-4'
                  >
                    Metodología
                  </Button>
                </Link>
                <Link
                  href='#vision'
                  onClick={() => setIsOpen(false)}
                  passHref
                >
                  <Button
                    variant='ghost'
                    className='text-2xl text-white hover:text-[var(--text-gray)] hover:bg-background w-full block mb-4'
                  >
                    Visión
                  </Button>
                </Link>
                <Link
                  href='#courses'
                  onClick={() => setIsOpen(false)}
                  passHref
                >
                  <Button
                    variant='ghost'
                    className='text-2xl text-white hover:text-[var(--text-gray)] hover:bg-background w-full block mb-4'
                  >
                    Cursos y Talleres
                  </Button>
                </Link>
                <Link
                  href='#ig'
                  onClick={() => setIsOpen(false)}
                  passHref
                >
                  <Button
                    variant='ghost'
                    className='text-2xl text-white hover:text-[var(--text-gray)] hover:bg-background w-full block mb-4'
                  >
                    IG
                  </Button>
                </Link>
                <Link
                  href='#partners'
                  onClick={() => setIsOpen(false)}
                  passHref
                >
                  <Button
                    variant='ghost'
                    className='text-2xl text-white hover:text-[var(--text-gray)] hover:bg-background w-full block mb-4'
                  >
                    Colaboraciones
                  </Button>
                </Link>
                <Link
                  href='#contacto'
                  onClick={() => setIsOpen(false)}
                  passHref
                >
                  <Button
                    variant='ghost'
                    className='text-2xl text-white hover:text-[var(--text-gray)] hover:bg-background w-full block'
                  >
                    Contacto
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
