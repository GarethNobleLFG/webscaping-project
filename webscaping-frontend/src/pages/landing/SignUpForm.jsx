// webscaping-frontend/src/pages/landing/SignUpForm.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Phone, Mail, ArrowRight, CheckCircle2, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '', address: '', city: '', state: '', zip: '', phoneNumber: '', email: ''
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden selection:bg-blue-600/30">
            
            {/* 1. MESH GRID (Fixed to viewport so it covers the scrollable body perfectly) */}
            <div
                className="fixed inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(96, 165, 250, 0.15) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(96, 165, 250, 0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* 2. AMBIENT GLOW ORBS (Matching the Landing Page style) */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600 blur-[130px]"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600 blur-[140px]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
                
                {/* Back Link */}
                <div className="w-full max-w-2xl mb-8">
                    <button 
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors cursor-pointer group"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-black uppercase tracking-widest">Back to Overview</span>
                    </button>
                </div>

                {submitted ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md w-full text-center py-20 px-8 bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl"
                    >
                        <div className="w-20 h-20 bg-blue-950/80 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-900/55 shadow-md">
                            <CheckCircle2 className="w-10 h-10 text-blue-400" />
                        </div>
                        <h2 className="text-3xl font-black text-white mb-4">Registration Sent!</h2>
                        <p className="text-slate-400 leading-relaxed font-medium">
                            Details received for <span className="text-blue-400 font-bold">{formData.companyName}</span>. 
                            Check <span className="text-slate-200 underline decoration-blue-500/50">{formData.email}</span> for your welcome email.
                        </p>
                        <button 
                            onClick={() => navigate('/')}
                            className="mt-10 inline-block px-10 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-2xl transition-all cursor-pointer"
                        >
                            Back to Home
                        </button>
                    </motion.div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl w-full bg-slate-900/80 backdrop-blur-sm p-8 sm:p-14 rounded-[3rem] border border-slate-800 shadow-2xl shadow-black/50"
                    >
                        <div className="mb-12 text-center">
                            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-none">
                                Register your <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)]">Company</span>
                            </h1>
                            <p className="text-slate-400 text-lg font-medium">Professional web presence in seconds.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-7">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-1">Company Identity</label>
                                <div className="relative group">
                                    <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                    <input required type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Highland Landscapes LLC"
                                        className="w-full bg-slate-950 border border-slate-800 text-white pl-14 pr-6 py-4 rounded-2xl focus:outline-none focus:border-blue-900/50 transition-all placeholder:text-slate-700 font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-1">Office Location</label>
                                <div className="relative group">
                                    <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                    <input required type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Business Address"
                                        className="w-full bg-slate-950 border border-slate-800 text-white pl-14 pr-6 py-4 rounded-2xl focus:outline-none focus:border-blue-900/50 transition-all placeholder:text-slate-700 font-medium"
                                    />
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                                    <input required type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="bg-slate-950 border border-slate-800 text-white px-6 py-4 rounded-2xl focus:border-blue-900/50 transition-all placeholder:text-slate-700 font-medium" />
                                    <input required type="text" name="state" value={formData.state} onChange={handleChange} placeholder="ST" className="bg-slate-950 border border-slate-800 text-white px-6 py-4 rounded-2xl focus:border-blue-900/50 transition-all placeholder:text-slate-700 font-medium" />
                                    <input required type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip" className="col-span-2 sm:col-span-1 bg-slate-950 border border-slate-800 text-white px-6 py-4 rounded-2xl focus:border-blue-900/50 transition-all placeholder:text-slate-700 font-medium" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-1">Phone</label>
                                    <div className="relative group">
                                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                        <input required type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="(555) 000-0000" className="w-full bg-slate-950 border border-slate-800 text-white pl-14 pr-6 py-4 rounded-2xl focus:border-blue-900/50 transition-all placeholder:text-slate-700 font-medium" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-1">Email</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                        <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="owner@company.com" className="w-full bg-slate-950 border border-slate-800 text-white pl-14 pr-6 py-4 rounded-2xl focus:border-blue-900/50 transition-all placeholder:text-slate-700 font-medium" />
                                    </div>
                                </div>
                            </div>

                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-900/40 transition-all flex items-center justify-center gap-3 mt-4 cursor-pointer"
                            >
                                Build My Presence
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </motion.div>
                )}
            </div>
        </main>
    );
}
