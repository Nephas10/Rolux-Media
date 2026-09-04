import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen overflow-hidden bg-gray-50">

            {/* Hero Section */}
            <section className="relative">

                {/* Decorative background */}
                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

                <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

                <div className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl items-center px-6 py-20">

                    <div className="grid w-full items-center gap-16 md:grid-cols-2">

                        {/* Image */}
                        <div className="relative order-2 flex justify-center md:order-1">

                            {/* Image background */}
                            <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-100 md:h-[460px] md:w-[460px]" />

                            <div className="relative">
                                <Image
                                    src="/rolux/rolux.jpg"
                                    alt="Rolux Media"
                                    width={420}
                                    height={420}
                                    priority
                                    sizes="(max-width: 768px) 280px, 420px"
                                    className="relative aspect-square w-[280px] rounded-full object-cover shadow-2xl md:w-[420px]"
                                />

                                {/* Floating label */}
                                <div className="absolute -bottom-4 -right-4 rounded-xl bg-white px-5 py-3 shadow-xl">
                                    <p className="text-sm font-semibold text-gray-900">
                                        Rolux Media
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Creative Media Solutions
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Content */}
                        <div className="order-1 md:order-2">

                            <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
                                Company
                                <span className="block text-blue-600">
                                    Overview
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                                Rolux Media is a creative media solutions company.
                                We provide high quality studio photography, event
                                photography, content creation and more.
                            </p>

                            <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
                                Ready to book us for your event?
                            </p>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                                <Link
                                    href="/contact"
                                    className="rounded-lg bg-gray-900 px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-gray-700"
                                >
                                    Contact Us
                                </Link>

                                <Link
                                    href="/portfolio"
                                    className="rounded-lg border border-gray-300 bg-white px-7 py-3 text-center font-semibold text-gray-900 transition hover:-translate-y-1 hover:border-gray-400 hover:shadow-md"
                                >
                                    View Portfolio
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Small introduction strip */}
            <section className="border-y border-gray-200 bg-white">

                <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-center md:grid-cols-3">

                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            Studio Photography
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Professional portraits and creative sessions.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            Event Photography
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Capturing moments that deserve to be remembered.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            Content Creation
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Creative content designed to tell your story.
                        </p>
                    </div>

                </div>

            </section>

        </main>
    );
}