'use client' // Add this at the top for client-side hooks

import React, { useState, useEffect } from 'react'
import { db } from '@/lib/firebase' // Corrected path
import { collection, getDocs } from 'firebase/firestore'

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
        // Sort events by timestamp, assuming 'timestamp' is a Firebase Timestamp object or a string that can be converted to a Date
        const eventList = eventSnapshot.docs
          .map((doc) => {
            const data = doc.data()
            // Convert Firebase Timestamp to JavaScript Date if necessary
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
          <p className='text-xl text-primary'>
            Cargando contenido...
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
        <div className='container mx-auto px-4 text-center'>
          <p className='text-xl text-destructive'>
            {error}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id='courses'
      className='py-16 bg-background text-foreground'
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12 text-primary'>
          Nuestros Cursos y Talleres
        </h2>

        {/* Courses Subsection */}
        <div className='mb-16'>
          <h3 className='text-3xl font-semibold mb-8 text-secondary-color text-center'>
            Cursos Online
          </h3>
          <div className='grid md:grid-cols-2 gap-8'>
            {courses.map((course) => (
              <div
                key={course.id}
                className='group relative rounded-lg shadow-lg overflow-hidden border border-primary'
              >
                <img
                  src={course.img}
                  alt={course.title}
                  className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 backdrop-blur-sm'>
                  <p className='text-white text-center text-sm'>
                    {course.description}
                  </p>
                </div>
                <div className='p-6 bg-card'>
                  <h4 className='text-xl font-semibold mb-2 text-card-foreground'>
                    {course.title}
                  </h4>
                  <a
                    href={course.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2 px-6 rounded-md transition-colors duration-300 mt-4'
                  >
                    Ver Curso
                  </a>
                </div>
              </div>
            ))}
            {courses.length === 0 && !loading && (
              <p className='text-center text-muted-foreground md:col-span-2'>
                No hay cursos disponibles en este momento.
              </p>
            )}
          </div>
        </div>

        {/* Workshops Subsection */}
        <div className='mb-16'>
          <h3 className='text-3xl font-semibold mb-8 text-secondary-color text-center'>
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
          <h3 className='text-3xl font-semibold mb-8 text-secondary-color text-center'>
            Próximos Eventos
          </h3>
          <div className='grid md:grid-cols-2 gap-8'>
            {events.map((event) => (
              <div
                key={event.id}
                className='group relative rounded-lg shadow-lg overflow-hidden border border-primary'
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 backdrop-blur-sm'>
                  <p className='text-white text-center text-sm'>
                    {event.description}
                  </p>
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
              <p className='text-center text-muted-foreground md:col-span-2'>
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
