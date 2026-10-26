import { HospitalInfo, Announcement, ServiceItem, GalleryPhoto, DoctorProfile, PublicHealthGuideline } from '../types';

export const initialHospitalInfo: HospitalInfo = {
  nameEn: "Basaveshwar Hospital, Nadi-Ingalgaon",
  nameKn: "ಬಸವೇಶ್ವರ ಆಸ್ಪತ್ರೆ, ನದಿ-ಇಂಗಳಗಾಂವ",
  taglineEn: "Compassionate, Affordable & 24/7 Trusted Healthcare for the Community",
  taglineKn: "ನಮ್ಮ ಗ್ರಾಮೀಣ ಸಾರ್ವಜನಿಕರ ಆರೋಗ್ಯ ರಕ್ಷಣೆಗೆ ನಿರಂತರ ಸಮರ್ಪಿತ ಸೇವೆ",
  addressEn: "Near Main Road, Nadi-Ingalgaon, Taluk Athani, District Belagavi, Karnataka - 591240",
  addressKn: "ಮುಖ್ಯ ರಸ್ತೆ ಹತ್ತಿರ, ನದಿ-ಇಂಗಳಗಾಂವ, ಅಥಣಿ ತಾಲೂಕು, ಬೆಳಗಾವಿ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ - 591240",
  landmarkEn: "Opposite Gram Panchayat road, Athani-Kagwad corridor, Nadi-Ingalgaon",
  landmarkKn: "ಗ್ರಾಮ ಪಂಚಾಯತ್ ರಸ್ತೆ ಎದುರು, ಅಥಣಿ-ಕಾಗವಾಡ ರಸ್ತೆ, ನದಿ-ಇಂಗಳಗಾಂವ",
  phone: "+91 8289 252108",
  emergencyPhone: "+91 94801 24567",
  ambulancePhone: "+91 94801 24568",
  whatsappNumber: "+919480124567",
  email: "contact@basaveshwarhospital.in",
  googleMapsUrl: "https://maps.app.goo.gl/3L3DU8JdC3gnwfwx8",
  coordinates: {
    lat: 16.6234303,
    lng: 74.9783049,
  },
  opdTimingsEn: "Morning: 09:00 AM - 01:30 PM | Evening: 04:30 PM - 08:30 PM (Mon - Sat)",
  opdTimingsKn: "ಬೆಳಿಗ್ಗೆ: 09:00 ರಿಂದ 01:30 | ಸಂಜೆ: 04:30 ರಿಂದ 08:30 (ಸೋಮವಾರ - ಶನಿವಾರ)",
  emergencyHoursEn: "Emergency & Casualty: Open 24 Hours / 7 Days",
  emergencyHoursKn: "ಅಪಘಾತ ಮತ್ತು ತುರ್ತು ಚಿಕಿತ್ಸಾ ವಿಭಾಗ: 24 ಗಂಟೆಗಳು ಸದಾ ಲಭ್ಯ",
  registrationNumber: "KMC/REG/BLG/2016/542",
};

