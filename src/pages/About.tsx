import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Target, Heart, Award, CheckCircle2, Zap, Globe, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-[#FDFDFD] pt-20">
      {/* Editorial Hero */}
      <section className="py-40 relative overflow-hidden bg-black selection:bg-clinical-accent selection:text-black">
         <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24 items-end relative z-10">
            <div className="lg:col-span-8">
               <motion.div
                 initial={{ opacity: 0, scale: 1.1 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
               >
                  <span className="text-[10px] font-mono font-bold tracking-[0.6em] text-clinical-accent uppercase block mb-12">Genesis & Evolution</span>
                  <h1 className="text-[14vw] lg:text-[11vw] font-display font-black text-white leading-[0.75] tracking-[-0.05em] mb-12">
                     ACCURACY<br/>IS<br/><span className="text-white/10 outline-text">EVERYTHING.</span>
                  </h1>
               </motion.div>
            </div>
            <div className="lg:col-span-4 pb-4">
               <p className="text-2xl lg:text-3xl font-light text-white/40 leading-tight tracking-tight">
                  Since 2014, Manna has been the primary authority for diagnostic clarity in the East African region.
               </p>
            </div>
         </div>
         {/* Vertical light rail */}
         <div className="absolute right-[12%] top-0 w-[1px] h-full bg-white/5 hidden lg:block" />
      </section>

      {/* Grid: Mission Technicals */}
      <section className="py-40 technical-grid border-b border-black/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
             <div className="space-y-16">
                <div>
                   <div className="w-12 h-1 bg-clinical-accent mb-12" />
                   <h2 className="text-5xl font-display font-black text-black tracking-tighter mb-8">THE MISSION_</h2>
                   <p className="text-2xl text-black/50 font-light leading-relaxed italic font-serif">
                     "To engineer an environment where medical imaging meets absolute human empathy, ensuring speed never compromises the integrity of a diagnosis."
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                   <div className="p-10 rounded-[48px] bg-black text-white space-y-6">
                      <Globe size={32} className="text-clinical-accent" />
                      <h4 className="text-xl font-bold">Global Link</h4>
                      <p className="text-white/30 text-xs uppercase tracking-widest leading-relaxed">International Calibration Standards</p>
                   </div>
                   <div className="p-10 rounded-[48px] bg-slate-100 flex flex-col justify-between">
                      <span className="text-4xl font-display font-black text-black">99.8%</span>
                      <span className="text-[9px] font-mono font-bold text-black/30 tracking-widest uppercase">Diagnostic Consistency</span>
                   </div>
                </div>
             </div>

             <div className="relative">
                <div className="aspect-square rounded-[80px] overflow-hidden shadow-2xl relative group">
                   <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200" alt="Founding Principle" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-clinical-blue/20 mix-blend-multiply" />
                </div>
                {/* Floating Micro-data */}
                <div className="absolute -right-8 -top-8 p-10 bg-white shadow-2xl rounded-[32px] hidden lg:block">
                   <Activity className="text-clinical-accent mb-4" />
                   <div className="text-xs font-mono font-black text-black tracking-[0.2em] uppercase">Real-time Tele-Radiology</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Corporate Values: Bento Rail */}
      <section className="py-40 bg-[#050505] text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
             <div className="lg:col-span-4 sticky top-40">
                <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-clinical-accent uppercase block mb-12">The Ethical Stack</span>
                <h3 className="text-6xl font-display font-black tracking-tighter leading-[0.9]">GUIDING<br/>PROTOCOL.</h3>
             </div>
             
             <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: <Shield />, title: "UNCOMPROMISED INTEGRITY", desc: "No shadow fields, no ambiguous reporting. We deliver the absolute truth of the scan." },
                  { icon: <Target />, title: "TECHNICAL PRECISION", desc: "Digital sensors calibrated to sub-micron accuracy for early anomaly detection." },
                  { icon: <Heart />, title: "RADICAL EMPATHY", desc: "Humanizing the cold process of medical imaging through patient-first hospitality." },
                  { icon: <Award />, title: "EXCELLENCE_ID", desc: "Top-tier ranking in the African Radiology Index for consistency and expert staff." }
                ].map((v, i) => (
                  <div key={i} className="p-16 rounded-[60px] bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-500 group">
                    <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-clinical-accent mb-12 group-hover:bg-clinical-accent group-hover:text-black transition-all">
                       {v.icon}
                    </div>
                    <h4 className="text-2xl font-display font-black tracking-tight mb-8">{v.title}</h4>
                    <p className="text-white/40 font-light leading-relaxed">{v.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40">
         <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="bg-slate-50 rounded-[100px] p-24 lg:p-40 flex flex-col lg:flex-row justify-between items-center gap-16 text-center lg:text-left">
               <div className="max-w-2xl">
                  <h2 className="text-6xl lg:text-8xl font-display font-black text-black tracking-tighter leading-none mb-12">ACCESS THE<br/>ADVANTAGE.</h2>
                  <p className="text-black/40 text-2xl font-light">Join the thousands of referring doctors who trust Manna for precision diagnostics.</p>
               </div>
               <div className="shrink-0 flex flex-col gap-6">
                  <Link to="/booking" className="bg-black text-white px-16 py-8 rounded-full font-black uppercase tracking-widest text-[14px] hover:scale-110 transition-all">
                     Logistics Portal
                  </Link>
                  <Link to="/contact" className="border border-black/20 text-black px-16 py-8 rounded-full font-bold uppercase tracking-widest text-[14px] hover:bg-black hover:text-white transition-all text-center">
                     Contact Facility
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
