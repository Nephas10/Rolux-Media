import Image from "next/image"
import ServiceCarousel from "@/components/ServiceCarousel"

export const metadata = {
  title: "Rolux Media — Wedding, Event & Content Photography",
  description:
    "Royalty and Luxury Re-defined. Wedding, event and content photography.",
}

export default function Home() {
  return (
    <main className="min-h-screen w-full  bg-stone-100">
      <div className="min-h-screen w-full px-6 py-8 md:px-12 lg:px-20 flex flex-col justify-center">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-7xl mx-auto w-full">

          {/* Carousel */}
          <div className="md:col-span-2">
            <ServiceCarousel />
          </div>

          {/* Logo / Branding */}
          <div className="text-center">
            <Image
              src="/rolux/rolux.jpg"
              alt="Rolux Media logo"
              height={420}
              width={420}
              priority
              sizes="(max-width: 768px) 280px, 420px"
            //   className="mx-auto w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
              className="relative aspect-square w-[280px] rounded-full object-cover shadow-2xl md:w-[420px]"
            />

            <h1 className="mt-6 text-4xl font-bold text-gray-700">
              Rolux Media
            </h1>

            <p className="mt-2 text-gray-600 dark:text-gray-700">
              Royalty and Luxury Re-defined
            </p>
          </div>

        </div>

        {/* Contact */}
        <div className="mt-16 max-w-7xl mx-auto w-full border-t border-gray-200 dark:border-gray-700 pt-8 text-center">

          <h2 className="text-2xl font-semibold text-gray-700">
            Let&apos;s capture your moment
          </h2>

          <p className="mt-2 text-gray-600 dark:text-gray-700">
            Tell us about your day and we&apos;ll get back to you.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

            <a
              href="https://wa.me/260976164787"
              className="rounded-md bg-green-900 dark:bg-green-600 dark:text-gray-900 text-white px-6 py-3 font-medium"
            >
              Chat on WhatsApp
            </a>

            <a
              href="mailto:roluxmedia@gmail.com"
              className="rounded-md ring-1 ring-gray-900 dark:ring-gray-600 px-6 py-3 font-medium text-gray-700"
            >
              Send an email
            </a>

          </div>
        </div>

      </div>
    </main>
  )
}