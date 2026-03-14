import React from 'react';
import { Droplets, Cpu, Network, Database } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-[0.2em] mb-1">Step 01: System Architecture</h2>
        <h1 className="text-4xl font-bold text-white tracking-tight">Vattenkraft 2.0 Asset Map</h1>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Critical Assets', val: '12', icon: Database, color: 'text-blue-400' },
          { label: 'PLC Units', val: '08', icon: Cpu, color: 'text-emerald-400' },
          { label: 'Sensor Nodes', val: '142', icon: Network, color: 'text-purple-400' },
          { label: 'Flow Rate', val: '4.2k L/s', icon: Droplets, color: 'text-sky-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm">
            <stat.icon size={20} className={`${stat.color} mb-4`} />
            <div className="text-2xl font-bold text-white">{stat.val}</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Interaktiv Arkitektur slash Visuellt flöde */}
      <div className="bg-gradient-to-br from-slate-900 to-[#020617] border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
           <Network size={200} />
        </div>
        
        <h3 className="text-xl font-semibold mb-6">Process Control Flow (Purdue Model)</h3>
        
        <div className="flex flex-col gap-6 relative">
          {/* Visualisera flödet med linjer i CSS */}
          <div className="grid grid-cols-5 gap-4">
            {['Enterprise IT', 'DMZ', 'SCADA', 'PLC Control', 'Field Devices'].map((level, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full h-20 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center text-xs font-bold uppercase text-slate-400 hover:border-blue-500/50 transition-colors cursor-help text-center p-2">
                  Level {4-i}: {level}
                </div>
                {i < 4 && <div className="h-8 w-px bg-gradient-to-b from-blue-500 to-transparent mt-2" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}