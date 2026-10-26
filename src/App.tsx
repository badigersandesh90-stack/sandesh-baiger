import React, { useState, useEffect } from 'react';
import { 
  Language, 
  HospitalInfo, 
  Announcement, 
  ServiceItem, 
  GalleryPhoto, 
  DoctorProfile, 
  PublicHealthGuideline, 
  ContactEnquiry 
} from './types';
import { 
  initialHospitalInfo, 
  initialAnnouncements, 
  initialServices, 
  initialGallery, 
  initialDoctors, 
  initialGuidelines 
} from './data/initialData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { AnnouncementsSection } from './components/AnnouncementsSection';
import { PublicInfoSection } from './components/PublicInfoSection';
import { DoctorsSection } from './components/DoctorsSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';
import { ShareModal } from './components/ShareModal';
import { PublishingGuideModal } from './components/PublishingGuideModal';
import { Phone, Ambulance, MessageCircle } from 'lucide-react';

const STORAGE_KEYS = {
  LANGUAGE: 'bhn_language',
  HOSPITAL_INFO: 'bhn_hospital_info_v1',
  ANNOUNCEMENTS: 'bhn_announcements_v1',
  PHOTOS: 'bhn_photos_v1',
  ENQUIRIES: 'bhn_enquiries_v1',
  ADMIN_AUTH: 'bhn_admin_authenticated'
};

export default function App() {
  // Language state: 'en' | 'kn', initialized from localStorage or default 'kn'
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language;
      if (savedLang === 'en' || savedLang === 'kn') return savedLang;
    }
    return 'kn'; // default to Kannada for local resonance, easy switch to English
  });

  // Hospital Info state
  const [hospitalInfo, setHospitalInfo] = useState<HospitalInfo>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.HOSPITAL_INFO);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return initialHospitalInfo;
  });

  // Announcements state
  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENTS);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return initialAnnouncements;
  });

  // Gallery Photos state
  const [photos, setPhotos] = useState<GalleryPhoto[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.PHOTOS);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return initialGallery;
  });

  // Enquiries state
  const [enquiries, setEnquiries] = useState<ContactEnquiry[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return [];
  });

  // Admin authentication state
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
    }
    return false;
  });

  // Modals visibility
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isPublishGuideOpen, setIsPublishGuideOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.HOSPITAL_INFO, JSON.stringify(hospitalInfo));
  }, [hospitalInfo]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PHOTOS, JSON.stringify(photos));
  }, [photos]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
  }, [enquiries]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'kn' : 'en'));
  };

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
    sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
  };

  const handleNewEnquiry = (enquiry: ContactEnquiry) => {
    setEnquiries(prev => [enquiry, ...prev]);
  };

  const handleResetData = () => {
    setHospitalInfo(initialHospitalInfo);
    setAnnouncements(initialAnnouncements);
    setPhotos(initialGallery);
    localStorage.removeItem(STORAGE_KEYS.HOSPITAL_INFO);
    localStorage.removeItem(STORAGE_KEYS.ANNOUNCEMENTS);
    localStorage.removeItem(STORAGE_KEYS.PHOTOS);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-teal-600 selection:text-white">
      {/* Accessible Skip to content */}
      <a 
        href="#home" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:p-3 focus:bg-teal-900 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Main Navigation */}
      <Navbar
        language={language}
        onToggleLanguage={toggleLanguage}
        hospitalInfo={hospitalInfo}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        onOpenShare={() => setIsShareModalOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          language={language}
          hospitalInfo={hospitalInfo}
          onOpenShare={() => setIsShareModalOpen(true)}
        />

        {/* 2. Public Announcements & Updates */}
        <AnnouncementsSection
          language={language}
          announcements={announcements}
        />

        {/* 3. About Us Section */}
        <AboutSection
          language={language}
          hospitalInfo={hospitalInfo}
        />

        {/* 4. Medical Services Section */}
        <ServicesSection
          language={language}
          services={initialServices}
          hospitalInfo={hospitalInfo}
        />

        {/* 5. Public Health Advisories & Guidelines */}
        <PublicInfoSection
          language={language}
          guidelines={initialGuidelines}
          hospitalInfo={hospitalInfo}
        />

        {/* 6. Medical Specialists & Doctors */}
        <DoctorsSection
          language={language}
          doctors={initialDoctors}
        />

        {/* 7. Photo Gallery */}
        <GallerySection
          language={language}
          photos={photos}
        />

        {/* 8. Location & Directions */}
        <LocationSection
          language={language}
          hospitalInfo={hospitalInfo}
        />

        {/* 9. Contact & Enquiry Form */}
        <ContactSection
          language={language}
          hospitalInfo={hospitalInfo}
          onNewEnquiry={handleNewEnquiry}
        />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onToggleLanguage={toggleLanguage}
        hospitalInfo={hospitalInfo}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        onOpenShare={() => setIsShareModalOpen(true)}
        onOpenPublishGuide={() => setIsPublishGuideOpen(true)}
      />

      {/* Sticky Mobile Quick Dial Bar (stays pinned at bottom on mobile) */}
      <div className="md:hidden fixed bottom-3 inset-x-3 z-30 flex items-center gap-2 p-1.5 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl no-print">
        <a
          href={`tel:${hospitalInfo.emergencyPhone}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>{language === 'kn' ? 'ತುರ್ತು ಕರೆ' : 'Emergency'}</span>
        </a>

        <a
          href={`tel:${hospitalInfo.ambulancePhone}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-teal-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Ambulance className="w-3.5 h-3.5 text-emerald-300" />
          <span>{language === 'kn' ? 'ಆಂಬ್ಯುಲೆನ್ಸ್' : 'Ambulance'}</span>
        </a>

        <a
          href={`https://wa.me/${hospitalInfo.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(language === 'kn' ? 'ನಮಸ್ಕಾರ, ಬಸವೇಶ್ವರ ಆಸ್ಪತ್ರೆ ಮಾಹಿತಿ ಬೇಕಾಗಿದೆ.' : 'Namaskara, I need information regarding Basaveshwar Hospital.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm"
          title="WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>

      {/* Admin Panel Modal */}
      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        language={language}
        hospitalInfo={hospitalInfo}
        onUpdateHospitalInfo={setHospitalInfo}
        announcements={announcements}
        onUpdateAnnouncements={setAnnouncements}
        photos={photos}
        onUpdatePhotos={setPhotos}
        enquiries={enquiries}
        onUpdateEnquiries={setEnquiries}
        isAdminLoggedIn={isAdminLoggedIn}
        onLogin={handleAdminLogin}
        onLogout={handleAdminLogout}
        onOpenPublishGuide={() => {
          setIsAdminModalOpen(false);
          setIsPublishGuideOpen(true);
        }}
        onResetData={handleResetData}
      />

      {/* Public Awareness & Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        language={language}
        hospitalInfo={hospitalInfo}
      />

      {/* Technical Publishing Guide Modal */}
      <PublishingGuideModal
        isOpen={isPublishGuideOpen}
        onClose={() => setIsPublishGuideOpen(false)}
        language={language}
      />
    </div>
  );
}
