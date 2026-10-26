import React, { useState } from 'react';
import { 
  X, 
  Share2, 
  Copy, 
  Check, 
  MessageCircle, 
  Send, 
  Facebook, 
  Twitter, 
  QrCode,
  MapPin
} from 'lucide-react';
import { Language, HospitalInfo } from '../types';
import { translations } from '../data/translations';
import { QrCodeSvg } from './QrCodeSvg';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  hospitalInfo: HospitalInfo;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  language,
  hospitalInfo
}) => {
  const [copied, setCopied] = useState(false);
  const t = translations[language];

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://basaveshwarhospital.org';

  const shareTitle = language === 'kn'
    ? `${hospitalInfo.nameKn} - ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿ ಹಾಗೂ ತುರ್ತು ಸೇವೆಗಳು`
    : `${hospitalInfo.nameEn} - Official Public Information Portal`;

  const shareText = language === 'kn'
    ? `ನದಿ-ಇಂಗಳಗಾಂವ (ಅಥಣಿ ತಾಲೂಕು) ಬಸವೇಶ್ವರ ಆಸ್ಪತ್ರೆಯ ಅಧಿಕೃತ ಮಾಹಿತಿ. 24 ಗಂಟೆ ತುರ್ತು ಚಿಕಿತ್ಸೆ: ${hospitalInfo.emergencyPhone}, ಆಂಬ್ಯುಲೆನ್ಸ್: ${hospitalInfo.ambulancePhone}. ಸ್ಥಳ ಗೂಗಲ್ ಮ್ಯಾಪ್: ${hospitalInfo.googleMapsUrl}\n\nವೆಬ್‌ಸೈಟ್ ಭೇಟಿ ನೀಡಿ:`
    : `Official Public Information Portal of Basaveshwar Hospital, Nadi-Ingalgaon. 24/7 Emergency: ${hospitalInfo.emergencyPhone}, Ambulance: ${hospitalInfo.ambulancePhone}. Google Maps: ${hospitalInfo.googleMapsUrl}\n\nVisit Website:`;

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(`${shareTitle}\n${shareText} ${currentUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl
        });
      } catch {
        // cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle}\n\n${shareText} ${currentUrl}`)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-left relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center shrink-0">
            <Share2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {t.shareTitle}
            </h3>
            <p className="text-xs text-slate-500">
              {hospitalInfo.nameEn} · Nadi-Ingalgaon
            </p>
          </div>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {t.shareDesc}
        </p>

        {/* QR Code Section */}
        <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-center">
          <QrCodeSvg value={currentUrl} size={140} />
          <div className="text-[11px] text-slate-500 mt-2 text-center">
            {language === 'kn' ? 'ಕ್ಯಾಮರಾದಿಂದ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಲಿಂಕ್ ಕಳುಹಿಸಿ' : 'Scan QR code with phone camera to open portal'}
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-5 space-y-2.5">
          <button
            onClick={handleNativeShare}
            className="w-full py-2.5 px-4 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>{language === 'kn' ? 'ಮೊಬೈಲ್ ಶೇರ್ ಮೆನು ತೆರೆಯಿರಿ' : 'Share via Device (All Apps)'}</span>
          </button>

          <div className="grid grid-cols-3 gap-2">
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href={facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>

            <a
              href={telegramShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Telegram</span>
            </a>
          </div>

          <button
            onClick={handleCopyLink}
            className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? t.linkCopied : t.copyLink}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
