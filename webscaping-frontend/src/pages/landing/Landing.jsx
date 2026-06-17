import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown,
    Star,
    ShieldCheck,
    Menu,
    X,
} from 'lucide-react';
import Hero from './Hero';
import HowItWorks from './HowItWorks';

export default function Landing() {
    const [activeFaq, setActiveFaq] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const testimonials = [
        {
            name: "Marcus Vance",
            company: "GreenVance Lawn Maintenance",
            rating: 5,
            quote: "Webscaping completely changed how we route our crews. We increased our weekly mowing clients by 45% in under two months while cutting down travel times."
        },
        {
            name: "Elena Rostova",
            company: "Bloom & Shrub Designs",
            rating: 5,
            quote: "As a specialized boutique landscaper, getting matched with high-ticket commercial accounts was hard. Webscaping streams targeted commercial leads directly to us."
        },
        {
            name: "Dave Miller",
            company: "Dave's Premium Landscaping",
            rating: 5,
            quote: "The interface makes client scheduling and invoicing seamless. I can run my entire operational workflow on the road directly from my phone."
        }
    ];

    const faqs = [
        {
            q: "How does Webscaping match companies with clients?",
            a: "Our algorithm uses geolocation and client service preferences. We route incoming bookings to the registered companies service-enabled in those specific zones to ensure minimal travel time and higher scheduling density."
        },
        {
            q: "What are the fees associated with joining?",
            a: "Registration is free! We offer flexible plans including small flat-rate monthly memberships or transaction-based commissions for client dispatch, letting you scale with our platform at your own velocity."
        },
        {
            q: "Can I manage commercial and residential bookings separately?",
            a: "Absolutely. Our service selection tool allows you to designate which property categories (residential, small commercial, or corporate estates) your crew works on."
        }
    ];

    const partners = [
        { name: "John Deere", logo: "🚜" },
        { name: "Husqvarna", logo: "⚙️" },
        { name: "SiteOne Supply", logo: "🌿" },
        { name: "Rain Bird", logo: "💧" },
        { name: "Toro", logo: "⚡" }
    ];

    return (
        <div className="bg-slate-950 text-slate-100 font-sans min-h-screen selection:bg-blue-600/30 selection:text-blue-200">
            {/* STICKY NAVIGATION BAR */}
            <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">

                        {/* Logo / Brand */}
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-black text-white tracking-wider">
                                WEBSCAPING
                            </span>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#" className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">Home</a>
                            <a href="#how-it-works" className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">How It Works</a>
                            <a href="#testimonials" className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">Testimonials</a>
                            <a href="#faq" className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors">FAQ</a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={() => alert("Login portal coming soon!")}
                                className="px-6 py-2.5 border border-blue-700/40 text-blue-400 hover:bg-blue-950/50 hover:border-blue-500/60 font-bold text-sm rounded-xl cursor-pointer transition-all"
                            >
                                Log In
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 text-slate-300 hover:text-blue-400"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>

                    </div>
                </div>

                {/* Mobile Navigation Drawer */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-slate-900 bg-slate-950"
                        >
                            <div className="px-4 pt-4 pb-6 space-y-3 font-medium">
                                <a href="#" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-blue-400">Home</a>
                                <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-blue-400">How It Works</a>
                                <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-blue-400">Testimonials</a>
                                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-200 hover:text-blue-400">FAQ</a>
                                {/* CTA Buttons */}
                                <button
                                    onClick={() => { setMobileMenuOpen(false); alert("Login portal coming soon!"); }}
                                    className="w-full text-center py-3 border border-blue-800/40 text-blue-400 hover:bg-blue-950 hover:border-blue-500/50 font-bold rounded-xl cursor-pointer"
                                >
                                    Log In
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* 1. HEADER / HERO SECTION */}
            <Hero />

            {/* 2. HOW IT WORKS */}
            <HowItWorks />

            {/* 3. TESTIMONIALS */}
            <section id="testimonials" className="py-24 bg-slate-950 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">Success Stories</span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-16">Partner Feedback</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((test, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-850/60 text-left flex flex-col justify-between"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <div className="space-y-4">
                                    <div className="flex gap-1">
                                        {[...Array(test.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-amber-550 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-slate-350 text-slate-300 text-sm italic leading-relaxed">
                                        "{test.quote}"
                                    </p>
                                </div>

                                <div className="mt-8 border-t border-slate-800 pt-4">
                                    <h4 className="font-bold text-slate-200 text-base">{test.name}</h4>
                                    <span className="text-xs text-slate-500 font-medium">{test.company}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. COMPANIES WE PARTNER WITH */}
            <section className="py-16 bg-slate-900 border-y border-slate-850/90 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-xs text-slate-500 font-black tracking-widest uppercase mb-10">Supporting Leading Industry Equipment & Supplies</h3>

                    <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20">
                        {partners.map((partner, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-center gap-3 grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                whileHover={{ y: -4 }}
                            >
                                <span className="text-4xl">{partner.logo}</span>
                                <span className="text-lg font-extrabold tracking-tight text-slate-350">{partner.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FAQ */}
            <section id="faq" className="py-24 bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">Support Center</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = activeFaq === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`border rounded-2xl transition-all ${isOpen ? 'border-blue-500/40 bg-blue-950/20' : 'border-slate-900 bg-slate-900'
                                        }`}
                                >
                                    <button
                                        className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-200 hover:text-blue-400 gap-4"
                                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                                    >
                                        <span>{faq.q}</span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="shrink-0"
                                        >
                                            <ChevronDown className="w-5 h-5 text-slate-500" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-950 pt-4">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 6. FOOTER */}
            <footer className="bg-black/40 text-slate-400 py-16 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-900">

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-black text-white tracking-widest text-blue-500 animate-pulse">WEBSCAPING</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Optimizing business terrain and routing efficiency for small-business crews and commercial landscaping contractors.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Operations</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-blue-400 transition">Route Scoping</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Client Dispatch</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Partner API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Success Stories</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Support Team</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Security</h4>
                        <div className="text-sm text-slate-400 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-blue-400" />
                            <span>Verified Merchant Processing</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                    <span>&copy; {new Date().getFullYear()} Webscaping. All rights reserved.</span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}