export const initialAnnouncements: Announcement[] = [
  {
    id: "ann-1",
    titleEn: "Free Rural Health & Diabetes Screening Camp This Sunday",
    titleKn: "ಈ ಭಾನುವಾರ ಉಚಿತ ಮಧುಮೇಹ ಮತ್ತು ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ತಪಾಸಣಾ ಶಿಬಿರ",
    contentEn: "Basaveshwar Hospital in collaboration with district medical specialists is hosting a comprehensive Free Health Camp on Sunday, 9:00 AM to 3:00 PM. Includes free BP, blood sugar tests, ECG, and general doctor consultations. All residents of Nadi-Ingalgaon and neighbouring villages are welcome.",
    contentKn: "ಬಸವೇಶ್ವರ ಆಸ್ಪತ್ರೆಯ ವತಿಯಿಂದ ಇದೇ ಭಾನುವಾರ ಬೆಳಿಗ್ಗೆ 9:00 ರಿಂದ ಮಧ್ಯಾಹ್ನ 3:00 ರವರೆಗೆ ಉಚಿತ ಬೃಹತ್ ಆರೋಗ್ಯ ಶಿಬಿರ ಏರ್ಪಡಿಸಲಾಗಿದೆ. ಉಚಿತ ರಕ್ತದೊತ್ತಡ, ಸಕ್ಕರೆ ಪರೀಕ್ಷೆ, ಇಸಿಜಿ ಹಾಗೂ ವೈದ್ಯರ ಸಮಾಲೋಚನೆ ಲಭ್ಯವಿದೆ. ನದಿ-ಇಂಗಳಗಾಂವ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಸಾರ್ವಜನಿಕರು ಇದರ ಸದುಪಯೋಗ ಪಡೆದುಕೊಳ್ಳಬಹುದು.",
    date: "2026-10-25",
    category: "health_camp",
    isPinned: true,
    priority: "high"
  },
  {
    id: "ann-2",
    titleEn: "Ayushman Bharat - Arogya Karnataka Scheme Helpdesk Open",
    titleKn: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್ - ಆರೋಗ್ಯ ಕರ್ನಾಟಕ ಯೋಜನೆ ಸಹಾಯವಾಣಿ ಕೇಂದ್ರ ಪ್ರಾರಂಭ",
    contentEn: "Dedicated helpdesk is now active in the reception block to assist families with Ayushman Bharat health card e-KYC, treatment coverage verification, and paperless claims for eligible treatments.",
    contentKn: "ನಮ್ಮ ಆಸ್ಪತ್ರೆಯ ಸ್ವಾಗತ ವಿಭಾಗದಲ್ಲಿ ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಮತ್ತು ಆರೋಗ್ಯ ಕರ್ನಾಟಕ ಕಾರ್ಡ್‌ಗಳ ನೊಂದಣಿ, ತಪಾಸಣೆ ಮತ್ತು ಸರ್ಕಾರಿ ಸೌಲಭ್ಯಗಳ ಸದುಪಯೋಗಕ್ಕೆ ಪ್ರತ್ಯೇಕ ಮಾಹಿತಿ ಕೌಂಟರ್ ತೆರೆಯಲಾಗಿದೆ.",
    date: "2026-10-20",
    category: "scheme",
    isPinned: true,
    priority: "normal"
  },
  {
    id: "ann-3",
    titleEn: "Monsoon & Post-Flood Viral Fever / Dengue Advisory",
    titleKn: "ಮಳೆಗಾಲದ ನಂತರದ ಡೆಂಗ್ಯೂ ಮತ್ತು ವೈರಲ್ ಜ್ವರ ತಡೆಗಟ್ಟುವ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು",
    contentEn: "With recent water changes along the Krishna river belt, residents are advised to consume boiled drinking water and prevent stagnant water accumulation in village premises. In case of high fever with body pain, visit the hospital casualty immediately.",
    contentKn: "ಕೃಷ್ಣಾ ನದಿ ಪಾತ್ರದಲ್ಲಿ ನೀರು ಬದಲಾವಣೆಯಾಗಿರುವುದರಿಂದ ಕಾಯಿಸಿ ಆರಿಸಿದ ನೀರನ್ನು ಕುಡಿಯಿರಿ ಹಾಗೂ ಮನೆಯ ಸುತ್ತಮುತ್ತ ನೀರು ನಿಲ್ಲದಂತೆ ಎಚ್ಚರ ವಹಿಸಿ. ತೀವ್ರ ಜ್ವರ ಕಂಡುಬಂದಲ್ಲಿ ಸ್ವಯಂ ಔಷಧ ಮಾಡದೆ ತಕ್ಷಣ ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ.",
    date: "2026-10-18",
    category: "advisory",
    isPinned: false,
    priority: "high"
  },
  {
    id: "ann-4",
    titleEn: "Infant & Mother Routine Immunization Day Every Wednesday",
    titleKn: "ಪ್ರತಿ ಬುಧವಾರ ತಾಯಿ ಮತ್ತು ಮಕ್ಕಳ ಕಡ್ಡಾಯ ಲಸಿಕಾ ಕಾರ್ಯಕ್ರಮ",
    contentEn: "Regular childhood vaccinations (BCG, Pentavalent, Polio, Measles) and maternal tetanus toxoid injections administered every Wednesday from 9:30 AM to 1:00 PM at the pediatric wing.",
    contentKn: "ಪ್ರತಿ ಬುಧವಾರ ಬೆಳಿಗ್ಗೆ 9:30 ರಿಂದ ಮಧ್ಯಾಹ್ನ 1:00 ರವರೆಗೆ ಗರ್ಭಿಣಿಯರಿಗೆ ಮತ್ತು ಮಕ್ಕಳಿಗೆ ಕಡ್ಡಾಯ ಸರ್ಕಾರಿ ಲಸಿಕೆಗಳನ್ನು ಪೀಡಿಯಾಟ್ರಿಕ್ ವಿಭಾಗದಲ್ಲಿ ನೀಡಲಾಗುತ್ತದೆ.",
    date: "2026-10-15",
    category: "vaccination",
    isPinned: false,
    priority: "normal"
  }
];

