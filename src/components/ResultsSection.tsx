'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, Clock } from 'lucide-react'

const results = [
    {
        value: '-60%',
        label: 'Tempo Operacional',
        description: 'Redução em tarefas manuais repetitivas.',
        icon: <Clock className="w-6 h-6 text-accent" />,
    },
    {
        value: '+200%',
        label: 'Produtividade',
        description: 'Aumento real na entrega das equipes.',
        icon: <TrendingUp className="w-6 h-6 text-indigo-400" />,
    },
    {
        value: '24/7',
        label: 'Operação IA',
        description: 'Sistemas autônomos que nunca param.',
        icon: <Zap className="w-6 h-6 text-indigo-300" />,
    },
    {
        value: 'ROI+',
        label: 'Resultado Médio',
        description: 'Retorno visível em menos de 60 dias.',
        icon: <Users className="w-6 h-6 text-accent" />,
    },
]

export default function ResultsSection() {
    return (
        <section id="results" className="py-32 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        Métricas de <span className="text-accent text-glow">Impacto</span>
                    </motion.h2>
                    <p className="text-platinum/50 text-xl font-light">
                        O que nossos clientes alcançam com a Argalia.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {results.map((result, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card p-10 rounded-3xl border border-white/5 text-center transition-all duration-300 shadow-2xl"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                                {result.icon}
                            </div>
                            <div className="text-5xl font-black text-white mb-3 text-glow">
                                {result.value}
                            </div>
                            <div className="text-platinum font-bold text-lg mb-2">
                                {result.label}
                            </div>
                            <div className="text-platinum/40 text-sm leading-relaxed">
                                {result.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
