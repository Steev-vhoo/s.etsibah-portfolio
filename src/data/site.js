// ─────────────────────────────────────────────────────────────
//  Edit this file to change the text on the site.
//  Images live in public/images/.
//  Leave a social `url` empty ('') to hide that icon.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Stephen Etsibah',
  fullName: 'Stephen Amoa-Mensa Etsibah',
  firstName: 'Stephen',
  logoLetter: 'S',
  role: 'Digital Marketer · Content Creator · Creative Thinker',
  location: 'based in Ghana',
  photo: '/images/stephen.webp',
  photoAlt: '/images/stephen-about.webp',
  email: 'estabenetsibah@gmail.com',
  phone: '+233 55 853 8142',
  resumeUrl: '', // optional: link to a CV (e.g. a Google Drive PDF). Leave empty to hide the button.

  heroQuote: "Creativity meets strategy. That's where the interesting things happen.",
  heroBadge: { title: 'Digital Marketing', subtitle: 'MEST Ghana · Ongoing' },
  heroTags: ['Content Creation', 'Social Media', 'Brand Strategy', 'Video Editing', 'Photography'],

  socials: [
    { name: 'LinkedIn', url: '', icon: 'linkedin' },   // TODO
    { name: 'Instagram', url: '', icon: 'instagram' }, // TODO
    { name: 'TikTok', url: '', icon: 'tiktok' },       // TODO
    { name: 'YouTube', url: '', icon: 'youtube' },     // TODO
  ],

  marquee: ['Content Creation', 'Social Media', 'Brand Storytelling', 'Video Editing', 'Photography', 'Campaign Ideation', 'AI Content'],

  servicesIntro: 'A growing mix of creative execution, audience thinking and marketing fundamentals.',
  services: [
    {
      title: 'Content & Social',
      tags: ['Content creation', 'Content planning', 'Social media copywriting', 'Social media management'],
      text: 'Planning, writing and producing social content that gets noticed and helps brands connect with their audience.',
    },
    {
      title: 'Brand & Strategy',
      tags: ['Brand communication', 'Audience research', 'Campaign ideation', 'Content strategy'],
      text: 'Good marketing starts with understanding people: what they notice, what they value and what makes them connect.',
    },
    {
      title: 'Creative Production',
      tags: ['Canva design', 'Promotional graphics', 'Short-form video editing', 'Visual storytelling'],
      text: 'Promotional graphics and short-form videos, from shooting and creative direction through to the final edit.',
    },
    {
      title: 'Marketing Analytics',
      tags: ['Social media insights', 'Performance metrics', 'Data-informed decisions', 'CPC / CTR / ROAS foundations'],
      text: 'Reading the numbers behind content and campaigns to learn what works and decide what to do next.',
    },
    {
      title: 'AI-Assisted Content',
      tags: ['AI image generation', 'AI video production', 'Prompt engineering'],
      text: 'Using AI tools to explore creative concepts, develop visual ideas and produce marketing materials faster.',
    },
  ],

  about: {
    paragraphs: [
      "I'm Stephen, a creative enthusiast and digital marketer interested in the intersection of content, communication and strategy.",
      'I enjoy exploring ideas, creating digital content, developing brand identities and discovering how brands can connect meaningfully with their audiences.',
      "I'm particularly drawn to social media, content creation, brand storytelling, and the little details that make a brand memorable. I'm learning, experimenting, and building my way into the digital marketing space.",
    ],
    mindset: [
      { value: 'Curious', label: 'by nature' },
      { value: 'Creative', label: 'by instinct' },
      { value: 'Strategic', label: 'by intention' },
    ],
    tools: ['Canva', 'CapCut', 'VN Editor', 'ChatGPT', 'Gemini', 'Microsoft Office'],
  },

  journey: [
    { tag: 'Learning · Ongoing', title: 'Digital Marketing', org: 'MEST Ghana', text: 'Ongoing digital marketing training covering content, campaigns, email marketing and analytics.' },
    { tag: 'Experience', title: 'Assistant Programs Officer', org: 'National Youth Authority', text: 'Project coordination, programme support and collaboration.' },
    { tag: 'Courses', title: 'DataCamp', org: 'Online learning', text: 'Analysing Social Media Data in R · Data-Driven Decision Making for Business · Understanding Artificial Intelligence · Understanding Prompt Engineering.' },
    { tag: 'Certificate', title: 'Virtual Assistance Certificate', org: 'ALX', text: 'Virtual assistance skills and remote work practice.' },
  ],

  // Case studies from the portfolio deck. These always show.
  featuredProjects: [
    {
      title: 'Hair Business Promo Video',
      category: 'Freelance Project',
      image: '/images/projects/freelance-hair-promo.jpg',
      overview: "Created a promotional video for a client's hair business, focused on presenting its products in an engaging and visually appealing way.",
      role: 'Video shooting, creative direction and video editing',
      outcome: "Promotional video content for the client's social media.",
      tools: ['CapCut'],
    },
    {
      title: 'AI-Powered Fintech Video Campaign',
      category: 'Group Campaign',
      image: '/images/projects/ai-fintech-campaign.jpg',
      overview: 'As part of a group fintech marketing campaign, I generated an AI-powered promotional video from the campaign script we were given.',
      role: 'Turned the script into an AI-generated video and helped with the visual execution of the campaign concept.',
      outcome: 'AI-assisted content creation, video production and campaign execution.',
      tools: ['CapCut AI'],
    },
    {
      title: 'Email Marketing Campaign — Ramafrique GH',
      category: 'Group Assignment',
      image: '/images/projects/email-campaign-ramafrique.jpg',
      overview: 'Worked with my group to develop the visual direction and structure of a marketing email for a handmade bag brand, using existing templates.',
      role: 'Visual direction, email structure and copy',
      outcome: 'Email marketing fundamentals, visual communication, creative collaboration and marketing design.',
      tools: ['Email templates'],
    },
    {
      title: 'AI-Generated Brand Content',
      category: 'Creative Exploration',
      image: '/images/projects/ai-generated-content.jpg',
      overview: 'A selection of promotional and marketing designs made with AI-assisted creative tools: food, beverage and skincare product ads.',
      role: 'Concept, prompting, layout and copy',
      outcome: 'Uses AI to explore creative concepts, develop visual ideas and produce marketing materials for different purposes.',
      tools: ['ChatGPT', 'Gemini', 'Canva'],
    },
    {
      title: 'Personal Content',
      category: 'Self-Initiated',
      image: '/images/projects/personal-content.jpg',
      overview: 'A collection of self-initiated video projects exploring storytelling, lifestyle content, creative expression and audience engagement.',
      role: 'Content ideation, filming, editing and storytelling',
      outcome: 'Developing engaging visual narratives and experimenting with different content formats and editing techniques.',
      tools: ['CapCut', 'VN Editor'],
    },
  ],

  photos: [
    { src: '/images/photos/photo-1.jpg', alt: 'Sunset over a tree-lined road' },
    { src: '/images/photos/photo-2.jpg', alt: 'Close-up of a cat with green eyes' },
    { src: '/images/photos/photo-4.jpg', alt: 'Flowers silhouetted against a golden sky' },
    { src: '/images/photos/photo-3.jpg', alt: 'Kitten in tall grass, selective colour' },
    { src: '/images/photos/photo-5.jpg', alt: 'Dragonfly resting on a fingertip' },
  ],

  youtubeChannelUrl: '', // TODO: e.g. https://youtube.com/@yourchannel

  // Add real quotes from clients or collaborators here. The section stays hidden while this list is empty.
  testimonials: [],
}
