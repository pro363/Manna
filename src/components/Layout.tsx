import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Clock, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { CONTACT_INFO } from '../constants';
import { Button } from './ui/button';
import { Toaster } from './ui/sonner';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={cn("relative flex items-center justify-center overflow-hidden rounded-full bg-white border border-slate-100 shadow-inner", className)}>
    <svg viewBox="0 0 100 100" className="w-full h-full p-1">
      <circle cx="50" cy="50" r="8" fill="#FDE68A" />
      <g stroke="#FDE68A" strokeWidth="1" strokeLinecap="round">
        {[...Array(12)].map((_, i) => (
          <line key={i} x1="50" y1="36" x2="50" y2="39" transform={`rotate(${i * 30} 50 50)`} />
        ))}
      </g>
      <path d="M25 45 C20 65 35 85 50 85 M75 45 C80 65 65 85 50 85" fill="none" stroke="#1D4ED8" strokeWidth="6" strokeLinecap="round" />
      <path d="M32 55 C28 65 35 75 48 78 M68 55 C72 65 65 75 52 78" fill="none" stroke="#1D4ED8" strokeWidth="5" strokeLinecap="round" />
      <text x="50" y="30" fontSize="18" fontWeight="900" textAnchor="middle" fill="#000" style={{ fontFamily: 'Inter, sans-serif' }}>መ ና</text>
    </svg>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Philosophy', href: '/about' },
    { title: 'Modalities', href: '/services' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500', isScrolled ? 'py-4' : 'py-8')}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className={cn("flex items-center justify-between p-2 rounded-full transition-all duration-500", isScrolled ? "bg-white/90 backdrop-blur-2xl shadow-sm border border-slate-200" : "bg-transparent")}>
          <Link to="/" className="flex items-center gap-3 pl-4">
            <Logo className="w-11 h-11" />
            <div className="flex flex-col">
              <span className={cn("text-lg font-display font-black tracking-tighter leading-none transition-colors", !isScrolled && location.pathname === '/' ? "text-white" : "text-clinical-blue")}>MANNA</span>
              <span className={cn("text-[10px] font-mono tracking-[0.2em] font-bold transition-colors", !isScrolled && location.pathname === '/' ? "text-white/60" : "text-clinical-blue/40")}>DIAGNOSTICS</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.title} to={link.href} className={cn("px-4 py-2 text-[13px] font-bold uppercase tracking-widest transition-all rounded-full", !isScrolled && location.pathname === '/' ? "text-white/70 hover:text-white" : "text-slate-600 hover:text-clinical-blue hover:bg-clinical-blue/5")}>
                {link.title}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 pr-2">
            <Button asChild className={cn("rounded-full px-8 py-6 font-bold uppercase tracking-widest text-[11px]", !isScrolled && location.pathname === '/' ? "bg-clinical-healing text-white hover:bg-clinical-accent" : "bg-clinical-blue text-white")}>
              <Link to="/booking">Book Priority</Link>
            </Button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={cn("md:hidden w-12 h-12 flex items-center justify-center rounded-full transition-all", !isScrolled && location.pathname === '/' ? "text-white" : "text-black")}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-24 left-6 right-6 bg-slate-900 rounded-[40px] p-8 md:hidden shadow-2xl border border-white/10">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link key={link.title} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-display font-bold text-white tracking-tight">{link.title}</Link>
              ))}
              <hr className="border-white/10 my-4" />
              <Button asChild className="w-full py-8 rounded-[24px] bg-white text-black hover:bg-slate-200">
                <Link to="/booking">Book Priority</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-white py-24 technical-grid border-t border-white/5">
    <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5 space-y-12">
        <div className="flex items-center gap-4">
          <Logo className="w-16 h-16" />
          <div className="flex flex-col">
            <span className="text-4xl font-display font-black tracking-tighter leading-none">MANNA</span>
            <span className="text-xs font-mono tracking-[0.4em] font-bold text-white/40">DIAGNOSTIC CENTER</span>
          </div>
        </div>
        <p className="text-xl text-white/50 font-light leading-relaxed max-w-md">The standard for diagnostic excellence in Ethiopia. Available 24/7 with dedicated ambulance support.</p>
      </div>

      <div className="lg:col-span-4 space-y-8">
        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-white/40 uppercase block">Clinical Services</span>
        <ul className="text-sm space-y-3 font-medium text-white/60">
          <li>MRI & CT Precision Scan</li>
          <li>Digital Mammography & Ultrasound</li>
          <li>Specialized Fluoroscopy Studies</li>
          <li>Emergency Ambulance & Consultation</li>
        </ul>
      </div>

      <div className="lg:col-span-3 space-y-8 text-right lg:text-left">
        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-white/40 uppercase block">Facility Access Node</span>
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            {CONTACT_INFO.phones.map(phone => (
              <a key={phone} href={`tel:${phone}`} className="text-xl font-display font-black text-white hover:text-clinical-accent transition-colors tracking-tighter">{phone}</a>
            ))}
          </div>
          <p className="text-sm text-white/40 leading-relaxed font-light">{CONTACT_INFO.address}</p>
        </div>
      </div>
    </div>
    <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-32 pt-12 border-t border-white/5 opacity-40 text-[10px] font-mono font-bold uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-8">
      <span>© 2026 MANNA DIAGNOSTIC SYSTEM</span>
      <div className="flex gap-12">
        <Link to="/privacy">Privacy_Protocol</Link>
        <Link to="/legal">User_Agreement</Link>
      </div>
    </div>
    <Toaster position="top-center" expand={false} richColors />
  </footer>
);

export const Layout = { Navbar, Footer };
