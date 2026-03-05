import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="Argalia"
                        width={240}
                        height={80}
                        className="w-32 md:w-48 h-auto object-contain -ml-2"
                    />
                </div>

                {/* Links */}
                <div className="flex items-center gap-8 text-sm text-zinc-500">
                    <a href="#services" className="hover:text-white transition-colors">Serviços</a>
                    <a href="#how-it-works" className="hover:text-white transition-colors">Processo</a>
                    <a href="#results" className="hover:text-white transition-colors">Resultados</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contato</a>
                </div>

                {/* Copyright */}
                <p className="text-zinc-700 text-sm">
                    © 2026 Argalia. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}
