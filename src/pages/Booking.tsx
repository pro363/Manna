import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, Mail, Clock, Brain, Bone, Activity, ArrowRight, CheckCircle, Smartphone, Info, ShieldCheck, MapPin, MessageSquare, ChevronRight } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../constants';
import { cn } from '../lib/utils';

const steps = [
  { id: 1, title: 'MODALITY', sub: 'Protocol Select' },
  { id: 2, title: 'CLINICAL', sub: 'Indications' },
  { id: 3, title: 'LOGISTICS', sub: 'Patient Node' },
  { id: 4, title: 'STATUS', sub: 'Confirmed' },
];

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: '',
    reason: '',
    fullName: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleNext = () => setCurrentStep(prev => prev + 1);
  const handleBack = () => setCurrentStep(prev => prev - 1);

  const isStepValid = () => {
    if (currentStep === 1) return !!formData.serviceId;
    if (currentStep === 2) return true;
    if (currentStep === 3) return !!(formData.fullName && formData.phone && formData.date);
    return true;
  };

  return (
    <div className="bg-[#FDFDFD] pt-20 min-h-screen technical-grid">
      <section className="py-24 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-xl">
               <span className="text-[10px] font-mono font-bold tracking-[0.6em] text-clinical-accent uppercase block mb-8">Access Portal</span>
               <h1 className="text-6xl lg:text-8xl font-display font-black text-black leading-none tracking-tighter">ESTABLISH<br/>CONNECTION</h1>
            </div>
            <div className="flex flex-col items-end text-right">
               <span className="text-[9px] font-mono font-bold text-black/20 uppercase tracking-[0.4em] mb-4">Centralized Booking Protocol</span>
               <div className="flex gap-1">
                  {steps.map(s => (
                    <div key={s.id} className={cn(
                      "w-12 h-1 transition-all duration-700",
                      currentStep >= s.id ? "bg-black" : "bg-black/5"
                    )} />
                  ))}
               </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Step Indicators Rail */}
            <div className="lg:col-span-3 space-y-12 hidden lg:block sticky top-40">
               {steps.map((step) => (
                 <div key={step.id} className={cn(
                    "transition-all duration-500",
                    currentStep === step.id ? "opacity-100 translate-x-4" : "opacity-20"
                 )}>
                    <div className="text-[9px] font-mono font-black text-clinical-accent tracking-[0.4em] uppercase mb-2">Step 0{step.id}</div>
                    <div className="text-xl font-display font-black text-black tracking-tight">{step.title}</div>
                    <div className="text-[10px] font-mono font-bold text-black/40 tracking-widest uppercase mt-1">{step.sub}</div>
                 </div>
               ))}
            </div>

            {/* Main Form Area */}
            <div className="lg:col-span-9 bg-white p-8 md:p-20 rounded-[60px] shadow-2xl shadow-black/5 border border-black/5 relative overflow-hidden">
               <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-12"
                    >
                      <h3 className="text-4xl font-display font-black text-black tracking-tighter">Diagnostic Modality</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {SERVICES.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => setFormData({ ...formData, serviceId: s.id })}
                            className={cn(
                              "p-10 rounded-[40px] text-left transition-all duration-500 border relative group overflow-hidden",
                              formData.serviceId === s.id ? "bg-black text-white border-black" : "bg-slate-50 text-black border-transparent hover:border-black/10"
                            )}
                          >
                            <div className="relative z-10 flex flex-col h-full justify-between">
                               <div className={cn(
                                 "w-12 h-12 rounded-2xl flex items-center justify-center mb-12 transition-all",
                                 formData.serviceId === s.id ? "bg-clinical-accent text-black" : "bg-black/5 text-black/30"
                               )}>
                                  {s.id === 'mri' && <Brain size={20} />}
                                  {s.id === 'ct-scan' && <Activity size={20} />}
                                  {s.id === 'x-ray' && <Bone size={20} />}
                               </div>
                               <div>
                                  <h4 className="text-xl font-display font-black uppercase mb-3 leading-tight">{s.name}</h4>
                                  <p className={cn("text-[10px] font-mono font-bold tracking-widest uppercase", formData.serviceId === s.id ? "text-white/40" : "text-black/20")}>Availability: 24/7 Priority</p>
                               </div>
                            </div>
                            {/* Graphic accent */}
                            <div className={cn(
                              "absolute -bottom-10 -right-10 w-32 h-32 rounded-full transition-all duration-700",
                              formData.serviceId === s.id ? "bg-clinical-accent/10 blur-[40px] scale-150" : "bg-transparent"
                            )} />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-12"
                    >
                      <h3 className="text-4xl font-display font-black text-black tracking-tighter">Indications Info</h3>
                      <div className="space-y-8">
                         <div className="bg-slate-50 p-1 rounded-[40px]">
                            <textarea
                              value={formData.reason}
                              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                              placeholder="Input clinical indication data / physician's notes..."
                              className="w-full bg-white border border-black/5 rounded-[36px] p-10 h-64 outline-none focus:ring-4 focus:ring-clinical-accent/20 transition-all font-light text-xl"
                            />
                         </div>
                         <div className="flex gap-4 p-8 bg-black text-white/40 rounded-[36px] text-xs font-mono font-bold tracking-widest uppercase">
                            <Info size={20} className="text-clinical-accent shrink-0" />
                            Emergency routing requires immediate voice communication. Call the dispatch team: {CONTACT_INFO.phone}
                         </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-12"
                    >
                      <h3 className="text-4xl font-display font-black text-black tracking-tighter">Patient Logistics</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                         <div className="space-y-8">
                            <div className="group">
                               <label className="text-[10px] font-mono font-bold tracking-[0.4em] text-black/20 uppercase mb-4 block ml-4">Access Identifier (Full Name)</label>
                               <input 
                                 type="text" 
                                 value={formData.fullName}
                                 onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                 className="w-full bg-slate-50 border border-transparent rounded-[32px] px-8 py-6 outline-none focus:bg-white focus:border-black/10 transition-all font-bold text-lg"
                               />
                            </div>
                            <div className="group">
                               <label className="text-[10px] font-mono font-bold tracking-[0.4em] text-black/20 uppercase mb-4 block ml-4">Terminal Phone Node</label>
                               <input 
                                 type="tel" 
                                 value={formData.phone}
                                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                 className="w-full bg-slate-50 border border-transparent rounded-[32px] px-8 py-6 outline-none focus:bg-white focus:border-black/10 transition-all font-bold text-lg"
                               />
                            </div>
                         </div>
                         <div className="space-y-8">
                            <div className="group">
                               <label className="text-[10px] font-mono font-bold tracking-[0.4em] text-black/20 uppercase mb-4 block ml-4">Temporal Allocation (Date)</label>
                               <input 
                                 type="date" 
                                 value={formData.date}
                                 onChange={(e) => setFormData({...formData, date: e.target.value})}
                                 className="w-full bg-slate-50 border border-transparent rounded-[32px] px-8 py-6 outline-none focus:bg-white focus:border-black/10 transition-all font-bold text-lg"
                               />
                            </div>
                            <div className="group">
                               <label className="text-[10px] font-mono font-bold tracking-[0.4em] text-black/20 uppercase mb-4 block ml-4">Requested Pulse (Time)</label>
                               <input 
                                 type="time" 
                                 value={formData.time}
                                 onChange={(e) => setFormData({...formData, time: e.target.value})}
                                 className="w-full bg-slate-50 border border-transparent rounded-[32px] px-8 py-6 outline-none focus:bg-white focus:border-black/10 transition-all font-bold text-lg"
                               />
                            </div>
                         </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                       <div className="w-32 h-32 bg-clinical-accent text-black rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-clinical-accent/20">
                          <CheckCircle size={56} strokeWidth={3} />
                       </div>
                       <h3 className="text-5xl font-display font-black text-black tracking-tighter mb-8">CONNECTION<br/>ESTABLISHED.</h3>
                       <p className="max-w-md mx-auto text-black/50 font-light leading-relaxed mb-16 text-lg tracking-tight">
                         Identity acknowledged. Priority routing initiated for {formData.fullName.toUpperCase()}. Expect tactical confirmation via phone within 30 minutes.
                       </p>
                       <div className="flex flex-col md:flex-row justify-center gap-6">
                          <button onClick={() => window.location.href = '/'} className="bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-[12px] hover:scale-105 transition-all">
                             Terminate Session
                          </button>
                        </div>
                    </motion.div>
                  )}
               </AnimatePresence>

               {currentStep < 4 && (
                 <div className="mt-20 pt-10 border-t border-black/5 flex justify-between items-center">
                    <button 
                      onClick={handleBack} 
                      disabled={currentStep === 1}
                      className={cn(
                        "text-[10px] font-mono font-black uppercase tracking-[0.4em] transition-all",
                        currentStep === 1 ? "opacity-0" : "text-black/30 hover:text-black"
                      )}
                    >
                      Return_Prior
                    </button>
                    <button 
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className={cn(
                        "px-12 py-5 rounded-full font-black uppercase tracking-widest text-[13px] flex items-center gap-4 transition-all duration-500",
                        isStepValid() ? "bg-black text-white hover:scale-105" : "bg-black/5 text-black/20 cursor-not-allowed"
                      )}
                    >
                       {currentStep === 3 ? 'Finalize protocol' : 'Next segment'} <ChevronRight size={18} />
                    </button>
                 </div>
               )}
               {/* Aesthetic mask */}
               <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-black/5 rounded-tr-[60px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
