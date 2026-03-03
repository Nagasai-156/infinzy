import { useEffect, useRef, useState } from 'react';
import * as animeExports from 'animejs';
const anime = (animeExports as any).default || animeExports;
import { Link } from 'react-router-dom';

export default function AnimeConcept() {
    const gridRef = useRef<HTMLDivElement>(null);
    const [gridParams, setGridParams] = useState({ columns: 0, rows: 0, total: 0 });

    useEffect(() => {
        const calculateGrid = () => {
            const size = 50; // Elements size for performance & chunkiness
            const w = window.innerWidth;
            const h = window.innerHeight;
            const columns = Math.ceil(w / size);
            const rows = Math.ceil(h / size);
            setGridParams({ columns, rows, total: columns * rows });
        };
        calculateGrid();
        window.addEventListener('resize', calculateGrid);
        return () => window.removeEventListener('resize', calculateGrid);
    }, []);

    const [currentStep, setCurrentStep] = useState(-1);

    useEffect(() => {
        if (gridParams.total === 0) return;

        // Cleanup previous animations
        anime.remove('.anime-grid-item');

        // Initial setup
        anime.set('.anime-grid-item', {
            scale: 0.1,
            opacity: 1,
            translateX: 0,
            translateY: 0,
            rotate: 0,
            borderRadius: '0%',
            backgroundColor: '#111'
        });

        const timeline = anime.timeline({
            loop: true,
            autoplay: true,
        });

        // ============================================
        // 1. Raw Potential (Chaos & Disorder)
        // ============================================
        timeline.add({
            targets: '.anime-grid-item',
            scale: [
                { value: 0.1, easing: 'easeOutSine', duration: 500 },
                { value: 0.6, easing: 'easeInOutQuad', duration: 1200 }
            ],
            translateX: [
                { value: () => anime.random(-500, 500), duration: 0 },
                { value: 0, duration: 2500, easing: 'easeOutElastic(1, .6)' }
            ],
            translateY: [
                { value: () => anime.random(-500, 500), duration: 0 },
                { value: 0, duration: 2500, easing: 'easeOutElastic(1, .6)' }
            ],
            backgroundColor: [
                { value: '#0a0a0a', duration: 0 },
                { value: '#ffffff', duration: 800, delay: anime.stagger(15, { grid: [gridParams.columns, gridParams.rows], from: 'center' }) }
            ],
            delay: anime.stagger(15, { grid: [gridParams.columns, gridParams.rows], from: 'center' }),
            begin: () => setCurrentStep(0)
        })

            // ============================================
            // 2. Structural Alignment (Architecture phase)
            // ============================================
            .add({
                targets: '.anime-grid-item',
                scale: [
                    { value: 0.1, easing: 'easeInQuad', duration: 400 },
                    { value: 0.9, easing: 'easeOutSine', duration: 800 }
                ],
                rotate: anime.stagger([0, 90], { grid: [gridParams.columns, gridParams.rows], from: 'center', axis: 'x' }),
                backgroundColor: '#34002b', // Brand Deep Violet
                delay: anime.stagger(30, { grid: [gridParams.columns, gridParams.rows], from: 'center' }),
                begin: () => setCurrentStep(1)
            })

            // ============================================
            // 3. True Capability (Infinite Growth / Gold)
            // ============================================
            .add({
                targets: '.anime-grid-item',
                scale: [
                    { value: 0.2, easing: 'easeInOutSine', duration: 500 },
                    { value: 1.1, easing: 'easeOutElastic(1, .5)', duration: 1500 }
                ],
                rotate: anime.stagger([0, 180], { grid: [gridParams.columns, gridParams.rows], from: 'last' }),
                borderRadius: ['0%', '50%'],
                backgroundColor: '#FFD700', // Brand Gold
                delay: anime.stagger(25, { grid: [gridParams.columns, gridParams.rows], from: 'first' }),
                begin: () => setCurrentStep(2)
            })

            // ============================================
            // 4. Dissolve & Reset
            // ============================================
            .add({
                targets: '.anime-grid-item',
                opacity: [1, 0],
                scale: 0,
                delay: anime.stagger(15, { grid: [gridParams.columns, gridParams.rows], from: 'center' }),
                begin: () => setTimeout(() => setCurrentStep(-1), 1000)
            });

    }, [gridParams]);

    const messages = [
        "Unstructured Talent",
        "Strategic Engineering",
        "Infinite Capability"
    ];

    return (
        <div className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-center justify-center font-sans">

            {/* Background Anime Grid */}
            <div
                ref={gridRef}
                className="absolute inset-0"
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${gridParams.columns}, 50px)`,
                    gridTemplateRows: `repeat(${gridParams.rows}, 50px)`,
                    width: '100vw',
                    height: '100vh',
                }}
            >
                {Array.from({ length: gridParams.total }).map((_, i) => (
                    <div
                        key={i}
                        className="anime-grid-item relative"
                        style={{
                            width: '90%',
                            height: '90%',
                            backgroundColor: '#111',
                            transformOrigin: 'center center',
                            margin: 'auto'
                        }}
                    >
                        {/* Hover flare */}
                        <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-auto" />
                    </div>
                ))}
            </div>

            {/* Typography Overlay */}
            <div className="relative z-10 pointer-events-none text-center px-6 mix-blend-exclusion">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center ${currentStep === index
                            ? 'opacity-100 scale-100 blur-none tracking-normal'
                            : 'opacity-0 scale-125 blur-xl tracking-[0.5em]'
                            }`}
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase break-words px-4 leading-[1.1]">
                            {msg}
                        </h1>
                        <div
                            className="mt-8 md:mt-12 h-[3px] bg-white transition-all duration-[1200ms] ease-out shadow-[0_0_40px_rgba(255,255,255,0.8)]"
                            style={{ width: currentStep === index ? '200px' : '0px' }}
                        />
                    </div>
                ))}
            </div>

            {/* Nav Back */}
            <Link to="/" className="absolute top-8 left-8 z-50 flex items-center gap-2 text-white/50 hover:text-white uppercase tracking-widest text-xs font-bold font-sans transition-colors cursor-pointer border border-white/10 px-4 py-2 hover:bg-white/10 rounded-full">
                ← Return to Platform
            </Link>

        </div>
    );
}
