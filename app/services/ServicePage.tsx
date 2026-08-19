"use client"

import Image from "next/image"
import { Services } from "@/data/services"

interface ServiceDetails {
    title: string
    description: string
    image: string
}

export default function Service() {
    return (
        <main className="min-h-screen bg-gray-50">

            <section className="mx-auto max-w-7xl px-6 py-16">

                {/* Heading */}
                <div className="mb-12 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                        What we do
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
                        Our Services
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        From photography and videography to design and web
                        development, we bring creative ideas to life.
                    </p>
                </div>

                {/* Services */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {Services.map((service) => (
                        <div
                            key={service.title}
                            className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >

                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">

                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />

                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-xl font-bold text-gray-900">
                                    {service.title}
                                </h3>

                                <p className="mt-3 leading-7 text-gray-600">
                                    {service.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </section>

        </main>
    )
}