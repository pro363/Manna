import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Car, Accessibility, CheckCircle2, ChevronRight, Globe, ShieldQuestion } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
  return (
    <div className="bg-[#FDFDFD] pt-20">
      <section className="py-40 bg-black text-white technical-grid selection:bg-clinical-accent selection:text-black">
         <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24 items-end relative z-10">
            <div className="lg:col-span-8">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1.2, ease: "easeOut" }}
               >
                  <span className="text-[10px] font-mono font-bold tracking-[0.8em] text-clinical-accent uppercase block mb-12">Communications Rail</span>
                  <h1 className="text-[14vw] lg:text-[11vw] font-display font-black text-white leading-[0.75] tracking-[-0.05em] mb-12 uppercase">
                     DIRECT<br/><span className="text-white/10 outline-text">CHANNELS_</span>
                  </h1>
               </motion.div>
            </div>
            <div className="lg:col-span-4 pb-4">
               <p className="text-xl lg:text-2xl font-light text-white/30 leading-relaxed max-w-sm">
                 Encrypted communication for clinical inquiries, logistics, and elite patient support.
               </p>
            </div>
         </div>
      </section>

      <section className="py-40 relative">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-32">
          
          <div className="lg:col-span-1 hidden lg:flex flex-col gap-12 pt-12">
             <div className="writing-mode-vertical rotate-180 text-[10px] font-mono font-bold tracking-[0.5em] text-black/20 uppercase whitespace-nowrap">Facility Access Protocol v4.0</div>
             <div className="h-full w-[0.5px] bg-black/5 mx-auto" />
          </div>

          <div className="lg:col-span-4 space-y-24">
             <div className="space-y-16">
                <div>
                   <h3 className="text-[10px] font-mono font-bold tracking-[0.5em] text-clinical-accent uppercase mb-12">The Nodes</h3>
                   <div className="space-y-16">
                      <div className="group">
                         <div className="flex items-center justify-between mb-6">
                            <span className="text-[9px] font-mono font-black text-black/20 uppercase tracking-[0.3em]">Coordinate 01</span>
                            <MapPin size={18} className="text-black/10 group-hover:text-clinical-accent transition-colors" />
                         </div>
                         <h4 className="text-3xl font-display font-black text-black tracking-tight mb-4 uppercase">Geographic Hub</h4>
                         <p className="text-xl text-black/40 font-light leading-relaxed">{CONTACT_INFO.address}</p>
                      </div>

                      <div className="group">
                         <div className="flex items-center justify-between mb-6">
                            <span className="text-[9px] font-mono font-black text-black/20 uppercase tracking-[0.3em]">Coordinate 02</span>
                            <Phone size={18} className="text-black/10 group-hover:text-clinical-accent transition-colors" />
                         </div>
                         <h4 className="text-3xl font-display font-black text-black tracking-tight mb-4 uppercase">Voice Stream</h4>
                         <p className="text-3xl font-display font-black text-black leading-none">{CONTACT_INFO.phone}</p>
                         <p className="text-[10px] font-mono font-bold text-clinical-accent tracking-widest uppercase mt-4">24/7 Priority Emergency</p>
                      </div>

                      <div className="group">
                         <div className="flex items-center justify-between mb-6">
                            <span className="text-[9px] font-mono font-black text-black/20 uppercase tracking-[0.3em]">Coordinate 03</span>
                            <Mail size={18} className="text-black/10 group-hover:text-clinical-accent transition-colors" />
                         </div>
                         <h4 className="text-3xl font-display font-black text-black tracking-tight mb-4 uppercase">Data Packet</h4>
                         <p className="text-xl text-black/40 font-light leading-relaxed">{CONTACT_INFO.email}</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="p-12 bg-black rounded-[60px] text-white flex flex-col justify-between aspect-[16/10]">
                <div className="flex justify-between items-start">
                   <Globe size={40} className="text-clinical-accent" />
                   <span className="text-[9px] font-mono font-bold tracking-[0.4em] text-white/20 uppercase">Infrastructure Level 01</span>
                </div>
                <div>
                   <h5 className="text-2xl font-bold mb-3 tracking-tight">On-Site Logistics</h5>
                   <p className="text-white/30 text-sm leading-relaxed font-light">Direct patient parking, full ADA accessibility, and private intake suites.</p>
                </div>
             </div>
          </div>

          <div className="lg:col-span-7">
             <div className="bg-slate-50 p-12 md:p-24 rounded-[80px] border border-black/5 relative overflow-hidden group shadow-2xl shadow-black/5">
                <div className="relative z-10">
                   <h4 className="text-xs font-mono font-black tracking-[0.5em] text-black/20 uppercase mb-16">Inquiry Submission Segment</h4>
                   <form className="space-y-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                         <div className="space-y-4">
                            <label className="text-[9px] font-mono font-black text-black/20 uppercase tracking-[0.4em] ml-4">Full Identity Name</label>
                            <input type="text" className="w-full bg-white border border-transparent rounded-[32px] px-10 py-6 outline-none focus:ring-4 focus:ring-clinical-accent/10 transition-all font-bold text-lg" />
                         </div>
                         <div className="space-y-4">
                            <label className="text-[9px] font-mono font-black text-black/20 uppercase tracking-[0.4em] ml-4">Digital Mailbox</label>
                            <input type="email" className="w-full bg-white border border-transparent rounded-[32px] px-10 py-6 outline-none focus:ring-4 focus:ring-clinical-accent/10 transition-all font-bold text-lg" />
                         </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[9px] font-mono font-black text-black/20 uppercase tracking-[0.4em] ml-4">Communication Topic Category</label>
                        <select className="w-full bg-white border border-transparent rounded-[32px] px-10 py-6 outline-none focus:ring-4 focus:ring-clinical-accent/10 transition-all font-bold text-lg appearance-none cursor-pointer">
                           <option>General Clinical Inquiry</option>
                           <option>Logistics & Access</option>
                           <option>Billing & Insurance Portal</option>
                           <option>Technical Records Request</option>
                        </select>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[9px] font-mono font-black text-black/20 uppercase tracking-[0.4em] ml-4">Payload Message Content</label>
                        <textarea rows={6} className="w-full bg-white border border-transparent rounded-[40px] px-10 py-8 outline-none focus:ring-4 focus:ring-clinical-accent/10 transition-all font-light text-xl resize-none"></textarea>
                      </div>
                      <button className="w-full bg-black text-white py-8 rounded-full font-black uppercase tracking-[0.4em] text-[14px] hover:scale-105 transition-all flex items-center justify-center gap-4">
                         Push Submission <ChevronRight size={20} />
                      </button>
                   </form>
                </div>
                {/* Accent layer */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-clinical-accent/5 rounded-full blur-[100px] pointer-events-none" />
             </div>
             
             <div className="mt-20 flex flex-wrap gap-12 justify-center opacity-30">
                <div className="flex items-center gap-3">
                   <CheckCircle2 size={18} />
                   <span className="text-[10px] font-mono font-bold tracking-widest uppercase tracking-tight">End-to-End Encrypted</span>
                </div>
                <div className="flex items-center gap-3">
                   <ShieldQuestion size={18} />
                   <span className="text-[10px] font-mono font-bold tracking-widest uppercase tracking-tight">Privacy Guard Level 03</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Modern Map Interaction Area */}
      <section className="h-[600px] w-full bg-black relative group overflow-hidden technical-grid">
         <div className="absolute inset-0 flex flex-col items-center justify-center text-white/10 select-none">
            <span className="text-[20vw] font-display font-black leading-none opacity-5">ADDIS_ABABA</span>
            <span className="text-xs font-mono font-black tracking-[1em] uppercase opacity-20">Diagnostic Node v4.02</span>
         </div>
         {/* Minimal Map Overlay */}
         <div className="absolute inset-x-6 bottom-6 lg:inset-x-12 lg:bottom-12">
            <div className="max-w-[1600px] mx-auto p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[60px] flex flex-col md:flex-row justify-between items-center gap-12">
               <div className="flex gap-8 items-center">
                  <div className="w-16 h-16 bg-clinical-accent text-black rounded-full flex items-center justify-center animate-pulse">
                     <MapPin size={24} />
                  </div>
                  <div>
                     <h5 className="text-3xl font-display font-black tracking-tight text-white uppercase">Facility Command</h5>
                     <p className="text-white/40 text-sm font-light leading-relaxed">Direct entry available from Bole Road junction.</p>
                  </div>
               </div>
               <a 
                 href="https://maps.google.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-[12px] hover:scale-105 transition-all"
               >
                  Tactical Orientation
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
