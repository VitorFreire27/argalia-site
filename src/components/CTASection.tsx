'use client'

import { useRef, useEffect, useState } from 'react'

export default function CTASection() {
    const ref = useRef<HTMLDivElement>(null)
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const inputClass =
        'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200'

    return (
        <section id="contact" ref={ref} className="py-32 bg-black relative overflow-hidden">
            {/* Glow background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="animate-on-scroll text-center mb-12">
                    <span className="text-xs font-medium tracking-widest uppercase text-indigo-400 mb-4 block">
                        Contato
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                        Pronto para transformar <br />
                        sua <span className="gradient-text">operação?</span>
                    </h2>
                    <p className="text-zinc-500 text-lg max-w-xl mx-auto">
                        Fale com a gente. Entendemos o seu contexto e encontramos a melhor solução.
                    </p>
                </div>

                {/* Form */}
                <div className="animate-on-scroll glass-card rounded-3xl p-8 md:p-12">
                    {submitted ? (
                        <div className="text-center py-10">
                            <div className="text-5xl mb-4">✅</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Mensagem enviada!</h3>
                            <p className="text-zinc-500">Entraremos em contato em breve.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="text-xs text-zinc-500 font-medium mb-2 block tracking-wide">
                                        Nome *
                                    </label>
                                    <input
                                        type="text"
                                        className={inputClass}
                                        placeholder="Seu nome"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-zinc-500 font-medium mb-2 block tracking-wide">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        className={inputClass}
                                        placeholder="seu@email.com"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs text-zinc-500 font-medium mb-2 block tracking-wide">
                                    Empresa
                                </label>
                                <input
                                    type="text"
                                    className={inputClass}
                                    placeholder="Nome da sua empresa"
                                    value={form.company}
                                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-xs text-zinc-500 font-medium mb-2 block tracking-wide">
                                    Mensagem *
                                </label>
                                <textarea
                                    className={`${inputClass} resize-none h-32`}
                                    placeholder="Conte-nos sobre o seu desafio ou projeto..."
                                    required
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-100 hover:scale-[1.02] transition-all duration-200 text-sm tracking-wide"
                            >
                                Enviar Mensagem →
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}
