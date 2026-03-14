import { ShieldCheck, Target, Eye, Lock, ZapOff, ClipboardCheck } from 'lucide-react';

export default function Defense() {
  const controls = [
    { 
      category: 'Network Security', 
      measure: 'Micro-segmentation (ISA/IEC 62443)', 
      impact: 'High',
      desc: 'Isolating PLC networks into restricted zones with stateful inspection firewalls.'
    },
    { 
      category: 'Access Control', 
      measure: 'MFA & PAM Integration', 
      impact: 'Medium',
      desc: 'Hardware-backed multi-factor authentication for all remote maintenance sessions.'
    },
    { 
      category: 'Monitoring', 
      measure: 'OT-Specific IDS', 
      impact: 'High',
      desc: 'Deep Packet Inspection (DPI) to detect anomalies in Modbus TCP/Profinet traffic.'
    }
  ];

  return (
    <div className="space-y-12 pb-20">
      <header>
        <h2 className="text-sm font-semibold text-emerald-500 uppercase tracking-[0.2em] mb-1">Step 07 & 08: Defense & Evaluation</h2>
        <h1 className="text-4xl font-bold text-white tracking-tight">Security Posture & Resilience</h1>
      </header>

      {/* --- DEFENSE IN DEPTH VISUAL --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {controls.map((item, i) => (
          <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <ShieldCheck size={80} />
            </div>
            <div className="relative z-10">
              <div className="text-[10px] font-mono text-emerald-500 mb-2 uppercase">{item.category}</div>
              <h3 className="text-lg font-bold text-white mb-3">{item.measure}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-400">
                <Target size={12} /> MITIGATION: {item.impact}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- EVALUATION SECTION (KRITISK UTVÄRDERING) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Residual Risk - Det som läraren letar efter för VG */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 border-t-4 border-t-amber-500">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <ZapOff className="text-amber-500" /> Residual Risk Assessment
          </h3>
          <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
            <p>
              Trots implementering av zon-baserad segmentering och MFA kvarstår risken för <strong>Supply Chain Attacks</strong>. Om en angripare komprometterar en mjukvaruuppdatering direkt från leverantören (t.ex. Siemens eller Ignition), kan skadlig kod exekveras inom den betrodda zonen.
            </p>
            <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl italic">
              "Den mänskliga faktorn (Social Engineering) förblir den svagaste länken, då administratörer med höga behörigheter kan manipuleras att kringgå tekniska kontroller."
            </div>
          </div>
        </div>

        {/* Effectiveness Evaluation */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 border-t-4 border-t-blue-500">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <ClipboardCheck className="text-blue-500" /> Cyber Defense Maturity
          </h3>
          <div className="space-y-6">
            {[
              { label: 'Detection Capability', val: '85%' },
              { label: 'Response Readiness', val: '70%' },
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
          </div>
        </div>
      </div>
    </div>
  );
}