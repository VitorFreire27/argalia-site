import Image from 'next/image'
import Typewriter from './Typewriter'

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300">
            {/* Minimal Subtle Background */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-200 via-white to-white dark:from-zinc-900/40 dark:via-black dark:to-black transition-colors duration-300"></div>

            {/* Radial white glow for emphasis */}
            <div className="absolute inset-0 z-0 hero-glow opacity-60" />

            {/* Dot pattern overlay */}
            <div className="absolute inset-0 z-0 dot-pattern opacity-10 dark:opacity-30" />

            {/* Watermark Logo — centered */}
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
                <div className="relative w-[80vw] md:w-[55vw] h-[80vh] opacity-[0.05] dark:opacity-[0.07] dark:invert transition-all duration-700 ease-in-out">
                    <Image
                        src="/Papelaria/mascote-cabeca-1-argali-preto-no-branco.png"
                        alt="Argali Watermark"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Content — pure CSS animation, no hydration mismatch */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center hero-content">
                {/* Badge minimalist */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 text-xs font-medium tracking-widest uppercase mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                    </span>
                    Automação · Cloud · Inteligência Artificial
                </div>

                {/* Headline - Code Typing Effect */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold leading-tight tracking-tight mb-8">
                    <span className="text-black dark:text-white block mb-2">
                        <span className="text-zinc-400 mr-2 md:mr-4 select-none">{'//'}</span>
                        Automatize o{' '}
                        <span className="text-zinc-500">
                            <Typewriter
                                words={['impossível.', 'tedioso.', 'complexo.']}
                            />
                        </span>
                    </span>
                    <span className="text-black dark:text-white block">
                        <span className="text-zinc-400 mr-2 md:mr-4 select-none">{'//'}</span>
                        Escale o{' '}
                        <span className="text-zinc-500">
                            <Typewriter
                                words={['essencial.', 'futuro.', 'resultado.']}
                                delay={2000}
                                typeSpeed={120}
                            />
                        </span>
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium dark:font-light">
                    Transformamos operações com automação inteligente, infraestrutura cloud robusta e IA customizada para o seu negócio.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 hero-button bg-black text-white dark:bg-white dark:text-black font-extrabold rounded-full flex items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300"
                    >
                        Fale Conosco
                    </a>
                    <a
                        href="#services"
                        className="w-full sm:w-auto px-8 py-4 hero-button bg-transparent text-black dark:text-white font-semibold rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center gap-2 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
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
