import React from 'react';
import { ShieldCheck, Target, ZapOff, ClipboardCheck } from 'lucide-react';

export default function Defense() {
  const controls = [
    { 
      category: 'Network Security', 
      measure: 'Micro-segmentation (ISA/IEC 62443)', 
      impact: 'High',
      // Kopplar åtgärden till specifika hot
      desc: 'Isolering av PLC-nätverk i zoner. Detta förhindrar Lateral Movement och skyddar Level 1-enheter om IT-nätverket (Level 4) drabbas av Ransomware.'
    },
    { 
      category: 'Access Control', 
      measure: 'MFA & PAM Integration', 
      impact: 'Medium',
      // Kopplar till stulna inloggningsuppgifter (Oldsmar)
      desc: 'Hårdvarubaserad MFA för fjärrunderhåll. Eliminerar risken med stulna inloggningsuppgifter som var den primära vektorn i Oldsmar-attacken 2021.'
    },
    { 
      category: 'Monitoring', 
      measure: 'OT-Specific IDS', 
      impact: 'High',
      // Kopplar till manipulation av data
      desc: 'Deep Packet Inspection (DPI) för att upptäcka anomalier i Modbus TCP. Identifierar obehöriga skrivkommandon eller manipulation av sensordata i realtid.'
    }
  ];

  return (
    <div className="space-y-12 pb-20">
      <header>
        <h2 className="text-sm font-semibold text-emerald-500 uppercase tracking-[0.2em] mb-1">Steg 07 & 08: Försvar & Utvärdering</h2>
        <h1 className="text-4xl font-bold text-white tracking-tight italic">Säkerhetskontroller</h1>
      </header>

      {/* --- DEFENSE MED IN DEPTH VISUAL --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {controls.map((item, i) => (
          <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl relative overflow-hidden group hover:border-emerald-500/30 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <ShieldCheck size={80} className="text-emerald-500" />
            </div>
            <div className="relative z-10">
              <div className="text-[10px] font-mono text-emerald-500 mb-2 uppercase tracking-widest">{item.category}</div>
              <h3 className="text-lg font-bold text-white mb-3">{item.measure}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-400">
                <Target size={12} /> MITIGATION: {item.impact}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*  EVALUATION SECTION  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Residual Risk */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 border-t-4 border-t-amber-500 shadow-xl">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white italic">
            <ZapOff className="text-amber-500" size={20} /> Resterande Riskbedömning
          </h3>
          <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
            <p>
              Trots zon-baserad segmentering kvarstår risken för <strong>Supply Chain Attacks</strong>. En komprometterad uppdatering från en betrodd leverantör kan kringgå brandväggar då trafiken ses som legitim.
            </p>
            <p>
              Dessutom är "Low and Slow"-attacker mot sensorer svåra att upptäcka utan extremt finjusterade baslinjer för IDS-systemet.
            </p>
            <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl italic text-xs">
              "Den mänskliga faktorn förblir den svagaste länken; social engineering mot drifttekniker kan fortfarande kringgå tekniska barriärer."
            </div>
          </div>
        </div>

        {/* Visuell mognadsgrad */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 border-t-4 border-t-blue-500 shadow-xl">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white italic">
            <ClipboardCheck className="text-blue-500" size={20} /> Cyber Defense Maturity
          </h3>
          <div className="space-y-6">
            {[
              { label: 'Detection Capability (OT-IDS)', val: '85%' },
              { label: 'Response Readiness (IR)', val: '70%' },
              { label: 'Recovery Time (RTO)', val: '4h' },
            ].map((metric, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs font-bold uppercase mb-2">
                  <span className="text-slate-500">{metric.label}</span>
                  <span className="text-blue-400">{metric.val}</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                    style={{ width: metric.val.includes('%') ? metric.val : '100%' }}
                  />
                </div>
              </div>
            ))}
            <p className="text-[10px] text-slate-500 italic mt-4 uppercase tracking-tighter">
              Bedömning baserad på simulerade intrångstester mot kontrollnätverket.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}