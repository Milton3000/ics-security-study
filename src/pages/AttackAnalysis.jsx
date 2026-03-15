import React from 'react';
import { Search, Skull, Share2, Zap, AlertCircle, Terminal } from 'lucide-react';

export default function AttackAnalysis() {
  return (
    <div className="space-y-12 pb-20">
      <header>
        <h2 className="text-sm font-semibold text-red-500 uppercase tracking-[0.2em] mb-1">Steg 03-05: Attackytor</h2>
        <h1 className="text-4xl font-bold text-white tracking-tight italic text-shadow-glow">Sårbarhet & Riskanalys</h1>
      </header>

      {/* STEP 03: ATTACK SURFACES */}
      <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 italic">
          <Search className="text-red-500" size={20} /> Steg 03: Attackytor
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-sm text-slate-400 leading-relaxed">
              För WaterBoy identifieras tre primära attackytor. Den mest kritiska är <strong>Remote Maintenance Access</strong>. 
              Många ICS-system kräver fjärråtkomst för externa tekniker, vilket ofta sker via VPN. Om denna inte är strikt 
              segmenterad eller saknar MFA, blir den en direkt bro in i Level 2 (SCADA).
            </p>
            <div className="bg-slate-800/50 p-4 rounded-xl border-l-4 border-red-500 text-xs text-slate-300">
              <strong>Analys:</strong> Legacy-protokoll som Modbus TCP saknar inbyggd autentisering, vilket gör att en angripare 
              som väl nått nätverket kan skicka "Write Single Coil"-kommandon utan hinder.
            </div>
          </div>
          <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800">
            <h4 className="text-xs font-bold uppercase text-slate-500 mb-4 tracking-widest">Exponerade Vektorer</h4>
            <ul className="space-y-3">
              {['Exponerade RDP/VPN-portar', 'Okontrollerade USB-uttag i kontrollrum', 'IIoT-gateways med default-lösenord', 'Phishing mot driftingenjörer'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                  <AlertCircle size={14} className="text-red-900" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STEP 04: THREAT ACTORS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 italic">
            <Skull className="text-red-500" size={20} /> Steg 04: Hotaktörer
          </h3>
          <div className="space-y-4 text-sm text-slate-400">
            <p><strong>Nation-States:</strong> Strategiskt sabotage mot kritisk infrastruktur för geopolitiska mål.</p>
            <p><strong>Cybercrime Groups:</strong> Ransomware-attacker (t.ex. LockBit) som siktar på att låsa SCADA-servrar för utpressning.</p>
            <p className="italic text-xs text-slate-500 mt-4 border-t border-slate-800 pt-4">
              I fallet Oldsmar (2021) misstänktes initialt externa aktörer, men händelsen belyser vikten av att även bevaka insider-hot och svag autentisering.
            </p>
          </div>
        </div>

        {/* STEP 05: ATTACK VECTOR & CASE STUDY */}
        <div className="bg-red-900/10 border border-red-500/20 p-8 rounded-3xl relative overflow-hidden">
          <h3 className="text-xl font-bold text-white mb-4 italic">Steg 05: Case Study - Oldsmar Jämförelse</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            WaterBoy skyddar sig mot "Oldsmar-scenariot" genom att ha eliminerat TeamViewer till förmån för en 
            Zero Trust Network Access (ZTNA)-lösning. <br/> Dock kvarstår risken för en <strong>Chain Reaction</strong>:
          </p>
          <div className="space-y-2 font-mono text-[11px]">
            <div className="text-blue-400">1. Initial Access: Phishing (IT-Network)</div>
            <div className="text-slate-600">   ↓ Lateral Movement (Dual-homed SCADA Server)</div>
            <div className="text-blue-400">2. Discovery: PLC Scanning (S7-Comm/Modbus)</div>
            <div className="text-slate-600">   ↓ Protocol Manipulation</div>
            <div className="text-red-500 font-bold">3. Impact: Unauthorized Chemical Discharge</div>
          </div>
        </div>
      </section>

      {/* VISUELL ATTACK KEDJA */}
      <div className="pt-10">
         <h3 className="text-center text-xs font-bold uppercase tracking-[0.4em] text-slate-600 mb-8 text-shadow-glow">Technical Attack Path</h3>
         <div className="flex flex-wrap justify-center gap-4">
            {['Infiltration', 'Recon', 'Exploitation', 'Control', 'Sabotage'].map((step, i) => (
              <div key={i} className="group relative">
                <div className="w-28 h-28 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:border-red-500 group-hover:text-white transition-all duration-500">
                  {step}
                </div>
                {i < 4 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-slate-800" />}
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}