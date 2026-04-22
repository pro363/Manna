export interface Service {
  id: string;
  name: string;
  nameAmharic?: string;
  description: string;
  longDescription: string;
  benefits: string[];
  whenNeeded: string[];
  image: string;
  slug: string;
  subServices?: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'mri',
    name: 'Advanced MRI',
    nameAmharic: 'ኤም አር አይ',
    slug: 'mri',
    description: 'High-resolution diagnostic imaging for neurological and musculoskeletal evaluation.',
    longDescription: 'Our 1.5T High-Field MRI suite offers exceptional anatomical detail without ionizing radiation. We provide superior soft-tissue contrast for neurological, orthopedic, and cardiovascular diagnostics.',
    benefits: ['Non-ionizing safety', 'High-res soft tissue', 'Neuroimaging excellence', 'Silent-scan comfort'],
    whenNeeded: ['Stroke/Neurology', 'Sports injuries', 'Cardiac structure', 'Oncology screening'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ct-scan',
    name: 'CT Scan',
    nameAmharic: 'ሲቲ ስካን',
    slug: 'ct-scan',
    description: 'Rapid 64-slice cross-sectional imaging for emergency and routine diagnostics.',
    longDescription: 'Equipped with a high-speed digital system, our CT department delivers rapid diagnostic results for trauma, cardiovascular conditions, and deep-tissue anomalies.',
    benefits: ['Rapid acquisition', 'Sub-millimeter precision', 'Low-dose radiation', '3D reconstruction'],
    whenNeeded: ['Acute trauma', 'Vascular CTA', 'Pulmonary embolism', 'Abdominal diagnostics'],
    image: 'https://images.unsplash.com/photo-1550792436-181701c71f63?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'mammography',
    name: 'Digital Mammography',
    nameAmharic: 'የማሞ ግራፊ',
    slug: 'mammography',
    description: 'Specialized low-dose X-ray imaging for early breast cancer detection.',
    longDescription: 'Our digital mammography services offer high-resolution screening and diagnostic imaging. We focus on early detection with maximum patient comfort and minimal radiation exposure.',
    benefits: ['Early detection', 'High-contrast imaging', 'Fast results', 'Expert radiologist review'],
    whenNeeded: ['Annual screening', 'Lump investigation', 'Breast tissue changes', 'Family history follow-up'],
    image: 'https://images.unsplash.com/photo-1579154341098-e4e15869f654?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ultrasound',
    name: 'Ultrasound',
    nameAmharic: 'አልትራሳውንድ',
    slug: 'ultrasound',
    description: 'Safe, real-time imaging using sound waves for a variety of diagnostic needs.',
    longDescription: 'From obstetric screenings to abdominal and vascular color doppler, our ultrasound services provide real-time diagnostic insights without any radiation exposure.',
    benefits: ['Real-time imaging', 'Zero radiation', 'Non-invasive', 'Color Doppler capabilities'],
    whenNeeded: ['Obstetrics/Pregnancy', 'Abdominal pain', 'Vascular flow', 'Thyroid/Soft tissue'],
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'x-ray',
    name: 'Digital X-Ray',
    nameAmharic: 'የራጅ ምርመራ',
    slug: 'x-ray',
    description: 'Instant, high-clarity skeletal and chest imaging with cloud connectivity.',
    longDescription: 'Our fully digital Radiography suite eliminates traditional film processing, reducing patient wait times and improving diagnostic accuracy for skeletal and respiratory conditions.',
    benefits: ['Instant processing', 'Low radiation dose', 'Digital cloud access', 'High skeletal clarity'],
    whenNeeded: ['Bone fractures', 'Chest evaluations', 'Respiratory screenings', 'Orthopedic alignment'],
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'fluoroscopy',
    name: 'Fluoroscopy X-Ray',
    slug: 'fluoroscopy',
    description: 'Real-time X-ray imaging for dynamic clinical studies and specialized procedures.',
    longDescription: 'Advanced fluoroscopic imaging for specialized diagnostic procedures including HSG, IVP, and Barium studies, providing real-time visualization of internal structures.',
    subServices: [
      'Hysterosalpingography (HSG)',
      'Intravenous Pyelography (IVP)',
      'Cystourethrography (CUG)',
      'Barium Studies'
    ],
    benefits: ['Real-time visualization', 'Dynamic study capability', 'Specialized diagnostics', 'Precision controlled'],
    whenNeeded: ['Fertility studies (HSG)', 'Urinary tract (IVP)', 'Digestive tract evaluation', 'Bladder studies'],
    image: 'https://images.unsplash.com/photo-1582719471384-894fca16e624?auto=format&fit=crop&q=80&w=1200'
  }
];

export const CONTACT_INFO = {
  phones: [
    '+251 901 330 044',
    '+251 903 337 377',
    '+251 11 832 7327'
  ],
  phone: '+251 901 330 044', // Primary
  email: 'care@mannadiagnostics.com',
  address: 'Bole Road, Near Africa Avenue, Addis Ababa, Ethiopia',
  hours: '24/7 Diagnostics & Ambulance Services',
  otherServices: [
    'Radiologic Consultation',
    'Ambulance Services'
  ]
};
