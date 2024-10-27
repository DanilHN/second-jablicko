"use client"
import Link from "next/link";
import { useState } from "react";



export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="bg-transparent text-black p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <a href="" className="text-2xl font-bolt">Jablicko</a>
                <div className="hidden md:flex">
                    <Link href="/" className="mx-2 hover:text-gray-300" >O soutězi</Link>
                    <Link href="/" className="mx-2 hover:text-gray-300" >Pravidla a podmínky</Link>
                    <Link href="/" className="mx-2 hover:text-gray-300" >Harmonogram</Link>
                    <Link href="/" className="mx-2 hover:text-gray-300" >Media</Link>
                    <Link href="/contact" className="mx-2 hover:text-gray-300" >Kontakty</Link>
                    <Link href="/" className="mx-2 hover:text-gray-300" >CZ</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => {
                        setIsOpen(!isOpen)
                    }}>
                        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <g id="Menu / Close_SM">
                                    <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            ) : (
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000" />
                            )
                            }
                        </svg>
                    </button></div>

            </div>




        </nav >
    )
}