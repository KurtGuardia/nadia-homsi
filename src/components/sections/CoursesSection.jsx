'use client'

import React, { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'
import Image from 'next/image'
import { Button } from '../ui/button'
import Modal from '../ui/Modal' // Import the Modal component

const CoursesSection = () => {
  const [courses, setCourses] = useState([])
  const [workshops, setWorkshops] = useState([])
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedEventForModal, setSelectedEventForModal] =
    useState(null) // State for modal

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

            const timestamp = data.date?.toDate
              ? data.date.toDate()
              : new Date(data.date)
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

  // Helper function to format dates for Google Calendar links
  const formatDateForGoogleCalendar = (date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return ''
    }
    const year = date.getFullYear()
    const month = (date.getMonth() + 1)
      .toString()
      .padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const hours = date
      .getHours()
      .toString()
      .padStart(2, '0')
    const minutes = date
      .getMinutes()
      .toString()
      .padStart(2, '0')
    const seconds = '00' // Google Calendar format often includes seconds
    return `${year}${month}${day}T${hours}${minutes}${seconds}`
  }

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
        <div className='mb-16 lg:mb-24'>
          <h3 className='text-center text-3xl text-secondary font-bold mb-4 lg:mb-10'>
            Cursos pre-grabados
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
                    <div
                      className='prose prose-sm prose-invert prose-cmsContent max-w-none'
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
        <div className='mb-16 lg:mb-24'>
          <h3 className='text-center text-3xl text-secondary font-bold mb-4 lg:mb-10'>
            Talleres on-line y presenciales
          </h3>
          <p className='text-xl text-[var(--text-dark)] mb-8 text-center  mx-auto'>
            Desde el inicio de mi camino en las terapias
            alternativas, sentí la necesidad de compartir
            todo lo que estaba aprendiendo. Fue así como
            comencé a ofrecer talleres presenciales, creando
            espacios de transformación donde las personas
            pudieran experimentar, en carne propia,
            herramientas de sanación emocional, mental y
            física. <br /> <br />
            Mis talleres combinan ciencia y conciencia,
            integrando la medicina con enfoques como la
            Bioneuroemoción, la Biodecodificación, la
            Psiconeuroinmunología, la terapia somática y las
            terapias energéticas. Son espacios diseñados
            para quienes buscan comprenderse mejor, liberar
            bloqueos y transformar su bienestar desde
            adentro hacia afuera. Algunos de los talleres
            fueron:{' '}
          </p>
          {workshops.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4  mx-auto px-2 lg:px-8'>
              {workshops.map((workshop) => (
                <div key={workshop.id}>
                  <h4 className='text-lg font-semibold text-secondary mb-1'>
                    {workshop.title}
                  </h4>
                  <p className='text-muted-foreground text-base'>
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
          <h3 className='text-center text-3xl text-secondary font-bold mb-4 lg:mb-10'>
            Próximos Eventos
          </h3>
          <div className='flex flex-wrap gap-8 justify-center'>
            {events.map((event) => (
              <div
                key={event.id}
                className='group relative rounded-lg shadow-lg overflow-hidden border border-primary w-full md:w-[calc(40%-1rem)]'
              >
                <div className='relative w-full h-96'>
                  <Image
                    src={event.img}
                    alt={event.title}
                    layout='fill'
                    objectFit='cover'
                    className='transition-transform duration-300 group-hover:scale-95'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 backdrop-blur-sm'>
                    <div
                      className='prose prose-sm prose-invert prose-cmsContent max-w-none'
                      dangerouslySetInnerHTML={{
                        __html: event.description,
                      }}
                    />
                    {event.more && (
                      <div className='mt-3'>
                        <button
                          className='text-white hover:underline underline-offset-4 text-center mt-4'
                          onClick={() =>
                            setSelectedEventForModal(event)
                          }
                        >
                          Más info
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className='p-6 bg-card'>
                  <h4 className='text-xl font-semibold mb-2 text-card-foreground'>
                    {event.title}
                  </h4>
                  {!isNaN(event.timestamp?.getTime()) ? (
                    (() => {
                      const startTime = event.timestamp

                      const googleCalendarStartTime =
                        formatDateForGoogleCalendar(
                          startTime,
                        )
                      const plainTextDescription =
                        event.description
                          ? event.description.replace(
                              /<[^>]*>?/gm,
                              '',
                            )
                          : ''

                      const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                        event.title,
                      )}&dates=${googleCalendarStartTime}/${googleCalendarStartTime}&details=${encodeURIComponent(
                        plainTextDescription,
                      )}`

                      return (
                        <a
                          href={googleCalendarLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-primary font-semibold mb-2 hover:underline inline-block'
                          title='Añadir al Google Calendar'
                        >
                          Fecha:{' '}
                          {startTime.toLocaleDateString()} -{' '}
                          {startTime.toLocaleTimeString(
                            [],
                            {
                              hour: '2-digit',
                              minute: '2-digit',
                            },
                          )}
                        </a>
                      )
                    })()
                  ) : (
                    <a
                      href={`https://wa.me/59164903531?text=Hola%20Dra.%20Nadia,%20quisiera%20saber%20m%C3%A1s%20acerca%20de%20las%20fechas%20del%20evento%20${encodeURIComponent(
                        event.title,
                      )}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block mb-2'
                    >
                      <Button
                        variant='outline'
                        className='!text-sm'
                        size='sm'
                      >
                        Consultar fechas
                      </Button>
                    </a>
                  )}
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

        <Modal
          isOpen={!!selectedEventForModal}
          onClose={() => setSelectedEventForModal(null)}
          title={
            selectedEventForModal?.title ||
            'Más Información'
          }
        >
          {selectedEventForModal?.more && (
            <div
              className='prose prose-sm lg:prose-base max-w-none text-[var(--text-dark)]'
              dangerouslySetInnerHTML={{
                __html: selectedEventForModal.more,
              }}
            />
          )}
        </Modal>
      </div>
    </section>
  )
}

export default CoursesSection
