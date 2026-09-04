"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
]

export default function Header() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href)

    return (
        <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/85 backdrop-blur">

            <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-sky-200">
                        <Image
                            priority
                            src="/rolux/rolux.jpg"
                            height={40}
                            width={40}
                            alt="Rolux Media"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <span className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                        Rolux Media
                    </span>
                </Link>

                {/* Desktop navigation */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                aria-current={isActive(link.href) ? "page" : undefined}
                                className={`relative font-medium transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-sky-400 after:transition-all hover:text-white hover:after:w-full ${
                                    isActive(link.href)
                                        ? "text-white after:w-full"
                                        : "text-gray-300 after:w-0"
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? "Close menu" : "Open menu"}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 transition hover:bg-gray-800 hover:text-white md:hidden"
                >
                    {open ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 7h16M4 12h16M4 17h16"
                            />
                        </svg>
                    )}
                </button>

            </nav>

            {/* Mobile navigation */}
            {open && (
                <ul
                    id="mobile-menu"
                    className="border-t border-gray-800 bg-gray-900 px-6 py-4 md:hidden"
                >
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                onClick={() => setOpen(false)}
                                aria-current={isActive(link.href) ? "page" : undefined}
                                className={`block border-l-2 py-3 pl-4 font-medium transition ${
                                    isActive(link.href)
                                        ? "border-sky-400 text-white"
                                        : "border-transparent text-gray-300 hover:border-gray-700 hover:text-white"
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

        </header>
    )
}