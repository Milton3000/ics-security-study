import React from 'react';

export default function AttackAnalysis() {
  const steps = [
    { title: 'Reconnaissance', desc: 'Attacker scans for exposed VPN gateways using Shodan.', status: 'Completed', color: 'bg-slate-500' },
    { title: 'Initial Access', desc: 'Credential stuffing attack against legacy remote access.', status: 'Active', color: 'bg-amber-500' },
    { title: 'Lateral Movement', desc: 'Breaching the DMZ via misconfigured firewall rules.', status: 'Pending', color: 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' },
    { title: 'Impact', desc: 'Manipulation of Sodium Hydroxide dosage in PLC registers.', status: 'Pending', color: 'bg-slate-800' },
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Attack Chain Analysis</h1>
      <div className="relative border-l-2 border-slate-800 ml-4 pl-12 space-y-12">
        {steps.map((s, i) => (
          <div key={i} className="relative">
            <div className={`absolute -left-[58px] top-0 w-4 h-4 rounded-full border-4 border-[#020617] ${s.color}`} />
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all cursor-default">
              <span className="text-xs font-mono text-blue-500 mb-2 block tracking-widest">PHASE_0{i+1}</span>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}