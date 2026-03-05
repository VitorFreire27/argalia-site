'use client'

import { useEffect, useRef } from 'react'

const results = [
    {
        value: '-60%',
        label: 'Tempo em tarefas manuais',
        description: 'médio nos primeiros 90 dias',
        icon: '⏱',
    },
    {
        value: '+200%',
        label: 'Produtividade da equipe',
        description: 'ao eliminar trabalho repetitivo',
        icon: '🚀',
    },
    {
        value: '60 dias',
        label: 'Para ver ROI positivo',
        description: 'tempo médio para retorno do investimento',
        icon: '📈',
    },
    {
        value: '24/7',
        label: 'Operação autônoma',
        description: 'sistemas funcionando sem intervenção humana',
        icon: '🤖',
    },
]

export default function ResultsSection() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
                            setTimeout(() => el.classList.add('is-visible'), i * 100)
                        })
                    }
                })
            },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="results" ref={ref} className="py-32 bg-[#040408] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-radial from-indigo-950/30 via-transparent to-transparent" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="animate-on-scroll text-center mb-16">
                    <span className="text-xs font-medium tracking-widest uppercase text-indigo-400 mb-4 block">
                        Resultados
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                        Números que <span className="gradient-text">comprovam</span>
                    </h2>
                    <p className="text-zinc-500 text-lg max-w-xl mx-auto">
                        Resultados reais de clientes que transformaram sua operação com a Argalia.
                    </p>
                </div>

                {/* Results grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {results.map((result, i) => (
                        <div
                            key={i}
                            className="animate-on-scroll glass-card rounded-2xl p-8 text-center hover:border-indigo-500/30 hover:glow-border transition-all duration-300 group"
                        >
                            <div className="text-3xl mb-4">{result.icon}</div>
                            <div className="text-4xl font-extrabold gradient-text mb-2">{result.value}</div>
                            <div className="text-white font-semibold text-base mb-1">{result.label}</div>
                            <div className="text-zinc-600 text-xs leading-relaxed">{result.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
