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
        'w-full bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-black dark:text-white text-sm placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-black dark:focus:border-white focus:bg-zinc-50 dark:focus:bg-zinc-900 transition-all duration-200'

    return (
        <section id="contact" ref={ref} className="py-32 bg-white dark:bg-[#050505] relative overflow-hidden transition-colors duration-300">
            {/* Glow background minimal */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-black/5 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="animate-on-scroll text-center mb-12">
                    <span className="text-xs font-medium tracking-widest uppercase text-zinc-600 dark:text-zinc-400 mb-4 block">
                        Contato
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white leading-tight mb-4 tracking-tight">
                        Pronto para transformar <br />
                        sua <span className="text-zinc-500 dark:text-zinc-400">operação?</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-500 text-lg max-w-xl mx-auto">
                        Fale com a gente. Entendemos o seu contexto e encontramos a melhor solução.
                    </p>
                </div>

                {/* Form */}
                <div className="animate-on-scroll glass-card rounded-3xl p-8 md:p-12">
                    {submitted ? (
                        <div className="text-center py-10">
                            <div className="text-5xl mb-4">✅</div>
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Mensagem enviada!</h3>
                            <p className="text-zinc-600 dark:text-zinc-500">Entraremos em contato em breve.</p>
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
                                className="w-full py-4 bg-black text-white dark:bg-white dark:text-black font-bold rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 text-sm tracking-wide"
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
