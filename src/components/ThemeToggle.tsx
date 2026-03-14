'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="fixed bottom-6 right-6 w-12 h-12 rounded-full glass-card z-[100] opacity-0" />
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full glass-card flex items-center justify-center text-accent z-[100] hover:scale-110 transition-transform duration-300 shadow-xl"
            aria-label="Alternar tema"
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-white" />
            ) : (
                <Moon className="w-5 h-5 text-black" />
            )}
        </button>
    )
}
