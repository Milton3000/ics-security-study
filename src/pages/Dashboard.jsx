import React from 'react';
import { Droplets, Cpu, Network, Database, Activity, ShieldCheck, Server } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-10 pb-20">
      {/* HEADER SECTION */}
      <header>
        <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-[0.2em] mb-1">Step 01: System Architecture</h2>
        <h1 className="text-4xl font-bold text-white tracking-tight italic">Vattenkraft 2.0 Asset Map</h1>
        <p className="text-slate-500 mt-4 max-w-2xl leading-relaxed text-sm">
          En säkerhetsanalys av en modern dricksvattenanläggning (2026). Systemet kombinerar traditionell driftteknik (OT) 
          med moderna IIoT-lösningar för att säkerställa vattenkvalitet och drifttillgänglighet för 150 000 invånare.
        </p>
      </header>

      {/* STATS GRID - QUICK OVERVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Critical Assets', val: '12', icon: Database, color: 'text-blue-400' },
          { label: 'PLC Units', val: '08', icon: Cpu, color: 'text-emerald-400' },
          { label: 'Sensor Nodes', val: '142', icon: Network, color: 'text-purple-400' },
          { label: 'Current Flow', val: '4.2k L/s', icon: Droplets, color: 'text-sky-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-all">
            <stat.icon size={20} className={`${stat.color} mb-4`} />
            <div className="text-2xl font-bold text-white">{stat.val}</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* STEP 01: PURDUE MODEL VISUALIZATION */}
      <div className="bg-gradient-to-br from-slate-900 to-[#020617] border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Network size={200} />
        </div>
        
        <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
          <ShieldCheck className="text-blue-500" size={20} />
          Process Control Flow (Purdue Model)
        </h3>
        
        <div className="flex flex-col gap-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { level: 'Level 4', name: 'Enterprise IT', desc: 'Business Networks' },
              { level: 'Level 3', name: 'DMZ', desc: 'Secure Integration' },
              { level: 'Level 2', name: 'SCADA', desc: 'Supervisory Control' },
              { level: 'Level 1', name: 'PLC Control', desc: 'Process Logic' },
              { level: 'Level 0', name: 'Field Devices', desc: 'Sensors & Pumps' }
            ].map((level, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full h-24 bg-slate-800/50 border border-slate-700 rounded-2xl flex flex-col items-center justify-center hover:border-blue-500/50 transition-all cursor-default text-center p-4">
                  <span className="text-[10px] font-mono text-blue-500 mb-1 font-bold">{level.level}</span>
                  <span className="text-xs font-bold uppercase text-slate-200">{level.name}</span>
                  <span className="text-[10px] text-slate-500 mt-1">{level.desc}</span>
                </div>
                {i < 4 && <div className="h-6 w-px bg-gradient-to-b from-blue-500/50 to-transparent mt-2 hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STEP 02: CRITICAL ASSETS SECTION */}
      <section className="mt-12">
        <header className="mb-6">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-[0.2em] mb-1">Step 02: Critical Assets</h2>
          <h3 className="text-2xl font-bold text-white tracking-tight font-serif italic">Core Components Identification</h3>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary Assets Table */}
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
              <Server size={18} className="text-blue-400" /> System Criticality
            </h3>
            <div className="space-y-4">
              {[
                { asset: 'Siemens S7-1500 PLC', function: 'Chemical Dosage Control', status: 'Critical' },
                { asset: 'Ignition SCADA Server', function: 'Real-time Monitoring', status: 'High' },
                { asset: 'Historian Database', function: 'Compliance Logging', status: 'Medium' },
                { asset: 'Flow Sensors (IIoT)', function: 'Networked Telemetry', status: 'High' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-slate-800/50 pb-3">
                  <div>
                    <div className="text-sm font-bold text-slate-200">{item.asset}</div>
                    <div className="text-[10px] text-slate-500 uppercase">{item.function}</div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${
                    item.status === 'Critical' ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Analysis Card */}
          <div className="bg-blue-600/5 border border-blue-500/20 p-8 rounded-3xl flex flex-col justify-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
              <Activity className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 italic font-serif">Impact Analysis</h3>
            <p className="text-sm text-slate-400 leading-relaxed italic">
              "Vid en kompromettering av **Level 1 (PLC Control)** förloras den fysiska integriteten i reningsprocessen. 
              Den mest kritiska risken är obehörig manipulation av natriumhydroxid-nivåer, vilket kan leda till 
              omedelbar hälsofara för konsumenter och permanenta skador på infrastrukturen."
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <footer className="pt-10 border-t border-slate-800 text-center">
        <p className="text-[10px] text-slate-600 uppercase tracking-[0.3em]">
          Vattenkraft 2.0 // OT Cybersecurity Framework // 2026
        </p>
      </footer>
    </div>
  );
}