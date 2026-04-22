export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  benefits: string[];
  whenNeeded: string[];
  image: string;
  slug: string;
}

export const SERVICES: Service[] = [
  {
    id: 'mri',
    name: 'Advanced MRI',
    slug: 'mri',
    description: 'High-resolution diagnostic imaging for neurological and musculoskeletal evaluation.',
    longDescription: 'Our 1.5T High-Field MRI suite offers exceptional anatomical detail without ionizing radiation. Using advanced Siemens technology, we provide superior soft-tissue contrast for neurological, orthopedic, and cardiovascular diagnostics, ensuring precision in every clinical report.',
    benefits: [
      'High-resolution soft tissue contrast',
      'Non-ionizing radiation safety profile',
      'Advanced neuroimaging protocols',
      'Expert radiologist interpretation',
      'Patient-centered comfort technology'
    ],
    whenNeeded: [
      'Neurological disorders / Stroke',
      'Musculoskeletal / Sports injuries',
      'Cardiac structure assessment',
      'Oncology staging and monitoring',
      'Spinal cord pathologies'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ct-scan',
    name: 'Precision CT Scan',
    slug: 'ct-scan',
    description: 'Rapid, detailed 64-slice cross-sectional imaging for emergency and routine diagnostics.',
    longDescription: 'Equipped with a high-speed digital system, our CT department delivers rapid diagnostic results for trauma, cardiovascular conditions, and deep-tissue anomalies. Our protocols prioritize optimized radiation doses while maintaining ultra-sharp resolution for critical clinical decisions.',
    benefits: [
      'Rapid scan duration (seconds)',
      'Sub-millimeter anatomical precision',
      'Low-dose radiation protocols',
      '3D volumetric reconstruction',
      'Vascular angiography excellence'
    ],
    whenNeeded: [
      'Acute trauma and internal injury',
      'Computed Tomography Angiography (CTA)',
      'Pulmonary embolism screening',
      'Complex fracture assessment',
      'Abdominal / Pelvic diagnostics'
    ],
    image: 'https://images.unsplash.com/photo-1550792436-181701c71f63?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'x-ray',
    name: 'Digital X-Ray',
    slug: 'x-ray',
    description: 'Quick and reliable digital radiography with immediate image processing and cloud delivery.',
    longDescription: 'Our fully digital Radiography suite eliminates traditional film processing, reducing patient wait times and radiation exposure. Technical images are processed instantly and integrated into our PACs system for immediate consultation by our clinical team.',
    benefits: [
      'Instant digital image rendering',
      'Reduced radiation exposure',
      'Direct physician cloud access',
      'Portable imaging capabilities',
      'High contrast skeletal clarity'
    ],
    whenNeeded: [
      'Suspected bone fractures',
      'Chest and lung evaluations',
      'Orthopedic alignment checks',
      'Respiratory screenings',
      'Pre-operative assessments'
    ],
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1200'
  }
];

export const CONTACT_INFO = {
  phone: '+251 11 662 0000',
  email: 'care@mannadiagnostics.com',
  address: 'Bole Road, Near Africa Avenue, Addis Ababa, Ethiopia',
  hours: 'Open 24/7 for Emergency & Scheduled Diagnostics',
  parking: 'Complimentary On-Site Secure Parking',
  accessibility: 'Certified ADA Universal Access'
};
