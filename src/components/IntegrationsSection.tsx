'use client'

import { useEffect, useRef } from 'react'

const integrations = [
    { name: 'OpenAI', color: '#10a37f' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Azure', color: '#0078D4' },
    { name: 'Slack', color: '#4A154B' },
    { name: 'WhatsApp', color: '#25D366' },
    { name: 'Google', color: '#4285F4' },
    { name: 'n8n', color: '#EA4B71' },
    { name: 'Make', color: '#6D00CC' },
    { name: 'Gemini', color: '#8B5CF6' },
    { name: 'LangChain', color: '#1C3C3C' },
    { name: 'Notion', color: '#ffffff' },
    { name: 'HubSpot', color: '#FF7A59' },
]

export default function IntegrationsSection() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
                            setTimeout(() => el.classList.add('is-visible'), i * 60)
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
        <section ref={ref} className="py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="animate-on-scroll text-center mb-16">
                    <span className="text-xs font-medium tracking-widest uppercase text-indigo-400 mb-4 block">
                        Integrações
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                        Conectamos com o que você <span className="gradient-text">já usa</span>
                    </h2>
                    <p className="text-zinc-500 text-lg max-w-xl mx-auto">
                        Integramos com +100 ferramentas. Aqui estão algumas das mais populares.
                    </p>
                </div>

                {/* Integration grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {integrations.map((tool, i) => (
                        <div
                            key={i}
                            className="animate-on-scroll glass-card rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group cursor-default"
                        >
                            {/* Color dot as logo placeholder */}
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black text-white"
                                style={{ backgroundColor: tool.color + '33', border: `1px solid ${tool.color}44` }}
                            >
                                <span style={{ color: tool.color }}>{tool.name.substring(0, 2).toUpperCase()}</span>
                            </div>
                            <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors font-medium">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
