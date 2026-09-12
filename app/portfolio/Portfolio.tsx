import Image from "next/image"
import Link from "next/link"
import { galleries } from "@/data/galleries"

export const metadata = {
  title: "Portfolio — Rolux Media",
  description: "Event, portrait and wedding photography by Rolux Media.",
}

type GalleryProps = {
  title: string
  images: string[]
  priority?: boolean
}

function Gallery({ title, images, priority = false }: GalleryProps) {
  const [cover, ...rest] = images

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="mt-2 h-1 w-16 rounded bg-[#16404F]" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Cover */}
        <div className="relative h-[400px] overflow-hidden rounded-xl md:h-[600px]">
          <Image
            src={cover}
            alt={`${title} cover`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid h-[400px] grid-cols-2 grid-rows-2 gap-4 md:h-[600px]">
          {rest.slice(0, 4).map((image, index) => (
            <div key={image} className="relative overflow-hidden rounded-xl">
              <Image
                src={image}
                alt={`${title} photo ${index + 2}`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-stone-100">
      <section className="px-6 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          Rolux Media
        </p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-6xl">
          Our Portfolio
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          A collection of our photography work, capturing moments, people,
          and stories worth remembering.
        </p>
      </section>

      <Gallery title="Events" images={galleries.events} priority />
      <Gallery title="Portraits" images={galleries.portraits} />
      <Gallery title="Weddings" images={galleries.weddings} />

      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Like what you see?
        </h2>
        <br></br>
        <Link
          href="https://wa.me/260976164787"
          className="rounded-md bg-green-900 dark:bg-green-600 dark:text-gray-900 text-white px-6 py-3 font-medium"
        >
          Get in touch
        </Link>
      </section>
    </main>
  )
}