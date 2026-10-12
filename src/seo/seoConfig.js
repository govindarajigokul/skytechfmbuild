// Central SEO settings. Edit titles, descriptions and keywords here — one entry per route.
export const SITE_URL = 'https://skytechfm.com';
export const SITE_NAME = 'Skytech International';
export const DEFAULT_IMAGE = `${SITE_URL}/1.jpg`;

const BASE_KEYWORDS = [
  'Skytech International',
  'Skytech FM',
  'facility management Abu Dhabi',
  'facility management company UAE',
];

const pages = {
  '/': {
    title: 'Skytech International | Facility Management Company in Abu Dhabi, UAE',
    description:
      'Skytech International is a facility management company in Abu Dhabi offering MEP, HVAC, electrical, plumbing, fire safety, fit-out, hard and soft services across the UAE. Call 02 676 6247.',
    keywords: [
      'FM services Abu Dhabi',
      'building maintenance Abu Dhabi',
      'integrated facility management UAE',
      'annual maintenance contract UAE',
      'MEP services Abu Dhabi',
      'fit-out company Abu Dhabi',
    ],
  },
  '/about': {
    title: 'About Us | Skytech International – Facility Management Experts in Abu Dhabi',
    description:
      'Learn about Skytech International, an ISO-certified facility management company in Abu Dhabi. Our mission, vision and team deliver reliable building maintenance across the UAE.',
    keywords: ['about Skytech International', 'ISO certified facility management UAE', 'FM company Abu Dhabi', 'building maintenance experts UAE'],
  },
  '/services': {
    title: 'Facility Management Services in Abu Dhabi | MEP, Fit-out, Hard & Soft Services',
    description:
      'Explore Skytech International services: MEP maintenance, interior fit-out, hard services and soft services for offices, villas, retail and commercial buildings in Abu Dhabi and the UAE.',
    keywords: ['facility management services UAE', 'MEP maintenance', 'fit-out services', 'hard services', 'soft services', 'commercial building maintenance Abu Dhabi'],
  },
  '/mep-service': {
    title: 'MEP Services in Abu Dhabi | HVAC, Electrical & Plumbing Maintenance – Skytech',
    description:
      'Professional MEP services in Abu Dhabi: HVAC and AC maintenance, electrical works, plumbing and drainage, fire alarm and detection, and building management systems (BMS).',
    keywords: [
      'MEP services Abu Dhabi',
      'MEP contractor UAE',
      'HVAC maintenance Abu Dhabi',
      'AC maintenance Abu Dhabi',
      'electrical maintenance Abu Dhabi',
      'plumbing services Abu Dhabi',
      'fire alarm maintenance UAE',
      'BMS maintenance',
    ],
  },
  '/fitout-service': {
    title: 'Interior Fit-out Company in Abu Dhabi | Office & Villa Fit-out – Skytech',
    description:
      'Turnkey interior fit-out in Abu Dhabi: office and retail fit-out, partitions and false ceilings, carpentry and joinery, flooring, painting and wall finishes.',
    keywords: [
      'fit-out company Abu Dhabi',
      'interior fit-out UAE',
      'office fit-out Abu Dhabi',
      'villa renovation Abu Dhabi',
      'gypsum partition false ceiling',
      'carpentry and joinery Abu Dhabi',
      'flooring solutions UAE',
      'painting services Abu Dhabi',
    ],
  },
  '/hard-service': {
    title: 'Hard Services in Abu Dhabi | Building & Technical Maintenance – Skytech',
    description:
      'Hard facility management services in Abu Dhabi: planned and reactive maintenance, generators and power backup, plumbing, HVAC, civil and structural upkeep for your building.',
    keywords: [
      'hard services facility management',
      'technical maintenance Abu Dhabi',
      'planned preventive maintenance UAE',
      'generator maintenance Abu Dhabi',
      'civil maintenance UAE',
    ],
  },
  '/soft-service': {
    title: 'Soft Services in Abu Dhabi | Cleaning, Pest Control & Security – Skytech',
    description:
      'Soft facility management services in Abu Dhabi: professional cleaning, pest control, landscaping, waste management and recycling, and security services.',
    keywords: [
      'soft services facility management',
      'cleaning services Abu Dhabi',
      'pest control Abu Dhabi',
      'landscaping services UAE',
      'waste management Abu Dhabi',
      'security services UAE',
    ],
  },
  '/careers': {
    title: 'Careers at Skytech International | Facility Management Jobs in Abu Dhabi',
    description:
      'Join Skytech International. Apply for facility management, MEP technician, fit-out and maintenance jobs in Abu Dhabi, UAE.',
    keywords: ['facility management jobs Abu Dhabi', 'MEP technician jobs UAE', 'maintenance jobs Abu Dhabi', 'Skytech careers'],
  },
  '/quote': {
    title: 'Request a Quote | Facility Management & Maintenance Services – Skytech',
    description:
      'Get a free quote for MEP, fit-out, hard or soft facility management services in Abu Dhabi. Tell us your requirements and our team will respond quickly.',
    keywords: ['facility management quote', 'maintenance contract quote UAE', 'fit-out quotation Abu Dhabi', 'AMC quote Abu Dhabi'],
  },
  '/contact': {
    title: 'Contact Skytech International | Facility Management Abu Dhabi – 02 676 6247',
    description:
      'Contact Skytech International, Office 08-10, Al Khubaira Building, Al Bateen, Abu Dhabi. Call 02 676 6247 or email info@skytechfm.com. Open Mon–Sun, 9 AM – 9 PM.',
    keywords: ['contact Skytech International', 'facility management company contact Abu Dhabi', 'Al Bateen Abu Dhabi maintenance company'],
  },
};

const notFound = {
  title: 'Page Not Found | Skytech International',
  description: 'The page you are looking for does not exist. Explore Skytech International facility management services in Abu Dhabi.',
  keywords: [],
  noindex: true,
};

export function getSeoForPath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  const page = pages[path] || notFound;
  return {
    ...page,
    keywords: [...page.keywords, ...BASE_KEYWORDS].join(', '),
    url: `${SITE_URL}${path === '/' ? '/' : path}`,
    image: page.image || DEFAULT_IMAGE,
  };
}
