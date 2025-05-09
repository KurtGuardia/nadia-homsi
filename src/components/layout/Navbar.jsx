'use client'

import React from 'react'
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
        <a href='#'>
          <Image
            src='/logo blanco.png'
            alt='Dra. Nadia Homsi Logo'
            width={120}
            height={40}
          />
        </a>
        <div className='space-x-4 md:flex hidden'>
          <a href='#sobre-mi'>
            <Button
              variant='ghost'
              className='text-white hover:bg-primary hover:text-[var(--accent)]'
            >
              Sobre Mí
            </Button>
          </a>
          <a href='#metodologia'>
            <Button
              variant='ghost'
              className='text-white hover:bg-primary hover:text-[var(--accent)]'
            >
              Metodología
            </Button>
          </a>
          <a href='#partners'>
            <Button
              variant='ghost'
              className='text-white hover:bg-primary hover:text-[var(--accent)]'
            >
              Colaboraciones
            </Button>
          </a>
          <a href='#vision'>
            <Button
              variant='ghost'
              className='text-white hover:bg-primary hover:text-[var(--accent)]'
            >
              Visión
            </Button>
          </a>
          <a href='#ig'>
            <Button
              variant='ghost'
              className='text-white hover:bg-primary hover:text-[var(--accent)]'
            >
              IG
            </Button>
          </a>
          <a href='#contacto'>
            <Button
              variant='ghost'
              className='text-white hover:bg-primary hover:text-[var(--accent)]'
            >
              Contacto
            </Button>
          </a>
        </div>
        <div className='md:hidden'>
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
                <a
                  href='#sobre-mi'
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant='ghost'
                    className='text-2xl text-white hover:text-[var(--text-gray)] hover:bg-background w-full block mb-4'
                  >
                    Sobre Mí
                  </Button>
                </a>
                <a
                  href='#metodologia'
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant='ghost'
                    className='text-2xl text-white hover:text-[var(--text-gray)] hover:bg-background w-full block mb-4'
                  >
                    Metodología
                  </Button>
                </a>
                <a
                  href='#partners'
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant='ghost'
                    className='text-2xl text-white hover:text-[var(--text-gray)] hover:bg-background w-full block mb-4'
                  >
                    Colaboraciones
                  </Button>
                </a>
                <a
                  href='#vision'
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant='ghost'
                    className='text-2xl text-white hover:text-[var(--text-gray)] hover:bg-background w-full block mb-4'
                  >
                    Visión
                  </Button>
                </a>
                <a
                  href='#ig'
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant='ghost'
                    className='text-2xl text-white hover:text-[var(--text-gray)] hover:bg-background w-full block mb-4'
                  >
                    IG
                  </Button>
                </a>
                <a
                  href='#contacto'
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant='ghost'
                    className='text-2xl text-white hover:text-[var(--text-gray)] hover:bg-background w-full block'
                  >
                    Contacto
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
