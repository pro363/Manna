import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Activity, ShieldCheck, Zap, Layers, Microscope, MonitorSpeaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, CONTACT_INFO } from '../constants';
import { cn } from '../lib/utils';

const Home = () => {
  return (
    <div className="bg-[#FDFDFD]">
      {/* Hero: The Statement */}
      <section className="relative min-h-screen lg:h-screen flex items-center bg-clinical-dark overflow-hidden selection:bg-clinical-accent selection:text-white">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0 text-white">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2400" 
            alt="Advanced Medical Tech" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-clinical-dark via-clinical-dark/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-12 h-[1.5px] bg-clinical-accent" />
                   <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-white/60 uppercase">Healthcare Protocol v4.0</span>
                </div>
                <h1 className="text-[13vw] lg:text-[9.5vw] font-display font-black text-white leading-[0.85] tracking-[-0.04em] mb-12">
                  MODERN<br/><span className="text-clinical-accent">CLINICAL</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-xl mb-16 underline-offset-8 decoration-clinical-accent/30 decoration-1">
                  Trusted diagnostic authority delivering precision healthcare through advanced imaging and compassionate medical expertise.
                </p>
                <div className="flex flex-wrap gap-6">
                   <Link to="/booking" className="bg-clinical-healing text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[13px] hover:scale-105 hover:bg-clinical-accent transition-all shadow-xl shadow-emerald-500/20">
                     Book Appointment
                   </Link>
                   <Link to="/services" className="border border-white/20 text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-[13px] hover:bg-white hover:text-clinical-dark transition-all">
                     Our Services
                   </Link>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4 hidden lg:block pb-12">
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.5, duration: 1 }}
                 className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px]"
               >
                  <div className="flex justify-between items-start mb-12">
                    <Activity className="text-clinical-accent" size={32} />
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/30">System Status: Active</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">24/7 Priority Emergency Care</h4>
                  <p className="text-white/40 text-sm leading-relaxed mb-8">Fast-track diagnostic routing for critical cases. No downtime, no delays.</p>
                  <div className="h-[1px] bg-white/10 mb-8" />
                  <div className="flex gap-4">
                     <div className="flex-1">
                        <div className="text-2xl font-black text-white">0.02ms</div>
                        <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/20">Data Latency</div>
                     </div>
                     <div className="flex-1">
                        <div className="text-2xl font-black text-white">100%</div>
                        <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/20">Uptime Scan</div>
                     </div>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Capabilities */}
      <section className="py-32 bg-white border-t border-clinical-blue/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Header Card */}
            <div className="lg:col-span-5 p-16 rounded-[60px] bg-clinical-dark text-white flex flex-col justify-between overflow-hidden relative group">
               <div className="relative z-10">
                  <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-clinical-accent uppercase block mb-8">Medical Portfolio</span>
                  <h2 className="text-6xl font-display font-black tracking-tighter leading-tight mb-8">COMPREHENSIVE<br/>CLINICAL<br/>IMAGING.</h2>
                  <p className="text-white/60 text-lg leading-relaxed max-w-sm font-light">
                    We've centralized world-class diagnostic care. From routine screenings to complex emergency assessments, our facility is ready 24/7.
                  </p>
               </div>
               <div className="relative z-10 mt-16">
                  <Link to="/services" className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest group text-white hover:text-clinical-accent transition-colors">
                    View All Procedures <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform text-clinical-accent" />
                  </Link>
               </div>
               {/* Pattern */}
               <div className="absolute top-0 right-0 w-full h-full opacity-10 flex flex-wrap gap-2 p-8 pointer-events-none">
                  {Array.from({length: 40}).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                  ))}
               </div>
            </div>

            {/* Bento Items: Services */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
               {SERVICES.map((s, i) => (
                 <div key={s.id} className={cn(
                    "p-12 rounded-[60px] border border-black/5 bg-white hover:border-black/20 hover:bg-slate-50 transition-all duration-500 flex flex-col justify-between",
                    i === 0 && "md:col-span-2 md:aspect-[21/9] flex-row items-center"
                 )}>
                    <div className={cn("space-y-6", i === 0 && "max-w-md")}>
                       <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-clinical-accent uppercase">Technology 0{i+1}</span>
                       <h3 className="text-3xl lg:text-4xl font-display font-black text-black leading-tight">{s.name}</h3>
                       <p className="text-black/50 text-sm leading-relaxed">{s.description}</p>
                       <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black group">
                          Explore Tech <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                       </Link>
                    </div>
                    {i === 0 && (
                       <div className="hidden md:block w-72 h-72 rounded-[40px] overflow-hidden shadow-2xl">
                          <img src={s.image} alt={s.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                       </div>
                    )}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Credibility: Stats & Philosophy */}
      <section className="py-32 bg-clinical-light text-clinical-dark relative overflow-hidden technical-grid border-y border-clinical-blue/5">
         <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
               <h3 className="text-sm font-mono font-bold tracking-[0.5em] text-clinical-accent uppercase mb-12">Our Commitment</h3>
               <p className="text-5xl lg:text-7xl font-display font-black tracking-tight leading-[0.95] mb-12">
                  HOSPITALITY<br/>MEETS ELITE<br/><span className="text-clinical-blue/20">MED-TECH.</span>
               </p>
               <div className="grid grid-cols-2 gap-12 mt-20 pt-12 border-t border-clinical-blue/10">
                  <div className="space-y-4">
                     <ShieldCheck size={40} className="text-clinical-healing" />
                     <h5 className="text-2xl font-bold">100% Patient Privacy</h5>
                     <p className="text-clinical-muted text-sm leading-relaxed font-light">Strict data encryption and confidential medical history management.</p>
                  </div>
                  <div className="space-y-4">
                     <Layers size={40} className="text-clinical-healing" />
                     <h5 className="text-2xl font-bold">Holistic Imaging</h5>
                     <p className="text-clinical-muted text-sm leading-relaxed font-light">Unified diagnostic reporting for comprehensive health assessments.</p>
                  </div>
               </div>
            </div>
            
            <div className="relative">
               <div className="aspect-[4/5] rounded-[80px] overflow-hidden border border-white/10 relative">
                  <img src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1200" alt="Clinical Precision" className="w-full h-full object-cover opacity-60 grayscale" />
                  <div className="absolute inset-0 bg-clinical-accent/10" />
               </div>
               {/* Floating stat card */}
               <motion.div 
                 whileInView={{ x: -40, opacity: 1 }}
                 initial={{ x: 0, opacity: 0 }}
                 viewport={{ once: true }}
                 className="absolute -left-20 bottom-20 bg-white p-12 rounded-[48px] shadow-2xl hidden lg:block"
               >
                  <div className="text-[10vw] font-display font-black text-black leading-none mb-4">10+</div>
                  <div className="text-xs font-mono font-black text-black/30 tracking-[0.3em] uppercase">Years Clinical Mastery</div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Trust & Testimonials: E-E-A-T */}
      <section className="py-32 bg-[#FDFDFD]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
             <div className="max-w-2xl">
                <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-clinical-accent uppercase block mb-8">Patient Intelligence</span>
                <h2 className="text-6xl font-display font-black text-black tracking-tighter">THE PATIENT<br/>JOURNEY.</h2>
             </div>
             <p className="text-black/40 text-xl font-light max-w-sm leading-relaxed">
               Accolades for our cooperative staff, outstanding hospitality, and clinical precision in every scan.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: <Microscope />, title: "Precision First", text: "The accuracy of results from Manna is undisputed. They are our primary referral choice in Addis Ababa." },
               { icon: <MonitorSpeaker />, title: "Hospitality Elite", text: "Exceptional treatment from a staff that truly understands the anxiety of medical diagnostics." },
               { icon: <Zap />, title: "Velocity Scan", text: "The speed of results delivery is unmatched. Critical intervention was possible thanks to their 24/7 operation." }
             ].map((t, i) => (
               <div key={i} className="p-16 rounded-[60px] bg-white border border-black/5 hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
                  <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-3xl text-clinical-accent mb-12">
                    {t.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-black text-black mb-6">{t.title}</h4>
                    <p className="text-black/50 leading-relaxed italic">"{t.text}"</p>
                  </div>
                  <div className="mt-12 pt-12 border-t border-black/5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-black/20">Verified Medical Feedback</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-20 px-6 lg:px-12 bg-[#FDFDFD]">
         <div className="max-w-[1600px] mx-auto rounded-[80px] bg-black p-20 lg:p-40 text-center relative overflow-hidden">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
               <h2 className="text-[10vw] lg:text-[7vw] font-display font-black text-white leading-[0.85] tracking-tight mb-16">
                 ACCURACY<br/>WITHOUT<br/>COMPROMISE.
               </h2>
               <div className="flex flex-col md:flex-row justify-center gap-8">
                  <Link to="/booking" className="bg-white text-black px-16 py-8 rounded-full font-black uppercase tracking-[0.2em] text-[14px] hover:scale-105 transition-all">
                    Establish Connection
                  </Link>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="border border-white/20 text-white px-16 py-8 rounded-full font-bold uppercase tracking-[0.2em] text-[14px] hover:bg-white hover:text-black transition-all">
                    {CONTACT_INFO.phone}
                  </a>
               </div>
            </motion.div>
            {/* Ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-clinical-accent/5 rounded-full blur-[200px]" />
         </div>
      </section>
    </div>
  );
};

export default Home;
