'use client'

import { useEffect, useRef } from 'react'

const stats = [
    { value: '+500h', label: 'Economizadas por mês', description: 'em tarefas manuais eliminadas' },
    { value: '99.9%', label: 'Uptime garantido', description: 'em infraestrutura cloud' },
    { value: '100%', label: 'Soluções customizadas', description: 'para cada operação' },
]

export default function StatsSection() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
                            setTimeout(() => el.classList.add('is-visible'), i * 150)
                        })
                    }
                })
            },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={ref} className="py-24 border-y border-black/5 dark:border-white/5 bg-zinc-100 dark:bg-[#080808] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x md:divide-black/5 dark:md:divide-white/5">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="animate-on-scroll text-center md:px-12"
                        >
                            <div className="text-5xl md:text-6xl font-extrabold text-black dark:text-white mb-2 tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-zinc-700 dark:text-zinc-300 font-medium text-lg mb-1">{stat.label}</div>
                            <div className="text-zinc-500 dark:text-zinc-500 text-sm">{stat.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
