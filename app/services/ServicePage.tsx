import Image from "next/image"
import Link from "next/link"
import { Services } from "@/data/services"

export default function Service() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gray-200 py-16">
        <h1 className="text-3xl font-bold text-center text-gray-800">OUR SERVICES</h1>
        <p className="mt-2 text-center text-gray-700">
          Discover our range of professional services designed to meet your needs.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Services.map((s) => (
            <div
              key={s.title}
              className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-gray-900/5 transition hover:shadow-xl"
            >
              <Image
                src={s.image}
                alt={s.title}
                width={600}
                height={400}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="aspect-3/2 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">{s.title}</h2>
                <p className="mt-2 text-gray-600">{s.description}</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block font-medium text-[#16404F] hover:underline"
                >
                  Get in touch →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}