import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Database, Zap, Activity, Microscope, Globe, LayoutGrid } from 'lucide-react';

const Technology = () => {
  return (
    <div className="pt-20">
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="max-w-3xl"
            >
              <h4 className="text-clinical-accent font-bold uppercase tracking-[0.3em] text-xs mb-6">Advanced Facilities</h4>
              <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-none">The Future of <br/><span className="text-white/40">Ethiopian Healthcare</span></h1>
              <p className="text-xl text-white/50 leading-relaxed font-light">
                We invest in the world's most precise diagnostic technology to ensure that every scan at Manna provides clinical clarity and early detection capabilities.
              </p>
            </motion.div>
         </div>
         {/* Circuit board pattern overlay placeholder */}
         <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen overflow-hidden">
            <div className="grid grid-cols-20 gap-1 w-full h-full">
               {Array.from({length: 400}).map((_, i) => (
                 <div key={i} className="border-[0.5px] border-white/20 aspect-square" />
               ))}
            </div>
         </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
             <div className="order-2 md:order-1">
                <h2 className="text-3xl font-display font-bold text-clinical-blue mb-8">Digital Diagnostic Ecosystem</h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-10 font-light">
                  Our facility is powered by a fully digital Diagnostic Information System (DIS), ensuring that your medical data is captured accurately and processed by high-performance algorithmic imaging systems.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Cpu className="text-clinical-accent" />
                    <h5 className="font-bold text-clinical-blue">High-Speed Processing</h5>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Latency: Minimal</p>
                  </div>
                  <div className="space-y-3">
                    <Database className="text-clinical-accent" />
                    <h5 className="font-bold text-clinical-blue">Secure Cloud PACS</h5>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Standard: DICOM</p>
                  </div>
                </div>
             </div>
             <div className="order-1 md:order-2 rounded-[60px] overflow-hidden shadow-2xl relative group">
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" alt="Tech Facility" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-clinical-blue/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: "Low Radiation Dose", desc: "Our scanners utilize smart pulse technology to provide high-detail imaging with the lowest possible radiation exposure." },
              { icon: <ShieldCheck />, title: "AI-Assisted Precision", desc: "Proprietary image enhancement algorithms assist our radiologists in identifying subtle clinical markers." },
              { icon: <LayoutGrid />, title: "Full Resolution", desc: "Native high-definition digital archiving means your doctor sees exactly what our scanners see, with zero loss in detail." },
              { icon: <Microscope />, title: "Sub-Millimeter Thin", desc: "Imaging capability at sub-millimeter thickness for detecting the smallest tissue anomalies." },
              { icon: <Globe />, title: "Global Calibration", desc: "Our machines are calibrated following international clinical standards every month for maximum reliability." },
              { icon: <Activity />, title: "Real-Time Monitoring", desc: "Continuous internal sensors monitor scanner performance to ensure consistent diagnostic high-output." }
            ].map((tech, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-clinical-blue mb-6 border border-slate-100 group-hover:bg-clinical-blue group-hover:text-white transition-all">
                  {tech.icon}
                </div>
                <h4 className="text-xl font-bold text-clinical-blue mb-4">{tech.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-display font-bold text-clinical-blue mb-8">"Technology without compassion is just machinery. At Manna, we use the best of both."</h3>
            <p className="text-clinical-accent font-bold uppercase tracking-[0.4em] text-xs">Director of Radiology, Manna Diagnostic</p>
         </div>
      </section>
    </div>
  );
};

export default Technology;
