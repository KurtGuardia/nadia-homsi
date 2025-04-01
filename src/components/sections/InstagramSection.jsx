'use client'

import { useEffect } from 'react'
import styles from '@/styles/InstagramSection.module.css'

export default function InstagramSection() {
  const posts = [
    'https://www.instagram.com/p/DCRjuS5Os_R/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/C4EpTDiL4Qc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    'https://www.instagram.com/p/C4HVFYcsnvv/?utm_source=ig_web_copy_link',
    'https://www.instagram.com/p/DBP39TQNbHb/?utm_source=ig_web_copy_link',
  ]

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script')
    script.src = '//www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    // Rerun Instagram embed script when needed
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section
      id='ig'
      className='bg-background py-16 md:py-24 lg:py-32'
    >
      <div className='container mx-auto'>
        <h2 className='text-5xl font-bold text-center text-secondary mb-8 font-handwritten'>
          Sígueme en Instagram
        </h2>
        <a
          className='block text-xl text-center text-[var(--text-dark)] mb-12'
          href='https://www.instagram.com/dra.nadiahomsi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
          rel='noopener noreferrer'
          target='_blank'
        >
          @dra.nadiahomsi
        </a>
        <a
          className='block text-xl text-center text-[var(--text-dark)] mb-12'
          href='https://www.instagram.com/centro.medico.holistico?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
          rel='noopener noreferrer'
          target='_blank'
        >
          @centro.medico.holistico
        </a>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-4'>
          {posts.map((post, index) => (
            <div
              key={index}
              className={styles['instagram-post-container']}
            >
              <blockquote
                className='instagram-media'
                data-instgrm-permalink={post}
                data-instgrm-version='14'
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '8px',
                  boxShadow:
                    '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '0',
                  padding: '0',
                  width: '100%',
                }}
              ></blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