export const initialServices: ServiceItem[] = [
  {
    id: "emergency",
    icon: "Activity",
    titleEn: "24/7 Emergency & Trauma Care",
    titleKn: "24/7 ತುರ್ತು ಮತ್ತು ಅಪಘಾತ ಚಿಕಿತ್ಸಾ ಘಟಕ",
    shortDescEn: "Immediate round-the-clock medical care for accidents, cardiac events, acute fever, poisoning, and critical emergencies.",
    shortDescKn: "ಅಪಘಾತಗಳು, ಹೃದಯ ಸಮಸ್ಯೆ, ತೀವ್ರ ಜ್ವರ ಮತ್ತು ವಿಷ ಸೇವನೆ ಮುಂತಾದ ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ 24 ಗಂಟೆಗಳ ಕಾಲ ತುರ್ತು ಚಿಕಿತ್ಸೆ.",
    fullDescEn: "Our fully equipped Casualty & Emergency Room functions 24 hours a day with trained duty doctors, nursing personnel, oxygen supplies, defib equipment, and crash carts ready for immediate resuscitation.",
    fullDescKn: "ತರಬೇತಿ ಹೊಂದಿದ ವೈದ್ಯರು, ತುರ್ತು ಶುಶ್ರೂಷಕರು, ಆಕ್ಸಿಜನ್ ಸೌಲಭ್ಯ, ತುರ್ತು ಚುಚ್ಚುಮದ್ದುಗಳೊಂದಿಗೆ ನಮ್ಮ ಅಪಘಾತ ಚಿಕಿತ್ಸಾ ಘಟಕವು ಹಗಲು-ರಾತ್ರಿ ನಿರಂತರವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.",
    featuresEn: ["24x7 Medical Officer on duty", "Immediate triage & stabilization", "Oxygen & suction facilities", "Minor OT for suturing and wound dressing"],
    featuresKn: ["24 ಗಂಟೆ ಕರ್ತವ್ಯ ನಿರತ ವೈದ್ಯರು", "ತಕ್ಷಣದ ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಮತ್ತು ಸ್ಟೆಬಿಲೈಸೇಶನ್", "ಆಕ್ಸಿಜನ್ ಹಾಗೂ ಸಕ್ಷನ್ ವ್ಯವಸ್ಥೆ", "ಗಾಯಗಳಿಗೆ ಹೊಲಿಗೆ ಮತ್ತು ಡ್ರೆಸ್ಸಿಂಗ್ ವ್ಯವಸ್ಥೆ"],
    timingEn: "Open 24 Hours / 365 Days",
    timingKn: "24 ಗಂಟೆಗಳು / 365 ದಿನಗಳು"
  },
  {
    id: "general-medicine",
    icon: "Stethoscope",
    titleEn: "General Medicine & Outpatient (OPD)",
    titleKn: "ಸಾಮಾನ್ಯ ವೈದ್ಯಕೀಯ ಮತ್ತು ಹೊರರೋಗಿ ವಿಭಾಗ (OPD)",
    shortDescEn: "Consultations for diabetes, hypertension, respiratory infections, gastrointestinal issues, and elderly care.",
    shortDescKn: "ಮಧುಮೇಹ, ರಕ್ತದೊತ್ತಡ, ಕೆಮ್ಮು-ನೆಗಡಿ, ಜ್ವರ, ಕರುಳಿನ ತೊಂದರೆ ಮತ್ತು ವಯೋವೃದ್ಧರ ಸಮಗ್ರ ಆರೋಗ್ಯ ತಪಾಸಣೆ.",
    fullDescEn: "Expert diagnosis and compassionate management of adult and elderly ailments. Routine monitoring for chronic conditions such as high blood pressure, thyroid disorders, and joint pains.",
    fullDescKn: "ಹಿರಿಯ ಹಾಗೂ ವಯಸ್ಕ ರೋಗಿಗಳಿಗೆ ವಿಸ್ತೃತ ತಪಾಸಣೆ, ದೀರ್ಘಕಾಲದ ಮಧುಮೇಹ ಮತ್ತು ರಕ್ತದೊತ್ತಡ ನಿಯಂತ್ರಣ ಸಲಹೆಗಳು ಲಭ್ಯ.",
    featuresEn: ["Comprehensive diagnostic checkups", "Chronic disease management", "Preventative health counseling", "Elderly wellness care"],
    featuresKn: ["ಸಮಗ್ರ ಆರೋಗ್ಯ ತಪಾಸಣೆ", "ದೀರ್ಘಕಾಲಿಕ ರೋಗಗಳ ನಿರ್ವಹಣೆ", "ಮುನ್ನೆಚ್ಚರಿಕೆ ಆರೋಗ್ಯ ಸಲಹೆಗಳು", "ಹಿರಿಯ ನಾಗರಿಕರ ವಿಶೇಷ ಕಾಳಜಿ"],
    timingEn: "09:00 AM - 01:30 PM & 04:30 PM - 08:30 PM",
    timingKn: "ಬೆಳಿಗ್ಗೆ 09:00 - 01:30 & ಸಂಜೆ 04:30 - 08:30"
  },
  {
    id: "maternity",
    icon: "HeartPulse",
    titleEn: "Obstetrics, Gynecology & Maternity",
    titleKn: "ಪ್ರಸೂತಿ ಮತ್ತು ಸ್ತ್ರೀರೋಗ ಚಿಕಿತ್ಸಾ ವಿಭಾಗ",
    shortDescEn: "Antenatal care, normal delivery assistance, gynecological treatments, and postnatal maternal support.",
    shortDescKn: "ಗರ್ಭಿಣಿಯರ ಆರೈಕೆ, ಸುರಕ್ಷಿತ ಹೆರಿಗೆ ಸೌಲಭ್ಯ, ಸ್ತ್ರೀರೋಗ ತಪಾಸಣೆ ಮತ್ತು ಬಾಣಂತಿಯರ ಆರೈಕೆ.",
    fullDescEn: "Safe and dignified care for expectant mothers with regular fetal monitoring, ultrasound referral support, nutritional guidance, sterile labor room, and newborn support.",
    fullDescKn: "ಗರ್ಭಿಣಿಯರ ನಿರಂತರ ಆರೈಕೆ, ಸುರಕ್ಷಿತ ಪ್ರಸವ ಕೊಠಡಿ, ಶಿಶು ನಿಗಾ ಘಟಕ ಹಾಗೂ ತಾಯಂದಿರ ಪೌಷ್ಟಿಕಾಂಶ ಸಲಹೆಗಳು.",
    featuresEn: ["Routine ANC checkups & diet advice", "Sterile labor and delivery room", "Post-delivery maternal monitoring", "Adolescent and menopausal health"],
    featuresKn: ["ಗರ್ಭಿಣಿಯರ ನಿಯಮಿತ ತಪಾಸಣೆ", "ಸ್ವಚ್ಛ ಹಾಗೂ ಆಧುನಿಕ ಪ್ರಸವ ಕೊಠಡಿ", "ಹೆರಿಗೆಯ ನಂತರದ ನಿಗಾ", "ಮಹಿಳೆಯರ ವಿಶೇಷ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳಿಗೆ ಪರಿಹಾರ"],
    timingEn: "Daily OPD + 24x7 Delivery Admissions",
    timingKn: "ದೈನಂದಿನ OPD + 24 ಗಂಟೆ ಹೆರಿಗೆ ದಾಖಲಾತಿ"
  },
  {
    id: "pediatrics",
    icon: "Baby",
    titleEn: "Pediatrics & Child Health",
    titleKn: "ಮಕ್ಕಳ ಆರೋಗ್ಯ ಮತ್ತು ಲಸಿಕಾ ವಿಭಾಗ",
    shortDescEn: "Specialized care for newborns, infants, and children including regular immunization and nutrition advice.",
    shortDescKn: "ನವಜಾತ ಶಿಶುಗಳು ಮತ್ತು ಮಕ್ಕಳ ಆರೋಗ್ಯ ತಪಾಸಣೆ, ಬೆಳವಣಿಗೆಯ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ನಿಯಮಿತ ಲಸಿಕೆಗಳು.",
    fullDescEn: "Careful assessment and treatment of childhood fevers, respiratory infections, malnutrition, and childhood developmental tracking by caring clinicians.",
    fullDescKn: "ಮಕ್ಕಳ ಜ್ವರ, ಶೀತ, ನ್ಯುಮೋನಿಯಾ ಮತ್ತು ಬೆಳವಣಿಗೆಯ ಕೊರತೆಗಳಿಗೆ ಪ್ರೀತಿಯುಕ್ತ ಕಾಳಜಿಯೊಂದಿಗೆ ಪರಿಣಾಮಕಾರಿ ಚಿಕಿತ್ಸೆ.",
    featuresEn: ["Routine government & optional vaccines", "Growth and weight tracking", "Pediatric emergency stabilization", "Childhood nutrition guidance"],
    featuresKn: ["ಸರ್ಕಾರಿ ಹಾಗೂ ಐಚ್ಛಿಕ ಲಸಿಕೆಗಳು", "ಮಕ್ಕಳ ತೂಕ ಮತ್ತು ಎತ್ತರದ ನಿಗಾ", "ಮಕ್ಕಳ ತುರ್ತು ಚಿಕಿತ್ಸಾ ಬೆಂಬಲ", "ಪೌಷ್ಟಿಕ ಆಹಾರ ಸಲಹೆ"],
    timingEn: "Mon - Sat: 09:30 AM - 01:30 PM",
    timingKn: "ಸೋಮವಾರ - ಶನಿವಾರ: ಬೆಳಿಗ್ಗೆ 09:30 - 01:30"
  },
  {
    id: "laboratory",
    icon: "FlaskConical",
    titleEn: "Diagnostic Pathology Lab & Digital ECG",
    titleKn: "ರೋಗ ಪತ್ತೆ ಪ್ರಯೋಗಾಲಯ ಮತ್ತು ಇಸಿಜಿ (ECG)",
    shortDescEn: "Fast, accurate blood tests, urine analysis, lipid profile, liver/kidney function tests, and cardiac ECG.",
    shortDescKn: "ರಕ್ತ ಪರೀಕ್ಷೆ, ಮೂತ್ರ ಪರೀಕ್ಷೆ, ರಕ್ತದ ಸಕ್ಕರೆ, ಕೊಲೆಸ್ಟ್ರಾಲ್, ಕಿಡ್ನಿ ಮತ್ತು ಲಿವರ್ ಪರೀಕ್ಷೆಗಳು ಹಾಗೂ ತ್ವರಿತ ಇಸಿಜಿ.",
    fullDescEn: "Equipped with automated biochemistry analyzers, hematology counters, and 12-lead digital ECG for rapid diagnosis within minutes so treatment begins without delay.",
    fullDescKn: "ಆಧುನಿಕ ಆಟೋಮ್ಯಾಟಿಕ್ ಲ್ಯಾಬ್ ಉಪಕರಣಗಳೊಂದಿಗೆ ರಕ್ತದ ವರದಿಗಳು ಕೆಲವೇ ನಿಮಿಷಗಳಲ್ಲಿ ಸಿದ್ಧವಾಗಲಿದ್ದು, ತ್ವರಿತ ಚಿಕಿತ್ಸೆಗೆ ಅನುಕೂಲವಾಗುತ್ತದೆ.",
    featuresEn: ["Complete Blood Count (CBC)", "Blood Sugar, HbA1c & Lipids", "Widal, Dengue & Malaria serology", "12-Lead Digital ECG with instant reporting"],
    featuresKn: ["ಸಂಪೂರ್ಣ ರಕ್ತ ಪರೀಕ್ಷೆ (CBC)", "ರಕ್ತದ ಸಕ್ಕರೆ ಮತ್ತು ಲಿಪಿಡ್ ಪ್ರೊಫೈಲ್", "ಡೆಂಗ್ಯೂ, ಮಲೇರಿಯಾ, ಟೈಫಾಯಿಡ್ ಪರೀಕ್ಷೆ", "12-ಲೀಡ್ ಡಿಜಿಟಲ್ ಇಸಿಜಿ ವರದಿ"],
    timingEn: "08:00 AM - 08:30 PM (Emergency testing 24x7)",
    timingKn: "ಬೆಳಿಗ್ಗೆ 08:00 - ರಾತ್ರಿ 08:30 (ತುರ್ತು ಪರೀಕ್ಷೆಗಳು 24x7)"
  },
  {
    id: "pharmacy",
    icon: "Pill",
    titleEn: "24/7 In-House Pharmacy & Generic Medicine",
    titleKn: "24 ಗಂಟೆ ಔಷಧಾಲಯ ಮತ್ತು ಕೈಗೆಟುಕುವ ಔಷಧಗಳು",
    shortDescEn: "Stocked with verified life-saving drugs, surgical disposables, pediatric drops, and affordable generic medicines.",
    shortDescKn: "ತುರ್ತು ಜೀವ ರಕ್ಷಕ ಔಷಧಿಗಳು, ಇಂಜೆಕ್ಷನ್‌ಗಳು, ಮಕ್ಕಳ ಟಾನಿಕ್‌ಗಳು ಮತ್ತು ಕೈಗೆಟುಕುವ ದರದ ಗುಣಮಟ್ಟದ ಔಷಧಿಗಳು.",
    fullDescEn: "No need to travel to far off towns during nighttime emergencies. Our hospital pharmacy stocks authentic prescription medications at fair and regulated rates.",
    fullDescKn: "ರಾತ್ರಿ ವೇಳೆಯಲ್ಲಿ ಔಷಧಕ್ಕಾಗಿ ದೂರದ ಪಟ್ಟಣಗಳಿಗೆ ಹೋಗುವ ಅಗತ್ಯವಿಲ್ಲ. ಎಲ್ಲಾ ವೈದ್ಯಕೀಯ ಔಷಧಿಗಳು ಆಸ್ಪತ್ರೆಯ ಆವರಣದಲ್ಲೇ ಲಭ್ಯವಿವೆ.",
    featuresEn: ["24/7 Open for patients and community", "Genuine, temperature-controlled medicines", "Affordable generic alternatives", "First aid and surgical dressings"],
    featuresKn: ["24 ಗಂಟೆಯೂ ಸಾರ್ವಜನಿಕರಿಗೆ ಮುಕ್ತ", "ಗುಣಮಟ್ಟದ, ತಂಪಾದ ಶೇಖರಣಾ ಔಷಧಿಗಳು", "ಕೈಗೆಟುಕುವ ಜನರಿಕ್ ಔಷಧಿಗಳು", "ಪ್ರಥಮ ಚಿಕಿತ್ಸಾ ಸಾಮಗ್ರಿಗಳು"],
    timingEn: "Open 24 Hours Daily",
    timingKn: "ದಿನದ 24 ಗಂಟೆಯೂ ಲಭ್ಯ"
  },
  {
    id: "ambulance",
    icon: "Truck",
    titleEn: "24/7 Emergency Ambulance Service",
    titleKn: "24/7 ತುರ್ತು ಆಂಬ್ಯುಲೆನ್ಸ್ ಸೇವೆ",
    shortDescEn: "Equipped patient transport ambulance available for village home pickups and tertiary care transfers.",
    shortDescKn: "ಹಳ್ಳಿಗಳಿಂದ ರೋಗಿಗಳನ್ನು ಕರೆತರಲು ಹಾಗೂ ತುರ್ತು ಸಂದರ್ಭಗಳಲ್ಲಿ ಹೆಚ್ಚಿನ ಚಿಕಿತ್ಸೆಗೆ ಸಾಗಿಸಲು ಆಂಬ್ಯುಲೆನ್ಸ್ ವಾಹನ.",
    fullDescEn: "Fitted with oxygen cylinder, stretcher, IV line supports, and basic resuscitation equipment. Dedicated driver and helpline active 24 hours.",
    fullDescKn: "ಆಕ್ಸಿಜನ್ ಸಿಲಿಂಡರ್, ಸ್ಟ್ರೆಚರ್ ಮತ್ತು ತುರ್ತು ಪ್ರಥಮ ಚಿಕಿತ್ಸಾ ಪರಿಕರಗಳೊಂದಿಗೆ ಆಂಬ್ಯುಲೆನ್ಸ್ ವಾಹನವು ಸದಾ ಸನ್ನದ್ಧವಾಗಿದೆ.",
    featuresEn: ["Direct dispatch on phone call", "Oxygen support onboard", "Inter-hospital emergency transfers", "Affordable local village transport tariff"],
    featuresKn: ["ದೂರವಾಣಿ ಕರೆ ಮಾಡಿದ ತಕ್ಷಣ ಲಭ್ಯ", "ವಾಹನದಲ್ಲಿ ಆಕ್ಸಿಜನ್ ವ್ಯವಸ್ಥೆ", "ಹೆಚ್ಚಿನ ಚಿಕಿತ್ಸೆಗೆ ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಗೆ ವರ್ಗಾವಣೆ", "ಗ್ರಾಮೀಣ ಭಾಗಕ್ಕೆ ರಿಯಾಯಿತಿ ದರ"],
    timingEn: "Call +91 94801 24568 (24x7)",
    timingKn: "ಕರೆ ಮಾಡಿ: +91 94801 24568 (24x7)"
  },
  {
    id: "inpatient",
    icon: "Bed",
    titleEn: "Inpatient Wards (IPD) & Daycare",
    titleKn: "ಒಳರೋಗಿ ದಾಖಲಾತಿ ಕೊಠಡಿಗಳು (IPD)",
    shortDescEn: "Clean, ventilated general wards and private rooms with dedicated nursing care and nutritious dietary support.",
    shortDescKn: "ಸ್ವಚ್ಛ ಮತ್ತು ಗಾಳಿ-ಬೆಳಕಿನ ಒಳರೋಗಿ ಕೊಠಡಿಗಳು, ಸಮರ್ಪಿತ ನರ್ಸಿಂಗ್ ಕಾಳಜಿ ಮತ್ತು ರೋಗಿಗಳಿಗೆ ಪೌಷ್ಟಿಕ ಆಹಾರ ವ್ಯವಸ್ಥೆ.",
    fullDescEn: "Patients requiring intravenous fluids, post-surgical recovery, observation under fever or injury receive dedicated monitoring by caring nursing staff.",
    fullDescKn: "ಜ್ವರ, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ನಂತರದ ಆರೈಕೆ ಮತ್ತು ನಿಗಾ ಅಗತ್ಯವಿರುವ ರೋಗಿಗಳಿಗೆ ಶಾಂತಿಯುತ, ಸ್ವಚ್ಛ ವಾತಾವರಣದಲ್ಲಿ ಶುಶ್ರೂಷೆ ನೀಡಲಾಗುತ್ತದೆ.",
    featuresEn: ["General ward and semi-private rooms", "24x7 Nursing call bell system", "Regular doctor visit rounds", "Attendant sitting arrangements"],
    featuresKn: ["ಜನರಲ್ ವಾರ್ಡ್ ಹಾಗೂ ಪ್ರತ್ಯೇಕ ಕೊಠಡಿಗಳು", "24 ಗಂಟೆ ನರ್ಸಿಂಗ್ ಸೇವೆ", "ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ ವೈದ್ಯರ ಭೇಟಿ", "ರೋಗಿಯ ಜೊತೆಗಾರರಿಗೆ ಆಸನದ ವ್ಯವಸ್ಥೆ"],
    timingEn: "Admissions 24x7 | Visiting: 4 PM - 7 PM",
    timingKn: "ದಾಖಲಾತಿ 24x7 | ಭೇಟಿ ಸಮಯ: ಸಂಜೆ 4 ರಿಂದ 7"
  }
];

