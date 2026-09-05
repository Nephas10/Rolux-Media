import Image from "next/image"
import Link from "next/link"
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'

export default function Footer(){
    return (
        <footer className="bg-gray-900 text-white">
            {/*Main Footer */}
            <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-4">

            {/* Brand */}
            <div>
                <div className="flex items-center gap-3">
                    <Image
                        src="/rolux/rolux.jpg"
                        alt="Rolux Media"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />

                    <span className="text-xl font-bold">
                        Rolux Media
                    </span>
                    
                </div>
                <p className="mt-4 max-w-sm text-sm text-gray-400">
                        Creative media solutions designed to bring your ideas to life.
                    </p>
            </div>

            {/* Quick Links */}
            <section>
                <h4 className="mb-4 text-lg font-semibold">
                    Quick Links
                </h4>

                <ul className="space-y-2 text-gray-400">
                    <li>
                        <Link href="/" className="hover:text-white">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href="/services" className="hover:text-white">
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact" className="hover:text-white">
                            Contact
                        </Link>
                    </li>
                </ul>
            </section>

            {/* Contact */}
            <section>
                <h4 className="mb-4 text-lg font-semibold">
                    Contact Us
                </h4>

                <p className="text-gray-400">
                    +260 976 164787
                </p>

                <p className="mt-2 text-gray-400">
                    +260 777 682991
                </p>

                <p className="mt-2 text-gray-400">
                    roluxmedia@gmail.com
                </p>
            </section>
            {/*Social Links*/}

            <section>
                <h4 className="mb-4 text-lg font-semibold">Social Links</h4>
                <FaFacebook className=""/><Link href="https://web.facebook.com/RoluxMedia1" target="_blank">Rolux Media</Link>

                <AiOutlineInstagram className=""/><Link href="https://www.instagram.com/roluxmediaofficial" target="_blank">Rolux Media Offical</Link>
            </section>

            </section>
            {/*Date */}
            <section className="border-t border-gray-800">
                <div className="mx-auto max-w-6xl px-6 py-5 text-center text-sm text-gray-500">
                   © {new Date().getFullYear()} Rolux Media. All rights reserved.
                </div>
            </section>
        </footer>
    )
}