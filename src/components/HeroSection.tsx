'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'
import SwirlBg from './AmbientBackground/SwirlBg'

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black pb-20 pt-32">
            <SwirlBg />
            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Text Side - Occupies 7/12 columns to leave room */}
                <div className="relative z-20 flex flex-col items-start text-left w-full lg:col-span-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#11132d] border border-accent/20 text-accent-light text-[11px] font-black tracking-[0.3em] uppercase mb-12"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]" />
                        Automação • Cloud • Inteligência Artificial
                    </motion.div>

                    <div className="font-sans font-black space-y-2 mb-12 w-full select-none tracking-tighter">
                        <div className="w-full text-4xl md:text-6xl lg:text-[4.5rem] text-white leading-[1.1] min-h-[1.2em] flex items-baseline justify-start gap-x-[0.34em]">
                            <span className="text-white/40 whitespace-nowrap shrink-0">// Automatize o </span>
                            <Typewriter
                                words={['impossível.', 'complexo.', 'seu dia.']}
                                typeSpeed={120}
                                delay={500}
                                pauseTime={5000}
                                keepPrefix={0}
                            />
                        </div>
                        <div className="w-full text-4xl md:text-6xl lg:text-[4.5rem] text-white/20 leading-[1.1] min-h-[1.2em] flex items-baseline justify-start gap-x-[0.34em]">
                            <span className="text-white/30 whitespace-nowrap shrink-0">// Escale o </span>
                            <Typewriter
                                words={['futuro.', 'amanhã.', 'sucesso.']}
                                typeSpeed={120}
                                delay={2500}
                                pauseTime={5000}
                                keepPrefix={0}
                            />
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-white/60 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-normal"
                    >
                        Transformamos operações com automação inteligente, infraestrutura cloud robusta e IA customizada para o seu negócio.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className="flex flex-col sm:flex-row items-center justify-start gap-6 w-full sm:w-auto"
                    >
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-12 py-5 bg-white text-black font-black rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            Fale Conosco
                        </a>
                        <a
                            href="#services"
                            className="w-full sm:w-auto px-12 py-5 glass-card text-white font-black rounded-full border border-white/10 flex items-center justify-center gap-3 hover:bg-white/5 transition-all duration-300"
                        >
                            Ver Soluções →
                        </a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ delay: 3, duration: 1 }}
                        className="absolute -bottom-32 left-0 right-0 flex flex-col items-center gap-4 text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-platinum pointer-events-none"
                    >
                        <span>SYSTEM.SCROLLDOWN()</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent z-10" />
        </section>
    )
}
