import { motion } from 'framer-motion';
import { CheckCircle, Check } from 'lucide-react';

export default function Hero() {
    const benefits = [
        "Generate your own custom-branded landscape website in seconds",
        "Showcase premium commercial and residential lawn care services",
        "Customize colors, logos, and testimonials dynamically",
        "Instantly build an authorized web presence for your company"
    ];

    return (
        <header className="relative overflow-hidden bg-slate-950 border-b border-slate-900 py-24 sm:py-32">

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
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">

                <motion.div
                    className="max-w-3xl space-y-10 flex flex-col items-center"
                    initial={{ opacity: 0, y: -35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-none whitespace-nowrap">
                        Welcome to <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)]">Webscaping!</span>
                    </h1>

                    {/* Styled Bullet Points */}
                    <ul className="text-left space-y-4 max-w-xl mx-auto text-slate-300 relative z-20">
                        {benefits.map((benefit, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start gap-4 text-base sm:text-lg leading-relaxed"
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15 * index + 0.3, duration: 0.5 }}
                            >
                                <div className="w-6 h-6 rounded-full bg-blue-950/80 border border-blue-900/55 flex items-center justify-center mt-0.5 shrink-0 shadow-md">
                                    <Check className="w-3.5 h-3.5 text-blue-400" />
                                </div>
                                <span>{benefit}</span>
                            </motion.li>
                        ))}
                    </ul>

                    {/* CTA Buttons */}
                    <div className="pt-6 relative z-20">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => alert("Registration form coming soon!")}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold text-lg rounded-2xl shadow-xl shadow-blue-900/45 transition-colors cursor-pointer"
                        >
                            Register your Landscaping Company
                            <CheckCircle className="w-5 h-5" />
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </header>
    );
}