export const initialDoctors: DoctorProfile[] = [
  {
    id: "doc-1",
    nameEn: "Dr. B. S. Patil",
    nameKn: "ಡಾ. ಬಿ. ಎಸ್. ಪಾಟೀಲ",
    qualifications: "MBBS, MD (General Medicine)",
    departmentEn: "Chief Physician & Critical Care",
    departmentKn: "ಮುಖ್ಯ ವೈದ್ಯಾಧಿಕಾರಿ ಹಾಗೂ ಜನರಲ್ ಫಿಸಿಶಿಯನ್",
    scheduleEn: "Daily: 09:30 AM - 01:30 PM & 05:00 PM - 08:30 PM",
    scheduleKn: "ದಿನವೂ: ಬೆಳಿಗ್ಗೆ 09:30 - 01:30 & ಸಂಜೆ 05:00 - 08:30",
    experienceEn: "18+ years of rural medical service in Athani and Belagavi region",
    experienceKn: "ಅಥಣಿ ಹಾಗೂ ಬೆಳಗಾವಿ ಗ್ರಾಮೀಣ ಭಾಗದಲ್ಲಿ 18ಕ್ಕೂ ಹೆಚ್ಚು ವರ್ಷಗಳ ವೈದ್ಯಕೀಯ ಸೇವೆ"
  },
  {
    id: "doc-2",
    nameEn: "Dr. Sneha Kulkarni",
    nameKn: "ಡಾ. ಸ್ನೇಹಾ ಕುಲಕರ್ಣಿ",
    qualifications: "MBBS, DGO (Obstetrics & Gynecology)",
    departmentEn: "Consultant Gynecologist & Obstetrician",
    departmentKn: "ಸ್ತ್ರೀರೋಗ ಹಾಗೂ ಪ್ರಸೂತಿ ತಜ್ಞರು",
    scheduleEn: "Mon, Wed, Fri & Sat: 10:00 AM - 02:00 PM",
    scheduleKn: "ಸೋಮ, ಬುಧ, ಶುಕ್ರ ಮತ್ತು ಶನಿವಾರ: ಬೆಳಿಗ್ಗೆ 10:00 - 02:00",
    experienceEn: "Expert in high-risk antenatal care and normal vaginal deliveries",
    experienceKn: "ಗರ್ಭಿಣಿಯರ ಸುರಕ್ಷಿತ ಹೆರಿಗೆ ಮತ್ತು ಮಹಿಳೆಯರ ಸಮಸ್ಯೆಗಳಲ್ಲಿ ಪರಿಣಿತರು"
  },
  {
    id: "doc-3",
    nameEn: "Dr. Anand Badiger",
    nameKn: "ಡಾ. ಆನಂದ ಬಡಿಗೇರ",
    qualifications: "MBBS, MS (General Surgery)",
    departmentEn: "Consultant General & Laparoscopic Surgeon",
    departmentKn: "ಸಾಮಾನ್ಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ತಜ್ಞರು",
    scheduleEn: "Tuesday & Thursday: 10:30 AM - 03:00 PM (Emergency on-call)",
    scheduleKn: "ಮಂಗಳವಾರ ಮತ್ತು ಗುರುವಾರ: ಬೆಳಿಗ್ಗೆ 10:30 - 03:00 (ತುರ್ತು ಕರೆಯ ಮೇಲೆ ಲಭ್ಯ)",
    experienceEn: "Over 12 years in surgical procedures, appendectomy, hernia & trauma repair",
    experienceKn: "ಅಪೆಂಡಿಕ್ಸ್, ಹರ್ನಿಯಾ ಮತ್ತು ಅಪಘಾತದ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳಲ್ಲಿ 12 ವರ್ಷಗಳ ಅನುಭವ"
  },
  {
    id: "doc-4",
    nameEn: "Dr. Ravi Desai",
    nameKn: "ಡಾ. ರವಿ ದೇಸಾಯಿ",
    qualifications: "MBBS, DCH (Pediatrics)",
    departmentEn: "Consultant Child Specialist",
    departmentKn: "ಮಕ್ಕಳ ತಜ್ಞ ವೈದ್ಯರು",
    scheduleEn: "Daily: 10:00 AM - 01:30 PM",
    scheduleKn: "ದಿನವೂ: ಬೆಳಿಗ್ಗೆ 10:00 - 01:30",
    experienceEn: "Specialist in newborn resuscitation, infant infections & childhood vaccination",
    experienceKn: "ನವಜಾತ ಶಿಶುಗಳು ಮತ್ತು ಮಕ್ಕಳ ರೋಗ ನಿರ್ವಹಣೆಯಲ್ಲಿ ವಿಶೇಷ ಪರಿಣಿತರು"
  }
];

