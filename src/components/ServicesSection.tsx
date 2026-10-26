import React, { useState } from 'react';
import { 
  Activity, 
  Stethoscope, 
  HeartPulse, 
  Baby, 
  FlaskConical, 
  Pill, 
  Truck, 
  Bed, 
  Clock, 
  CheckCircle, 
  X,
  Phone,
  ArrowRight
} from 'lucide-react';
import { Language, ServiceItem, HospitalInfo } from '../types';
import { translations } from '../data/translations';

interface ServicesProps {
  language: Language;
  services: ServiceItem[];
  hospitalInfo: HospitalInfo;
}

export const ServicesSection: React.FC<ServicesProps> = ({
  language,
  services,
  hospitalInfo
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const t = translations[language];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-rose-600" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-teal-700" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-pink-600" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-amber-600" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6 text-cyan-600" />;
      case 'Pill':
        return <Pill className="w-6 h-6 text-emerald-600" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-teal-800" />;
      case 'Bed':
        return <Bed className="w-6 h-6 text-indigo-600" />;
      default:
        return <Stethoscope className="w-6 h-6 text-teal-700" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-teal-800">
            <Stethoscope className="w-4 h-4 text-teal-700" />
            <span>{language === 'kn' ? 'ವೈದ್ಯಕೀಯ ವಿಭಾಗಗಳು' : 'Clinical Departments'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.servicesTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {services.map((service) => {
            const title = language === 'kn' ? service.titleKn : service.titleEn;
            const shortDesc = language === 'kn' ? service.shortDescKn : service.shortDescEn;
            const timing = language === 'kn' ? service.timingKn : service.timingEn;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-teal-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>

                  <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span className="truncate">{timing}</span>
                  </div>

                  <button
                    onClick={() => setActiveModalService(service)}
                    className="w-full inline-flex items-center justify-between text-xs font-semibold text-teal-800 hover:text-teal-950 py-1.5 transition-colors cursor-pointer"
                  >
                    <span>{language === 'kn' ? 'ಹೆಚ್ಚಿನ ವಿವರ ನೋಡಿ' : 'View Full Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Details Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto text-left relative">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                {getServiceIcon(activeModalService.icon)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {language === 'kn' ? activeModalService.titleKn : activeModalService.titleEn}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-teal-700" />
                  <span>{language === 'kn' ? activeModalService.timingKn : activeModalService.timingEn}</span>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {language === 'kn' ? 'ವಿಭಾಗದ ಪರಿಚಯ' : 'Overview'}
                </h4>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  {language === 'kn' ? activeModalService.fullDescKn : activeModalService.fullDescEn}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t.serviceFeatures}
                </h4>
                <ul className="mt-2 space-y-2">
                  {(language === 'kn' ? activeModalService.featuresKn : activeModalService.featuresEn).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href={`tel:${hospitalInfo.emergencyPhone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>{language === 'kn' ? 'ವಿಭಾಗಕ್ಕೆ ಕರೆ ಮಾಡಿ' : 'Call Department'}</span>
                </a>
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer"
                >
                  {t.btnCancel}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
