import React from 'react';
import { Search, Skull, Share2, Zap } from 'lucide-react';

export default function AttackAnalysis() {
  const surfaces = [
    { title: 'Remote Maintenance', type: 'VPN/External', risk: 'Critical' },
    { title: 'Wireless IIoT Sensors', type: 'LoRaWAN', risk: 'Medium' },
    { title: 'Engineer Workstations', type: 'Phishing Target', risk: 'High' }
  ];

  const steps = [
    { title: 'Step 03: Attack Surfaces', icon: Search, desc: 'Fjärrunderhållsportaler och osäkrade IIoT-gateways utgör de största ingångsvägarna.' },
    { title: 'Step 04: Threat Actors', icon: Skull, desc: 'State-sponsored actors (geopolitiska motiv) och Cyberkriminella (Ransomware).' },
    { title: 'Step 05: Attack Vector (Kill Chain)', icon: Share2, desc: 'Beskrivning av hur ett intrång eskalerar från IT till OT.' }
  ];

  return (
    <div className="space-y-12 pb-20">
      <header>
        <h2 className="text-sm font-semibold text-red-500 uppercase tracking-[0.2em] mb-1">Step 03-05: Threat Landscape</h2>
        <h1 className="text-4xl font-bold text-white tracking-tight">Attack Surface & Vulnerability Analysis</h1>
      </header>

      {/* Steg-indikatorer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl border-b-4 border-b-red-500/50">
            <s.icon size={24} className="text-red-500 mb-4" />
            <h3 className="text-white font-bold text-sm mb-2 uppercase">{s.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Attackytor Table */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h3 className="font-bold text-white uppercase text-xs tracking-widest">Step 03: Identified Attack Surfaces</h3>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-800/30 text-slate-500 uppercase text-[10px] font-bold">
            <tr>
              <th className="p-4">Surface Area</th>
              <th className="p-4">Entry Type</th>
              <th className="p-4">Risk Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {surfaces.map((s, i) => (
              <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                <td className="p-4 text-slate-300 font-semibold">{s.title}</td>
                <td className="p-4 text-slate-500">{s.type}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold ${s.risk === 'Critical' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'}`}>
                    {s.risk}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Visualisering av Attackkedjan (Step 05) */}
      <div className="bg-gradient-to-r from-red-900/10 to-transparent border border-red-900/20 p-8 rounded-3xl">
        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
          <Zap className="text-red-500 fill-current" /> Step 05: The Attack Chain (Kill Chain)
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
          {['Access', 'Breach', 'Pivot', 'Execute'].map((node, i) => (
            <React.Fragment key={i}>
              <div className="w-full md:w-32 h-20 bg-slate-800 border border-slate-700 rounded-xl flex flex-col items-center justify-center shadow-lg group hover:border-red-500/50 transition-all cursor-default">
                <span className="text-[10px] text-slate-500 font-mono">0{i+1}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white">{node}</span>
              </div>
              {i < 3 && <div className="hidden md:block w-full h-px bg-slate-800 relative after:content-[''] after:absolute after:right-0 after:-top-1 after:border-y-4 after:border-y-transparent after:border-l-4 after:border-l-slate-700" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}