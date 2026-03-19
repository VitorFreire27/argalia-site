import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Argali — Automação, Cloud e Inteligência Artificial',
  description: 'Transformamos operações com automação inteligente, infraestrutura cloud e IA customizada. Escale o que importa, automatize o resto.',
  keywords: ['automação', 'cloud', 'inteligência artificial', 'IA', 'automação empresarial', 'Argali'],
  openGraph: {
    title: 'Argali — Automação, Cloud e IA',
    description: 'Transformamos operações com automação inteligente, infraestrutura cloud e IA customizada.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
