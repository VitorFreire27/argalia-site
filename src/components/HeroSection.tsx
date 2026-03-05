import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-[-5%] w-[110%] h-[110%] bg-pan-infinite">
                    <Image
                        src="/hero-bg.png"
                        alt="Background"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black pointer-events-none" />
            </div>

            {/* Radial glow */}
            <div className="absolute inset-0 z-0 hero-glow" />

            {/* Dot pattern overlay */}
            <div className="absolute inset-0 z-0 dot-pattern opacity-30" />

            {/* Content — pure CSS animation, no hydration mismatch */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center hero-content">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-widest uppercase mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    Automação · Cloud · Inteligência Artificial
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight mb-6">
                    <span className="text-white">Automatize o</span>{' '}
                    <span className="gradient-text">impossível.</span>
                    <br />
                    <span className="text-white">Escale o</span>{' '}
                    <span className="gradient-text">essencial.</span>
                </h1>

                {/* Subtext */}
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Transformamos operações com automação inteligente, infraestrutura cloud robusta e IA customizada para o seu negócio.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-100 hover:scale-105 transition-all duration-300 text-sm tracking-wide"
                    >
                        Fale Conosco
                    </a>
                    <a
                        href="#services"
                        className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-300 text-sm tracking-wide"
                    >
                        Ver Soluções →
                    </a>
                </div>

                {/* Scroll hint */}
                <div className="mt-20 flex flex-col items-center gap-2 text-zinc-600">
                    <span className="text-xs font-medium tracking-widest uppercase">Role para baixo</span>
                    <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
                </div>
            </div>
        </section>
    )
}
