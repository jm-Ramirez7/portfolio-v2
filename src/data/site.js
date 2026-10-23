const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const PROFILE_IMG = asset("images/profile.jpg");
export const RESUME_HREF = asset("Jose_Mari_Ramirez_CV.pdf");

export const person = {
  name: "Jose Mari M. Ramirez",
  shortName: "JMR",
  title: "Junior Web Developer",
  location: "Taguig City, Philippines",
  email: "josemarimanaloramirez@gmail.com",
  phone: "0991 644 4160",
  phoneHref: "tel:+639916444160",
  linkedin: "https://www.linkedin.com/in/jm-ramirez",
  linkedinLabel: "linkedin.com/in/jm-ramirez",
};

export const featuredProject = {
  href: "https://vybesound.com/",
  image: asset("images/Vybesound.png"),
  title: "VybeSound — Music eCommerce",
  description:
    "Music-focused Shopify storefront with custom Liquid theme customization, app integrations, product catalog setup, and full store configuration.",
  tags: ["Shopify", "Liquid", "eCommerce"],
};

export const projects = [
  {
    href: "https://pinoytownhall.com/pth2026",
    image: asset("images/pinoytownhall.png"),
    name: "Pinoy Town Hall 2026",
    alt: "Pinoy Town Hall 2026 website",
    meta: "Community · WordPress",
    description: "Civic engagement platform for Filipino community events and discussions.",
    chips: ["WordPress", "CMS"],
  },
  {
    href: "https://oneraceforfilipinoservices.com/",
    image: null,
    name: "One Race for Filipino Services",
    alt: "One Race for Filipino Services",
    meta: "Services · Web",
    description: "Service-oriented site connecting Filipino communities with essential resources.",
    chips: ["WordPress", "Web"],
  },
  {
    href: "https://imediaideas.com/",
    image: asset("images/imediaIdeas.png"),
    name: "iMedia Ideas",
    alt: "iMedia Ideas website",
    meta: "Agency · WordPress",
    description: "Creative agency website with full CMS setup and brand-consistent design.",
    chips: ["WordPress", "Agency"],
  },
  {
    href: "https://viquinbehavioral.com/",
    image: asset("images/Viquin.png"),
    name: "Viquin Behavioral",
    alt: "Viquin Behavioral website",
    meta: "Healthcare · Web",
    description: "Professional behavioral health site designed for accessibility and clarity.",
    chips: ["Healthcare", "Web"],
  },
  {
    href: "https://emergencykits.californila.com/",
    image: asset("images/californila-ekits.png"),
    name: "California Emergency Kits",
    alt: "Californila Emergency Kits store",
    meta: "eCommerce · Shopify",
    description: "Shopify storefront with Liquid theme customization and product catalog setup.",
    chips: ["Shopify", "Liquid"],
  },
  {
    href: "https://pinoytownhall.com/pth2026",
    image: null,
    name: "+ More on the way",
    alt: "More projects",
    meta: "OctoberCMS · Laravel",
    description: "Additional projects across OctoberCMS, Laravel, and other platforms.",
    chips: ["OctoberCMS", "Laravel"],
  },
];

export const experience = [
  {
    date: "Oct 2023 — Present",
    role: "Junior Web Developer",
    company: "Ishkaster Media Inc. · West Ave, Quezon City",
    bullets: [
      "Developed and managed websites across Shopify, WordPress, OctoberCMS, and Laravel platforms.",
      "Managed cross-functional teams ensuring on-time delivery against client expectations.",
      "Customized Shopify storefronts using Liquid templating and app integrations.",
      "Migrated websites across hosting environments and managed staging setups.",
      "Configured domain, email, and hosting environments for multiple concurrent projects.",
      "Collaborated directly with clients to refine UI/UX elements and confirm feasibility.",
    ],
  },
  {
    date: "Internship",
    role: "Web Developer Intern",
    company: "Baybayin Hub",
    bullets: [
      "Handled product and data entry for eCommerce and booking platforms.",
      "Collaborated with senior developers on UX improvements and performance optimization.",
      "Gained hands-on experience with HTML, CSS, JavaScript, and WordPress.",
    ],
  },
];

export const skills = [
  { label: "JavaScript", highlight: true },
  { label: "React", highlight: true },
  { label: "HTML5", highlight: true },
  { label: "CSS3", highlight: true },
  { label: "Shopify", highlight: true },
  { label: "Liquid Templating", highlight: true },
  { label: "WordPress", highlight: true },
  { label: "OctoberCMS", highlight: false },
  { label: "Laravel", highlight: false },
  { label: "Tailwind CSS", highlight: false },
  { label: "Git", highlight: false },
  { label: "On-Page SEO", highlight: false },
  { label: "Prompt Engineering", highlight: false },
  { label: "UI/UX Review", highlight: false },
  { label: "Hosting & Domains", highlight: false },
  { label: "Website Migration", highlight: false },
  { label: "eCommerce", highlight: false },
  { label: "Client Communication", highlight: false },
  { label: "Project Management", highlight: false },
];

export const education = {
  date: "2019 — 2023",
  degree: "Bachelor of Science in Information Technology",
  school: 'Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST)',
};
