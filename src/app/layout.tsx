import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Argalia — Automação, Cloud e Inteligência Artificial',
  description: 'Transformamos operações com automação inteligente, infraestrutura cloud e IA customizada. Escale o que importa, automatize o resto.',
  keywords: ['automação', 'cloud', 'inteligência artificial', 'IA', 'automação empresarial', 'Argalia'],
  openGraph: {
    title: 'Argalia — Automação, Cloud e IA',
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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
