import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowLeft, ArrowRight, Calendar, Info, ShieldCheck, Microscope, Zap, Layers, Activity } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';
import { cn } from '../lib/utils';

const Services = () => {
  const { id } = useParams();

  // Detail View
  if (id) {
    const service = SERVICES.find(s => s.slug === id);
    if (!service) return <Navigate to="/services" />;

    return (
      <div className="bg-[#FDFDFD]">
        {/* Header Rail */}
        <section className="pt-40 pb-24 bg-black text-white technical-grid border-b border-white/5">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-end gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-8">
                 <Link to="/services" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <ArrowLeft size={18} />
                 </Link>
                 <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-clinical-accent uppercase">Clinical Operation ID: {service.slug.toUpperCase()}</span>
              </div>
              <h1 className="text-6xl md:text-[9vw] font-display font-black leading-none tracking-tighter mb-8">{service.name.split(' ')[0]}<br/><span className="text-white/20">{service.name.split(' ')[1]}</span></h1>
              <p className="text-2xl text-white/50 font-light leading-relaxed max-w-2xl">{service.description}</p>
            </motion.div>
            <div className="hidden lg:block pb-4">
               <div className="text-[140px] font-display font-black text-white/5 leading-none">0{SERVICES.findIndex(s => s.id === service.id) + 1}</div>
            </div>
          </div>
        </section>

        {/* Technical Specification Section */}
        <section className="py-32 relative">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            <div className="lg:col-span-1 hidden lg:flex flex-col gap-12 pt-12">
               <div className="writing-mode-vertical rotate-180 text-[10px] font-mono font-bold tracking-[0.5em] text-black/20 uppercase whitespace-nowrap">Diagnostic Protocol v2.6</div>
               <div className="h-64 w-[1px] bg-black/5 mx-auto" />
            </div>

            <div className="lg:col-span-7 space-y-24">
               <div className="aspect-[21/9] rounded-[60px] overflow-hidden shadow-2xl relative group">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-clinical-blue/20 mix-blend-overlay" />
               </div>

               <div className="space-y-12">
                  <h2 className="text-4xl font-display font-black text-black tracking-tight">Clinical Methodology</h2>
                  <p className="text-xl text-black/50 leading-relaxed font-light">{service.longDescription}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                    <div className="space-y-8">
                       <h4 className="text-[10px] font-mono font-bold tracking-[0.3em] text-clinical-accent uppercase">Standard Benefits</h4>
                       <ul className="space-y-6">
                         {service.benefits.map((b, i) => (
                           <li key={i} className="flex gap-4 items-start group">
                              <div className="w-1.5 h-1.5 rounded-full bg-clinical-accent mt-2.5 transition-transform group-hover:scale-150" />
                              <span className="text-black/60 font-medium group-hover:text-black transition-colors">{b}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                    <div className="space-y-8">
                       <h4 className="text-[10px] font-mono font-bold tracking-[0.3em] text-blue-500 uppercase">Indications</h4>
                       <ul className="space-y-6">
                         {service.whenNeeded.map((w, i) => (
                           <li key={i} className="flex gap-4 items-start group">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 transition-transform group-hover:scale-150" />
                              <span className="text-black/60 font-light group-hover:text-black transition-colors">{w}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-4 sticky top-32 space-y-8">
               <div className="bg-black text-white p-12 rounded-[60px] shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-display font-black mb-8">Access Priority Center</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-12">Schedule your {service.name} at any hour. Our technical team operates on a 24/7 priority cycle.</p>
                    <Link to="/booking" className="block w-full bg-clinical-accent text-black py-6 rounded-full font-black uppercase tracking-widest text-[12px] text-center hover:scale-105 transition-all">
                       Submit Data Request
                    </Link>
                  </div>
                  {/* Decorative glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-clinical-accent/20 rounded-full blur-[80px] group-hover:scale-150 transition-all duration-700" />
               </div>

               <div className="p-12 border border-black/5 rounded-[60px] space-y-8">
                  <h4 className="text-[10px] font-mono font-bold tracking-[0.4em] text-black/20 uppercase">System Integration</h4>
                  <div className="flex gap-5">
                    <ShieldCheck className="text-clinical-accent shrink-0" />
                    <p className="text-sm font-medium leading-relaxed">ISO.9001 Diagnostic Protocol Calibration.</p>
                  </div>
                  <div className="flex gap-5">
                    <Zap className="text-clinical-accent shrink-0" />
                    <p className="text-sm font-medium leading-relaxed">Zero-Lag Result Transmission to Global EMRs.</p>
                  </div>
                  <div className="flex gap-5">
                    <Layers className="text-clinical-accent shrink-0" />
                    <p className="text-sm font-medium leading-relaxed">Multi-dimensional Volumetric Post-Processing.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Gallery List View
  return (
    <div className="bg-[#FDFDFD] pt-20">
      <section className="py-40 border-b border-black/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.8em] text-clinical-accent uppercase block mb-12">The Capability Stack</span>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10vw] font-display font-black text-black leading-[0.85] tracking-tighter mb-12">PRECISION<br/><span className="text-black/10 outline-text-dark">DIAGNOSTICS</span></h1>
            <p className="max-w-2xl mx-auto text-xl text-black/40 font-light leading-relaxed">
              Our radiological arsenal is calibrated for ultra-high fidelity detection. Explore the technical specifications of our primary imaging modalities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {SERVICES.map((s, i) => (
                <Link to={`/services/${s.slug}`} key={s.id} className="group flex flex-col rounded-[80px] overflow-hidden bg-white border border-black/5 transition-all duration-700 hover:shadow-2xl hover:shadow-black/5">
                   <div className="aspect-square overflow-hidden relative">
                      <img src={s.image} alt={s.name} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" />
                      <div className="absolute top-12 left-12 w-12 h-12 bg-black/80 backdrop-blur-xl text-white rounded-full flex items-center justify-center font-mono text-xs font-bold">0{i+1}</div>
                   </div>
                   <div className="p-16 flex-grow flex flex-col justify-between">
                      <div>
                        {s.nameAmharic && <span className="text-[10px] font-mono font-bold text-clinical-accent mb-4 block tracking-[0.4em] uppercase">{s.nameAmharic}</span>}
                        <h3 className="text-3xl lg:text-4xl font-display font-black text-black leading-[0.9] tracking-tighter mb-8 group-hover:text-clinical-accent transition-colors">{s.name.toUpperCase()}</h3>
                        <p className="text-black/40 text-sm leading-relaxed font-light mb-12 line-clamp-3">{s.description}</p>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-black">
                        Analyze Capability <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform text-clinical-accent" />
                      </div>
                   </div>
                </Link>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
