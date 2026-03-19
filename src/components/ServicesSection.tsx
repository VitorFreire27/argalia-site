'use client'

import { motion } from 'framer-motion'
import { Bot, Cloud, Cpu, Globe, Rocket, Shield } from 'lucide-react'

const services = [
    {
        icon: <Bot className="w-8 h-8 text-accent" />,
        title: 'Automação Inteligente',
        description: 'Eliminamos tarefas repetitivas com workflows inteligentes que aprendem com seus dados.',
        tags: ['n8n', 'Make', 'AI Agents'],
        className: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-accent/10 to-transparent',
    },
    {
        icon: <Cloud className="w-8 h-8 text-indigo-400" />,
        title: 'Cloud Premium',
        description: 'Infraestrutura robusta com 99.9% de uptime garantido.',
        tags: ['AWS', 'Azure'],
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        icon: <Cpu className="w-8 h-8 text-indigo-300" />,
        title: 'IA Customizada',
        description: 'Modelos de linguagem treinados especificamente para o seu nicho.',
        tags: ['LLMs', 'RAG'],
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        icon: <Shield className="w-8 h-8 text-accent" />,
        title: 'Cibersegurança',
        description: 'Proteção de dados em nível bancário para todas as suas automações.',
        tags: ['Security', 'Encryption'],
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        icon: <Rocket className="w-8 h-8 text-indigo-200" />,
        title: 'Escalabilidade',
        description: 'Cresça sem limites técnicos. Nossa infra acompanha seu sucesso.',
        tags: ['DevOps', 'Scale'],
        className: 'md:col-span-1 md:row-span-1',
    },
]

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-12 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-accent/10 rounded-full px-6 py-2 border border-accent/20 text-accent-light text-xs font-bold tracking-[0.3em] uppercase mb-8 inline-block mx-auto"
                    >
                        Ecossistema Argali
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter"
                    >
                        Soluções que <span className="text-accent text-glow">Redefinem</span> o Futuro.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-platinum/50 text-lg sm:text-xl max-w-2xl mx-auto font-light px-4"
                    >
                        Não apenas automatizamos. Criamos inteligência que evolui com o seu negócio.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto md:auto-rows-[220px]">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`bg-[#0a0a0c] p-8 rounded-3xl border border-white/10 flex flex-col justify-between group transition-all duration-500 cursor-pointer overflow-hidden ${service.className}`}
                        >
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-accent/20 transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Globe className="w-5 h-5 text-accent/50" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-platinum/50 text-sm leading-relaxed mb-4 line-clamp-2">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold text-accent-light bg-accent/5 rounded-md border border-accent/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
