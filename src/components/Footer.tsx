import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="border-t border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-black py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    {/* Logo Column */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Image
                            src="/logo-nova.png"
                            alt="Argali Logo"
                            width={180}
                            height={45}
                            className="w-36 md:w-44 h-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                        />
                        <p className="text-[10px] text-platinum/30 uppercase tracking-[0.3em] font-medium">
                            Inteligência que Evolui
                        </p>
                    </div>

                    {/* Links Column */}
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {['Serviços', 'Processo', 'Resultados', 'Contato'].map((item) => (
                            <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`}
                                className="text-sm text-platinum/40 hover:text-white transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Branding/Copyright Column */}
                    <div className="flex flex-col items-center md:items-end gap-3">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/Papelaria/mascote-cabeca-1-argali-preto-no-branco.png"
                                alt="Argali Mascot"
                                width={80}
                                height={80}
                                className="w-16 h-16 md:w-20 md:h-20 object-contain brightness-0 invert opacity-60"
                            />
                            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                        </div>
                        <p className="text-[10px] text-platinum/20 font-mono">
                            © 2026 ARGALI • CODED FOR THE FUTURE
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
