export type Language = 'en' | 'kn';

export interface HospitalInfo {
  nameEn: string;
  nameKn: string;
  taglineEn: string;
  taglineKn: string;
  addressEn: string;
  addressKn: string;
  landmarkEn: string;
  landmarkKn: string;
  phone: string;
  emergencyPhone: string;
  ambulancePhone: string;
  whatsappNumber: string;
  email: string;
  googleMapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  opdTimingsEn: string;
  opdTimingsKn: string;
  emergencyHoursEn: string;
  emergencyHoursKn: string;
  registrationNumber: string;
}

export type AnnouncementCategory = 'health_camp' | 'vaccination' | 'advisory' | 'scheme' | 'general';

export interface Announcement {
  id: string;
  titleEn: string;
  titleKn: string;
  contentEn: string;
  contentKn: string;
  date: string;
  category: AnnouncementCategory;
  isPinned: boolean;
  priority: 'high' | 'normal';
}

export interface ServiceItem {
  id: string;
  icon: string;
  titleEn: string;
  titleKn: string;
  shortDescEn: string;
  shortDescKn: string;
  fullDescEn: string;
  fullDescKn: string;
  featuresEn: string[];
  featuresKn: string[];
  timingEn: string;
  timingKn: string;
}

export type GalleryCategory = 'all' | 'facilities' | 'emergency' | 'camps' | 'events';

export interface GalleryPhoto {
  id: string;
  titleEn: string;
  titleKn: string;
  category: GalleryCategory;
  url: string;
  captionEn: string;
  captionKn: string;
  date: string;
}

export interface DoctorProfile {
  id: string;
  nameEn: string;
  nameKn: string;
  qualifications: string;
  departmentEn: string;
  departmentKn: string;
  scheduleEn: string;
  scheduleKn: string;
  experienceEn: string;
  experienceKn: string;
}

export interface ContactEnquiry {
  id: string;
  name: string;
  phone: string;
  village: string;
  department: string;
  message: string;
  date: string;
  status: 'new' | 'reviewed' | 'resolved';
}

export interface PublicHealthGuideline {
  id: string;
  titleEn: string;
  titleKn: string;
  descriptionEn: string;
  descriptionKn: string;
  stepsEn: string[];
  stepsKn: string[];
}
