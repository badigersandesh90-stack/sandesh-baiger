import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Globe, 
  Menu, 
  X, 
  ShieldCheck, 
  Share2, 
  Lock,
  Ambulance,
  HeartPulse
} from 'lucide-react';
import { Language, HospitalInfo } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  hospitalInfo: HospitalInfo;
  onOpenAdmin: () => void;
  onOpenShare: () => void;
  isAdminLoggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  hospitalInfo,
  onOpenAdmin,
  onOpenShare,
  isAdminLoggedIn
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const navLinks = [
    { href: '#home', label: t.navHome },
    { href: '#about', label: t.navAbout },
    { href: '#services', label: t.navServices },
    { href: '#announcements', label: t.navPublicInfo },
    { href: '#guidelines', label: language === 'kn' ? 'ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶಿ' : 'Guidelines' },
    { href: '#gallery', label: t.navGallery },
    { href: '#location', label: t.navLocation },
    { href: '#contact', label: t.navContact },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top emergency & language strip */}
      <div className="bg-teal-900 text-teal-50 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <a 
              href={`tel:${hospitalInfo.emergencyPhone}`} 
              className="flex items-center gap-1.5 font-semibold text-amber-300 hover:text-amber-200 transition-colors"
            >
              <HeartPulse className="w-3.5 h-3.5 animate-pulse text-rose-400" />
              <span>{t.emergencyHelpline}: {hospitalInfo.emergencyPhone}</span>
            </a>
            <span className="hidden md:inline text-teal-400">·</span>
            <a 
              href={`tel:${hospitalInfo.ambulancePhone}`} 
              className="hidden sm:flex items-center gap-1.5 text-teal-100 hover:text-white transition-colors"
            >
              <Ambulance className="w-3.5 h-3.5 text-emerald-300" />
              <span>Ambulance: {hospitalInfo.ambulancePhone}</span>
            </a>
            <span className="hidden lg:inline text-teal-400">·</span>
            <span className="hidden lg:flex items-center gap-1.5 text-teal-200">
              <Clock className="w-3.5 h-3.5" />
              <span>{language === 'kn' ? hospitalInfo.opdTimingsKn : hospitalInfo.opdTimingsEn}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onToggleLanguage}
              className="flex items-center gap-1.5 bg-teal-800/80 hover:bg-teal-700 text-teal-100 px-2.5 py-1 rounded-md text-xs font-medium transition-colors border border-teal-700/60"
              title="Change Language / ಭಾಷೆ ಬದಲಾಯಿಸಿ"
            >
              <Globe className="w-3.5 h-3.5 text-amber-300" />
              <span>{language === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>

            <button
              onClick={onOpenShare}
              className="flex items-center gap-1 text-teal-200 hover:text-white px-2 py-1 text-xs transition-colors"
              title={t.btnSharePortal}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.btnSharePortal}</span>
            </button>

            <button
              onClick={onOpenAdmin}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                isAdminLoggedIn 
                  ? 'bg-amber-500 text-slate-900 font-bold' 
                  : 'text-teal-200 hover:text-white hover:bg-teal-800/60'
              }`}
              title={t.navAdmin}
            >
              <Lock className="w-3 h-3" />
              <span>{isAdminLoggedIn ? (language === 'kn' ? 'ನಿರ್ವಾಹಕ (ಲಾಗಿನ್ ಆಗಿದೆ)' : 'Admin Active') : t.navAdmin}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Hospital Brand */}
          <a href="#home" className="flex items-center gap-3 group text-left">
            <div className="w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center shadow-md shadow-teal-900/10 group-hover:bg-teal-700 transition-colors">
              <div className="relative">
                <HeartPulse className="w-7 h-7 text-amber-300" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-900 tracking-tight text-base sm:text-lg group-hover:text-teal-800 transition-colors leading-tight">
                {language === 'kn' ? hospitalInfo.nameKn : hospitalInfo.nameEn}
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-1 font-medium mt-0.5">
                <MapPin className="w-3 h-3 text-teal-700 shrink-0" />
                <span>Nadi-Ingalgaon, Athani (Taluk), Belagavi (Dist)</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-slate-700 hover:text-teal-800 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={hospitalInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg border border-teal-200 transition-colors"
            >
              <MapPin className="w-4 h-4 text-teal-700" />
              <span>{t.btnGetDirections}</span>
            </a>

            <a
              href={`tel:${hospitalInfo.emergencyPhone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-teal-800 hover:bg-teal-900 rounded-lg shadow-sm transition-all hover:shadow"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>{t.btnCallEmergency}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${hospitalInfo.emergencyPhone}`}
              className="p-2 bg-rose-600 text-white rounded-lg shadow-xs hover:bg-rose-700"
              aria-label="Call Emergency"
            >
              <Phone className="w-5 h-5 text-amber-300" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-150">
          <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2.5 px-3 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-900 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-2.5">
            <a
              href={hospitalInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-teal-800 bg-teal-50 rounded-lg border border-teal-200"
            >
              <MapPin className="w-4 h-4" />
              <span>{t.btnGetDirections}</span>
            </a>
            <a
              href={`tel:${hospitalInfo.emergencyPhone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-bold text-white bg-teal-800 rounded-lg shadow-xs"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>{t.btnCallEmergency} ({hospitalInfo.emergencyPhone})</span>
            </a>
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={onToggleLanguage}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg"
              >
                <Globe className="w-3.5 h-3.5 text-teal-700" />
                <span>{language === 'en' ? 'ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ' : 'Switch to English'}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-100"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{t.navAdmin}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
