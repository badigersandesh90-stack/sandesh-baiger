import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  Ambulance, 
  Clock, 
  MapPin, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { Language, HospitalInfo, ContactEnquiry } from '../types';
import { translations } from '../data/translations';

interface ContactProps {
  language: Language;
  hospitalInfo: HospitalInfo;
  onNewEnquiry: (enquiry: ContactEnquiry) => void;
}

export const ContactSection: React.FC<ContactProps> = ({
  language,
  hospitalInfo,
  onNewEnquiry
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    village: '',
    department: 'General OPD',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const newTicket = `BHN-${Math.floor(1000 + Math.random() * 9000)}`;
    const enquiry: ContactEnquiry = {
      id: `enq-${Date.now()}`,
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      village: formData.village.trim() || 'Nadi-Ingalgaon area',
      department: formData.department,
      message: formData.message.trim(),
      date: new Date().toISOString().split('T')[0],
      status: 'new'
    };

    onNewEnquiry(enquiry);
    setTicketId(newTicket);
    setSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      village: '',
      department: 'General OPD',
      message: ''
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 8000);
  };

  const createWhatsAppLink = () => {
    const rawNumber = hospitalInfo.whatsappNumber.replace(/[^0-9]/g, '');
    const defaultText = language === 'kn'
      ? `ನಮಸ್ಕಾರ, ನಾನು ಬಸವೇಶ್ವರ ಆಸ್ಪತ್ರೆ, ನದಿ-ಇಂಗಳಗಾಂವ ಅವರಲ್ಲಿ OPD ಸಮಯ ಹಾಗೂ ವೈದ್ಯರ ಭೇಟಿಯ ಬಗ್ಗೆ ಮಾಹಿತಿ ತಿಳಿಯಲು ಬಯಸುತ್ತೇನೆ.`
      : `Namaskara, I would like to inquire regarding doctor consultation and services at Basaveshwar Hospital, Nadi-Ingalgaon.`;
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(defaultText)}`;
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-teal-800">
            <Phone className="w-4 h-4 text-teal-700" />
            <span>{language === 'kn' ? 'ನೇರ ಸಂಪರ್ಕ ಕೇಂದ್ರ' : 'Verified Contacts & Helpdesk'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Column: Direct verified phone cards & WhatsApp */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 24/7 Casualty Phone */}
            <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold text-rose-900 uppercase tracking-wider">
                    {language === 'kn' ? 'ತುರ್ತು ಚಿಕಿತ್ಸಾ ಘಟಕ (24x7)' : '24/7 Casualty & Emergency'}
                  </div>
                  <div className="text-lg font-extrabold text-slate-950 mt-0.5">
                    {hospitalInfo.emergencyPhone}
                  </div>
                </div>
              </div>
              <a
                href={`tel:${hospitalInfo.emergencyPhone}`}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors shadow-xs"
              >
                Call
              </a>
            </div>

            {/* Ambulance Dispatch Line */}
            <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center shrink-0">
                  <Ambulance className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <div className="text-xs font-bold text-teal-900 uppercase tracking-wider">
                    {language === 'kn' ? 'ಆಂಬ್ಯುಲೆನ್ಸ್ ಸಹಾಯವಾಣಿ' : 'Ambulance Transport'}
                  </div>
                  <div className="text-lg font-extrabold text-slate-950 mt-0.5">
                    {hospitalInfo.ambulancePhone}
                  </div>
                </div>
              </div>
              <a
                href={`tel:${hospitalInfo.ambulancePhone}`}
                className="px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition-colors shadow-xs"
              >
                Call
              </a>
            </div>

            {/* Official WhatsApp Button */}
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                    {language === 'kn' ? 'ಅಧಿಕೃತ ವಾಟ್ಸಾಪ್ ಸಹಾಯವಾಣಿ' : 'Official WhatsApp Helpline'}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5">
                    {hospitalInfo.whatsappNumber}
                  </div>
                </div>
              </div>
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs inline-flex items-center gap-1.5"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            {/* General Reception & Email */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>{language === 'kn' ? 'ಸ್ವಾಗತ ಕೌಂಟರ್ / ಸಾಮಾನ್ಯ ತಪಾಸಣೆ' : 'Reception Desk'}:</span>
                </span>
                <a href={`tel:${hospitalInfo.phone}`} className="font-bold text-teal-900 hover:underline">
                  {hospitalInfo.phone}
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-200/80">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{language === 'kn' ? 'ಇಮೇಲ್ ವಿಳಾಸ' : 'Official Email'}:</span>
                </span>
                <a href={`mailto:${hospitalInfo.email}`} className="font-medium text-teal-900 hover:underline text-xs">
                  {hospitalInfo.email}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {t.formHeading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {language === 'kn' 
                  ? 'ನಿಮ್ಮ ಹೆಸರು, ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಹಾಗೂ ಅಗತ್ಯವಿರುವ ಮಾಹಿತಿಯನ್ನು ನಮೂದಿಸಿ ಕಳುಹಿಸಿ. ಆಸ್ಪತ್ರೆಯ ಸಿಬ್ಬಂದಿ ಶೀಘ್ರವೇ ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.' 
                  : 'Submit your query below. Our hospital administration will review and contact you promptly.'}
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">{t.formSuccess}</div>
                  <div className="text-xs text-emerald-800 mt-1">
                    {language === 'kn' ? `ನಿಮ್ಮ ರೆಫರೆನ್ಸ್ ಟೋಕನ್: ${ticketId}` : `Your Enquiry Reference Token: ${ticketId}`}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={language === 'kn' ? 'ಉದಾ: ಸುರೇಶ ಪಾಟೀಲ' : 'e.g. Suresh Patil'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.formPhone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={language === 'kn' ? 'ಉದಾ: 98450 12345' : 'e.g. +91 98450 12345'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.formVillage}
                  </label>
                  <input
                    type="text"
                    value={formData.village}
                    onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                    placeholder={language === 'kn' ? 'ಉದಾ: ನದಿ-ಇಂಗಳಗಾಂವ / ಅಥಣಿ' : 'e.g. Nadi-Ingalgaon / Shedbal'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.formDepartment}
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700 cursor-pointer"
                  >
                    <option value="General OPD">{language === 'kn' ? 'ಸಾಮಾನ್ಯ ತಪಾಸಣೆ (General OPD)' : 'General Medicine & OPD'}</option>
                    <option value="Maternity & Delivery">{language === 'kn' ? 'ಪ್ರಸೂತಿ ಮತ್ತು ಹೆರಿಗೆ (Maternity)' : 'Maternity & Delivery'}</option>
                    <option value="Child Care & Vaccine">{language === 'kn' ? 'ಮಕ್ಕಳ ಆರೋಗ್ಯ ಮತ್ತು ಲಸಿಕೆ (Pediatrics)' : 'Pediatrics & Vaccine'}</option>
                    <option value="Pathology Lab">{language === 'kn' ? 'ರೋಗ ಪತ್ತೆ ಲ್ಯಾಬ್ (Lab Tests)' : 'Pathology Lab & ECG'}</option>
                    <option value="Ambulance Service">{language === 'kn' ? 'ಆಂಬ್ಯುಲೆನ್ಸ್ ಸೇವೆ' : 'Ambulance Transport'}</option>
                    <option value="Ayushman Bharat">{language === 'kn' ? 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಯೋಜನೆ' : 'Ayushman Bharat Card Help'}</option>
                    <option value="Other Query">{language === 'kn' ? 'ಇತರೆ ವಿಚಾರಣೆ' : 'Other Inquiries'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.formMessage} *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={language === 'kn' ? 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಅಥವಾ ಸಂದೇಶವನ್ನು ಬರೆಯಿರಿ...' : 'Describe your health question, camp inquiry, or timing requirement...'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm shadow-sm transition-all hover:shadow cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t.formSubmit}</span>
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
