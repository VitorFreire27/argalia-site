'use client'

import { motion } from 'framer-motion'

const stats = [
    { value: '+500h', label: 'Eficiência Mensal', description: 'Tempo recuperado com automação.' },
    { value: '99.9%', label: 'Uptime Cloud', description: 'Infraestrutura de alta disponibilidade.' },
    { value: '100%', label: 'Sob Medida', description: 'Soluções desenhadas para sua meta.' },
]

export default function StatsSection() {
    return (
        <section className="py-24 border-y border-white/5 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x md:divide-white/10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center md:px-12"
                        >
                            <div className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter text-glow">
                                {stat.value}
                            </div>
                            <div className="text-platinum font-bold text-lg mb-1">{stat.label}</div>
                            <div className="text-platinum/40 text-sm">{stat.description}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
