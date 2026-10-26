import React from 'react';
import { 
  HeartPulse, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Share2, 
  Lock, 
  BookOpen, 
  ArrowUp,
  Ambulance,
  ExternalLink
} from 'lucide-react';
import { Language, HospitalInfo } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  language: Language;
  onToggleLanguage: () => void;
  hospitalInfo: HospitalInfo;
  onOpenAdmin: () => void;
  onOpenShare: () => void;
  onOpenPublishGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onToggleLanguage,
  hospitalInfo,
  onOpenAdmin,
  onOpenShare,
  onOpenPublishGuide
}) => {
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 text-xs border-t border-slate-800">
      
      {/* Emergency Strip */}
      <div className="bg-teal-900/90 text-teal-100 py-4 px-4 sm:px-6 border-b border-teal-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-800 text-amber-300 flex items-center justify-center shrink-0">
              <HeartPulse className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {language === 'kn' ? 'ತುರ್ತು ವೈದ್ಯಕೀಯ ಸಹಾಯ ಬೇಕೇ? 24 ಗಂಟೆ ಲಭ್ಯ' : 'Immediate Medical Assistance Required? Available 24x7'}
              </div>
              <div className="text-xs text-teal-200 mt-0.5">
                Casualty: {hospitalInfo.emergencyPhone} · Ambulance: {hospitalInfo.ambulancePhone}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${hospitalInfo.emergencyPhone}`}
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors"
            >
              Call Casualty
            </a>
            <a
              href={hospitalInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-700 text-white text-xs font-semibold border border-teal-600 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Map</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
          
          {/* Brand & Introduction */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-amber-300 flex items-center justify-center">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base font-bold text-white">
                  {language === 'kn' ? hospitalInfo.nameKn : hospitalInfo.nameEn}
                </div>
                <div className="text-[11px] text-teal-400">
                  {language === 'kn' ? hospitalInfo.nameEn : hospitalInfo.nameKn}
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              {t.disclaimer}
            </p>

            <div className="text-xs text-slate-400 space-y-1 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                <span>{language === 'kn' ? hospitalInfo.addressKn : hospitalInfo.addressEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                <span>{hospitalInfo.phone} / {hospitalInfo.emergencyPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                <span>{hospitalInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === 'kn' ? 'ಮುಖ್ಯ ಲಿಂಕ್‌ಗಳು' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {t.navHome}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t.navAbout}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.navServices}
                </a>
              </li>
              <li>
                <a href="#announcements" className="hover:text-white transition-colors">
                  {t.navPublicInfo}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  {t.navGallery}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  {t.navLocation}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t.navContact}
                </a>
              </li>
            </ul>
          </div>

          {/* Public Awareness & Administration */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === 'kn' ? 'ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳು ಮತ್ತು ಸಹಾಯ' : 'Public Welfare & Connect'}
            </h4>
            
            <p className="text-slate-400 text-xs leading-relaxed">
              {language === 'kn' 
                ? 'ಗ್ರಾಮಸ್ಥರಿಗೆ ಮಾಹಿತಿ ತಲುಪಿಸಲು ಈ ಪೋರ್ಟಲ್ ಅನ್ನು ಶೇರ್ ಮಾಡಿ ಹಾಗೂ ಆಸ್ಪತ್ರೆಯ ಅಧಿಕೃತ ಸ್ಥಳ ನಕ್ಷೆಯನ್ನು ಉಳಿಸಿಕೊಳ್ಳಿ.' 
                : 'Share this verified portal with your community. Save and bookmark emergency contact numbers.'}
            </p>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={onOpenShare}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-teal-400" />
                <span>{t.btnSharePortal}</span>
              </button>

              <button
                onClick={onOpenPublishGuide}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.onlinePublishGuideBtn}</span>
              </button>

              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>{t.navAdmin}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright and language toggle */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>{t.copyright}</div>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggleLanguage}
              className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Globe className="w-3 h-3 text-teal-400" />
              <span>{language === 'en' ? 'ಕನ್ನಡ ಆವೃತ್ತಿ' : 'English Version'}</span>
            </button>

            <span>·</span>

            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
