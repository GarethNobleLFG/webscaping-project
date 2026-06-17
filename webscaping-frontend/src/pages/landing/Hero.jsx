import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <header className="relative overflow-hidden bg-slate-950 border-b border-slate-900 pt-16 pb-12 sm:pt-24 sm:pb-20">

            {/* 1. MESH GRID TEXTURE */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(96, 165, 250, 0.15) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(96, 165, 250, 0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* 2. AMBIENT GLOW ORBS IN BACKROUND */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Left/Top glowing teal node */}
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600 blur-[130px]"
                />

                {/* Right/Bottom glowing indigo node */}
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600 blur-[140px]"
                />
            </div>

            {/* HERO CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">

                <motion.div
                    className="max-w-4xl space-y-8 md:space-y-10 flex flex-col items-center -mt-14"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.15] w-full">
                        Build your own landscaping <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)]">website!</span>
                    </h1>

                    {/* Paragraph */}
                    <motion.p
                        className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed relative z-20 px-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Instantly launch a professional, custom-branded landscaping website.
                        Showcase your services and build a powerful web presence in seconds.
                    </motion.p>

                    {/* CTA Button */}
                    <div className="pt-2 relative z-20 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate('/register')}
                            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold text-lg rounded-2xl shadow-xl shadow-blue-900/45 transition-colors cursor-pointer"
                        >
                            <span>Register Company</span>
                            <CheckCircle className="w-5 h-5 shrink-0" />
                        </motion.button>
                    </div>

                    {/* Social Proof Section */}
                    <motion.div
                        className="-mt-5 pt-5 flex flex-col items-center gap-6 border-t border-slate-900/50 w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <p className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-widest">
                            Our Partners:
                        </p>
                        <div className="flex justify-center items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
                            <img src="/logo.png" alt="Partner Logo" className="h-16 sm:h-20 md:h-24 w-auto" />
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </header>
    );
}