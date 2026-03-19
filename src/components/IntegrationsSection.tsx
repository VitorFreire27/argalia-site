'use client'

import { motion } from 'framer-motion'

const integrations = [
    { name: 'OpenAI',    logo: 'https://api.iconify.design/simple-icons:openai.svg?color=%23ffffff' },
    { name: 'AWS',       logo: 'https://api.iconify.design/simple-icons:amazonaws.svg?color=%23FF9900' },
    { name: 'Azure',     logo: 'https://api.iconify.design/logos:microsoft-azure.svg' },
    { name: 'Slack',     logo: 'https://api.iconify.design/logos:slack-icon.svg' },
    { name: 'WhatsApp',  logo: 'https://api.iconify.design/logos:whatsapp-icon.svg' },
    { name: 'Google',    logo: 'https://api.iconify.design/logos:google-icon.svg' },
    { name: 'n8n',       logo: 'https://api.iconify.design/simple-icons:n8n.svg?color=%23EA4B71' },
    { name: 'Make',      logo: 'https://api.iconify.design/simple-icons:make.svg?color=%236D00CC' },
    { name: 'Notion',    logo: 'https://api.iconify.design/simple-icons:notion.svg?color=%23ffffff' },
    { name: 'HubSpot',   logo: 'https://api.iconify.design/simple-icons:hubspot.svg?color=%23FF7A59' },
    { name: 'GitHub',    logo: 'https://api.iconify.design/simple-icons:github.svg?color=%23ffffff' },
    { name: 'Docker',    logo: 'https://api.iconify.design/logos:docker-icon.svg' },
]

export default function IntegrationsSection() {
    return (
        <section className="py-32 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        Conectados ao seu <span className="text-accent text-glow">Stack</span>
                    </motion.h2>
                    <p className="text-platinum/50 text-lg max-w-xl mx-auto font-light">
                        Integramos perfeitamente com as ferramentas que você já ama e utiliza.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
                    {integrations.map((tool, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="glass-card rounded-[2rem] p-8 flex flex-col items-center justify-center gap-6 transition-all duration-500 group cursor-pointer border-white/5 shadow-2xl relative"
                        >
                            {/* Inner Glass Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
                            
                            <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10">
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="w-12 h-12 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-all"
                                />
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-300 group-hover:text-white transition-colors relative z-10">
                                {tool.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
