// webscaping-frontend/src/pages/website-dashboard/DashboardHome.jsx
import { motion } from 'framer-motion';
import { 
    Plus, 
    ExternalLink, 
    Users, 
    CalendarCheck, 
    BarChart3 
} from 'lucide-react';

export default function DashboardHome() {
    const stats = [
        { label: 'Site Visitors', value: '1,284', icon: Users, color: 'text-blue-400' },
        { label: 'Bookings', value: '24', icon: CalendarCheck, color: 'text-green-400' },
        { label: 'Conversion Rate', value: '3.2%', icon: BarChart3, color: 'text-purple-400' },
    ];

    return (
        <div className="p-8 lg:p-12 max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight">Main Dashboard</h1>
                    <p className="text-slate-500 font-medium mt-1">Here's what's happening with your landscaping presence.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl shadow-lg shadow-blue-900/20 transition-all">
                    <Plus className="w-5 h-5" />
                    <span>Quick Lead</span>
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {stats.map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-sm"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-2xl bg-slate-950 border border-slate-800 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-black text-slate-600 uppercase tracking-widest">30 Days</span>
                        </div>
                        <h3 className="text-slate-400 font-bold text-sm uppercase tracking-wide">{stat.label}</h3>
                        <p className="text-3xl font-black text-white mt-1">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* Main Cards Row */}
            <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Site Preview Card */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black text-white">Site Deployment</h3>
                        <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-black rounded-full border border-green-500/20 flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                            LIVE
                        </span>
                    </div>
                    
                    <div className="w-full aspect-video bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                        <span className="text-slate-700 font-bold text-sm">Preview Thumbnail</span>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <button className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Launch Site
                        </button>
                    </div>
                </div>

                {/* Recent Activity Card */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
                    <h3 className="text-xl font-black text-white mb-8">Recent Leads</h3>
                    <div className="space-y-6">
                        {[
                            { name: 'John Doe', type: 'Lawn Mowing', time: '2h ago' },
                            { name: 'Elena Rostova', type: 'Garden Design', time: '5h ago' },
                            { name: 'Marcus Vance', type: 'Commercial Bid', time: '1d ago' }
                        ].map((lead, i) => (
                            <div key={i} className="flex items-center justify-between py-4 border-b border-slate-800 last:border-0">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-xs font-bold text-slate-400">
                                        {lead.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{lead.name}</h4>
                                        <p className="text-xs text-slate-500 font-medium">{lead.type}</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-black text-slate-600 uppercase">{lead.time}</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-3 text-slate-500 hover:text-blue-400 font-bold text-sm transition-colors">
                        Manage all leads →
                    </button>
                </div>

            </div>
        </div>
    );
}