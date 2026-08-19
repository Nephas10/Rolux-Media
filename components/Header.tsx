"use client"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const navLinks = [
    {name: "Home", href:"/"},
    {name:"Contact", href: "/contact"},
    {name: "Portfolio", href: "/portfolio"},
    {name:"Services", href: "/services"},
    {name: "About", href:"/services"},
]

export default function Header(){
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-gray-900 backdrop-blur border-b border-sky-100">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/*Logo*/}
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-sky-200">
                       <Image
                            priority
                            src="/rolux/rolux.jpg"
                            height={40}
                            width={40}
                            alt="Rolux Media"
                            className="object-cover"
                            /> 
                    </div>
                    <span className="text-lg md:text-xl font-extrabold tracking-tight text-gray-900">
                        Rolux Media
                    </span>
                </Link>
                {/*Desktop Navigation*/}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link)=>(
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="relative text-black-700 font-medium transition hover:text-sky-600
                                           after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                                         after:bg-sky-600 after:transition-all hover:after:w-full"
                            >
                            {link.name}
                           </Link>
                        </li>
                    ))}
                </ul>

            </nav>
        </header>
    )
}