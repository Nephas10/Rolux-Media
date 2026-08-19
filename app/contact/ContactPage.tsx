"use client"
import { useState } from "react"
import { MdEmail, MdLocationOn  } from 'react-icons/md'
import { ImPhone } from 'react-icons/im'


export default function Contact(){
    const [loading, setLoading] = useState(false)

    return (
        <main className="min-h-screen bg-gray-50 px-6 py-16">
            {/*Page title*/}
            <div className="mx-auto mb-12 max-w-6xl text-center">
                <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                    Contact Us
                </h1>
                <p className="mt-4 text-gray-600">
                    We would love to hear from you.
                </p>
            </div>
            {/*Main content */}
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
                {/* Contact Info*/}
                <div className="rounded-2xl bg-gray-900 p-8 text-white shadow-lg">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold">
                            Contact Information
                        </h3>
                        <p className="mt-3 text-gray-400">
                            Reach out to us through our channels below.
                        </p>
                    </div>
                    {/* Email */}
                    <div className="mb-6 flex items-start gap-4">
                        <MdEmail className="mt-1 text-2xl text-blue-400" />
                        <div>
                            <h4 className="font-semibold">
                                Email
                            </h4>
                            <p className="mt-1 text-gray-400">
                                roluxmedia@gmail.com
                            </p>
                        </div>
                    </div>
                    {/* Phone */}
                    <div className="mb-6 flex items-start gap-4">
                        <ImPhone className="mt-1 text-xl text-blue-400"/>
                        <div>
                            <h4 className="font-semibold">
                                Phone
                            </h4>
                            <p className="mt-1 text-gray-400">
                                +260 976 164787
                            </p>
                            <p className="text-gray-400">
                                +260 777 682991
                            </p>
                        </div>
                    </div>
                    {/*Location*/}
                    <div className="flex items-start gap-4">
                        <MdLocationOn className="mt-1 text-2xl text-blue-400"/>
                        <div>
                            <h4 className="font-semibold">
                                Location
                            </h4>
                            <p className="mt-1 text-gray-400">
                                Southern Province
                            </p>
                            <p className="text-gray-400">
                                Livingstone
                            </p>
                        </div>
                    </div>
                </div>
                {/*Form*/}
                <div>
                    <form className="space-y-6">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                Full Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="e.g John Tembo"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="eg@example.com"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-semibold text-gray-700"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                placeholder="Message here...."
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                    </form>
                </div>
            </div>
           
        </main>
    )
}
