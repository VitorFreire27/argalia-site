'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
    words: string[]
    delay?: number
    deleteSpeed?: number
    typeSpeed?: number
    pauseTime?: number
    keepPrefix?: number
}

export default function Typewriter({
    words,
    delay = 0,
    deleteSpeed = 45,
    typeSpeed = 220,
    pauseTime = 5000,
    keepPrefix = 0,
}: TypewriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        let timer: NodeJS.Timeout

        // Initial delay before starting the first word
        if (delay > 0 && currentText === '' && currentWordIndex === 0 && !isDeleting && !isPaused) {
            timer = setTimeout(() => {
                setCurrentText(words[0].substring(0, 1))
            }, delay)
            return () => clearTimeout(timer)
        }

        const handleTyping = () => {
            const currentWord = words[currentWordIndex]

            if (isPaused) {
                timer = setTimeout(() => {
                    setIsPaused(false)
                    setIsDeleting(true)
                }, pauseTime)
                return
            }

            if (isDeleting) {
                setCurrentText((prev) => prev.substring(0, prev.length - 1))
                // Stop deleting at keepPrefix
                if (currentText.length <= keepPrefix) {
                    setIsDeleting(false)
                    setCurrentWordIndex((prev) => (prev + 1) % words.length)
                    // Set text to the prefix of the NEXT word to avoid "snap" if prefixes differ slightly
                    // although here we assume prefixes are identical
                }
            } else {
                setCurrentText(currentWord.substring(0, currentText.length + 1))
                if (currentText === currentWord) {
                    setIsPaused(true)
                }
            }
        }

        const speed = isDeleting ? deleteSpeed : typeSpeed
        const currentSpeed = speed + Math.random() * 50 - 25

        if (!isPaused) {
            timer = setTimeout(handleTyping, currentSpeed)
        } else {
            handleTyping()
        }

        return () => clearTimeout(timer)
    }, [currentText, isDeleting, currentWordIndex, words, isPaused, deleteSpeed, typeSpeed, pauseTime, delay, keepPrefix])

    return (
        <span className="inline-flex items-baseline w-auto text-left">
            {keepPrefix > 0 && <span className="text-white/40">{currentText.substring(0, keepPrefix)}</span>}
            <span className="text-accent drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">{currentText.substring(keepPrefix)}</span>
            <span 
                className="inline-block w-[0.5em] h-[1.1em] bg-accent/30 ml-1 animate-pulse" 
                style={{ verticalAlign: 'middle' }} 
            />
        </span>
    )
}
