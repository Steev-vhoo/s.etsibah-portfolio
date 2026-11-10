// ─────────────────────────────────────────────────────────────
//  Edit this file to change every piece of text on the site.
//  Replace public/profile.svg with your own photo (e.g. profile.png)
//  and update `photo` below. A transparent-background PNG looks best.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Your Name',
  firstName: 'Your',
  logoLetter: 'Y',
  role: 'Product Designer',
  location: 'based in Ghana',
  photo: '/profile.svg',
  email: 'hello@example.com',
  phone: '+233 00 000 0000',
  resumeUrl: '#', // link to a CV (e.g. a Google Drive PDF)

  heroQuote: 'Their remarkable design work transformed our product — highly recommended!',
  reviews: { count: '150+', rating: '4.9' },
  heroTags: ['Prototype', 'Dashboard', 'Mobile App Design', 'Design System', 'Website Design'],

  socials: [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
    { name: 'X', url: 'https://x.com', icon: 'x' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
  ],

  marquee: ['Website Design', 'Dashboard', 'Wireframe', 'User Research', 'Mobile Apps', 'Branding'],

  servicesIntro:
    'From the first sketch to a polished product, I help teams turn ideas into simple, beautiful and useful digital experiences.',
  services: [
    {
      title: 'UI/UX Design',
      tags: ['User Research', 'User Flows', 'Usability Testing'],
      text: 'Research-driven interfaces that feel natural, look great and solve real user problems.',
    },
    {
      title: 'Application Design',
      tags: ['Cross-Platform App Design', 'Progressive Web App', 'Wireframing and Prototyping', 'Custom App Theme Design'],
      text: 'End-to-end design for mobile and web applications, from wireframes to interactive prototypes.',
    },
    {
      title: 'Website Design',
      tags: ['Landing Pages', 'Portfolio Sites', 'Responsive Layouts'],
      text: 'Responsive, conversion-focused websites that tell your story and grow your audience.',
    },
    {
      title: 'UI Design',
      tags: ['Visual Design', 'Iconography', 'Micro-interactions'],
      text: 'Pixel-perfect visual design with a consistent style, rhythm and attention to detail.',
    },
    {
      title: 'Design System',
      tags: ['Component Libraries', 'Design Tokens', 'Documentation'],
      text: 'Scalable design systems that keep teams fast and products consistent.',
    },
  ],

  about: {
    text:
      'I am a product designer who loves turning complex problems into clear, friendly experiences. I work closely with founders, developers and teams to research, design and ship products people enjoy using. Outside of client work I share what I learn through videos and articles.',
    stats: [
      { value: '450+', label: 'Happy Clients' },
      { value: '25+', label: 'Years Experience' },
      { value: '800+', label: 'Projects Done' },
    ],
    skills: ['Figma', 'Adobe XD', 'Framer', 'Webflow', 'Illustrator', 'Photoshop', 'HTML/CSS', 'Prototyping'],
  },

  experience: [
    { period: '2023 — Present', role: 'Lead Product Designer', company: 'Company Name', text: 'Leading design for web and mobile products.' },
    { period: '2020 — 2023', role: 'UI/UX Designer', company: 'Agency Name', text: 'Designed apps and websites for clients across industries.' },
    { period: '2018 — 2020', role: 'Junior Designer', company: 'Studio Name', text: 'Visual design, branding and landing pages.' },
  ],

  // Shown only if the Google Drive integration is not configured yet.
  fallbackProjects: [
    { name: 'Finance Dashboard', description: 'Analytics dashboard for a fintech startup.', thumbnail: '', link: '#' },
    { name: 'Food Delivery App', description: 'Cross-platform mobile app design.', thumbnail: '', link: '#' },
    { name: 'Agency Website', description: 'Responsive marketing website.', thumbnail: '', link: '#' },
  ],

  youtubeChannelUrl: 'https://youtube.com/@yourchannel',

  testimonials: [
    { name: 'Client Name', title: 'CEO, Company', text: 'Working together was a fantastic experience. The design exceeded our expectations and our users love it.' },
    { name: 'Client Name', title: 'Founder, Startup', text: 'Fast, thoughtful and very professional. They understood our vision from day one.' },
    { name: 'Client Name', title: 'Product Manager', text: 'Clear communication and beautiful work. Our conversion rate went up after the redesign.' },
  ],
}