export const initialGallery: GalleryPhoto[] = [
  {
    id: "gal-1",
    titleEn: "Hospital Main Entrance & Reception",
    titleKn: "ಆಸ್ಪತ್ರೆಯ ಮುಖ್ಯ ದ್ವಾರ ಮತ್ತು ಸ್ವಾಗತ ಕೌಂಟರ್",
    category: "facilities",
    url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    captionEn: "Spacious entrance and welcome desk at Basaveshwar Hospital, Nadi-Ingalgaon.",
    captionKn: "ಬಸವೇಶ್ವರ ಆಸ್ಪತ್ರೆಯ ವಿಶಾಲ ಮುಖ್ಯ ಪ್ರವೇಶ ದ್ವಾರ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸಹಾಯ ಕೇಂದ್ರ.",
    date: "2026-09-10"
  },
  {
    id: "gal-2",
    titleEn: "24/7 Emergency Casualty Ward",
    titleKn: "24 ಗಂಟೆಗಳ ತುರ್ತು ಚಿಕಿತ್ಸಾ ಕೊಠಡಿ",
    category: "emergency",
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    captionEn: "Fully equipped emergency beds with oxygen points and multipara monitors.",
    captionKn: "ಆಕ್ಸಿಜನ್ ಹಾಗೂ ಮಾನಿಟರ್ ಸೌಲಭ್ಯ ಹೊಂದಿರುವ ತುರ್ತು ನಿಗಾ ಬೆಡ್‌ಗಳು.",
    date: "2026-09-12"
  },
  {
    id: "gal-3",
    titleEn: "Free Health & Eye Screening Camp",
    titleKn: "ಉಚಿತ ಆರೋಗ್ಯ ಮತ್ತು ನೇತ್ರ ತಪಾಸಣಾ ಶಿಬಿರ",
    category: "camps",
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    captionEn: "Community members attending the free health screening camp in Nadi-Ingalgaon.",
    captionKn: "ನದಿ-ಇಂಗಳಗಾಂವದಲ್ಲಿ ನಡೆದ ಉಚಿತ ಆರೋಗ್ಯ ಶಿಬಿರದಲ್ಲಿ ಪಾಲ್ಗೊಂಡ ಗ್ರಾಮಸ್ಥರು.",
    date: "2026-10-05"
  },
  {
    id: "gal-4",
    titleEn: "Maternity & Newborn Care Ward",
    titleKn: "ಪ್ರಸೂತಿ ಹಾಗೂ ನವಜಾತ ಶಿಶು ಆರೈಕೆ ವಿಭಾಗ",
    category: "facilities",
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    captionEn: "Clean and peaceful postpartum ward supporting mothers and infants.",
    captionKn: "ತಾಯಿ ಮತ್ತು ಮಗುವಿನ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಶಾಂತಿಯುತ ಹಾಗೂ ಸ್ವಚ್ಛ ಪ್ರಸೂತಿ ವಾರ್ಡ್.",
    date: "2026-09-20"
  },
  {
    id: "gal-5",
    titleEn: "Clinical Diagnostic Pathology Laboratory",
    titleKn: "ಆಧುನಿಕ ರೋಗ ಪತ್ತೆ ಪ್ರಯೋಗಾಲಯ",
    category: "facilities",
    url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
    captionEn: "Automated biochemistry and blood analyzer machines ensuring fast reports.",
    captionKn: "ತ್ವರಿತ ರಕ್ತ ಮತ್ತು ಮೂತ್ರ ಪರೀಕ್ಷಾ ವರದಿ ನೀಡುವ ಕಂಪ್ಯೂಟರೀಕೃತ ಲ್ಯಾಬ್ ಉಪಕರಣಗಳು.",
    date: "2026-09-25"
  },
  {
    id: "gal-6",
    titleEn: "24/7 Dedicated Ambulance Service",
    titleKn: "24 ಗಂಟೆ ಸನ್ನದ್ಧ ಆಂಬ್ಯುಲೆನ್ಸ್ ವಾಹನ",
    category: "emergency",
    url: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1200&q=80",
    captionEn: "Emergency patient transport ambulance station at the hospital portico.",
    captionKn: "ರೋಗಿಗಳ ತುರ್ತು ಸಾಗಾಟಕ್ಕೆ ಆಸ್ಪತ್ರೆಯ ಆವರಣದಲ್ಲಿ ಸದಾ ಸನ್ನದ್ಧವಾಗಿರುವ ಆಂಬ್ಯುಲೆನ್ಸ್.",
    date: "2026-10-01"
  },
  {
    id: "gal-7",
    titleEn: "Clean Inpatient Patient Recovery Room",
    titleKn: "ಒಳರೋಗಿಗಳ ದಾಖಲಾತಿ ಕೊಠಡಿ",
    category: "facilities",
    url: "https://images.unsplash.com/photo-1586773860383-dab5f3bc1bcc?auto=format&fit=crop&w=1200&q=80",
    captionEn: "Comfortable beds and dedicated nurse stations for recovery.",
    captionKn: "ರೋಗಿಗಳ ಶೀಘ್ರ ಗುಣಮುಖಕ್ಕಾಗಿ ಆರಾಮದಾಯಕ ಹಾಗೂ ನೈರ್ಮಲ್ಯದ ವಾತಾವರಣ.",
    date: "2026-10-10"
  },
  {
    id: "gal-8",
    titleEn: "Pulse Polio & Child Immunization Drive",
    titleKn: "ಮಕ್ಕಳ ಪಲ್ಸ್ ಪೋಲಿಯೋ ಮತ್ತು ಲಸಿಕಾ ಅಭಿಯಾನ",
    category: "events",
    url: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80",
    captionEn: "Annual national immunization drive conducted at the hospital center.",
    captionKn: "ಆಸ್ಪತ್ರೆ ಕೇಂದ್ರದಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿ ಆಯೋಜಿಸಲಾದ ಪಲ್ಸ್ ಪೋಲಿಯೋ ಲಸಿಕಾ ಅಭಿಯಾನ.",
    date: "2026-10-12"
  }
];

