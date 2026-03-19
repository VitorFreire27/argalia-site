import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    DEFAULT: '#6366f1', // Indigo 500
                    light: '#818cf8',  // Indigo 400
                    dark: '#4f46e5',   // Indigo 600
                    glow: 'rgba(99, 102, 241, 0.5)',
                },
                surface: {
                    DEFAULT: '#020617', // Slate 950 (Midnight)
                    card: 'rgba(15, 23, 42, 0.6)', // Slate 900 with transparency
                    border: 'rgba(30, 41, 59, 0.5)', // Slate 800 with transparency
                    muted: '#1e293b', // Slate 800
                },
                platinum: {
                    DEFAULT: '#f8fafc', // Slate 50
                    muted: '#94a3b8',   // Slate 400
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
}

export default config
