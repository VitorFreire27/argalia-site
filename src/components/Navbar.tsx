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
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-6`}
        >
            <nav className={`max-w-5xl w-full flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
                isScrolled
                    ? 'glass-card border-accent/20 shadow-lg'
                    : 'bg-transparent border-transparent'
            }`}>
                {/* Logo */}
                <a href="#" className="flex items-center gap-3">
                    <Image
                        src="/logo-nova.png"
                        alt="Argali.ai Logo"
                        width={240}
                        height={60}
                        className="w-36 md:w-48 h-auto object-contain -ml-2"
                        priority
                    />
                </a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-platinum/70 hover:text-accent text-sm font-medium transition-all duration-200 hover:text-glow"
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
                        className="px-6 py-2 text-sm font-bold bg-accent text-white rounded-full hover:bg-accent-dark hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                    >
                        Inicie Agora
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <div className={`w-5 h-0.5 bg-white mb-1.5 transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <div className={`w-5 h-0.5 bg-white mb-1.5 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                    <div className={`w-5 h-0.5 bg-white transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-20 left-6 right-6 md:hidden glass-card border-accent/20 rounded-2xl p-6 animate-fade-in">
                    <ul className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-platinum/80 hover:text-accent text-lg font-medium block py-1"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#contact"
                        className="mt-8 w-full inline-block px-5 py-3 text-center text-sm font-bold bg-accent text-white rounded-full"
                    >
                        Fale Conosco
                    </a>
                </div>
            )}
        </header>
    )
}
