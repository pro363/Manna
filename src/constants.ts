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
    longDescription: 'Our state-of-the-art MRI suite provides crystal-clear imaging of organs, tissues, and skeletal systems without the use of ionizing radiation. We specialize in complex neurological, orthopedic, and cardiovascular diagnostics.',
    benefits: [
      'Non-invasive diagnostic excellence',
      'No radiation exposure',
      'High-contrast soft tissue imaging',
      'Early disease detection'
    ],
    whenNeeded: [
      'Neurological disorders (Brain, Spine)',
      'Joint and ligament injuries',
      'Internal organ evaluation',
      'Cardiovascular assessments'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ct-scan',
    name: 'Precision CT Scan',
    slug: 'ct-scan',
    description: 'Rapid, detailed cross-sectional imaging for emergency and routine diagnostics.',
    longDescription: 'Our computed tomography (CT) services offer fast and precise internal views of the body. Ideal for trauma, oncology, and vascular assessments, our scanners deliver high-quality results with optimized radiation doses.',
    benefits: [
      'Exceptional speed for emergency cases',
      'Highly detailed bone and vessel imaging',
      'Minimally invasive diagnostic tool',
      'Comprehensive tumor staging'
    ],
    whenNeeded: [
      'Trauma and internal injuries',
      'Cancer diagnosis and staging',
      'Vascular conditions',
      'Complex bone fractures'
    ],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'x-ray',
    name: 'Digital X-Ray',
    slug: 'x-ray',
    description: 'Quick and reliable imaging for bone health and chest evaluations.',
    longDescription: 'Digital radiography at Manna Diagnostic Center ensures immediate results for essential diagnostic needs. From orthopedic checks to respiratory screenings, our digital systems reduce processing time and improve accuracy.',
    benefits: [
      'Instant digital image processing',
      'Lower radiation than traditional X-rays',
      'Clearer images for orthopedic review',
      'Seamless digital record sharing'
    ],
    whenNeeded: [
      'Suspected bone fractures',
      'Chest and lung evaluations',
      'Dental assessments',
      'Joint alignment checks'
    ],
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c1145b00?auto=format&fit=crop&q=80&w=800'
  }
];

export const CONTACT_INFO = {
  phone: '+251 90 133 0044',
  email: 'info@mannadiagnostic.com',
  address: 'Woreda 04, Addis Ababa, Ethiopia',
  hours: '24 Hours a Day, 7 Days a Week',
  parking: 'Free On-Site Parking',
  accessibility: 'Full ADA Compliance'
};
