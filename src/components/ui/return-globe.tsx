import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export function ReturnGlobe() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isExiting, setIsExiting] = useState(false);
    const [winSize, setWinSize] = useState({ w: 1920, h: 1080 });

    useEffect(() => {
        setWinSize({ w: window.innerWidth, h: window.innerHeight });
        const handleResize = () => setWinSize({ w: window.innerWidth, h: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Don't show the return globe on the original landing page or /new
    if (location.pathname === '/' || location.pathname === '/new') {
        return null;
    }

    // Hide the return globe on Mobile and Tablet
    if (winSize.w < 1024) {
        return null;
    }

    const handleReturn = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isExiting) return;
        setIsExiting(true);
        setTimeout(() => {
            setIsExiting(false);
            navigate('/');
        }, 1100);
    };

    return (
        <motion.div
            className={`fixed z-[100] cursor-pointer transition-all flex items-center justify-center ${isExiting ? 'pointer-events-none z-[9999] shadow-none' : 'hover:scale-105 active:scale-95'}`}
            onClick={handleReturn}
            initial={false}
            animate={
                isExiting
                    ? {
                        top: 0,
                        right: 0,
                        scale: 1,
                        borderRadius: "0px",
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: "#000000"
                    }
                    : {
                        top: 40,
                        right: 40,
                        scale: 1,
                        borderRadius: "9999px",
                        width: 140,
                        height: 140,
                        backgroundColor: "rgba(0, 0, 0, 0.4)"
                    }
            }
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* The Globe Core */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none scale-[0.65]"
                animate={{ opacity: isExiting ? 0 : 1 }}
            >
                {/* Central Sphere / Earth */}
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#34002b] via-[#4a003e] to-black border border-white/10 shadow-[0_0_40px_rgba(52,0,43,0.9)] overflow-hidden flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white/40 tracking-[0.2em] leading-none text-center px-1">INFINIZY</span>
                    {/* Earth Detail */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 opacity-20 pointer-events-none"
                    >
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/40" />
                        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/40" />
                    </motion.div>
                </div>

                {/* Orbitals - Home to Contact theme */}
                <motion.div
                    className="absolute w-40 h-40 border border-[#FFD700]/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_15px_#FFD700]" />
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-bold tracking-widest text-white/50 uppercase">Continuum</span>
                </motion.div>

                <motion.div
                    className="absolute w-32 h-32 border border-white/5 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    style={{ rotateX: 65 }}
                >
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
                </motion.div>

                <motion.div
                    className="absolute w-48 h-48 border border-[#34002b]/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    style={{ rotateY: 80 }}
                >
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#34002b] shadow-[0_0_20px_#4a003e]" />
                </motion.div>
            </motion.div>

            {/* Pulsing ring */}
            {!isExiting && (
                <motion.div
                    className="absolute inset-0 rounded-full border border-[var(--color-brand-500)]/10"
                    animate={{ scale: [1, 1.3], opacity: [0.3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                />
            )}
        </motion.div>
    );
}
