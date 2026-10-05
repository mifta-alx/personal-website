import type { ProjectStorySection } from '~/types/project-story';

// Blocks render in this exact order. Move text and images independently for each story.
export const projectStories: Record<string, ProjectStorySection[]> = {
  'tiga-jajan': [
    { id: 'workflow', title: 'From paper records to a shared workflow', blocks: [
      { type: 'text', text: 'Snack consignment connects stock, sales, returns, and merchant profit-sharing. TigaJajan brings these records into one digital workflow for Admin and Staff.' },
      { type: 'image', file: 'tiga-jajan-2.webp', alt: 'TigaJajan application interface' },
      { type: 'text', text: 'The cashier interface supports transaction processing, while stock entry and return management keep the inventory workflow connected.' },
      { type: 'gallery', images: [{ file: 'tiga-jajan-3.webp', alt: 'TigaJajan workflow detail' }, { file: 'tiga-jajan-4.webp', alt: 'Another view of the TigaJajan workflow' }] },
    ] },
    { id: 'records', title: 'One place for business records', blocks: [
      { type: 'text', text: 'A centralized Supabase database connects the records used for sales visibility and merchant profit-sharing calculations.' },
      { type: 'image', file: 'tiga-jajan-5.webp', alt: 'TigaJajan business interface' },
      { type: 'image', file: 'tiga-jajan-6.webp', alt: 'TigaJajan application detail' },
      { type: 'gallery', images: [{ file: 'tiga-jajan-7.webp', alt: 'TigaJajan additional view' }, { file: 'tiga-jajan-8.webp', alt: 'TigaJajan final application view' }] },
    ] },
  ],
  siam: [
    { id: 'rebuild', title: 'Rebuilding the academic portal', blocks: [
      { type: 'image', file: 'siam-2.webp', alt: 'SIAM academic portal interface' },
      { type: 'text', text: 'Working with the PUSTIK team, I helped rebuild the student portal from scratch to address legacy bugs and align the interface with current campus administration.' },
      { type: 'image', file: 'siam-3.webp', alt: 'SIAM portal detail' },
    ] },
    { id: 'academic', title: 'Connected academic workflows', blocks: [
      { type: 'text', text: 'Course registration and academic tracking were central to the redevelopment. The frontend uses React and Next, with TanStack and Tailwind supporting the implementation.' },
      { type: 'image', file: 'siam-4.webp', alt: 'SIAM academic workflow' },
      { type: 'image', file: 'siam-5.webp', alt: 'Another SIAM academic workflow view' },
      { type: 'gallery', images: [{ file: 'siam-6.webp', alt: 'SIAM interface detail' }, { file: 'siam-7.webp', alt: 'SIAM additional interface detail' }] },
    ] },
    { id: 'screens', title: 'Across the portal', blocks: [
      { type: 'image', file: 'siam-8.webp', alt: 'SIAM portal screen' },
      { type: 'image', file: 'siam-9.webp', alt: 'SIAM final portal screen' },
    ] },
  ],
  'my-itn': [
    { id: 'entry', title: 'A single entry point', blocks: [
      { type: 'text', text: 'The campus authentication experience was spread across isolated systems. My-ITN brings access into a Single Sign-On portal, developed together with the PUSTIK team.' },
      { type: 'gallery', images: [{ file: 'my-itn-2.webp', alt: 'My-ITN portal view' }, { file: 'my-itn-3.webp', alt: 'My-ITN second portal view' }] },
    ] },
    { id: 'navigation', title: 'Moving between campus applications', blocks: [
      { type: 'image', file: 'my-itn-4.webp', alt: 'My-ITN application interface' },
      { type: 'text', text: 'My frontend work focused on an intuitive interface built from the ground up, making navigation between internal applications easier to follow.' },
      { type: 'image', file: 'my-itn-5.webp', alt: 'My-ITN interface detail' },
    ] },
  ],
  erp: [
    { id: 'research', title: 'Learning through a working system', blocks: [
      { type: 'text', text: 'This academic research project explores ERP structures through a frozen food business. Odoo-inspired workflows provided the starting point for the interface.' },
      { type: 'image', file: 'erp-3.webp', alt: 'Frozen food ERP interface' },
    ] },
    { id: 'operations', title: 'Following the operational flow', blocks: [
      { type: 'text', text: 'The platform connects material procurement, manufacturing cycles, and sales tracking. My focus was translating these complex processes into a functional web interface.' },
      { type: 'image', file: 'erp-4.webp', alt: 'ERP operational screen' },
      { type: 'gallery', images: [{ file: 'erp-6.webp', alt: 'ERP workflow screen' }, { file: 'erp-7.webp', alt: 'ERP related workflow screen' }] },
      { type: 'image', file: 'erp-8.webp', alt: 'ERP business management view' },
    ] },
    { id: 'details', title: 'A closer look at the platform', blocks: [
      { type: 'gallery', images: [{ file: 'erp-9.webp', alt: 'ERP application detail' }, { file: 'erp-11.webp', alt: 'ERP additional application detail' }] },
      { type: 'image', file: 'erp-12.webp', alt: 'ERP management interface' },
      { type: 'text', text: 'The frontend was built with Remix and Tailwind, using this implementation as a practical way to study enterprise workflows.' },
      { type: 'gallery', images: [{ file: 'erp-14.webp', alt: 'ERP interface view' }, { file: 'erp-15.webp', alt: 'ERP second interface view' }] },
      { type: 'image', file: 'erp-16.webp', alt: 'ERP final application view' },
    ] },
  ],
  pkpu: [
    { id: 'paperwork', title: 'Bringing legal administration online', blocks: [
      { type: 'text', text: 'PKPU addresses the manual paperwork involved in debt payment obligation suspension. The system centralizes legal timelines and debt data.' },
      { type: 'image', file: 'pkpu-2.webp', alt: 'PKPU legal administration interface' },
      { type: 'image', file: 'pkpu-3.webp', alt: 'PKPU application detail' },
      { type: 'text', text: 'As the fullstack developer, I built the digital workflow with SvelteKit and Tailwind to support a clearer restructuring process.' },
      { type: 'image', file: 'pkpu-4.webp', alt: 'PKPU final workflow view' },
    ] },
  ],
  'parama-bara': [
    { id: 'identity', title: 'A digital introduction to the company', blocks: [
      { type: 'image', file: 'parama-bara-2.webp', alt: 'Parama Bara company profile page' },
      { type: 'text', text: 'For PT Parama Bara Intercontinental, the website is a gateway for international partners and clients. The interface presents the company’s operational scale and core values.' },
    ] },
    { id: 'presence', title: 'Building a professional presence', blocks: [
      { type: 'image', file: 'parama-bara-3.webp', alt: 'Parama Bara company website detail' },
      { type: 'image', file: 'parama-bara-4.webp', alt: 'Parama Bara additional company page' },
      { type: 'text', text: 'I developed the frontend with SvelteKit and Tailwind, focusing on a corporate profile that communicates the business clearly.' },
    ] },
  ],
  'major-app': [
    { id: 'decision', title: 'Supporting a difficult decision', blocks: [
      { type: 'text', text: 'MajorApp helps students explore their choice of high school major through student interests and academic performance.' },
      { type: 'image', file: 'major-2.webp', alt: 'MajorApp decision support interface' },
      { type: 'gallery', images: [{ file: 'major-3.webp', alt: 'MajorApp interface detail' }, { file: 'major-4.webp', alt: 'MajorApp additional interface detail' }] },
    ] },
    { id: 'method', title: 'From inputs to recommendations', blocks: [
      { type: 'image', file: 'major-5.webp', alt: 'MajorApp application workflow' },
      { type: 'text', text: 'The Simple Additive Weighting (SAW) method processes the inputs to generate ranked recommendations. The implementation uses Laravel, Livewire, and Tailwind.' },
      { type: 'image', file: 'major-6.webp', alt: 'MajorApp workflow detail' },
    ] },
    { id: 'result', title: 'Exploring the application', blocks: [
      { type: 'gallery', images: [{ file: 'major-7.webp', alt: 'MajorApp screen' }, { file: 'major-8.webp', alt: 'MajorApp related screen' }] },
      { type: 'image', file: 'major-9.webp', alt: 'MajorApp final screen' },
    ] },
  ],
};
