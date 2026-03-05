'use client'

import { useEffect, useRef } from 'react'

const steps = [
    {
        number: '01',
        title: 'Diagnóstico da Operação',
        description: 'Mapeamos os processos atuais, identificamos gargalos e oportunidades de automação e IA na sua operação.',
    },
    {
        number: '02',
        title: 'Desenho da Solução',
        description: 'Projetamos a arquitetura ideal — integrações, modelos de IA, fluxos automatizados — alinhada às suas metas.',
    },
    {
        number: '03',
        title: 'Implementação e Testes',
        description: 'Desenvolvemos e implantamos com rigor: testes, validações e ajustes finos antes de entrar em produção.',
    },
    {
        number: '04',
        title: 'Suporte Contínuo',
        description: 'Monitoramos, otimizamos e evoluímos a solução continuamente para garantir máxima performance e resultado.',
    },
]

export default function HowItWorksSection() {
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
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="how-it-works" ref={ref} className="py-32 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="animate-on-scroll text-center mb-20">
                    <span className="text-xs font-medium tracking-widest uppercase text-indigo-400 mb-4 block">
                        Processo
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                        Como <span className="gradient-text">trabalhamos</span>
                    </h2>
                    <p className="text-zinc-500 text-lg max-w-xl mx-auto leading-relaxed">
                        Um processo estruturado que garante resultados concretos e mensuráveis.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="animate-on-scroll relative">
                            {/* Connector line (desktop) */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-indigo-500/30 to-transparent z-0" />
                            )}

                            <div className="relative z-10">
                                {/* Number badge */}
                                <div className="w-16 h-16 rounded-2xl glass-card border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 font-extrabold text-xl">
                                    {step.number}
                                </div>

                                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
