import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, ShieldAlert, Zap, Activity, Lock, Share2, FileText, Settings } from 'lucide-react';

// Importera dina nya sidor (vi skapar dem nedan)
import Dashboard from './pages/Dashboard';
import AttackAnalysis from './pages/AttackAnalysis';
import RiskMatrix from './pages/RiskMatrix';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'System Overview', icon: LayoutDashboard },
    { id: 'attack', label: 'Attack Vector', icon: ShieldAlert },
    { id: 'risk', label: 'Quantitative Risk', icon: Activity },
    { id: 'defense', label: 'Cyber Defense', icon: Lock },
  ];

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 border-r border-slate-800 bg-[#020617]/50 backdrop-blur-xl p-6 flex flex-col sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-12 px-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Zap size={18} className="text-white fill-current" />
          </div>
          <span className="font-bold tracking-tighter text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            ICS_OSIRIS
          </span>
        </div>

        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activePage === item.id 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
                  : 'hover:bg-slate-800/50 text-slate-500 hover:text-slate-300'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-slate-800 text-[10px] text-slate-600 uppercase tracking-widest px-2">
          Security Level: Alpha-1
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activePage === 'dashboard' && <Dashboard />}
            {activePage === 'attack' && <AttackAnalysis />}
            {activePage === 'risk' && <RiskMatrix />}
            {/* Fyll på med fler sidor här */}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}