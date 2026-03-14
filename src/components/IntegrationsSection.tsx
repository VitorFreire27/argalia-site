'use client'

import { useEffect, useRef } from 'react'

const integrations = [
    { name: 'OpenAI',    logo: 'https://cdn.simpleicons.org/openai/412991' },
    { name: 'AWS',       logo: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
    { name: 'Azure',     logo: 'https://cdn.simpleicons.org/microsoftazure/0078D4' },
    { name: 'Slack',     logo: 'https://cdn.simpleicons.org/slack/4A154B' },
    { name: 'WhatsApp',  logo: 'https://cdn.simpleicons.org/whatsapp/25D366' },
    { name: 'Google',    logo: 'https://cdn.simpleicons.org/google/4285F4' },
    { name: 'n8n',       logo: 'https://cdn.simpleicons.org/n8n/EA4B71' },
    { name: 'Make',      logo: 'https://cdn.simpleicons.org/make/6D00CC' },
    { name: 'Notion',    logo: 'https://cdn.simpleicons.org/notion/000000' },
    { name: 'HubSpot',   logo: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
    { name: 'GitHub',    logo: 'https://cdn.simpleicons.org/github/181717' },
    { name: 'Docker',    logo: 'https://cdn.simpleicons.org/docker/2496ED' },
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
        <section ref={ref} className="py-32 bg-zinc-50 dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="animate-on-scroll text-center mb-16">
                    <span className="text-xs font-medium tracking-widest uppercase text-zinc-600 dark:text-zinc-400 mb-4 block">
                        Integrações
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white leading-tight mb-4 tracking-tight">
                        Conectamos com o que você <span className="text-zinc-500 dark:text-zinc-400">já usa</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-500 text-lg max-w-xl mx-auto">
                        Integramos com +100 ferramentas. Aqui estão algumas das mais populares.
                    </p>
                </div>

                {/* Integration grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {integrations.map((tool, i) => (
                        <div
                            key={i}
                            className="animate-on-scroll glass-card rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-zinc-300 dark:hover:border-zinc-500/50 hover:bg-white dark:hover:bg-zinc-800/40 transition-all duration-300 group cursor-default"
                        >
                            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    width={36}
                                    height={36}
                                    className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            <span className="text-xs text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors font-medium">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
