import { useState } from 'react';
import { 
    LayoutDashboard, 
    Globe, 
    Settings, 
    LogOut 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DashboardHome from './DashboardHome';
import WebsiteOverview from './WebsiteOverview';

export default function WebsiteDashboard() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' or 'website'

    return (
        <div className="flex min-h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
            
            {/* Sidebar Navigation */}
            <aside className="w-64 border-r border-slate-900 bg-slate-900/40 backdrop-blur-xl flex flex-col hidden md:flex">
                <div className="p-8 border-b border-slate-900">
                    <span className="text-xl font-black text-white tracking-widest">WEBSCAPING</span>
                </div>
                
                <nav className="flex-1 p-6 space-y-2">
                    <button 
                        onClick={() => setActiveTab('dashboard')}
                        className={`w-full flex items-center gap-3 px-4 py-3 font-bold rounded-xl border transition-all ${
                            activeTab === 'dashboard' 
                            ? 'bg-blue-600/10 text-blue-400 border-blue-500/20' 
                            : 'text-slate-400 border-transparent hover:text-white hover:bg-slate-800'
                        }`}
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        <span>Dashboard</span>
                    </button>
                    <button 
                        onClick={() => setActiveTab('website')}
                        className={`w-full flex items-center gap-3 px-4 py-3 font-bold rounded-xl border transition-all ${
                            activeTab === 'website' 
                            ? 'bg-blue-600/10 text-blue-400 border-blue-500/20' 
                            : 'text-slate-400 border-transparent hover:text-white hover:bg-slate-800'
                        }`}
                    >
                        <Globe className="w-5 h-5" />
                        <span>My Website</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all font-medium">
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                    </button>
                </nav>

                <div className="p-6 border-t border-slate-900">
                    <button onClick={() => navigate('/')} className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-400 transition-colors font-bold">
                        <LogOut className="w-5 h-5" />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Content Swapper */}
            <main className="flex-1 overflow-y-auto relative">
                {/* Global Theme Elements */}
                <div className="fixed inset-0 pointer-events-none -z-10">
                    <div className="absolute inset-0 opacity-10" 
                        style={{ 
                            backgroundImage: 'linear-gradient(to right, rgba(96, 165, 250, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(96, 165, 250, 0.15) 1px, transparent 1px)',
                            backgroundSize: '40px 40px' 
                        }} 
                    />
                    <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                </div>

                {activeTab === 'dashboard' ? <DashboardHome /> : <WebsiteOverview />}
            </main>
        </div>
    );
}