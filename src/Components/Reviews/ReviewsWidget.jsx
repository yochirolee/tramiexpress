'use client'
import { useEffect, useRef } from 'react'
import Script from 'next/script'

const WIDGET_URL = 'https://cdn.trustindex.io/loader.js?f96f64553f08894d5836d420e58'

export default function ReviewsWidget() {
  const hostRef = useRef(null)

  useEffect(() => {
    if (!hostRef.current) return
    hostRef.current.innerHTML = ''
    const placeholder = document.createElement('div')
    placeholder.setAttribute('src', WIDGET_URL)
    hostRef.current.appendChild(placeholder)
  }, [])

  return (
    <>
      {/* cargamos el script base una sola vez */}
      <Script
        id="trustindex-base"
        src="https://cdn.trustindex.io/loader.js"
        strategy="afterInteractive"
      />
      <section className="py-6 sm:py-8 lg:py-10 mx-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-sky-600">
            Opiniones de nuestros clientes
          </h2>
          <p className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Lo que dicen sobre TramiXpress
          </p>
          <div ref={hostRef} className="mt-4" />
        </div>
      </section>
    </>
  )
}
