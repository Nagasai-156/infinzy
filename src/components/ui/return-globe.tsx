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

    // Don't show the return globe on the original landing page
    if (location.pathname === '/') {
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

    const scaleRatio = winSize.w > 0 ? 240 / winSize.w : 0.125;

    return (
        <motion.div
            className={`fixed z-[100] cursor-pointer overflow-hidden border-white/20 transition-all ${isExiting ? 'pointer-events-none z-[9999] shadow-none' : 'hover:border-[#FFD700]/70 border shadow-[0_0_30px_rgba(52,0,43,0.4)] hover:shadow-[0_0_50px_rgba(255,215,0,0.6)]'}`}
            onClick={handleReturn}
            initial={false}
            animate={
                isExiting
                    ? {
                        top: 0,
                        right: 0,
                        scale: 1,
                        borderRadius: "0px",
                        borderWidth: "0px",
                    }
                    : {
                        top: 24,
                        right: 24,
                        scale: scaleRatio,
                        borderRadius: `${16 / scaleRatio}px`,
                        borderWidth: `${1.5 / scaleRatio}px`,
                    }
            }
            style={{
                width: '100vw',
                height: '100vh',
                transformOrigin: 'top right',
            }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Embedded Landing Page */}
            <iframe src="/" className="w-full h-full border-none pointer-events-none select-none overflow-hidden" tabIndex={-1} />

            {/* Overlay for tint / hover effect */}
            <motion.div
                className="absolute inset-0 bg-transparent transition-colors duration-500 pointer-events-none"
                animate={{ backgroundColor: isExiting ? "transparent" : "rgba(0,0,0,0.15)" }}
            />
        </motion.div>
    );
}
