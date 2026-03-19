'use client'

import React, { useEffect, useRef } from 'react'
import { SimplexNoise } from '@/utils/noise'

const particleCount = 400;
const particlePropCount = 9;
const particlePropsLength = particleCount * particlePropCount;
const rangeY = 150;
const baseTTL = 100;
const rangeTTL = 200;
const baseSpeed = 0.5;
const rangeSpeed = 1.5;
const baseRadius = 1;
const rangeRadius = 3;
const baseHue = 239; // Argali Indigo
const rangeHue = 30;
const noiseSteps = 6;
const xOff = 0.0015;
const yOff = 0.0015;
const zOff = 0.0006;
const backgroundColor = 'hsla(0, 0%, 0%, 1)';

export default function SwirlBg() {
    const canvasARef = useRef<HTMLCanvasElement>(null);
    const canvasBRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvasA = canvasARef.current;
        const canvasB = canvasBRef.current;
        if (!canvasA || !canvasB) return;

        const ctxA = canvasA.getContext('2d');
        const ctxB = canvasB.getContext('2d');
        if (!ctxA || !ctxB) return;

        let tick = 0;
        let simplex = new SimplexNoise();
        let particleProps = new Float32Array(particlePropsLength);
        let center: [number, number] = [0, 0];

        const rand = (n: number) => n * Math.random();
        const randRange = (n: number) => n - rand(2 * n);
        const fadeInOut = (t: number, m: number) => {
            let hm = 0.5 * m;
            return Math.abs((t + hm) % m - hm) / (hm);
        };
        const lerp = (n1: number, n2: number, speed: number) => (1 - speed) * n1 + speed * n2;

        const initParticle = (i: number) => {
            let x, y, vx, vy, life, ttl, speed, radius, hue;
            x = rand(canvasA.width);
            y = center[1] + randRange(rangeY);
            vx = 0;
            vy = 0;
            life = 0;
            ttl = baseTTL + rand(rangeTTL);
            speed = baseSpeed + rand(rangeSpeed);
            radius = baseRadius + rand(rangeRadius);
            hue = baseHue + randRange(rangeHue);

            particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
        };

        const initParticles = () => {
            tick = 0;
            simplex = new SimplexNoise();
            particleProps = new Float32Array(particlePropsLength);
            for (let i = 0; i < particlePropsLength; i += particlePropCount) {
                initParticle(i);
            }
        };

        const drawParticle = (x: number, y: number, x2: number, y2: number, life: number, ttl: number, radius: number, hue: number) => {
            ctxA.save();
            ctxA.lineCap = 'round';
            ctxA.lineWidth = radius;
            ctxA.strokeStyle = `hsla(${hue}, 80%, 65%, ${fadeInOut(life, ttl) * 0.5})`;
            ctxA.beginPath();
            ctxA.moveTo(x, y);
            ctxA.lineTo(x2, y2);
            ctxA.stroke();
            ctxA.closePath();
            ctxA.restore();
        };

        const checkBounds = (x: number, y: number) => {
            return x > canvasA.width || x < 0 || y > canvasA.height || y < 0;
        };

        const updateParticle = (i: number) => {
            let i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i, i7 = 6 + i, i8 = 7 + i, i9 = 8 + i;
            let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;

            x = particleProps[i];
            y = particleProps[i2];
            n = simplex.noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * Math.PI * 2;
            vx = lerp(particleProps[i3], Math.cos(n), 0.5);
            vy = lerp(particleProps[i4], Math.sin(n), 0.5);
            life = particleProps[i5];
            ttl = particleProps[i6];
            speed = particleProps[i7];
            x2 = x + vx * speed;
            y2 = y + vy * speed;
            radius = particleProps[i8];
            hue = particleProps[i9];

            drawParticle(x, y, x2, y2, life, ttl, radius, hue);

            life++;

            particleProps[i] = x2;
            particleProps[i2] = y2;
            particleProps[i3] = vx;
            particleProps[i4] = vy;
            particleProps[i5] = life;

            (checkBounds(x, y) || life > ttl) && initParticle(i);
        };

        const drawParticles = () => {
            for (let i = 0; i < particlePropsLength; i += particlePropCount) {
                updateParticle(i);
            }
        };

        const renderGlow = () => {
            ctxB.save();
            ctxB.filter = 'blur(8px) brightness(150%)';
            ctxB.globalCompositeOperation = 'lighter';
            ctxB.drawImage(canvasA, 0, 0);
            ctxB.restore();
        };

        const renderToScreen = () => {
            ctxB.save();
            ctxB.globalCompositeOperation = 'lighter';
            ctxB.drawImage(canvasA, 0, 0);
            ctxB.restore();
        };

        const resize = () => {
            const { innerWidth, innerHeight } = window;
            canvasA.width = innerWidth;
            canvasA.height = innerHeight;
            canvasB.width = innerWidth;
            canvasB.height = innerHeight;
            center[0] = 0.5 * canvasA.width;
            center[1] = 0.5 * canvasA.height;
        };

        const draw = () => {
            tick++;
            ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
            ctxB.fillStyle = backgroundColor;
            ctxB.fillRect(0, 0, canvasB.width, canvasB.height);

            drawParticles();
            renderGlow();
            renderToScreen();

            animationFrameId = requestAnimationFrame(draw);
        };

        let animationFrameId: number;
        resize();
        initParticles();
        draw();

        window.addEventListener('resize', resize);
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <canvas ref={canvasARef} className="hidden" />
            <canvas ref={canvasBRef} className="w-full h-full opacity-60" />
        </div>
    );
}
