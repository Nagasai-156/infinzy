import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function InvitationSection() {
    return (
        <section className="bg-[#050505] py-32 lg:py-48 px-6 lg:px-12 flex flex-col items-center justify-center w-full">

            <div className="max-w-[1200px] mx-auto text-center w-full flex flex-col items-center justify-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
                        07 // Invitation
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6"
                >
                    You are here because <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40 italic font-medium">growth matters to you.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xl md:text-2xl text-white/50 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Let’s design it deliberately.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative group"
                >
                    <button className="relative inline-flex items-center gap-4 bg-white text-black px-10 py-4 md:px-12 md:py-5 rounded-full font-semibold text-lg md:text-xl transition-all duration-300 transform group-hover:scale-105 active:scale-95 shadow-lg group-hover:shadow-xl">
                        <span className="relative z-10 flex items-center gap-3">
                            Work With Infinizy
                            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-colors duration-500">
                                <ArrowRight className="w-4 h-4 transition-transform duration-500" />
                            </span>
                        </span>
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
