import Image from "next/image"
import Link from "next/link"
import { Services } from "@/data/services"

const [featured, ...rest] = Services

export default function Service() {
    return (
        <main className="min-h-screen bg-gray-50">

            <section className="mx-auto max-w-7xl px-6 py-16">

                {/* Heading */}
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        Our Services
                    </h1>

                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        From photography and videography to design and web
                        development, we bring creative ideas to life.
                    </p>
                </div>

                {/* Featured service */}
                <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-md">

                    <div className="grid md:grid-cols-2">

                        <div className="relative aspect-[3/2]">
                            <Image
                                src={featured.image}
                                alt={featured.title}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-center"
                            />
                        </div>

                        <div className="flex flex-col justify-center p-8 md:p-12">

                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                                {featured.title}
                            </h2>

                            <p className="mt-4 text-lg leading-8 text-gray-600">
                                {featured.description}
                            </p>

                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-block rounded-lg bg-gray-900 px-7 py-3 font-semibold text-white transition hover:bg-gray-700"
                                >
                                    Book a session
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Other services */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {rest.map((service) => (
                        <div
                            key={service.title}
                            className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                        >

                            <div className="relative aspect-[3/2]">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover object-center"
                                />
                            </div>

                            <div className="p-6">
                                <h2 className="text-lg font-bold text-gray-900">
                                    {service.title}
                                </h2>

                                <p className="mt-2 leading-7 text-gray-600">
                                    {service.description}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

                {/* Closing */}
                <div className="mt-16 rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center">

                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        Ready to work with us?
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-gray-600">
                        Tell us about your event or project and we will get back
                        to you.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="rounded-lg bg-gray-900 px-7 py-3 font-semibold text-white transition hover:bg-gray-700"
                        >
                            Contact Us
                        </Link>

                        <Link
                            href="/portfolio"
                            className="rounded-lg border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-900 transition hover:border-gray-400 hover:shadow-md"
                        >
                            View Portfolio
                        </Link>
                    </div>

                </div>

            </section>

        </main>
    )
}