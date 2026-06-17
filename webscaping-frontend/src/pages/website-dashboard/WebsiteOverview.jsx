// webscaping-frontend/src/pages/website-dashboard/WebsiteOverview.jsx
import { motion } from 'framer-motion';
import { 
    Globe, 
    ExternalLink, 
    Edit3, 
    Plus, 
    MoreVertical,
    CheckCircle2
} from 'lucide-react';

export default function WebsiteOverview() {
    const websites = [
        {
            id: 1,
            name: "Highland Landscapes LLC",
            domain: "highland.webscaping.io",
            status: "Live",
            lastUpdated: "14m ago",
            plan: "Pro Tier"
        }
    ];

    return (
        <div className="p-8 lg:p-12 max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight">My Websites</h1>
                    <p className="text-slate-500 font-medium mt-1">Manage and monitor your active web properties.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl shadow-lg shadow-blue-900/20 transition-all">
                    <Plus className="w-5 h-5" />
                    <span>Deploy New Site</span>
                </button>
            </div>

            {/* Website List */}
            <div className="space-y-6">
                {websites.map((site) => (
                    <motion.div 
                        key={site.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8 backdrop-blur-sm group hover:border-blue-900/30 transition-all"
                    >
                        {/* Site Info */}
                        <div className="flex items-start gap-6">
                            <div className="w-20 h-20 bg-slate-950 rounded-3xl border border-slate-800 flex items-center justify-center text-blue-400 group-hover:border-blue-500/30 transition-colors">
                                <Globe className="w-10 h-10" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-2xl font-black text-white">{site.name}</h3>
                                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-black rounded-full border border-green-500/20 flex items-center gap-1.5 uppercase">
                                        <CheckCircle2 className="w-3 h-3" />
                                        {site.status}
                                    </span>
                                </div>
                                <p className="text-slate-400 font-bold flex items-center gap-2">
                                    {site.domain}
                                </p>
                                <div className="flex items-center gap-4 pt-2">
                                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{site.lastUpdated}</span>
                                    <span className="text-[10px] font-black text-blue-500/60 uppercase tracking-widest bg-blue-500/5 px-2 py-0.5 rounded-md">{site.plan}</span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <button className="flex-1 lg:flex-none px-6 py-3 bg-slate-950 hover:bg-slate-800 text-slate-300 font-bold rounded-xl border border-slate-800 transition-all flex items-center justify-center gap-2">
                                <ExternalLink className="w-4 h-4" />
                                <span>Preview</span>
                            </button>
                            <button className="flex-1 lg:flex-none px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                                <Edit3 className="w-4 h-4" />
                                <span>Edit Site</span>
                            </button>
                            <button className="p-3 text-slate-600 hover:text-white transition-colors">
                                <MoreVertical className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}