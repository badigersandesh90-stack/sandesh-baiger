import React, { useState } from 'react';
import { 
  FileCheck2, 
  Printer, 
  ChevronRight, 
  HeartHandshake, 
  Check, 
  ShieldAlert, 
  Info,
  ExternalLink
} from 'lucide-react';
import { Language, PublicHealthGuideline, HospitalInfo } from '../types';
import { translations } from '../data/translations';

interface PublicInfoProps {
  language: Language;
  guidelines: PublicHealthGuideline[];
  hospitalInfo: HospitalInfo;
}

export const PublicInfoSection: React.FC<PublicInfoProps> = ({
  language,
  guidelines,
  hospitalInfo
}) => {
  const [activeTab, setActiveTab] = useState<string>(guidelines[0]?.id || 'guide-snakebite');
  const t = translations[language];

  const activeGuideline = guidelines.find(g => g.id === activeTab) || guidelines[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="guidelines" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-teal-800">
              <Info className="w-4 h-4 text-teal-700" />
              <span>{language === 'kn' ? 'ಗ್ರಾಮೀಣ ಸಾರ್ವಜನಿಕ ಮಾರ್ಗಸೂಚಿಗಳು' : 'Community Health Advisories'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.publicInfoTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {t.publicInfoSubtitle}
            </p>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:text-teal-900 hover:bg-slate-50 text-xs font-bold transition-colors cursor-pointer self-start md:self-auto shadow-xs no-print"
          >
            <Printer className="w-4 h-4 text-teal-700" />
            <span>{t.downloadPrintAdvisory}</span>
          </button>
        </div>

        {/* Tab Selection & Protocol Content */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Guide Selector List */}
          <div className="lg:col-span-4 space-y-2">
            {guidelines.map((guide) => {
              const isCurrent = guide.id === activeTab;
              const title = language === 'kn' ? guide.titleKn : guide.titleEn;

              return (
                <button
                  key={guide.id}
                  onClick={() => setActiveTab(guide.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isCurrent
                      ? 'bg-teal-900 text-white border-teal-950 shadow-md'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-1 pr-2">
                    <div className="text-xs font-bold uppercase tracking-wider opacity-80">
                      {guide.id === 'guide-snakebite' ? 'Emergency Protocol' : guide.id === 'guide-fever' ? 'Fever Advisory' : 'Scheme Documentation'}
                    </div>
                    <div className="text-sm font-bold leading-snug">
                      {title}
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 ${isCurrent ? 'text-amber-300' : 'text-slate-400'}`} />
                </button>
              );
            })}

            {/* Ayushman Bharat Quick Card */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs space-y-2 mt-4">
              <div className="font-bold flex items-center gap-1.5 text-amber-900">
                <FileCheck2 className="w-4 h-4" />
                <span>{language === 'kn' ? 'ಉಚಿತ ಚಿಕಿತ್ಸಾ ಮಾಹಿತಿ ಕೌಂಟರ್' : 'Govt Scheme Helpdesk'}</span>
              </div>
              <p className="leading-relaxed">
                {language === 'kn' 
                  ? 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್, ಆರೋಗ್ಯ ಕರ್ನಾಟಕ ಹಾಗೂ ಬಿಪಿಎಲ್ ಕಾರ್ಡ್ ರಿಯಾಯಿತಿ ಸೌಲಭ್ಯಗಳಿಗೆ ಆಸ್ಪತ್ರೆಯ ಸ್ವಾಗತ ಕೌಂಟರ್‌ನಲ್ಲಿ ನೇರವಾಗಿ ಭೇಟಿ ನೀಡಿ.'
                  : 'For Ayushman Bharat and Arogya Karnataka health scheme verification, visit our main reception counter during morning OPD hours.'}
              </p>
            </div>
          </div>

          {/* Active Guide Card */}
          <div className="lg:col-span-8 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            {activeGuideline && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                    {t.guidelineActionTitle}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    {language === 'kn' ? activeGuideline.titleKn : activeGuideline.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2">
                    {language === 'kn' ? activeGuideline.descriptionKn : activeGuideline.descriptionEn}
                  </p>
                </div>

                <div className="space-y-3">
                  {(language === 'kn' ? activeGuideline.stepsKn : activeGuideline.stepsEn).map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200">
                      <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-900 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer Callout */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>
                      {language === 'kn' 
                        ? 'ಸಂದೇಹವಿದ್ದಲ್ಲಿ ಕೂಡಲೇ ಆಸ್ಪತ್ರೆ ತುರ್ತು ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ' 
                        : 'For critical questions, call hospital casualty directly'}
                    </span>
                  </div>
                  <a
                    href={`tel:${hospitalInfo.emergencyPhone}`}
                    className="font-bold text-teal-900 hover:text-teal-950 underline"
                  >
                    {hospitalInfo.emergencyPhone}
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
