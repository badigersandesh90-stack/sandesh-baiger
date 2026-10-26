import React from 'react';
import { 
  X, 
  Globe, 
  Server, 
  ShieldCheck, 
  CheckCircle, 
  ExternalLink, 
  Layers, 
  Cloud, 
  Smartphone,
  BookOpen
} from 'lucide-react';
import { Language } from '../types';

interface PublishingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PublishingGuideModal: React.FC<PublishingGuideModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden text-left">
        
        {/* Header */}
        <div className="p-5 bg-teal-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-800 flex items-center justify-center text-amber-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">
                {language === 'kn' ? 'ವೆಬ್‌ಸೈಟ್ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಹೋಸ್ಟ್ ಮಾಡುವ ವಿಧಾನ' : 'How to Publish This Website Live Online'}
              </h2>
              <p className="text-xs text-teal-200">
                {language === 'kn' ? 'ಆಸ್ಪತ್ರೆಯ ಟ್ರಸ್ಟ್ ಮತ್ತು ಐಟಿ ನಿರ್ವಾಹಕರಿಗೆ ಹಂತ-ಹಂತದ ಮಾರ್ಗದರ್ಶಿ' : 'Step-by-Step Production Hosting Guide for Hospital Administration'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-teal-200 hover:text-white rounded-lg hover:bg-teal-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700">
          
          {/* Step 1: Exporting / Building */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-teal-950 text-sm">
              <span className="w-6 h-6 rounded-full bg-teal-800 text-white text-xs flex items-center justify-center">1</span>
              <span>{language === 'kn' ? 'ಹಂತ 1: ಕೋಡ್ ಬಿಲ್ಡ್ ಮಾಡುವುದು (Production Build)' : 'Step 1: Build the Production Bundle'}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Run <code className="bg-slate-200 px-1.5 py-0.5 rounded font-mono text-slate-800">npm run build</code> in the root directory. This creates an optimized, lightning-fast static bundle in the <code className="bg-slate-200 px-1.5 py-0.5 rounded font-mono text-slate-800">dist/</code> folder containing all compiled assets, fonts, and icons.
            </p>
          </div>

          {/* Step 2: Choosing Free / High Reliability Hosting */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-teal-950 text-sm">
              <span className="w-6 h-6 rounded-full bg-teal-800 text-white text-xs flex items-center justify-center">2</span>
              <span>{language === 'kn' ? 'ಹಂತ 2: ಉಚಿತ & ವಿಶ್ವಾಸಾರ್ಹ ಹೋಸ್ಟಿಂಗ್ ಆಯ್ಕೆ' : 'Step 2: Recommended 100% Free / Reliable Hosting Platforms'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900">Vercel / Netlify</div>
                <div className="text-slate-500 mt-0.5">Drag-and-drop the <code className="font-mono">dist</code> folder or connect GitHub for automated free SSL and 99.99% uptime.</div>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                <div className="font-bold text-slate-900">Google Cloud / Firebase</div>
                <div className="text-slate-500 mt-0.5">Run <code className="font-mono">firebase deploy</code> for high-speed edge delivery in India (Mumbai/Delhi datacenters).</div>
              </div>
            </div>
          </div>

          {/* Step 3: Custom Domain */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-teal-950 text-sm">
              <span className="w-6 h-6 rounded-full bg-teal-800 text-white text-xs flex items-center justify-center">3</span>
              <span>{language === 'kn' ? 'ಹಂತ 3: ಆಸ್ಪತ್ರೆಯ ಅಧಿಕೃತ ಡೊಮೇನ್ ಸಂಪರ್ಕ' : 'Step 3: Connect Official Custom Domain'}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Register a domain such as <strong className="text-slate-900">basaveshwarhospital.org</strong> or <strong className="text-slate-900">basaveshwarhospital.in</strong> from any certified registrar (GoDaddy, Namecheap, Google Domains). Add a CNAME record pointing to your hosting provider. Free HTTPS/SSL certificate activates automatically.
            </p>
          </div>

          {/* Step 4: Google Maps & Local Business Verification */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-teal-950 text-sm">
              <span className="w-6 h-6 rounded-full bg-teal-800 text-white text-xs flex items-center justify-center">4</span>
              <span>{language === 'kn' ? 'ಹಂತ 4: ಗೂಗಲ್ ಬಿಸಿನೆಸ್ ಪ್ರೊಫೈಲ್ ಮತ್ತು ಮ್ಯಾಪ್ ಪರಿಶೀಲನೆ' : 'Step 4: Sync with Verified Google Maps Profile'}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              In your Google Business Profile (for location <strong className="text-teal-900">https://maps.app.goo.gl/3L3DU8JdC3gnwfwx8</strong>), set the Website URL to your published domain. This enables local residents searching for "hospital in Nadi-Ingalgaon" or "emergency doctor near Athani" to discover the verified website directly on Google Search & Maps.
            </p>
          </div>

          {/* Step 5: Offline Community Awareness */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-teal-950 text-sm">
              <span className="w-6 h-6 rounded-full bg-teal-800 text-white text-xs flex items-center justify-center">5</span>
              <span>{language === 'kn' ? 'ಹಂತ 5: ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಕ್ಯೂಆರ್ ಕೋಡ್ ಬೋರ್ಡ್ ಅಳವಡಿಕೆ' : 'Step 5: Physical Posters & QR Code in Village'}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Print the QR code from the "Share" modal onto the hospital reception standee, OPD prescription slips, and Gram Panchayat boards so visiting patients can scan and bookmark emergency numbers on their mobile phones.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-teal-800 text-white text-xs font-bold hover:bg-teal-900 transition-colors"
          >
            {language === 'kn' ? 'ಮುಚ್ಚಿ' : 'Close Guide'}
          </button>
        </div>

      </div>
    </div>
  );
};
