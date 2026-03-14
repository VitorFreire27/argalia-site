'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
    words: string[]
    delay?: number
    deleteSpeed?: number
    typeSpeed?: number
    pauseTime?: number
}

export default function Typewriter({
    words,
    delay = 0,
    deleteSpeed = 45,
    typeSpeed = 220,
    pauseTime = 5000,
}: TypewriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        let timer: NodeJS.Timeout

        // Initial delay before starting the first word (good for stagger)
        if (delay > 0 && currentText === '' && currentWordIndex === 0 && !isDeleting && !isPaused) {
            timer = setTimeout(() => {
                // start typing
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
                if (currentText === '') {
                    setIsDeleting(false)
                    // Move to next word, random or sequential
                    setCurrentWordIndex((prev) => (prev + 1) % words.length)
                }
            } else {
                setCurrentText(currentWord.substring(0, currentText.length + 1))
                if (currentText === currentWord) {
                    setIsPaused(true)
                }
            }
        }

        const speed = isDeleting ? deleteSpeed : typeSpeed
        // Slightly random realistic typing speed
        const currentSpeed = speed + Math.random() * 50 - 25

        if (!isPaused) {
            timer = setTimeout(handleTyping, currentSpeed)
        } else {
            handleTyping() // This will just trigger the pause timer
        }

        return () => clearTimeout(timer)
    }, [currentText, isDeleting, currentWordIndex, words, isPaused, deleteSpeed, typeSpeed, pauseTime, delay])

    return (
        <span className="inline-flex items-center">
            <span>{currentText}</span>
            <span className="inline-block w-[0.4em] h-[1em] bg-current ml-1 animate-pulse" style={{ verticalAlign: 'middle', animationDuration: '0.8s' }} />
        </span>
    )
}
