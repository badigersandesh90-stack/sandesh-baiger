import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Copy, 
  Check, 
  Bus, 
  Car, 
  Clock, 
  Compass, 
  ExternalLink,
  ShieldCheck,
  QrCode
} from 'lucide-react';
import { Language, HospitalInfo } from '../types';
import { translations } from '../data/translations';
import { QrCodeSvg } from './QrCodeSvg';

interface LocationProps {
  language: Language;
  hospitalInfo: HospitalInfo;
}

export const LocationSection: React.FC<LocationProps> = ({
  language,
  hospitalInfo
}) => {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const t = translations[language];

  const handleCopyAddress = async () => {
    const fullText = `${hospitalInfo.nameEn} (${hospitalInfo.nameKn}), ${hospitalInfo.addressEn}. Coordinates: ${hospitalInfo.coordinates.lat}, ${hospitalInfo.coordinates.lng}. Google Maps: ${hospitalInfo.googleMapsUrl}`;
    await navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-teal-800">
            <Compass className="w-4 h-4 text-teal-700" />
            <span>{language === 'kn' ? 'ನಿಖರವಾದ ವಿಳಾಸ ಮತ್ತು ನಕ್ಷೆ' : 'Exact Location & Directions'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.locationTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.locationSubtitle}
          </p>
        </div>

        {/* Location Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Column: Address, transit info & actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {language === 'kn' ? hospitalInfo.nameKn : hospitalInfo.nameEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {language === 'kn' ? hospitalInfo.addressKn : hospitalInfo.addressEn}
                  </p>
                  <div className="mt-2 text-xs text-teal-900 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>{language === 'kn' ? hospitalInfo.landmarkKn : hospitalInfo.landmarkEn}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <a
                  href={hospitalInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold shadow-xs transition-colors"
                >
                  <Navigation className="w-4 h-4 text-emerald-300" />
                  <span>{t.btnOpenGoogleMaps}</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer"
                  title={t.btnCopyAddress}
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? (language === 'kn' ? 'ಕಾಪಿ ಆಗಿದೆ' : 'Copied') : (language === 'kn' ? 'ವಿಳಾಸ ಕಾಪಿ' : 'Copy')}</span>
                </button>

                <button
                  onClick={() => setShowQr(!showQr)}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs transition-colors cursor-pointer"
                  title="Show QR Code for phone scan"
                >
                  <QrCode className="w-4 h-4 text-teal-800" />
                </button>
              </div>

              {/* Collapsible QR Code Card for scanning */}
              {showQr && (
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center animate-in fade-in">
                  <QrCodeSvg value={hospitalInfo.googleMapsUrl} size={150} />
                  <p className="text-xs text-slate-600 mt-2">
                    {language === 'kn' 
                      ? 'ಮೊಬೈಲ್ ಕ್ಯಾಮೆರಾದಿಂದ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ನೇರವಾಗಿ ಗೂಗಲ್ ಮ್ಯಾಪ್ ತೆರೆಯಿರಿ' 
                      : 'Scan with camera to open exact Google Maps location'}
                  </p>
                </div>
              )}
            </div>

            {/* How to Reach: Transit Options */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800">
                {language === 'kn' ? 'ತಲುಪುವ ಮಾರ್ಗ ಮತ್ತು ಸಾರಿಗೆ' : 'How to Reach Nadi-Ingalgaon'}
              </h4>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-50 text-teal-800 shrink-0">
                    <Bus className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{t.reachByBus}</div>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{t.reachByBusDesc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-50 text-teal-800 shrink-0">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{t.reachByAuto}</div>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{t.reachByAutoDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordinates and Timing Summary */}
            <div className="p-4 rounded-xl bg-teal-900 text-teal-100 text-xs space-y-2">
              <div className="flex items-center justify-between text-teal-300 font-mono text-[11px]">
                <span>LAT: {hospitalInfo.coordinates.lat}</span>
                <span>LNG: {hospitalInfo.coordinates.lng}</span>
              </div>
              <div className="pt-2 border-t border-teal-800/80 flex items-center justify-between">
                <span>{language === 'kn' ? 'ತುರ್ತು ವಿಭಾಗ' : 'Emergency Casualty'}:</span>
                <span className="font-bold text-amber-300">24/7 Always Open</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Embedded Map & Visual Guide */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex-1 flex flex-col">
              {/* Top map controls banner */}
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <MapPin className="w-4 h-4 text-rose-600" />
                  <span>Basaveshwar Hospital, Nadi-Ingalgaon</span>
                </div>
                <a
                  href={hospitalInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-teal-800 hover:text-teal-950 flex items-center gap-1"
                >
                  <span>{language === 'kn' ? 'ದೊಡ್ಡ ನಕ್ಷೆಯಲ್ಲಿ ನೋಡಿ' : 'View Full Google Map'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map embed iframe */}
              <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[360px] bg-slate-100">
                <iframe
                  title="Basaveshwar Hospital Location Map"
                  src={`https://maps.google.com/maps?q=${hospitalInfo.coordinates.lat},${hospitalInfo.coordinates.lng}&hl=en&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating overlay button */}
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href={hospitalInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-900 hover:bg-teal-950 text-white text-xs font-bold shadow-lg transition-transform hover:scale-105"
                  >
                    <Navigation className="w-4 h-4 text-emerald-300" />
                    <span>{language === 'kn' ? 'ಗೂಗಲ್ ಮ್ಯಾಪ್ ನ್ಯಾವಿಗೇಶನ್' : 'Start Navigation'}</span>
                  </a>
                </div>
              </div>

              {/* Bottom Address ticker */}
              <div className="p-3 bg-slate-100/90 text-slate-600 text-xs flex items-center justify-between px-4 border-t border-slate-200">
                <span className="truncate">
                  {language === 'kn' ? hospitalInfo.addressKn : hospitalInfo.addressEn}
                </span>
                <span className="shrink-0 text-slate-400 text-[11px] font-mono">Pin: 591240</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
