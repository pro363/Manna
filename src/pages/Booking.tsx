import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Bone, Activity, CheckCircle, Info, ChevronRight } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../constants';
import { cn } from '../lib/utils';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

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

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12 text-black">
            <div className="max-w-xl">
               <span className="text-[10px] font-mono font-bold tracking-[0.6em] text-clinical-accent uppercase block mb-8">Access Portal</span>
               <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-black leading-none tracking-tighter">ESTABLISH<br/>CONNECTION</h1>
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

            <div className="lg:col-span-9 bg-white p-6 md:p-20 rounded-[60px] shadow-2xl shadow-black/5 border border-black/5 relative overflow-hidden">
               <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                      <h3 className="text-3xl md:text-4xl font-display font-black text-black tracking-tighter">Diagnostic Modality</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {SERVICES.map((s) => (
                          <button key={s.id} onClick={() => setFormData({ ...formData, serviceId: s.id })} className={cn("p-8 rounded-[40px] text-left transition-all duration-500 border relative group overflow-hidden h-full flex flex-col", formData.serviceId === s.id ? "bg-black text-white border-black" : "bg-slate-50 text-black border-transparent hover:border-black/10")}>
                            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                               <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-all", formData.serviceId === s.id ? "bg-clinical-accent text-black" : "bg-black/5 text-black/30")}>
                                  {s.id === 'mri' ? <Brain size={20} /> : s.id === 'ct-scan' ? <Activity size={20} /> : <Bone size={20} />}
                               </div>
                               <div>
                                  {s.nameAmharic && <span className={cn("text-[9px] font-bold block mb-1", formData.serviceId === s.id ? "text-white/40" : "text-black/20")}>{s.nameAmharic}</span>}
                                  <h4 className="text-lg font-display font-black uppercase mb-1 leading-tight">{s.name}</h4>
                                  <p className={cn("text-[10px] font-mono font-bold tracking-widest uppercase", formData.serviceId === s.id ? "text-white/40" : "text-black/20")}>Status: Available</p>
                               </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                      <h3 className="text-3xl md:text-4xl font-display font-black text-black tracking-tighter">Indications Info</h3>
                      <div className="grid w-full gap-4">
                        <Label className="text-[10px] font-mono font-bold tracking-widest uppercase text-black/40 ml-4">Clinical Indication Node</Label>
                        <Textarea 
                           value={formData.reason} 
                           onChange={(e) => setFormData({ ...formData, reason: e.target.value })} 
                           placeholder="Input physician order or patient symptoms..." 
                           className="rounded-[32px] p-8 min-h-[240px] bg-slate-50 border-none focus-visible:ring-clinical-accent text-xl font-light"
                        />
                         <div className="flex gap-4 p-8 bg-black text-white/40 rounded-[36px] text-xs font-mono font-bold tracking-widest uppercase">
                            <Info size={20} className="text-clinical-accent shrink-0" />
                            Dispatch line: {CONTACT_INFO.phone}
                         </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                      <h3 className="text-3xl md:text-4xl font-display font-black text-black tracking-tighter">Patient Logistics</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {[
                           { label: 'Full Patient Name', key: 'fullName', type: 'text' },
                           { label: 'Phone Node', key: 'phone', type: 'tel' },
                           { label: 'Schedule Date', key: 'date', type: 'date' },
                           { label: 'Requested Time', key: 'time', type: 'time' },
                         ].map((field) => (
                           <div key={field.key} className="space-y-4">
                              <Label className="text-[10px] font-mono font-bold tracking-widest uppercase text-black/40 ml-4">{field.label}</Label>
                              <Input 
                                 type={field.type}
                                 value={formData[field.key as keyof typeof formData]} 
                                 onChange={(e) => setFormData({...formData, [field.key]: e.target.value})} 
                                 className="rounded-full px-8 py-8 bg-slate-50 border-none text-lg font-bold" 
                              />
                           </div>
                         ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                       <div className="w-32 h-32 bg-clinical-accent text-black rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-clinical-accent/20">
                          <CheckCircle size={56} strokeWidth={3} />
                       </div>
                       <h3 className="text-5xl font-display font-black text-black tracking-tighter mb-8">CONNECTION<br/>ESTABLISHED.</h3>
                       <p className="max-w-md mx-auto text-black/50 font-light leading-relaxed mb-16 text-lg tracking-tight">
                         Identity acknowledged. Priority routing initiated for {formData.fullName.toUpperCase()}. Expect tactical confirmation via phone within 30 minutes.
                       </p>
                       <Button onClick={() => window.location.href = '/'} className="bg-black text-white px-12 py-8 rounded-full font-black uppercase tracking-widest text-[12px]">
                          Terminate Session
                       </Button>
                    </motion.div>
                  )}
               </AnimatePresence>

               {currentStep < 4 && (
                  <div className="mt-20 pt-10 border-t border-black/5 flex justify-between items-center">
                    <Button variant="ghost" onClick={handleBack} disabled={currentStep === 1} className="font-mono font-black uppercase tracking-widest text-[10px] text-black/30">Return</Button>
                    <Button onClick={handleNext} disabled={!isStepValid()} className={cn("px-12 py-8 rounded-full font-black uppercase tracking-widest text-[12px] transition-all", isStepValid() ? "bg-clinical-blue text-white shadow-lg" : "")}>
                       {currentStep === 3 ? 'Finalize protocol' : 'Next segment'} <ChevronRight size={18} className="ml-2" />
                    </Button>
                  </div>
               )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
