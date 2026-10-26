import React from 'react';
import { 
  Building2, 
  Users, 
  MapPin, 
  ShieldCheck, 
  Check, 
  HeartHandshake, 
  PhoneCall, 
  HeartPulse
} from 'lucide-react';
import { Language, HospitalInfo } from '../types';
import { translations } from '../data/translations';

interface AboutProps {
  language: Language;
  hospitalInfo: HospitalInfo;
}

export const AboutSection: React.FC<AboutProps> = ({
  language,
  hospitalInfo
}) => {
  const t = translations[language];

  const highlights = [
    {
      en: "Established community hospital focused on rural emergency and maternal care.",
      kn: "ಗ್ರಾಮೀಣ ತುರ್ತು ಹಾಗೂ ತಾಯಿ-ಮಕ್ಕಳ ಆರೈಕೆಗಾಗಿ ಮೀಸಲಾಗಿರುವ ನಂಬಿಕಸ್ತ ಆರೋಗ್ಯ ಸಂಸ್ಥೆ."
    },
    {
      en: "Round-the-clock casualty with duty medical officers and experienced nursing staff.",
      kn: "24 ಗಂಟೆಯೂ ಕರ್ತವ್ಯ ನಿರತ ವೈದ್ಯರು ಹಾಗೂ ಅನುಭವಿ ನರ್ಸಿಂಗ್ ಸಿಬ್ಬಂದಿಯ ತುರ್ತು ಸೇವೆ."
    },
    {
      en: "Full compliance with Karnataka Private Medical Establishments (KPME) regulations.",
      kn: "ಕರ್ನಾಟಕ ಖಾಸಗಿ ವೈದ್ಯಕೀಯ ಸಂಸ್ಥೆಗಳ (KPME) ನಿಯಮಾವಳಿಗೆ ಸಂಪೂರ್ಣ ಒಳಪಟ್ಟಿದೆ."
    },
    {
      en: "Affordable consultation, diagnostic lab rates, and subsidized medicine.",
      kn: "ಸಾಮಾನ್ಯ ಜನರಿಗೆ ಹೊರೆಯಾಗದ ರಿಯಾಯಿತಿ ದರದ ತಪಾಸಣೆ, ಲ್ಯಾಬ್ ಪರೀಕ್ಷೆ ಹಾಗೂ ಔಷಧಿಗಳು."
    }
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image showcase with verified hospital details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                alt="Hospital Care"
                className="w-full h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-100 shadow-md text-left">
                <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>{language === 'kn' ? 'ದೃಢೀಕೃತ ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರ' : 'Verified Community Healthcare Facility'}</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  {language === 'kn' ? 'ನದಿ-ಇಂಗಳಗಾಂವ, ಅಥಣಿ ತಾಲೂಕು, ಬೆಳಗಾವಿ ಜಿಲ್ಲೆ' : 'Nadi-Ingalgaon, Athani Taluk, Belagavi District'}
                </p>
              </div>
            </div>

            {/* Quick 24/7 Helpline callout */}
            <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-between text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-800 text-white flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-teal-900">{language === 'kn' ? 'ತುರ್ತು ಸಹಾಯವಾಣಿ (24 ಗಂಟೆ)' : 'Emergency Call Center (24/7)'}</div>
                  <div className="text-sm font-bold text-teal-950">{hospitalInfo.emergencyPhone}</div>
                </div>
              </div>
              <a
                href={`tel:${hospitalInfo.emergencyPhone}`}
                className="px-3 py-1.5 rounded-lg bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition-colors"
              >
                Call
              </a>
            </div>
          </div>

          {/* Right Column: Mission prose, verified points, statistics */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-teal-800">
                <Building2 className="w-4 h-4 text-teal-700" />
                <span>{language === 'kn' ? 'ನಮ್ಮ ಬಗ್ಗೆ ಮತ್ತು ಇತಿಹಾಸ' : 'About Our Institution'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                {t.aboutTitle}
              </h2>
              <p className="text-sm sm:text-base font-medium text-teal-800 mt-1">
                {t.aboutSubtitle}
              </p>
            </div>

            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
            </div>

            {/* Highlight Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{language === 'kn' ? item.kn : item.en}</span>
                </div>
              ))}
            </div>

            {/* Impact Metric Counters (clean unboxed styling, zero-pill) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-900">45+</div>
                <div className="text-xs text-slate-500 font-medium">{t.statVillages}</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-900">50,000+</div>
                <div className="text-xs text-slate-500 font-medium">{t.statPatients}</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-900">15+</div>
                <div className="text-xs text-slate-500 font-medium">{t.statDoctors}</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">24/7</div>
                <div className="text-xs text-slate-500 font-medium">{t.statAvailable}</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
