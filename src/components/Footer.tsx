import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="border-t border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-black py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Logo + Mascote */}
                <div className="flex items-center gap-4">
                    <Image
                        src="/Papelaria/Logo-nome-argali-branca-no-preto.png"
                        alt="Argalia"
                        width={240}
                        height={60}
                        className="w-32 md:w-44 h-auto object-contain -ml-2 opacity-80 hover:opacity-100 transition-opacity invert dark:invert-0"
                    />
                    <Image
                        src="/Papelaria/mascote-cabeca-1-argali-preto-no-branco.png"
                        alt="Mascote Argali"
                        width={48}
                        height={48}
                        className="w-10 h-10 object-contain opacity-50 hover:opacity-90 transition-opacity invert dark:invert-0"
                    />
                </div>

                {/* Links */}
                <div className="flex items-center gap-8 text-sm text-zinc-500">
                    <a href="#services" className="hover:text-black dark:hover:text-white transition-colors">Serviços</a>
                    <a href="#how-it-works" className="hover:text-black dark:hover:text-white transition-colors">Processo</a>
                    <a href="#results" className="hover:text-black dark:hover:text-white transition-colors">Resultados</a>
                    <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contato</a>
                </div>

                {/* Copyright */}
                <p className="text-zinc-400 dark:text-zinc-700 text-sm">
                    © 2026 Argalia. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}
