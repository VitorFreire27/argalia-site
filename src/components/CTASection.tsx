'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function CTASection() {
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const inputClass =
        'w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm placeholder-platinum/30 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300 shadow-inner'

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-black">
            <div className="relative max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] font-black tracking-[0.3em] uppercase text-accent mb-4 block"
                    >
                        Contato
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
                    >
                        Pronto para transformar <br />
                        sua <span className="text-accent">operação?</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-platinum/50 text-lg max-w-2xl mx-auto font-light"
                    >
                        Fale com nossos especialistas e descubra como a IA pode escalar seu negócio.
                    </motion.p>
                </div>

                {/* Form implementation without Glows */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative rounded-[2rem]"
                >
                    <div className="relative glass-card rounded-[2rem] p-8 md:p-16 border-white/5 overflow-hidden min-h-[500px] flex flex-col justify-center">
                        {/* Shine Reflection - Subtler */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                        
                        {submitted ? (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-20"
                            >
                                <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 transition-colors">
                                    <Send className="w-10 h-10 text-accent" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4">Mensagem Enviada!</h3>
                                <p className="text-platinum/50 text-xl font-light">Entraremos em contato em breve para iniciar sua jornada.</p>
                                <button 
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-accent font-bold hover:underline"
                                >
                                    Enviar outra mensagem
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">
                                            Nome Completo
                                        </label>
                                        <input
                                            type="text"
                                            className={inputClass}
                                            placeholder="Ex: João da Silva"
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">
                                            E-mail Corporativo
                                        </label>
                                        <input
                                            type="email"
                                            className={inputClass}
                                            placeholder="Ex: joao@empresa.com"
                                            required
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        className={inputClass}
                                        placeholder="Nome da sua organização"
                                        value={form.company}
                                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">
                                        Como podemos ajudar?
                                    </label>
                                    <textarea
                                        className={`${inputClass} resize-none h-40`}
                                        placeholder="Descreva brevemente seu projeto ou desafio..."
                                        required
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-6 bg-accent text-white font-black rounded-2xl hover:bg-accent-dark hover:scale-[1.02] transition-all duration-300 text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-4 group/btn"
                                >
                                    Enviar Mensagem
                                    <Send className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
