import { motion } from 'framer-motion';
import { UserPlus, Layout, Rocket, Check, Globe } from 'lucide-react';

// Animation for Step 1: Register Your Company
const RegisterAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.div 
            className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-400/30"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
            <UserPlus className="w-6 h-6 text-blue-400" />
        </motion.div>
        <motion.div 
            className="absolute top-2 right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-slate-950"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
        >
            <Check className="w-3 h-3 text-white stroke-[4]" />
        </motion.div>
    </div>
);

// Animation for Step 2: Build & Customize
const BuildAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center p-2">
        <motion.div className="grid grid-cols-2 gap-1.5 w-full">
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className="h-6 bg-blue-500/10 border border-blue-500/30 rounded-md"
                    animate={{ 
                        opacity: [0.3, 1, 0.3],
                        borderColor: i === 1 ? ["rgba(59,130,246,0.3)", "rgba(59,130,246,0.8)", "rgba(59,130,246,0.3)"] : "rgba(59,130,246,0.3)"
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
            ))}
        </motion.div>
        <Layout className="absolute w-6 h-6 text-blue-400/80 pointer-events-none" />
    </div>
);

// Animation for Step 3: Deployment
const DeployAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
            animate={{ 
                rotate: 360,
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center opacity-20"
        >
            <Globe className="w-12 h-12 text-blue-400" />
        </motion.div>
        <motion.div
            animate={{ 
                y: [10, -10, 10],
                x: [0, 2, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
            <Rocket className="w-8 h-8 text-blue-400" />
        </motion.div>
    </div>
);

export default function HowItWorks() {
    const steps = [
        {
            viz: <RegisterAnimation />,
            title: "1. Register Your Company",
            desc: "Join the network and set up your business identity in minutes. Our onboarding process is designed to get you started without the technical headache."
        },
        {
            viz: <BuildAnimation />,
            title: "2. Build Your Website",
            desc: "Create a professional website with powerful email services, integrated booking, and deep site customizations through our industry-leading templates."
        },
        {
            viz: <DeployAnimation />,
            title: "3. Deploy & Scale",
            desc: "Launch your site instantly for your customers to use. Start accepting bookings and professionalizing your client interactions immediately."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-slate-900/60 border-b border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">The Process</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-16">How Webscaping Works</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className="group bg-slate-950 p-8 rounded-3xl shadow-xl hover:shadow-blue-900/10 transition-all border border-slate-900 text-left relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="w-20 h-20 bg-blue-950/40 border border-blue-900/30 rounded-2xl flex items-center justify-center mb-8 group-hover:border-blue-500/50 transition-colors">
                                {step.viz}
                            </div>
                            <h3 className="text-xl font-bold text-slate-100 mb-4">{step.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                            
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/5 blur-3xl rounded-full group-hover:bg-blue-600/10 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}