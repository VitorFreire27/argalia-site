'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
    { href: '#services', label: 'Serviços' },
    { href: '#how-it-works', label: 'Como Funciona' },
    { href: '#results', label: 'Resultados' },
    { href: '#contact', label: 'Contato' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isScrolled = mounted && scrolled

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)]'
                    : 'bg-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3">
                    <Image
                        src="/Papelaria/Logo-nome-argali-branca-no-preto.png"
                        alt="Argalia"
                        width={240}
                        height={60}
                        className="w-32 md:w-44 h-auto object-contain -ml-2 invert dark:invert-0"
                        priority
                    />
                </a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white text-sm font-medium transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#contact"
                        className="px-5 py-2.5 text-sm font-semibold bg-black text-white dark:bg-white dark:text-black border border-transparent dark:border-white rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300"
                    >
                        Fale Conosco
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-black dark:text-white p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <div className={`w-5 h-0.5 bg-black dark:bg-white mb-1.5 transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <div className={`w-5 h-0.5 bg-black dark:bg-white mb-1.5 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                    <div className={`w-5 h-0.5 bg-black dark:bg-white transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-black/5 dark:border-white/5 px-6 pb-6">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white text-base font-medium block py-1"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#contact"
                        className="mt-4 inline-block px-5 py-2.5 text-sm font-semibold bg-black text-white dark:bg-white dark:text-black rounded-full"
                    >
                        Fale Conosco
                    </a>
                </div>
            )}
        </header>
    )
}
