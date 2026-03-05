'use client'

import { useEffect, useRef } from 'react'

const services = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
        ),
        title: 'Automação Inteligente',
        description: 'Eliminamos tarefas repetitivas com workflows automatizados, integrações entre sistemas e bots que operam 24 horas por dia — sem intervenção humana.',
        tags: ['n8n', 'Make', 'Zapier', 'RPA'],
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        title: 'Infraestrutura Cloud',
        description: 'Escalabilidade, segurança e performance. Projetamos e gerenciamos ambientes cloud na AWS e Azure com alta disponibilidade e custo otimizado.',
        tags: ['AWS', 'Azure', 'DevOps', 'Kubernetes'],
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Inteligência Artificial',
        description: 'IA sob medida para o seu negócio: agentes inteligentes, análise preditiva, processamento de documentos e integração com modelos como GPT e Gemini.',
        tags: ['OpenAI', 'Gemini', 'LangChain', 'RAG'],
    },
]

export default function ServicesSection() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
                            setTimeout(() => el.classList.add('is-visible'), i * 120)
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
        <section id="services" ref={ref} className="py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="animate-on-scroll mb-16 max-w-2xl">
                    <span className="text-xs font-medium tracking-widest uppercase text-indigo-400 mb-4 block">
                        Nossas Soluções
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                        Tecnologia que <span className="gradient-text">transforma</span>
                    </h2>
                    <p className="text-zinc-500 text-lg leading-relaxed">
                        Combinamos automação, cloud e IA para criar soluções que eliminam ineficiências e aceleram resultados.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="animate-on-scroll glass-card rounded-2xl p-8 group hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300 cursor-default"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500/20 transition-colors duration-300">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                            {/* Description */}
                            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-medium text-zinc-400 bg-white/5 rounded-full border border-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
