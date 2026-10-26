import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Unlock, 
  Bell, 
  Camera, 
  Mail, 
  Settings, 
  Plus, 
  Trash2, 
  Edit2, 
  Check, 
  Download, 
  RotateCcw,
  BookOpen,
  Pin
} from 'lucide-react';
import { 
  Language, 
  HospitalInfo, 
  Announcement, 
  GalleryPhoto, 
  ContactEnquiry, 
  AnnouncementCategory,
  GalleryCategory 
} from '../types';
import { translations } from '../data/translations';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  hospitalInfo: HospitalInfo;
  onUpdateHospitalInfo: (info: HospitalInfo) => void;
  announcements: Announcement[];
  onUpdateAnnouncements: (items: Announcement[]) => void;
  photos: GalleryPhoto[];
  onUpdatePhotos: (photos: GalleryPhoto[]) => void;
  enquiries: ContactEnquiry[];
  onUpdateEnquiries: (enquiries: ContactEnquiry[]) => void;
  isAdminLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
  onOpenPublishGuide: () => void;
  onResetData: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  language,
  hospitalInfo,
  onUpdateHospitalInfo,
  announcements,
  onUpdateAnnouncements,
  photos,
  onUpdatePhotos,
  enquiries,
  onUpdateEnquiries,
  isAdminLoggedIn,
  onLogin,
  onLogout,
  onOpenPublishGuide,
  onResetData
}) => {
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<'announcements' | 'gallery' | 'enquiries' | 'info'>('announcements');

  // Form states for new announcement
  const [newAnn, setNewAnn] = useState({
    titleEn: '',
    titleKn: '',
    contentEn: '',
    contentKn: '',
    category: 'health_camp' as AnnouncementCategory,
    isPinned: false,
    priority: 'normal' as 'normal' | 'high'
  });
  const [isAddingAnn, setIsAddingAnn] = useState(false);

  // Form states for new photo
  const [newPhoto, setNewPhoto] = useState({
    titleEn: '',
    titleKn: '',
    category: 'facilities' as GalleryCategory,
    url: '',
    captionEn: '',
    captionKn: ''
  });
  const [isAddingPhoto, setIsAddingPhoto] = useState(false);

  // Editable hospital info state
  const [infoForm, setInfoForm] = useState<HospitalInfo>({ ...hospitalInfo });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const t = translations[language];

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default administrator passcode is admin123 or 591240 (PIN code)
    if (passcode.trim() === 'admin123' || passcode.trim() === '591240' || passcode.trim() === 'basaveshwar') {
      onLogin();
      setLoginError(false);
      setPasscode('');
    } else {
      setLoginError(true);
    }
  };

  // Announcement Handlers
  const handleAddAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAnn.titleEn.trim() && !newAnn.titleKn.trim()) return;

    const item: Announcement = {
      id: `ann-${Date.now()}`,
      titleEn: newAnn.titleEn.trim() || newAnn.titleKn.trim(),
      titleKn: newAnn.titleKn.trim() || newAnn.titleEn.trim(),
      contentEn: newAnn.contentEn.trim() || newAnn.contentKn.trim(),
      contentKn: newAnn.contentKn.trim() || newAnn.contentEn.trim(),
      date: new Date().toISOString().split('T')[0],
      category: newAnn.category,
      isPinned: newAnn.isPinned,
      priority: newAnn.priority
    };

    onUpdateAnnouncements([item, ...announcements]);
    setIsAddingAnn(false);
    setNewAnn({
      titleEn: '',
      titleKn: '',
      contentEn: '',
      contentKn: '',
      category: 'health_camp',
      isPinned: false,
      priority: 'normal'
    });
  };

  const handleDeleteAnnouncement = (id: string) => {
    if (window.confirm(t.confirmDelete)) {
      onUpdateAnnouncements(announcements.filter(a => a.id !== id));
    }
  };

  const handleTogglePinAnnouncement = (id: string) => {
    onUpdateAnnouncements(announcements.map(a => a.id === id ? { ...a, isPinned: !a.isPinned } : a));
  };

  // Gallery Handlers
  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhoto.url.trim()) return;

    const photoItem: GalleryPhoto = {
      id: `gal-${Date.now()}`,
      titleEn: newPhoto.titleEn.trim() || 'Hospital Facility',
      titleKn: newPhoto.titleKn.trim() || 'ಆಸ್ಪತ್ರೆ ಸೌಲಭ್ಯ',
      category: newPhoto.category,
      url: newPhoto.url.trim(),
      captionEn: newPhoto.captionEn.trim() || newPhoto.titleEn.trim(),
      captionKn: newPhoto.captionKn.trim() || newPhoto.titleKn.trim(),
      date: new Date().toISOString().split('T')[0]
    };

    onUpdatePhotos([photoItem, ...photos]);
    setIsAddingPhoto(false);
    setNewPhoto({
      titleEn: '',
      titleKn: '',
      category: 'facilities',
      url: '',
      captionEn: '',
      captionKn: ''
    });
  };

  const handleDeletePhoto = (id: string) => {
    if (window.confirm(t.confirmDelete)) {
      onUpdatePhotos(photos.filter(p => p.id !== id));
    }
  };

  // Enquiry status toggler
  const handleToggleEnquiryStatus = (id: string) => {
    onUpdateEnquiries(enquiries.map(e => {
      if (e.id === id) {
        const nextStatus = e.status === 'new' ? 'reviewed' : e.status === 'reviewed' ? 'resolved' : 'new';
        return { ...e, status: nextStatus };
      }
      return e;
    }));
  };

  const handleDeleteEnquiry = (id: string) => {
    if (window.confirm(t.confirmDelete)) {
      onUpdateEnquiries(enquiries.filter(e => e.id !== id));
    }
  };

  // Save hospital info
  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateHospitalInfo(infoForm);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  // Export JSON backup
  const handleExportBackup = () => {
    const backupData = {
      hospitalInfo,
      announcements,
      photos,
      enquiries,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `basaveshwar-hospital-data-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden text-left">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-teal-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-800 flex items-center justify-center text-amber-300">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">{t.adminTitle}</h2>
              <p className="text-xs text-teal-200">
                {isAdminLoggedIn 
                  ? (language === 'kn' ? 'ಆಡಳಿತ ಮಂಡಳಿ ಲಾಗಿನ್ ಆಗಿದೆ' : 'Authorized Session Active') 
                  : (language === 'kn' ? 'ಸುರಕ್ಷಿತ ಪ್ರವೇಶದೊಂದಿಗೆ ನಿಯಂತ್ರಿಸಿ' : 'Protected Administrator Control Panel')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdminLoggedIn && (
              <button
                onClick={onLogout}
                className="px-3 py-1.5 rounded-lg bg-teal-800 hover:bg-teal-700 text-xs font-semibold text-teal-100 transition-colors"
              >
                {t.adminLogoutBtn}
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-teal-200 hover:text-white rounded-lg hover:bg-teal-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          
          {/* If NOT logged in: Passcode prompt */}
          {!isAdminLoggedIn ? (
            <div className="max-w-md mx-auto py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto border border-amber-200">
                <Lock className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {language === 'kn' ? 'ನಿರ್ವಾಹಕರ ದೃಢೀಕರಣ' : 'Administrator Authentication'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {t.adminLoginPrompt}
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-3 pt-2">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder={t.adminPasscodePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
                  autoFocus
                />

                {loginError && (
                  <p className="text-xs text-rose-600 font-semibold">
                    {language === 'kn' ? 'ತಪ್ಪಾದ ಪಾಸ್‌ವರ್ಡ್. ದಯವಿಟ್ಟು ಪರಿಶೀಲಿಸಿ (admin123)' : 'Incorrect passcode. Please try again (Hint: admin123)'}
                  </p>
                )}

                <div className="text-[11px] text-slate-400 bg-slate-50 p-2 rounded-lg border border-slate-200">
                  {language === 'kn' ? 'ಪೂರ್ವನಿಯೋಜಿತ ಪಾಸ್‌ವರ್ಡ್:' : 'Default Passcode:'} <strong className="font-mono text-slate-700">admin123</strong> or <strong className="font-mono text-slate-700">591240</strong>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm transition-colors"
                  >
                    {t.adminLoginBtn}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50"
                  >
                    {t.btnCancel}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Logged-in admin workspace with tabs */
            <div className="space-y-6">
              
              {/* Tab Navigation */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div className="flex items-center gap-1 overflow-x-auto pb-1">
                  <button
                    onClick={() => setActiveTab('announcements')}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer transition-colors ${
                      activeTab === 'announcements' ? 'bg-teal-800 text-white' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Bell className="w-3.5 h-3.5" />
                    <span>{t.tabAnnouncements} ({announcements.length})</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('gallery')}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer transition-colors ${
                      activeTab === 'gallery' ? 'bg-teal-800 text-white' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>{t.tabGallery} ({photos.length})</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('enquiries')}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer transition-colors ${
                      activeTab === 'enquiries' ? 'bg-teal-800 text-white' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{t.tabEnquiries} ({enquiries.length})</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('info')}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer transition-colors ${
                      activeTab === 'info' ? 'bg-teal-800 text-white' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Settings className="w-3.5 h-3.5" />
                    <span>{t.tabHospitalInfo}</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenPublishGuide}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{language === 'kn' ? 'ಆನ್‌ಲೈನ್ ಪಬ್ಲಿಷ್ ಗೈಡ್' : 'Publishing Guide'}</span>
                  </button>
                  <button
                    onClick={handleExportBackup}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer"
                    title="Export backup as JSON"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Backup</span>
                  </button>
                </div>
              </div>

              {/* TAB 1: Announcements Manager */}
              {activeTab === 'announcements' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">
                      {language === 'kn' ? 'ಪ್ರಸ್ತುತ ಪ್ರಕಟಣೆಗಳು' : 'Current Public Announcements'}
                    </h4>
                    <button
                      onClick={() => setIsAddingAnn(!isAddingAnn)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-800 text-white text-xs font-bold hover:bg-teal-900 transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>{isAddingAnn ? t.btnCancel : t.addNewAnnouncement}</span>
                    </button>
                  </div>

                  {/* Add Announcement Form */}
                  {isAddingAnn && (
                    <form onSubmit={handleAddAnnouncement} className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl space-y-3">
                      <div className="text-xs font-bold text-teal-900">
                        {language === 'kn' ? 'ಹೊಸ ಪ್ರಕಟಣೆಯ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ' : 'Add New Announcement'}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Title (English) *</label>
                          <input
                            type="text"
                            required
                            value={newAnn.titleEn}
                            onChange={(e) => setNewAnn({ ...newAnn, titleEn: e.target.value })}
                            placeholder="e.g. Free Cataract Screening Camp"
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">ಶೀರ್ಷಿಕೆ (ಕನ್ನಡ) *</label>
                          <input
                            type="text"
                            required
                            value={newAnn.titleKn}
                            onChange={(e) => setNewAnn({ ...newAnn, titleKn: e.target.value })}
                            placeholder="ಉದಾ: ಉಚಿತ ಕಣ್ಣಿನ ತಪಾಸಣಾ ಶಿಬಿರ"
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Description (English)</label>
                          <textarea
                            rows={2}
                            value={newAnn.contentEn}
                            onChange={(e) => setNewAnn({ ...newAnn, contentEn: e.target.value })}
                            placeholder="Full details regarding date, timing and place..."
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">ವಿವರಣೆ (ಕನ್ನಡ)</label>
                          <textarea
                            rows={2}
                            value={newAnn.contentKn}
                            onChange={(e) => setNewAnn({ ...newAnn, contentKn: e.target.value })}
                            placeholder="ಶಿಬಿರದ ಸ್ಥಳ ಮತ್ತು ಸಮಯದ ಸಂಪೂರ್ಣ ವಿವರ..."
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Category</label>
                          <select
                            value={newAnn.category}
                            onChange={(e) => setNewAnn({ ...newAnn, category: e.target.value as AnnouncementCategory })}
                            className="px-2.5 py-1 text-xs rounded-lg border border-slate-300 bg-white"
                          >
                            <option value="health_camp">Health Camp (ಆರೋಗ್ಯ ಶಿಬಿರ)</option>
                            <option value="vaccination">Vaccination (ಲಸಿಕೆ)</option>
                            <option value="scheme">Govt Scheme (ಯೋಜನೆ)</option>
                            <option value="advisory">Advisory (ಮುನ್ನೆಚ್ಚರಿಕೆ)</option>
                            <option value="general">General (ಸಾಮಾನ್ಯ)</option>
                          </select>
                        </div>

                        <label className="flex items-center gap-1.5 cursor-pointer mt-3">
                          <input
                            type="checkbox"
                            checked={newAnn.isPinned}
                            onChange={(e) => setNewAnn({ ...newAnn, isPinned: e.target.checked })}
                            className="rounded text-teal-800"
                          />
                          <span>Pin to top (ಪ್ರಮುಖವಾಗಿರಿಸು)</span>
                        </label>
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setIsAddingAnn(false)}
                          className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold"
                        >
                          {t.btnCancel}
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 rounded-lg bg-teal-800 text-white text-xs font-bold hover:bg-teal-900"
                        >
                          {t.btnSave}
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Announcement List */}
                  <div className="space-y-2">
                    {announcements.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start justify-between gap-3 text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900">{item.titleEn}</span>
                            <span className="text-slate-400">/</span>
                            <span className="font-semibold text-slate-700">{item.titleKn}</span>
                          </div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-2">
                            <span>{item.date}</span>
                            <span>·</span>
                            <span className="capitalize">{item.category}</span>
                            {item.isPinned && <span className="text-amber-700 font-bold">Pinned</span>}
                          </div>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => handleTogglePinAnnouncement(item.id)}
                            className={`p-1.5 rounded-lg border text-xs ${item.isPinned ? 'bg-amber-100 text-amber-900 border-amber-300' : 'text-slate-500 hover:bg-slate-200 border-slate-200'}`}
                            title="Toggle pin"
                          >
                            <Pin className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteAnnouncement(item.id)}
                            className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 border border-slate-200 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: Photo Gallery Manager */}
              {activeTab === 'gallery' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">
                      {language === 'kn' ? 'ಗ್ಯಾಲರಿ ಚಿತ್ರಗಳ ಪಟ್ಟಿ' : 'Gallery Photos'}
                    </h4>
                    <button
                      onClick={() => setIsAddingPhoto(!isAddingPhoto)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-800 text-white text-xs font-bold hover:bg-teal-900 transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>{isAddingPhoto ? t.btnCancel : t.addNewPhoto}</span>
                    </button>
                  </div>

                  {isAddingPhoto && (
                    <form onSubmit={handleAddPhoto} className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl space-y-3">
                      <div className="text-xs font-bold text-teal-900">
                        {language === 'kn' ? 'ಹೊಸ ಚಿತ್ರ ಸೇರಿಸಿ' : 'Add New Photo to Gallery'}
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Photo Image URL *</label>
                        <input
                          type="url"
                          required
                          value={newPhoto.url}
                          onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
                          placeholder="https://images.unsplash.com/..."
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Title (English)</label>
                          <input
                            type="text"
                            value={newPhoto.titleEn}
                            onChange={(e) => setNewPhoto({ ...newPhoto, titleEn: e.target.value })}
                            placeholder="e.g. Inpatient Ward"
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">ಶೀರ್ಷಿಕೆ (ಕನ್ನಡ)</label>
                          <input
                            type="text"
                            value={newPhoto.titleKn}
                            onChange={(e) => setNewPhoto({ ...newPhoto, titleKn: e.target.value })}
                            placeholder="ಉದಾ: ಒಳರೋಗಿ ಕೊಠಡಿ"
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">Category</label>
                          <select
                            value={newPhoto.category}
                            onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value as GalleryCategory })}
                            className="px-2.5 py-1 text-xs rounded-lg border border-slate-300 bg-white"
                          >
                            <option value="facilities">Hospital Facilities</option>
                            <option value="emergency">Emergency / ICU</option>
                            <option value="camps">Health Camps</option>
                            <option value="events">Community Events</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setIsAddingPhoto(false)}
                          className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold"
                        >
                          {t.btnCancel}
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 rounded-lg bg-teal-800 text-white text-xs font-bold hover:bg-teal-900"
                        >
                          {t.btnSave}
                        </button>
                      </div>
                    </form>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {photos.map((item) => (
                      <div
                        key={item.id}
                        className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3 text-xs"
                      >
                        <img
                          src={item.url}
                          alt={item.titleEn}
                          className="w-14 h-14 rounded-lg object-cover shrink-0 bg-slate-200"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-slate-900 truncate">{item.titleEn}</div>
                          <div className="text-[11px] text-slate-500 capitalize">{item.category}</div>
                        </div>
                        <button
                          onClick={() => handleDeletePhoto(item.id)}
                          className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Delete photo"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: Enquiries Manager */}
              {activeTab === 'enquiries' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">
                      {language === 'kn' ? 'ಸ್ವೀಕರಿಸಲಾದ ವಿಚಾರಣೆಗಳು' : 'Visitor Enquiries'}
                    </h4>
                    <span className="text-xs text-slate-500">{enquiries.length} Total</span>
                  </div>

                  {enquiries.length === 0 ? (
                    <div className="p-8 text-center text-slate-500 text-xs bg-slate-50 rounded-xl border border-slate-200">
                      {t.emptyEnquiries}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {enquiries.map((enq) => (
                        <div
                          key={enq.id}
                          className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700"
                        >
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-slate-900 text-sm">
                              {enq.name}
                              <span className="ml-2 font-normal text-slate-500 text-xs">({enq.village})</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleToggleEnquiryStatus(enq.id)}
                                className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase transition-colors cursor-pointer ${
                                  enq.status === 'resolved'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : enq.status === 'reviewed'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                                title="Click to cycle status"
                              >
                                {enq.status}
                              </button>
                              <button
                                onClick={() => handleDeleteEnquiry(enq.id)}
                                className="p-1 text-slate-400 hover:text-rose-600 rounded transition-colors"
                                title="Delete enquiry"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-slate-600 font-medium">
                            <a href={`tel:${enq.phone}`} className="text-teal-900 font-bold hover:underline">
                              📞 {enq.phone}
                            </a>
                            <span>Dept: {enq.department}</span>
                            <span>Date: {enq.date}</span>
                          </div>

                          <p className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-800 text-xs italic">
                            "{enq.message}"
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: Hospital Information Editor */}
              {activeTab === 'info' && (
                <form onSubmit={handleSaveInfo} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">
                      {language === 'kn' ? 'ಆಸ್ಪತ್ರೆಯ ಪ್ರಾಥಮಿಕ ಸಂಪರ್ಕ ಮತ್ತು ವಿವರಗಳು' : 'Hospital Core Profile & Emergency Numbers'}
                    </h4>
                    {savedSuccess && (
                      <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                        <Check className="w-4 h-4" /> Changes Saved!
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Emergency 24x7 Helpline</label>
                      <input
                        type="text"
                        value={infoForm.emergencyPhone}
                        onChange={(e) => setInfoForm({ ...infoForm, emergencyPhone: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Ambulance Service Number</label>
                      <input
                        type="text"
                        value={infoForm.ambulancePhone}
                        onChange={(e) => setInfoForm({ ...infoForm, ambulancePhone: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Reception Phone</label>
                      <input
                        type="text"
                        value={infoForm.phone}
                        onChange={(e) => setInfoForm({ ...infoForm, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Official WhatsApp</label>
                      <input
                        type="text"
                        value={infoForm.whatsappNumber}
                        onChange={(e) => setInfoForm({ ...infoForm, whatsappNumber: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Google Maps Direct URL</label>
                    <input
                      type="url"
                      value={infoForm.googleMapsUrl}
                      onChange={(e) => setInfoForm({ ...infoForm, googleMapsUrl: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Address (English)</label>
                      <textarea
                        rows={2}
                        value={infoForm.addressEn}
                        onChange={(e) => setInfoForm({ ...infoForm, addressEn: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">ವಿಳಾಸ (ಕನ್ನಡ)</label>
                      <textarea
                        rows={2}
                        value={infoForm.addressKn}
                        onChange={(e) => setInfoForm({ ...infoForm, addressKn: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm("Reset all customizations to verified default data?")) {
                          onResetData();
                          onClose();
                        }
                      }}
                      className="inline-flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-800 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset to Verified Defaults</span>
                    </button>

                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-teal-800 text-white text-xs font-bold hover:bg-teal-900 transition-colors shadow-xs"
                    >
                      {t.btnSave}
                    </button>
                  </div>
                </form>
              )}

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>Basaveshwar Hospital Public Connect v1.0</span>
          <span>Nadi-Ingalgaon, Athani Taluk, Belagavi</span>
        </div>

      </div>
    </div>
  );
};
