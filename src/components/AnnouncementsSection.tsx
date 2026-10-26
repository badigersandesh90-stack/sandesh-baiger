import React, { useState } from 'react';
import { 
  Bell, 
  Calendar, 
  Pin, 
  ChevronRight, 
  AlertTriangle, 
  HeartHandshake, 
  Syringe, 
  FileText, 
  Share2,
  CheckCircle2
} from 'lucide-react';
import { Language, Announcement, AnnouncementCategory } from '../types';
import { translations } from '../data/translations';

interface AnnouncementsProps {
  language: Language;
  announcements: Announcement[];
}

export const AnnouncementsSection: React.FC<AnnouncementsProps> = ({
  language,
  announcements
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const t = translations[language];

  const categories = [
    { key: 'all', labelEn: 'All Updates', labelKn: 'ಎಲ್ಲ ಪ್ರಕಟಣೆಗಳು' },
    { key: 'health_camp', labelEn: 'Health Camps', labelKn: 'ಆರೋಗ್ಯ ಶಿಬಿರಗಳು' },
    { key: 'vaccination', labelEn: 'Vaccinations', labelKn: 'ಲಸಿಕಾ ಮಾಹಿತಿ' },
    { key: 'scheme', labelEn: 'Govt Schemes', labelKn: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು' },
    { key: 'advisory', labelEn: 'Health Advisories', labelKn: 'ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು' },
  ];

  const filteredAnnouncements = announcements.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const getCategoryIcon = (category: AnnouncementCategory) => {
    switch (category) {
      case 'health_camp':
        return <HeartHandshake className="w-4 h-4 text-emerald-600" />;
      case 'vaccination':
        return <Syringe className="w-4 h-4 text-teal-600" />;
      case 'scheme':
        return <CheckCircle2 className="w-4 h-4 text-blue-600" />;
      case 'advisory':
        return <AlertTriangle className="w-4 h-4 text-amber-600" />;
      default:
        return <FileText className="w-4 h-4 text-slate-600" />;
    }
  };

  const getCategoryLabel = (category: AnnouncementCategory) => {
    const found = categories.find(c => c.key === category);
    if (!found) return category;
    return language === 'kn' ? found.labelKn : found.labelEn;
  };

  const handleShareAnnouncement = async (item: Announcement) => {
    const title = language === 'kn' ? item.titleKn : item.titleEn;
    const content = language === 'kn' ? item.contentKn : item.contentEn;
    const shareText = `*${title}*\n${content}\n\n- ಬಸವೇಶ್ವರ ಆಸ್ಪತ್ರೆ, ನದಿ-ಇಂಗಳಗಾಂವ (Basaveshwar Hospital, Nadi-Ingalgaon)\nEmergency: +91 94801 24567\nLocation: https://maps.app.goo.gl/3L3DU8JdC3gnwfwx8`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: shareText,
        });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section id="announcements" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-teal-800">
            <Bell className="w-4 h-4 text-teal-700" />
            <span>{language === 'kn' ? 'ಸಾರ್ವಜನಿಕ ಪ್ರಕಟಣೆಗಳು' : 'Verified Public Notices'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.announcementsTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.announcementsSubtitle}
          </p>
        </div>

        {/* Category Filter Tabs (Zero-pill compliant interactive segmented controls) */}
        <div className="mt-8 flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-1.5 scrollbar-none">
          <div className="p-1 bg-slate-200/80 rounded-xl flex items-center gap-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-teal-900 shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {language === 'kn' ? cat.labelKn : cat.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Announcements Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredAnnouncements.map((item) => {
            const isExpanded = expandedId === item.id;
            const title = language === 'kn' ? item.titleKn : item.titleEn;
            const content = language === 'kn' ? item.contentKn : item.contentEn;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-xl p-5 border transition-all text-left flex flex-col justify-between ${
                  item.priority === 'high' 
                    ? 'border-amber-300 shadow-sm ring-1 ring-amber-100' 
                    : 'border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 pb-2.5">
                    <div className="flex items-center gap-1.5 font-medium">
                      {getCategoryIcon(item.category)}
                      <span className="text-slate-700 font-semibold">{getCategoryLabel(item.category)}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{item.date}</span>
                      </span>
                    </div>

                    {item.isPinned && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <Pin className="w-3 h-3 fill-current" />
                        <span>{t.pinnedTag}</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {title}
                  </h3>

                  {/* Content */}
                  <p className={`mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
                    {content}
                  </p>
                </div>

                {/* Footer Controls: Read More & Share */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="font-semibold text-teal-800 hover:text-teal-950 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? (language === 'kn' ? 'ಕಡಿಮೆ ತೋರಿಸಿ' : 'Show Less') : (language === 'kn' ? 'ಪೂರ್ಣ ಮಾಹಿತಿ' : 'Read Full Notice')}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  <button
                    onClick={() => handleShareAnnouncement(item)}
                    className="flex items-center gap-1.5 text-slate-500 hover:text-teal-800 transition-colors px-2 py-1 rounded-md hover:bg-slate-100 cursor-pointer"
                    title="Share this announcement"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{copiedId === item.id ? (language === 'kn' ? 'ಕಾಪಿ ಮಾಡಲಾಗಿದೆ!' : 'Copied!') : (language === 'kn' ? 'ಶೇರ್' : 'Share')}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredAnnouncements.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            {language === 'kn' ? 'ಈ ವಿಭಾಗದಲ್ಲಿ ಸದ್ಯಕ್ಕೆ ಯಾವುದೇ ಪ್ರಕಟಣೆಗಳಿಲ್ಲ.' : 'No announcements found in this category.'}
          </div>
        )}

      </div>
    </section>
  );
};
