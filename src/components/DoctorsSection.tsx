import React from 'react';
import { Stethoscope, Calendar, Award, Clock } from 'lucide-react';
import { Language, DoctorProfile } from '../types';
import { translations } from '../data/translations';

interface DoctorsProps {
  language: Language;
  doctors: DoctorProfile[];
}

export const DoctorsSection: React.FC<DoctorsProps> = ({
  language,
  doctors
}) => {
  const t = translations[language];

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-teal-800">
            <Stethoscope className="w-4 h-4 text-teal-700" />
            <span>{language === 'kn' ? 'ವೈದ್ಯರ ಮಾಹಿತಿ' : 'Medical Specialists'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.doctorsTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.doctorsSubtitle}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {doctors.map((doc) => {
            const name = language === 'kn' ? doc.nameKn : doc.nameEn;
            const dept = language === 'kn' ? doc.departmentKn : doc.departmentEn;
            const schedule = language === 'kn' ? doc.scheduleKn : doc.scheduleEn;
            const experience = language === 'kn' ? doc.experienceKn : doc.experienceEn;

            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 font-bold text-lg">
                    {name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>

                  <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-900">
                    {name}
                  </h3>
                  
                  <div className="text-xs font-semibold text-teal-800 mt-0.5">
                    {doc.qualifications}
                  </div>

                  <div className="text-xs text-slate-600 font-medium mt-1">
                    {dept}
                  </div>

                  <p className="mt-3 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                    {experience}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1">
                  <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span>{t.drConsultationDays}:</span>
                  </div>
                  <div className="text-slate-600 pl-5">
                    {schedule}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