export const initialGuidelines: PublicHealthGuideline[] = [
  {
    id: "guide-snakebite",
    titleEn: "Immediate Snakebite First-Aid Protocol (Rural Advisory)",
    titleKn: "ಹಾವು ಕಡಿತಕ್ಕೆ ತಕ್ಷಣದ ಪ್ರಥಮ ಚಿಕಿತ್ಸಾ ಮಾರ್ಗಸೂಚಿ (ಗ್ರಾಮೀಣ ಮುನ್ನೆಚ್ಚರಿಕೆ)",
    descriptionEn: "Essential steps to take immediately while rushing the patient to Basaveshwar Hospital Casualty.",
    descriptionKn: "ರೋಗಿಯನ್ನು ಬಸವೇಶ್ವರ ಆಸ್ಪತ್ರೆಯ ತುರ್ತು ಘಟಕಕ್ಕೆ ತರುವ ಮುನ್ನ ತೆಗೆದುಕೊಳ್ಳಬೇಕಾದ ಪ್ರಮುಖ ಕ್ರಮಗಳು.",
    stepsEn: [
      "Keep the patient calm and immobilize the affected limb using a splint or cloth.",
      "DO NOT cut, suck venom, apply ice, or tie extremely tight tourniquets.",
      "Remove tight rings, anklets, or footwear before swelling starts.",
      "Call the hospital ambulance immediately at +91 94801 24568 or rush directly.",
      "Anti-Snake Venom (ASV) is stocked and available 24/7 at the hospital."
    ],
    stepsKn: [
      "ರೋಗಿಯನ್ನು ಗಾಬರಿಗೊಳಿಸದೆ ಶಾಂತವಾಗಿರಿಸಿ ಮತ್ತು ಕಚ್ಚಿದ ಕೈ ಅಥವಾ ಕಾಲನ್ನು ಅಲುಗಾಡದಂತೆ ಇರಿಸಿ.",
      "ಗಾಯವನ್ನು ಚಾಕುವಿನಿಂದ ಕೊಯ್ಯುವುದು, ಬಾಯಿಯಿಂದ ಹೀರುವುದು ಅಥವಾ ಬಿಗಿಯಾದ ಹಗ್ಗ ಕಟ್ಟುವುದನ್ನು ಮಾಡಬೇಡಿ.",
      "ಊತ ಬರುವ ಮುಂಚೆಯೇ ಉಂಗುರ, ಕಾಲುಂಗುರ ಅಥವಾ ಬಟ್ಟೆಯನ್ನು ಸಡಿಲಗೊಳಿಸಿ.",
      "ಕೂಡಲೇ ಆಸ್ಪತ್ರೆಯ ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗೆ ಕರೆ ಮಾಡಿ (+91 94801 24568) ಅಥವಾ ತುರ್ತು ವಿಭಾಗಕ್ಕೆ ಕರೆತನ್ನಿ.",
      "ನಮ್ಮ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ವಿಷ ನಿರೋಧಕ ಇಂಜೆಕ್ಷನ್ (Anti-Snake Venom) 24 ಗಂಟೆಯೂ ಲಭ್ಯವಿದೆ."
    ]
  },
  {
    id: "guide-fever",
    titleEn: "Viral Fever, Typhoid & Dengue Warning Signs",
    titleKn: "ಡೆಂಗ್ಯೂ ಮತ್ತು ವೈರಲ್ ಜ್ವರದ ಎಚ್ಚರಿಕೆಯ ಲಕ್ಷಣಗಳು",
    descriptionEn: "When to seek urgent medical evaluation for continuous fever.",
    descriptionKn: "ಸತತ ಜ್ವರ ಬಂದಾಗ ಯಾವಾಗ ವೈದ್ಯರನ್ನು ಕಾಣಬೇಕು?",
    stepsEn: [
      "Drink plenty of boiled and cooled water, tender coconut water, and ORS solution.",
      "Watch for danger signs: persistent vomiting, severe stomach pain, red spots on skin, extreme fatigue.",
      "Avoid over-the-counter self-medication like heavy painkillers without doctor consultation.",
      "Get a simple CBC / Platelet and Widal test done at our diagnostic lab on Day 2 of fever."
    ],
    stepsKn: [
      "ಕಾಯಿಸಿ ಆರಿಸಿದ ನೀರು, ಎಳನೀರು ಮತ್ತು ಓ.ಆರ್.ಎಸ್ ದ್ರಾವಣವನ್ನು ಯಥೇಚ್ಛವಾಗಿ ಸೇವಿಸಿ.",
      "ಅಪಾಯದ ಲಕ್ಷಣಗಳು: ಸತತ ವಾಂತಿ, ತೀವ್ರ ಹೊಟ್ಟೆನೋವು, ಚರ್ಮದ ಮೇಲೆ ಕೆಂಪು ಕಲೆಗಳು ಅಥವಾ ಅತಿಯಾದ ನಿಶ್ಯಕ್ತಿ.",
      "ವೈದ್ಯರ ಸಲಹೆ ಪಡೆಯದೆ ಮೆಡಿಕಲ್ ಶಾಪ್‌ಗಳಿಂದ ಮಾತ್ರೆಗಳನ್ನು ತಂದು ಸ್ವಯಂ ಔಷಧ ಮಾಡಬೇಡಿ.",
      "ಜ್ವರ ಬಂದು ಎರಡು ದಿನ ಮೀರಿದರೆ ನಮ್ಮ ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಸುಲಭ ರಕ್ತ ಪರೀಕ್ಷೆ (ಪ್ಲೇಟ್‌ಲೆಟ್ / ಸಿಬಿಸಿ) ಮಾಡಿಸಿ."
    ]
  },
  {
    id: "guide-schemes",
    titleEn: "Documents Required for Ayushman Bharat & Govt Scheme Benefits",
    titleKn: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಸೌಲಭ್ಯ ಪಡೆಯಲು ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳು",
    descriptionEn: "Checklist of documents to bring for cashless treatment eligibility.",
    descriptionKn: "ಆಸ್ಪತ್ರೆಗೆ ದಾಖಲಾಗುವಾಗ ತರಬೇಕಾದ ಪ್ರಮುಖ ಗುರುತಿನ ಚೀಟಿಗಳು.",
    stepsEn: [
      "Aadhaar Card of the patient (original or clear copy).",
      "BPL Ration Card / Food Security Card (for Ayushman Bharat / Arogya Karnataka).",
      "Existing medical prescription or past discharge papers, if any.",
      "Active mobile number linked with Aadhaar for OTP verification."
    ],
    stepsKn: [
      "ರೋಗಿಯ ಆಧಾರ್ ಕಾರ್ಡ್ (ಮೂಲ ಅಥವಾ ಸ್ಪಷ್ಟ ಜೆರಾಕ್ಸ್ ಪ್ರತಿ).",
      "ಬಿ.ಪಿ.ಎಲ್ (BPL) ಪಡಿತರ ಚೀಟಿ / ಆಹಾರ ಭದ್ರತಾ ಪಡಿತರ ಕಾರ್ಡ್.",
      "ಹಿಂದಿನ ಚಿಕಿತ್ಸೆಯ ದಾಖಲೆಗಳು ಅಥವಾ ವೈದ್ಯರ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ (ಇದ್ದರೆ).",
      "ಆಧಾರ್‌ಗೆ ಲಿಂಕ್ ಆಗಿರುವ ಸಕ್ರಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (OTP ಪರಿಶೀಲನೆಗೆ)."
    ]
  }
];
