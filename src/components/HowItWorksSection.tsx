'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, Search, Settings, Zap } from 'lucide-react'

const steps = [
    {
        icon: <Search className="w-6 h-6 text-accent" />,
        title: 'Diagnostico',
        description: 'Mapeamos sua operação e identificamos gargalos propícios para IA.',
    },
    {
        icon: <Settings className="w-6 h-6 text-indigo-400" />,
        title: 'Estratégia',
        description: 'Projetamos a arquitetura ideal de agentes e modelos para seu caso.',
    },
    {
        icon: <Zap className="w-6 h-6 text-indigo-300" />,
        title: 'Execução',
        description: 'Desenvolvimento ágil com testes rigorosos e integração fluida.',
    },
    {
        icon: <CheckCircle2 className="w-6 h-6 text-accent" />,
        title: 'Sucesso',
        description: 'Monitoramento contínuo e evolução constante da sua infra.',
    },
]

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-32 relative overflow-hidden bg-black">
            {/* Ambient Mascot Background - Enlarged and Offset Right */}
            {/* Right Side - Centered on mobile, offset on desktop */}
            <div className="absolute top-[-150px] md:top-[-400px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-[250px] lg:-right-[400px] w-[500px] md:w-[1200px] lg:w-[1600px] aspect-square pointer-events-none select-none z-0">
                <motion.div
                    initial={{ opacity: 0.023, scale: 1, x: 50 }}
                    whileInView={{ opacity: 0.023, scale: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/Papelaria/mascote-cabeca-1-argali-preto-no-branco.png"
                        alt=""
                        fill
                        className="object-contain brightness-0 invert"
                    />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 pt-24 md:pt-32">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        Fluxo de <span className="text-accent text-glow">Transformação</span>
                    </motion.h2>
                    <p className="text-platinum/50 text-lg max-w-xl mx-auto font-light">
                        Um processo desenhado para máxima eficiência e entrega de valor imediata.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="relative group flex flex-col items-center text-center md:items-start md:text-left"
                        >
                            {/* Step Indicator */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-[-32px] md:translate-x-0 text-7xl md:text-8xl font-black text-accent text-glow select-none transition-all">
                                0{i + 1}
                            </div>

                            <div className="relative z-10 pt-8">
                                <div className="w-14 h-14 rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 shadow-2xl shadow-accent/20 transition-all group-hover:border-accent/40 group-hover:bg-accent/10 mx-auto md:mx-0">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-platinum/60 text-sm leading-relaxed max-w-[280px] md:max-w-none">
                                    {step.description}
                                </p>
                            </div>

                            {/* Link Line */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-[110px] left-[100px] w-full h-[1px] bg-gradient-to-r from-accent/30 to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
