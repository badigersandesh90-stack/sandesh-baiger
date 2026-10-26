import React from 'react';
import { 
  Phone, 
  MapPin, 
  ArrowRight, 
  Share2, 
  ShieldCheck, 
  Ambulance, 
  HeartPulse, 
  Clock, 
  Pill, 
  FileCheck2,
  Navigation
} from 'lucide-react';
import { Language, HospitalInfo } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  language: Language;
  hospitalInfo: HospitalInfo;
  onOpenShare: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  hospitalInfo,
  onOpenShare
}) => {
  const t = translations[language];

  return (
    <section id="home" className="relative bg-gradient-to-b from-teal-950 via-teal-900 to-slate-900 text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting and subtle grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Place Name, Intro, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Unboxed clean metadata kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-teal-200 font-medium tracking-wide">
              <span>{t.heroBadge}</span>
              <span aria-hidden="true" className="text-teal-400">·</span>
              <span>Reg: {hospitalInfo.registrationNumber}</span>
              <span aria-hidden="true" className="text-teal-400">·</span>
              <span className="text-emerald-400 font-semibold">Verified Center</span>
            </div>

            {/* Prominent Place Name */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {language === 'kn' ? (
                  <>
                    <span className="block text-amber-300 font-bold">{hospitalInfo.nameKn}</span>
                    <span className="block text-2xl sm:text-3xl font-semibold text-teal-100 mt-1">
                      {hospitalInfo.nameEn}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block text-white font-extrabold">{hospitalInfo.nameEn}</span>
                    <span className="block text-2xl sm:text-3xl font-bold text-amber-300 mt-1">
                      {hospitalInfo.nameKn}
                    </span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed max-w-2xl pt-2">
                {language === 'kn' ? hospitalInfo.taglineKn : hospitalInfo.taglineEn}.{' '}
                {language === 'kn' 
                  ? 'ಅಥಣಿ ತಾಲೂಕಿನ ನದಿ-ಇಂಗಳಗಾಂವದಲ್ಲಿರುವ ಶ್ರೀ ಬಸವೇಶ್ವರ ಆಸ್ಪತ್ರೆಯು ಸಕಲ ತುರ್ತು ಚಿಕಿತ್ಸೆ, ಹೆರಿಗೆ, ಮಕ್ಕಳ ವಿಭಾಗ, ಲ್ಯಾಬ್ ಹಾಗೂ 24 ಗಂಟೆಗಳ ಆಂಬ್ಯುಲೆನ್ಸ್ ಸೇವೆಯನ್ನು ಒಳಗೊಂಡಿದೆ.'
                  : 'Providing essential healthcare, round-the-clock emergency casualty, safe deliveries, pediatrics, pathology lab tests, and ambulance connectivity for rural families along the Krishna river.'}
              </p>
            </div>

            {/* Location highlight banner */}
            <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 flex items-start gap-3 text-xs sm:text-sm text-teal-100">
              <MapPin className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">
                  {language === 'kn' ? hospitalInfo.addressKn : hospitalInfo.addressEn}
                </span>
                <p className="text-xs text-teal-200 mt-0.5">
                  {language === 'kn' ? hospitalInfo.landmarkKn : hospitalInfo.landmarkEn}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${hospitalInfo.emergencyPhone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg shadow-amber-400/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{t.btnCallEmergency} ({hospitalInfo.emergencyPhone})</span>
              </a>

              <a
                href={hospitalInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-800/80 hover:bg-teal-700 text-white font-semibold text-sm border border-teal-600/60 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-emerald-300" />
                <span>{t.btnGetDirections}</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-teal-200 hover:text-white hover:bg-white/10 font-medium text-sm transition-colors"
              >
                <span>{t.btnViewServices}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenShare}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl text-teal-200 hover:text-white hover:bg-white/10 text-sm transition-colors"
                title={t.btnSharePortal}
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">{t.btnSharePortal}</span>
              </button>
            </div>

            {/* Clean unboxed credentials list */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-teal-200/80">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                <span>{language === 'kn' ? '24 ಗಂಟೆ ತುರ್ತು ಚಿಕಿತ್ಸೆ' : '24x7 Emergency Ready'}</span>
              </span>
              <span aria-hidden="true" className="text-teal-600">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'kn' ? 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ನೆರವು' : 'Ayushman Bharat Desk'}</span>
              </span>
              <span aria-hidden="true" className="text-teal-600">·</span>
              <span className="flex items-center gap-1.5">
                <Ambulance className="w-3.5 h-3.5 text-teal-300" />
                <span>{language === 'kn' ? 'ಆಂಬ್ಯುಲೆನ್ಸ್ ಸಾರಿಗೆ' : 'Ambulance Transport'}</span>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Verified Facility Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-slate-900/60 shadow-2xl backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80"
                alt="Basaveshwar Hospital Campus"
                className="w-full h-72 sm:h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>{language === 'kn' ? 'ಆಸ್ಪತ್ರೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ' : 'Hospital Open & Operational'}</span>
                  </div>
                  <span className="text-[11px] text-slate-300">Nadi-Ingalgaon, Athani</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 text-left">
                  <div className="text-xs font-semibold text-amber-300">
                    {language === 'kn' ? 'ತುರ್ತು ಸಹಾಯವಾಣಿ ಮತ್ತು ಆಂಬ್ಯುಲೆನ್ಸ್' : 'Emergency & Ambulance Lines'}
                  </div>
                  <div className="flex items-center justify-between mt-1 text-sm font-bold text-white">
                    <span>{hospitalInfo.emergencyPhone}</span>
                    <a
                      href={`tel:${hospitalInfo.emergencyPhone}`}
                      className="text-xs bg-amber-400 hover:bg-amber-300 text-slate-950 px-2.5 py-1 rounded-md font-bold transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-white text-slate-900 p-3 rounded-xl shadow-xl border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-800">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900">
                  {language === 'kn' ? 'ಬಸವೇಶ್ವರ ಆಸ್ಪತ್ರೆ' : 'Basaveshwar Hospital'}
                </div>
                <div className="text-[11px] text-slate-600 font-medium">
                  {language === 'kn' ? 'ನದಿ-ಇಂಗಳಗಾಂವ (ಅಥಣಿ)' : 'Nadi-Ingalgaon, Belagavi'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Highlight Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-6 border-t border-teal-800/60 text-left">
          
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-teal-800/80 text-amber-300">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white">{t.quick247}</h2>
                <p className="text-xs text-teal-200/80 mt-0.5">{t.quick247Sub}</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-teal-800/80 text-emerald-300">
                <Ambulance className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white">{t.quickAmbulance}</h2>
                <p className="text-xs text-teal-200/80 mt-0.5">{t.quickAmbulanceSub}</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-teal-800/80 text-amber-300">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white">{t.quickSchemes}</h2>
                <p className="text-xs text-teal-200/80 mt-0.5">{t.quickSchemesSub}</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-teal-800/80 text-teal-300">
                <Pill className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white">{t.quickPharmacy}</h2>
                <p className="text-xs text-teal-200/80 mt-0.5">{t.quickPharmacySub}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
