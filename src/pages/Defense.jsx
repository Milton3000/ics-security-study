import { ShieldCheck, Target, ZapOff, ClipboardCheck, Terminal, Activity, ExternalLink, BookOpen } from 'lucide-react';

export default function Defense() {
  const controls = [
{ 
    category: 'Network Security', 
    measure: 'Micro-segmentation (ISA/IEC 62443)', 
    impact: 'High',
    desc: 'Isolering av PLC-nätverk i zoner. Detta förhindrar Lateral Movement och skyddar Level 1-enheter om IT-nätverket (Level 4) drabbas av Ransomware. Genom strikta brandväggsregler mellan zonerna begränsas spridningsytan vid ett eventuellt intrång.'
  },
  { 
    category: 'Access Control', 
    measure: 'MFA & PAM Integration', 
    impact: 'Medium',
    desc: 'Hårdvarubaserad MFA för fjärrunderhåll. Eliminerar risken med stulna inloggningsuppgifter som var den primära vektorn i Oldsmar-attacken 2021. Implementeringen säkerställer att endast auktoriserad personal med verifierad identitet kan modifiera kritiska driftparametrar.'
  },
{ 
    category: 'Monitoring', 
    measure: 'OT-Specific IDS', 
    impact: 'High',
    desc: 'Deep Packet Inspection (DPI) för att upptäcka anomalier i Modbus TCP. Identifierar obehöriga skrivkommandon eller manipulation av sensordata i realtid. Systemet agerar som ett digitalt immunförsvar som larmar vid avvikelser från den normala driftprofilen i kontrollnätverket.'
  }
  ];

  return (
    <div className="space-y-12 pb-20">
      <header>
        <h2 className="text-sm font-semibold text-emerald-500 uppercase tracking-[0.2em] mb-1">Steg 07 & 08: Försvar & Utvärdering</h2>
        <h1 className="text-4xl font-bold text-white tracking-tight italic">Säkerhetskontroller</h1>
      </header>

{/* DEFENSE MED IN DEPTH VISUAL */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {controls.map((item, i) => (
    <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl relative overflow-hidden group hover:border-emerald-500/30 transition-all text-shadow-glow flex flex-col min-h-[300px]">
      
      {/* Bakgrundsikon */}
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
        <ShieldCheck size={80} className="text-emerald-500" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="text-[10px] font-mono text-emerald-500 mb-2 uppercase tracking-widest">
          {item.category}
        </div>
        
        <h3 className="text-lg font-bold text-white mb-3">
          {item.measure}
        </h3>
        
        {/* flex-grow gör att denna p-tagg fyller ut tomrummet */}
        <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
          {item.desc}
        </p>

        {/* Denna div hamnar nu alltid längst ner */}
        <div className="mt-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-400 text-shadow-glow">
            <Target size={12} /> MITIGATION: {item.impact}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      {/* EVALUATION SECTION  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-shadow-glow">
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
              OBS: Den mänskliga faktorn förblir den svagaste länken; social engineering mot drifttekniker kan fortfarande kringgå tekniska barriärer.
            </div>
          </div>
        </div>

        {/* Visuell mognadsgrad */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 border-t-4 border-t-blue-500 shadow-xl">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white italic text-shadow-glow">
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

      {/* TECH */}
      <section className="mt-20 border-t border-slate-800 pt-16 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-800"></div>
          <h2 className="text-2xl font-bold text-white italic font-serif flex items-center gap-3">
            <Terminal className="text-emerald-500" size={28} /> 
            Analys: Resilience & Strategy
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-slate-300 leading-relaxed text-shadow-glow">
          
          {/* Vänster kolumn */}
          <div className="md:col-span-7 space-y-8">
            <div>
              <h3 className="text-emerald-400 font-bold uppercase text-xs tracking-[0.2em] mb-4">
                1. ISA/IEC 62443
              </h3>
              <p className="text-sm mb-4">
                I utvecklingen av WaterBoy har jag implementerat konceptet <strong>"Zones and Conduits"</strong> enligt den internationella standarden IEC 62443. Till skillnad från en traditionell IT-miljö där "härdning" ofta sker på enhetsnivå, fokuserar jag här på nätverkssegmentering som en proaktiv försvarsåtgärd.
              </p>
              <p className="text-sm">
                Genom att definiera <strong>Zone A (Filtrering)</strong> och <strong>Zone B (Dosering)</strong> som logiskt separerade enheter, begränsar vi angriparens förmåga till <em>Lateral Movement</em>. Kommunikation mellan zonerna tillåts endast via strikt definierade <strong>Conduits</strong>. Detta innebär att även om en angripare lyckas infiltrera Level 3 (DMZ), blockeras försöken att nå Level 1 (PLC) genom Deep Packet Inspection-regler som endast tillåter verifierad industriell trafik.
              </p>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 text-sm text-shadow-glow">
              <h4 className="text-white font-bold not-italic mb-2">Jämförande Analys: Oldsmar vs. WaterBoy</h4>
              I Oldsmar-incidenten (2021) utnyttjades en 'flat network'-arkitektur där en TeamViewer-access gav direkt tillgång till HMI:et. I vår arkitektur krävs ett intrång i tre separata lager: först IT-VPN med MFA, sedan DMZ-hoppet, och slutligen en autentiserad session mot SCADA-servern. Detta skapar en 'Defense-in-Depth' som gör att angreppstiden ökar exponentiellt.
            </div>
          </div>

          {/* Höger kolumn */}
          <div className="md:col-span-5 space-y-8">
            <div className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-3xl">
              <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
                <Activity size={16} className="text-emerald-500" /> Virtual Patching
              </h3>
              <p className="text-xs leading-relaxed mb-4">
                Ett kritiskt dilemma i OT-säkerhet är <strong>Patching Paradox</strong>. En PLC kan ofta inte patchas utan att bryta driften, vilket kan riskera kritisk leverans.
              </p>
              <p className="text-xs leading-relaxed">
                Lösningen i WaterBoy är <strong>Virtual Patching</strong>. Genom OT-brandväggen kan vi applicera signaturbaserat skydd som blockerar kända sårbarheter (CVE:er) på nätverksnivå innan de når den sårbarbara hårdvaran. Detta möjliggör säker drift fram till nästa planerade underhållsfönster.
              </p>
            </div>

            <div>
              <h3 className="text-emerald-400 font-bold uppercase text-xs tracking-[0.2em] mb-4">
                2. Zero Trust & Identitet
              </h3>
              <p className="text-sm">
                Vi har även fasat ut traditionell VPN-teknik till förmån för <strong>Zero Trust Network Access (ZTNA)</strong>. Varje session för fjärrunderhåll valideras mot en central Identity Provider. Ingen enhet litar på en annan bara för att den befinner sig på 'insidan'. Detta eliminerar risken för stulna inloggningsuppgifter och lateral förflyttning.
              </p>
            </div>
          </div>
        </div>

        {/* Slutgiltig utvärdering */}
        <div className="mt-16 p-8 bg-gradient-to-br from-slate-900 to-emerald-950/20 border border-slate-800 rounded-3xl text-shadow-glow">
          <h3 className="text-xl font-bold text-white mb-4 italic">Strategisk Utvärdering & Slutsats</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Denna säkerhetsarkitektur adresserar de mest kritiska hoten mot vattenförsörjningen genom att bygga barriärer både tekniskt och administrativt. Den största återstående risken är <strong>Configuration Drift</strong>, att säkerhetsinställningar luckras upp över tid. Det krävs kontinuerlig monitorering och regelbundna revisioner av brandväggsregler och åtkomsträttigheter för att bibehålla försvaret.
          </p>
          
          {/*  REFERENSLISTA  */}
      <section className="mt-20 border-t border-slate-800 pt-10 pb-10">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
          <BookOpen size={16} /> Källor
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] font-mono">
          
{/* ISA/IEC 62443 */}
<a href="https://www.isa.org/standards-and-publications/isa-standards/isa-standards-committees/isa99" 
   target="_blank" rel="noopener noreferrer"
   className="p-4 bg-slate-900/20 rounded-xl border border-slate-800/50 hover:border-emerald-500/50 transition-colors group">
  <div className="flex justify-between items-start">
    <p className="text-emerald-400 font-bold mb-1 group-hover:text-emerald-300">ISA/IEC 62443 Standard</p>
    <ExternalLink size={12} className="text-slate-600 group-hover:text-emerald-500" />
  </div>
  <p className="text-slate-500 italic uppercase tracking-tighter mb-1 font-sans">Global standard för OT-säkerhet</p>
  <p className="text-slate-400 font-sans">Officiell kommittésida för ISA99/IEC 62443 som definierar Zones & Conduits.</p>
</a>

{/* CISA Oldsmar */}
<a href="https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-042a" 
   target="_blank" rel="noopener noreferrer"
   className="p-4 bg-slate-900/20 rounded-xl border border-slate-800/50 hover:border-emerald-500/50 transition-colors group">
  <div className="flex justify-between items-start">
    <p className="text-emerald-400 font-bold mb-1 group-hover:text-emerald-300">CISA Alert (AA21-042A)</p>
    <ExternalLink size={12} className="text-slate-600 group-hover:text-emerald-500" />
  </div>
  <p className="text-slate-500 italic uppercase tracking-tighter mb-1 font-sans">Oldsmar Water Treatment</p>
  <p className="text-slate-400 font-sans">Den officiella tekniska genomgången av attacken mot vattenverket i Florida.</p>
</a>

{/* NIST SP 800-82 */}
<a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-82r3.pdf" 
   target="_blank" rel="noopener noreferrer"
   className="p-4 bg-slate-900/20 rounded-xl border border-slate-800/50 hover:border-emerald-500/50 transition-colors group">
  <div className="flex justify-between items-start">
    <p className="text-emerald-400 font-bold mb-1 group-hover:text-emerald-300">NIST SP 800-82</p>
    <ExternalLink size={12} className="text-slate-600 group-hover:text-emerald-500" />
  </div>
  <p className="text-slate-500 italic uppercase tracking-tighter mb-1 font-sans">Guide to ICS Security</p>
  <p className="text-slate-400 font-sans">Vägledning kring Defense-in-Depth och segmentering av industriella kontrollsystem.</p>
</a>

{/* SANS ICS */}
<a href="https://www.sans.org/industrial-control-systems-security/" 
   target="_blank" rel="noopener noreferrer"
   className="p-4 bg-slate-900/20 rounded-xl border border-slate-800/50 hover:border-emerald-500/50 transition-colors group">
  <div className="flex justify-between items-start">
    <p className="text-emerald-400 font-bold mb-1 group-hover:text-emerald-300">SANS ICS Security Resources</p>
    <ExternalLink size={12} className="text-slate-600 group-hover:text-emerald-500" />
  </div>
  <p className="text-slate-500 italic uppercase tracking-tighter mb-1 font-sans">Industriell Best Practice</p>
  <p className="text-slate-400 font-sans">Samling av whitepapers och resurser för säkring av kontrollsystem (OT).</p>
</a>

        </div>
      </section>
        </div>
      </section>
      
    </div>
  );
}