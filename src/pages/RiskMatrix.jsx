import { motion } from 'framer-motion';
import { AlertTriangle, Info } from 'lucide-react';

const risks = [
  { id: 1, name: 'PLC Logic Injection', prob: 4, cons: 5, color: 'bg-red-500' },
  { id: 2, name: 'OT Ransomware', prob: 5, cons: 4, color: 'bg-red-500' },
  { id: 3, name: 'Sensor Spoofing', prob: 3, cons: 4, color: 'bg-orange-500' },
  { id: 4, name: 'HMI Defacement', prob: 2, cons: 2, color: 'bg-yellow-500' },
  { id: 5, name: 'Unauthorized VPN Access', prob: 4, cons: 3, color: 'bg-orange-500' },
];

export default function RiskMatrix() {
  return (
    <div className="space-y-10">
      <header>
        <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-[0.2em] mb-1">Steg 06: Riskanalys</h2>
        <h1 className="text-4xl font-bold text-white tracking-tight">Cyber Risk Heatmap</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* --- HEATMAP VISUAL --- */}
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl shadow-2xl">
          <div className="relative">
            {/* Y-AXIS */}
            <div className="absolute -left-12 top-1/2 -rotate-90 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              Consequence (1-5)
            </div>
            
            {/* GRID */}
            <div className="grid grid-cols-5 grid-rows-5 gap-2 h-[400px] w-full border-l border-b border-slate-700 pb-2 pl-2">
              {[5, 4, 3, 2, 1].map((row) => (
                [1, 2, 3, 4, 5].map((col) => {
                  const riskFound = risks.find(r => r.prob === col && r.cons === row);
                  return (
                    <div 
                      key={`${row}-${col}`} 
                      className={`relative rounded-md flex items-center justify-center transition-all duration-500 ${
                        riskFound ? 'scale-110 shadow-lg z-10' : 'bg-slate-800/20'
                      }`}
                    >
                      {riskFound && (
                        <motion.div 
                          initial={{ scale: 0 }} animate={{ scale: 1 }}
                          className={`${riskFound.color} w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-xl cursor-pointer hover:ring-4 ring-white/20`}
                        >
                          R{riskFound.id}
                        </motion.div>
                      )}
                    </div>
                  );
                })
              ))}
            </div>
            
            {/* X-AXIS */}
            <div className="text-center mt-6 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              Probability (1-5)
            </div>
          </div>
        </div>

        {/* --- RISK LEGEND / DETAILS --- */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
            <Info size={20} className="text-blue-400" /> Identified Risk Vectors
          </h3>
          {risks.map((risk) => (
            <div key={risk.id} className="group bg-slate-900/30 border border-slate-800 p-5 rounded-2xl hover:bg-slate-800/40 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 mb-1 block">ID: R0{risk.id}</span>
                  <h4 className="font-bold text-slate-200">{risk.name}</h4>
                </div>
                <div className="px-3 py-1 bg-slate-800 rounded-full text-[10px] font-bold text-blue-400 border border-blue-500/20">
                  SCORE: {risk.prob * risk.cons}
                </div>
              </div>
              <div className="mt-4 flex gap-4 text-[10px] uppercase tracking-tighter font-bold">
                <span className="text-slate-500">Prob: <span className="text-slate-300">{risk.prob}</span></span>
                <span className="text-slate-500">Cons: <span className="text-slate-300">{risk.cons}</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KRITISK ANALYS */}
      <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-3xl">
        <h4 className="text-red-400 font-bold flex items-center gap-2 mb-4 uppercase text-sm">
          <AlertTriangle size={18} /> Kritiska Fynd
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          Analysen visar att <strong>R01 (PLC Logic Injection)</strong> utgör det mest kritiska hotet mot WaterBoy. Till skillnad från traditionell IT-säkerhet, där datakonfidentialitet prioriteras, fokuserar vi här på <strong>Safety</strong> och <strong>Integrity</strong>. En lyckad injektion av skadlig kod i kemikaliedoserings-processen har en direkt kinetisk inverkan som kan leda till förgiftning av dricksvattnet innan monitorerings-system (SCADA) hinner reagera.
        </p>
      </div>
    </div>
  );
}