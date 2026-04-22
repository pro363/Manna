import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Clock, MapPin, ChevronRight, Activity } from 'lucide-react';
import { cn } from '../lib/utils';
import { CONTACT_INFO } from '../constants';

export const Logo = ({ className = "w-10 h-10", light = false }: { className?: string, light?: boolean }) => (
  <div className={cn("relative flex items-center justify-center overflow-hidden rounded-full bg-white border border-slate-100 shadow-inner", className)}>
    <svg viewBox="0 0 100 100" className="w-full h-full p-1">
      {/* Radiant Sun */}
      <circle cx="50" cy="50" r="8" fill="#FDE68A" />
      <g stroke="#FDE68A" strokeWidth="1" strokeLinecap="round">
        {[...Array(12)].map((_, i) => (
          <line key={i} x1="50" y1="36" x2="50" y2="39" transform={`rotate(${i * 30} 50 50)`} />
        ))}
      </g>
      
      {/* Caring Hands */}
      <path 
        d="M25 45 C20 65 35 85 50 85 M75 45 C80 65 65 85 50 85" 
        fill="none" 
        stroke="#1D4ED8" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />
      <path 
        d="M32 55 C28 65 35 75 48 78 M68 55 C72 65 65 75 52 78" 
        fill="none" 
        stroke="#1D4ED8" 
        strokeWidth="5" 
        strokeLinecap="round" 
      />
      
      {/* Amharic Text: መና (Simplified professional recreation) */}
      <text x="50" y="30" fontSize="18" fontWeight="900" textAnchor="middle" fill="#000" style={{ fontFamily: 'Inter, sans-serif' }}>መ ና</text>
    </svg>
  </div>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Technology', href: '/technology' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'py-4 translate-y-0' : 'py-8'
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className={cn(
          "flex items-center justify-between p-2 rounded-full transition-all duration-500",
          isScrolled ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/40" : "bg-transparent"
        )}>
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 pl-4">
            <Logo className="w-11 h-11" />
            <div className="flex flex-col">
              <span className={cn(
                "text-lg font-display font-black tracking-tighter leading-none transition-colors duration-500",
                !isScrolled && location.pathname === '/' ? "text-white" : "text-clinical-dark"
              )}>
                MANNA
              </span>
              <span className={cn(
                "text-[10px] font-mono tracking-[0.2em] font-bold transition-all duration-500",
                !isScrolled && location.pathname === '/' ? "text-white/60" : "text-clinical-blue/40"
              )}>
                DIAGNOSTICS
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 rounded-full",
                  !isScrolled && location.pathname === '/' 
                    ? "text-white/70 hover:text-white" 
                    : "text-clinical-dark/60 hover:text-clinical-blue hover:bg-clinical-blue/5"
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3 pr-2">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full text-[12px] font-black uppercase tracking-widest transition-all duration-500 shadow-lg shadow-emerald-500/10",
                !isScrolled && location.pathname === '/' 
                  ? "bg-clinical-healing text-white hover:bg-clinical-accent" 
                  : "bg-clinical-blue text-white hover:bg-clinical-dark"
              )}
            >
              Book Priority
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden w-12 h-12 flex items-center justify-center rounded-full transition-all",
              !isScrolled && location.pathname === '/' ? "text-white" : "text-black"
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-24 left-6 right-6 bg-black rounded-[40px] p-8 md:hidden shadow-2xl border border-white/10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-display font-bold text-white tracking-tight"
                >
                  {link.title}
                </Link>
              ))}
              <hr className="border-white/10 my-4" />
              <div className="flex justify-between items-center text-white/50">
                <span className="text-xs font-mono uppercase tracking-widest">{CONTACT_INFO.hours}</span>
                <ChevronRight size={20} />
              </div>
              <a href={`tel:${CONTACT_INFO.phone}`} className="bg-white text-black py-5 rounded-[24px] text-center font-black uppercase tracking-widest text-sm">
                Call Center Direct
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-24 technical-grid border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-12">
          <div className="flex items-center gap-4">
            <Logo className="w-16 h-16" />
            <div className="flex flex-col">
              <span className="text-4xl font-display font-black tracking-tighter leading-none">MANNA</span>
              <span className="text-xs font-mono tracking-[0.4em] font-bold text-white/40">DIAGNOSTIC CENTER</span>
            </div>
          </div>
          <p className="text-xl text-white/50 font-light leading-relaxed max-w-md">
            The reference standard for medical imaging in Ethiopia. Precision, speed, and privacy—available 24/7.
          </p>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center cursor-pointer">
              <span className="text-xs font-bold">FB</span>
            </div>
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center cursor-pointer">
              <span className="text-xs font-bold">IG</span>
            </div>
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center cursor-pointer">
              <span className="text-xs font-bold">IN</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <h4 className="text-[10px] font-mono font-bold tracking-[0.4em] text-white/40 uppercase">Navigation</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/60">
            <li><Link to="/about" className="hover:text-white transition-colors">Expertise</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Operations</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Facility</Link></li>
            <li><Link to="/booking" className="hover:text-white transition-colors">Logistics</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <h4 className="text-[10px] font-mono font-bold tracking-[0.4em] text-white/40 uppercase">Services</h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-white/60">
            <li><Link to="/services/mri" className="hover:text-white transition-colors">MRI Suite</Link></li>
            <li><Link to="/services/ct-scan" className="hover:text-white transition-colors">CT Precision</Link></li>
            <li><Link to="/services/x-ray" className="hover:text-white transition-colors">X-Ray Digital</Link></li>
            <li><span className="text-white/20">US Contrast</span></li>
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-8">
          <h4 className="text-[10px] font-mono font-bold tracking-[0.4em] text-white/40 uppercase">Command Center</h4>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <MapPin size={20} className="text-white/20 shrink-0" />
              <p className="text-sm text-white/60 font-medium leading-relaxed">{CONTACT_INFO.address}</p>
            </div>
            <div className="flex gap-4 items-center">
              <Phone size={20} className="text-white/20 shrink-0" />
              <p className="text-sm text-white/60 font-black">{CONTACT_INFO.phone}</p>
            </div>
            <div className="flex gap-4 items-center">
              <Clock size={20} className="text-white/20 shrink-0" />
              <p className="text-sm text-white/60 font-medium uppercase tracking-widest">{CONTACT_INFO.hours}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
        <p className="text-[10px] font-mono font-bold tracking-widest">© 2026 MANNA DIAGNOSTIC SYSTEM. REDEFINING RADIOLOGY.</p>
        <div className="flex gap-12 text-[10px] font-mono font-bold tracking-widest">
          <Link to="/privacy">PRIVACY_PROTOCOL</Link>
          <Link to="/terms">USER_AGREEMENT</Link>
        </div>
      </div>
    </footer>
  );
};

export const Layout = {
  Navbar,
  Footer
};
