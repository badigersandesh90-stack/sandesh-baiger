import React, { useState } from 'react';
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Maximize2 
} from 'lucide-react';
import { Language, GalleryPhoto, GalleryCategory } from '../types';
import { translations } from '../data/translations';

interface GalleryProps {
  language: Language;
  photos: GalleryPhoto[];
}

export const GallerySection: React.FC<GalleryProps> = ({
  language,
  photos
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const t = translations[language];

  const filterTabs: { key: GalleryCategory; labelEn: string; labelKn: string }[] = [
    { key: 'all', labelEn: t.filterAll, labelKn: 'ಎಲ್ಲ ಚಿತ್ರಗಳು' },
    { key: 'facilities', labelEn: t.filterFacilities, labelKn: 'ಆಸ್ಪತ್ರೆ ಸೌಲಭ್ಯಗಳು' },
    { key: 'emergency', labelEn: t.filterEmergency, labelKn: 'ತುರ್ತು ನಿಗಾ ಘಟಕ' },
    { key: 'camps', labelEn: t.filterCamps, labelKn: 'ಆರೋಗ್ಯ ಶಿಬಿರಗಳು' },
    { key: 'events', labelEn: t.filterEvents, labelKn: 'ಕಾರ್ಯಕ್ರಮಗಳು' },
  ];

  const filteredPhotos = photos.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (photoId: string) => {
    const idx = filteredPhotos.findIndex(p => p.id === photoId);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-teal-800">
            <Camera className="w-4 h-4 text-teal-700" />
            <span>{language === 'kn' ? 'ನೈಜ ಛಾಯಾಚಿತ್ರಗಳು' : 'Visual Tour & Activities'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.galleryTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.gallerySubtitle}
          </p>
        </div>

        {/* Filter Segmented Control (zero-pill compliant) */}
        <div className="mt-8 flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-1.5 scrollbar-none">
          <div className="p-1 bg-slate-100 rounded-xl flex items-center gap-1">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setSelectedCategory(tab.key)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-teal-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {language === 'kn' ? tab.labelKn : tab.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo) => {
            const title = language === 'kn' ? photo.titleKn : photo.titleEn;
            const caption = language === 'kn' ? photo.captionKn : photo.captionEn;

            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(photo.id)}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-xs hover:shadow-lg transition-all"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-slate-200">
                  <img
                    src={photo.url}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 text-left">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                    <span className="capitalize">{photo.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{photo.date}</span>
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mt-1 line-clamp-1 group-hover:text-teal-900 transition-colors">
                    {title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {caption}
                  </p>
                </div>

                <div className="absolute top-3 right-3 p-1.5 bg-black/50 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            {language === 'kn' ? 'ಈ ವಿಭಾಗದಲ್ಲಿ ಯಾವುದೇ ಚಿತ್ರಗಳು ಲಭ್ಯವಿಲ್ಲ.' : 'No photos found in this category.'}
          </div>
        )}

      </div>

      {/* Full-screen Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2.5 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full text-center space-y-4">
            <div className="max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src={activePhoto.url}
                alt={language === 'kn' ? activePhoto.titleKn : activePhoto.titleEn}
                className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            <div className="text-white space-y-1 max-w-xl mx-auto px-4">
              <h3 className="text-lg sm:text-xl font-bold">
                {language === 'kn' ? activePhoto.titleKn : activePhoto.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {language === 'kn' ? activePhoto.captionKn : activePhoto.captionEn}
              </p>
              <div className="text-xs text-slate-400 pt-1">
                {lightboxIndex! + 1} / {filteredPhotos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
