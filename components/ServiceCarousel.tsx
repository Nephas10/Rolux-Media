"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const services = [
  { src: "/rolux/weddings/w3.jpg", alt: "Bride and groom at a wedding shoot", title: "Wedding Photography", line: "We capture the magical moments." },
  { src: "/rolux/events/even.jpg", alt: "Corporate event coverage", title: "Event Photography", line: "We capture the professional moments" },
  { src: "/rolux/content.jpg", alt: "Content creation session", title: "Content Creation", line: "We capture the creative moments" },
]

export default function ServiceCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [])

  useEffect(() => {
    if (paused || reduced) return
    const id = setInterval(() => setActive((i) => (i + 1) % services.length), 4000)
    return () => clearInterval(id)
  }, [paused, reduced])

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative">
        {services.map((s, i) => (
          <div
            key={s.src}
            aria-hidden={i !== active}
            className={`transition-opacity duration-700 ${
              i === active ? "opacity-100 text-gray-700" : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              height={500}
              width={500}
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="aspect-3/2 object-cover w-full rounded-md"
            />
            <h2 className="mt-4 text-xl font-semibold">{s.title}</h2>
            <p className="text-gray-600 dark:text-gray-700">{s.line}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        {services.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setActive(i)}
            aria-label={`Show ${s.title}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-8 bg-gray-900 dark:text-gray-700" : "w-2 bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  )
}