'use client'

import React, { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'
import Image from 'next/image'

const CoursesSection = () => {
  const [courses, setCourses] = useState([])
  const [workshops, setWorkshops] = useState([])
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const coursesCol = collection(db, 'courses')
        const courseSnapshot = await getDocs(coursesCol)
        const courseList = courseSnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() }),
        )
        setCourses(courseList)

        const workshopsCol = collection(db, 'workshops')
        const workshopSnapshot = await getDocs(workshopsCol)
        const workshopList = workshopSnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() }),
        )
        setWorkshops(workshopList)

        const eventsCol = collection(db, 'events')
        const eventSnapshot = await getDocs(eventsCol)
        const eventList = eventSnapshot.docs
          .map((doc) => {
            const data = doc.data()

            const timestamp = data.timestamp?.toDate
              ? data.timestamp.toDate()
              : new Date(data.timestamp)
            return { id: doc.id, ...data, timestamp }
          })
          .sort((a, b) => a.timestamp - b.timestamp)
        setEvents(eventList)
      } catch (err) {
        console.error(
          'Error fetching data from Firestore:',
          err,
        )
        setError(
          'Error al cargar el contenido. Por favor, inténtalo de nuevo más tarde.',
        )
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <section
        id='courses'
        className='py-16 bg-background text-foreground'
      >
        <div className='container mx-auto px-4 text-center'>
          <p className='text-xl lg:text-5xl font-bold text-primary animate-pulse'>
            Cargando cursos y talleres...
          </p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section
        id='courses'
        className='py-16 bg-background text-foreground'
      >
        <p className='text-xl lg:text-3xl font-bold text-center mb-12 text-destructive'>
          {error}
        </p>
      </section>
    )
  }

  return (
    <section
      id='courses'
      className='py-16 bg-background text-foreground'
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-5xl font-bold text-center text-secondary font-handwritten tracking-wider mb-12'>
          Nuestros Cursos y Talleres
        </h2>

        {/* Courses Subsection */}
        <div className='mb-16'>
          <h3 className='text-center text-3xl text-secondary font-bold mb-4'>
            Cursos Online
          </h3>
          <div className='flex flex-wrap gap-8 justify-center'>
            {courses.map((course) => (
              <div
                key={course.id}
                className='group relative rounded-lg shadow-lg overflow-hidden border border-primary w-full md:w-[calc(40%-1rem)]'
              >
                <div className='relative w-full h-96'>
                  <Image
                    src={course.img}
                    alt={course.title}
                    layout='fill'
                    objectFit='cover'
                    className='transition-transform duration-300 group-hover:scale-95'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 backdrop-blur-sm'>
                    <p
                      className='text-white text-center text-sm'
                      dangerouslySetInnerHTML={{
                        __html: course.description,
                      }}
                    />
                  </div>
                </div>
                <div className='p-6 bg-card'>
                  <h4 className='text-xl font-semibold mb-2 text-card-foreground'>
                    {course.title}
                  </h4>
                  {course.link ? (
                    <a
                      href={course.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2 px-6 rounded-md transition-colors duration-300'
                    >
                      Ver Curso
                    </a>
                  ) : (
                    <div className='relative inline-block'>
                      <button
                        className='inline-block bg-gray-400 text-primary-foreground font-semibold py-2 px-6 rounded-md cursor-not-allowed peer/tooltip'
                        disabled
                      >
                        Ver Curso
                      </button>
                      <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 w-max px-2 py-1 bg-black text-white text-xs rounded opacity-0 peer-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none'>
                        Próximamente
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {courses.length === 0 && !loading && (
              <p className='text-center text-muted-foreground w-full'>
                No hay cursos disponibles en este momento.
              </p>
            )}
          </div>
        </div>

        {/* Workshops Subsection */}
        <div className='mb-16'>
          <h3 className='text-center text-3xl secondary-primary font-bold mb-4'>
            Talleres
          </h3>
          {workshops.length > 0 ? (
            <div className='flex flex-wrap justify-center gap-6'>
              {workshops.map((workshop) => (
                <div
                  key={workshop.id}
                  className='bg-card p-6 rounded-lg shadow-md border border-primary w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)]'
                >
                  {' '}
                  {/* Responsive widths */}
                  <h4 className='text-xl font-semibold mb-2 text-card-foreground'>
                    {workshop.title}
                  </h4>
                  <p className='text-muted-foreground text-sm'>
                    {workshop.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            !loading && (
              <p className='text-center text-muted-foreground'>
                No hay talleres disponibles en este momento.
              </p>
            )
          )}
        </div>

        {/* Events Subsection */}
        <div>
          <h3 className='text-center text-3xl text-secondary font-bold mb-4'>
            Próximos Eventos
          </h3>
          <div className='flex flex-wrap gap-8 justify-center'>
            {events.map((event) => (
              <div
                key={event.id}
                className='group relative rounded-lg shadow-lg overflow-hidden border border-primary w-full md:w-[calc(50%-1rem)]'
              >
                <div className='relative w-full h-64'>
                  <Image
                    src={event.img}
                    alt={event.title}
                    layout='fill'
                    objectFit='cover'
                    className='transition-transform duration-300 group-hover:scale-105'
                  />
                  {/* Overlay for the image description */}
                  <div className='absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 backdrop-blur-sm'>
                    <p className='text-white text-center text-sm'>
                      {event.description}
                    </p>
                  </div>
                </div>
                <div className='p-6 bg-card'>
                  <h4 className='text-xl font-semibold mb-2 text-card-foreground'>
                    {event.title}
                  </h4>
                  <p className='text-muted-foreground text-sm mb-2'>
                    Fecha:{' '}
                    {event.timestamp instanceof Date
                      ? event.timestamp.toLocaleDateString()
                      : 'Fecha no disponible'}{' '}
                    -{' '}
                    {event.timestamp instanceof Date
                      ? event.timestamp.toLocaleTimeString(
                          [],
                          {
                            hour: '2-digit',
                            minute: '2-digit',
                          },
                        )
                      : ''}
                  </p>
                  {/* Optional: Add a button or link for events if needed */}
                </div>
              </div>
            ))}
            {events.length === 0 && !loading && (
              <p className='text-center text-muted-foreground w-full'>
                No hay eventos programados por el momento.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
