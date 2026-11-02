import paymentDesktop from '../assets/projects/payment-desktop.webp'
import paymentMobileMethods from '../assets/projects/payment-mobile-methods.webp'
import paymentMobileCard from '../assets/projects/payment-mobile-card.webp'
import kitabisaHome from '../assets/projects/kitabisa-home.webp'
import kitabisaZakat from '../assets/projects/kitabisa-zakat.webp'
import kitabisaCampaign from '../assets/projects/kitabisa-campaign.webp'
import salingjagaHome from '../assets/projects/salingjaga-home.webp'
import salingjagaOnboarding from '../assets/projects/salingjaga-onboarding.webp'
import salingjagaImpact from '../assets/projects/salingjaga-impact.webp'
import salingjagaReferral from '../assets/projects/salingjaga-referral.webp'
import cnnDesktopHome from '../assets/projects/cnn-desktop-home.webp'
import cnnMobileHome from '../assets/projects/cnn-mobile-home.webp'
import cnnMobileArticle from '../assets/projects/cnn-mobile-article.webp'
import cnbcDesktopNews from '../assets/projects/cnbc-desktop-news.webp'
import cnbcMobileHome from '../assets/projects/cnbc-mobile-home.webp'
import siplahDesktopHome from '../assets/projects/siplah-desktop-home.webp'
import siplahDesktopProducts from '../assets/projects/siplah-desktop-products.webp'
import siplahDesktopDetail from '../assets/projects/siplah-desktop-detail.webp'
import siplahMobileHome from '../assets/projects/siplah-mobile-home.webp'
import siplahMobileDetail from '../assets/projects/siplah-mobile-detail.webp'

export const profile = {
  name: 'Andrian Robby Pratama',
  role: 'Senior Frontend Engineer',
  company: 'Blibli.com',
  summary:
    'Senior Frontend Engineer with 9+ years of experience building high-traffic web applications across media, e-commerce, fintech, and government platforms. Experienced in frontend modernization, performance optimization, and scalable architecture using React, Next.js, Vue.js, and TypeScript.',
  location: 'Bekasi, West Java, Indonesia',
  education: 'B.Sc. Computer Science, Jenderal Soedirman University (2013–2017)',
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: '9+', label: 'Years of experience' },
  { value: '4', label: 'Companies' },
  { value: 'Vue · React · Next.js', label: 'Core frameworks', small: true },
]

export const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Blibli.com',
    period: 'May 2022 – Present',
    points: [
      'Led frontend architecture and design decisions for Blibli’s payment web platforms.',
      'Rebuilt the payment experience on Vue 3 as one solution shared across Web, Android, and iOS.',
      'Built split payment and biometric payment flows for the checkout.',
      'Sped up pages with bundle reduction, code splitting, and lazy loading.',
      'Helped migrate Blibli SIPLAH and the Wallet & Paylater pages from Vue 2 to Vue 3, and moved them to Blibli’s new design system.',
    ],
    tech: ['Vue.js', 'TypeScript', 'Pinia', 'Vite'],
  },
  {
    role: 'Frontend Engineer',
    company: 'Kitabisa.com',
    period: 'Mar 2020 – May 2022',
    points: [
      'Built features and fixed bugs across Kitabisa’s donation products.',
      'Helped create the design system and Storybook library, with Jest and React Testing Library to keep it reliable.',
      'Helped move the frontend projects into a monorepo, so teams could share code instead of copying it.',
      'Made pages faster with code splitting and compression, and improved search visibility with SEO-friendly copy and markup.',
    ],
    tech: ['TypeScript', 'React.js', 'Next.js', 'Storybook', 'Jest'],
  },
  {
    role: 'Web Developer',
    company: 'Detik.com',
    period: 'Nov 2017 – Mar 2020',
    points: [
      'Built and maintained features for CNN Indonesia, CNBC Indonesia, InsertLive, and HaiBunda.',
      'Proposed and led the move to React.js across CNN and CNBC Indonesia.',
      'Improved SEO and page speed through frontend optimizations.',
      'Shipped features and fixed production bugs on high-traffic sites.',
    ],
    tech: ['PHP', 'Phalcon', 'CodeIgniter', 'React.js'],
  },
  {
    role: 'Fullstack Developer',
    company: 'Halojasa.com',
    period: 'Apr 2017 – Nov 2017',
    points: [
      'Built and maintained RESTful APIs with Laravel and PHP for a service marketplace.',
      'Turned UI/UX designs into responsive HTML, CSS, and JavaScript interfaces.',
      'Delivered features end to end, from database design and APIs to frontend rendering.',
    ],
    tech: ['Laravel', 'PHP', 'JavaScript'],
  },
]

// `core` lists the skills used daily; they get a stronger badge style.
export const techStack = [
  {
    title: 'Frontend',
    span: 'lg:col-span-3',
    core: ['TypeScript', 'JavaScript', 'React.js', 'Next.js', 'Vue.js'],
    items: ['TypeScript', 'JavaScript', 'React.js', 'Next.js', 'Vue.js', 'Nuxt.js', 'Pinia', 'Storybook'],
  },
  {
    title: 'Backend & Fullstack',
    span: 'lg:col-span-3',
    core: [],
    items: ['Node.js', 'Express.js', 'NestJS', 'AdonisJS', 'PHP', 'Laravel', 'Phalcon', 'CodeIgniter', 'Go', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'UI & Styling',
    span: 'lg:col-span-2',
    core: ['TailwindCSS'],
    items: ['TailwindCSS', 'Sass', 'Material UI', 'Bootstrap', 'Styled Components', 'Design Systems', 'Figma'],
  },
  {
    title: 'Testing',
    span: 'lg:col-span-2',
    core: [],
    items: ['Jest', 'Vitest', 'React Testing Library', 'Playwright'],
  },
  {
    title: 'Build & DevOps',
    span: 'lg:col-span-2',
    core: [],
    items: ['Git', 'Vite', 'Webpack', 'Docker', 'Jenkins', 'ArgoCD', 'Cloudflare Workers', 'SonarQube', 'Claude Code'],
  },
  {
    title: 'Web Platform & Performance',
    span: 'lg:col-span-6',
    core: ['Core Web Vitals'],
    items: ['Core Web Vitals', 'SEO', 'PWA', 'REST API', 'GraphQL', 'WebSocket', 'SSE', 'Caching'],
  },
]

export const projects = [
  {
    name: 'Blibli Unified Payment Platform',
    highlight: 'Live in the Blibli checkout page',
    description:
      'A cross-platform payment solution that gives users one consistent payment experience on Web, Android, and iOS.',
    points: [
      'Led the frontend revamp of a reusable payment platform shared across multiple apps.',
      'Built the bridges between host apps and the embedded payment pages on Web, Android, and iOS.',
      'Sped up page loads through bundle reduction, code splitting, and lazy loading.',
      'Standardized payment implementations, so teams spend less time rebuilding the same flows.',
    ],
    tech: ['TypeScript', 'Vue.js', 'Pinia', 'Vite', 'Vitest', 'Playwright'],
    images: [
      { src: paymentDesktop, width: 720, height: 651, alt: 'Payment method selection on web' },
      { src: paymentMobileMethods, width: 400, height: 580, alt: 'Payment method selection on mobile' },
      { src: paymentMobileCard, width: 400, height: 592, alt: 'Credit and debit card form on mobile' },
    ],
    featured: true,
  },
  {
    name: 'Blibli SIPLAH',
    links: [{ label: 'Blibli SIPLAH', href: 'https://siplah.blibli.com' }],
    description:
      'An online procurement marketplace owned by Kemendikbudristek and operated by Blibli, which served schools across Indonesia.',
    points: [
      'Helped migrate the frontend from Vue 2 to Vue 3.',
      'Improved speed and Lighthouse scores with code splitting and bundle optimization.',
      'Built and maintained features used by schools nationwide.',
    ],
    tech: ['TypeScript', 'Vue.js', 'Pinia', 'Vite'],
    images: [
      { src: siplahDesktopHome, width: 1120, height: 627, alt: 'Blibli SIPLAH home page on web' },
      { src: siplahDesktopProducts, width: 1120, height: 627, alt: 'Blibli SIPLAH latest products on web' },
      { src: siplahDesktopDetail, width: 1120, height: 629, alt: 'Blibli SIPLAH product detail on web' },
      { src: siplahMobileHome, width: 400, height: 866, alt: 'Blibli SIPLAH home page on mobile' },
      { src: siplahMobileDetail, width: 400, height: 869, alt: 'Blibli SIPLAH product detail on mobile' },
    ],
  },
  {
    name: 'Kitabisa Digital Fundraising Platform',
    links: [
      { label: 'Kitabisa', href: 'https://kitabisa.com' },
      { label: 'SalingJaga', href: 'https://salingjaga.com' },
    ],
    description:
      'A digital fundraising platform for real-time donations, QRIS payments, and community financial protection.',
    points: [
      'Built donation flows for QRIS payments and real-time fundraising campaigns.',
      'Contributed to SalingJaga, a mutual assistance platform where communities support each other.',
      'Improved performance and user experience through frontend optimization.',
    ],
    tech: ['TypeScript', 'Next.js', 'React.js', 'PWA', 'SSE', 'Webpack'],
    images: [
      { src: kitabisaHome, width: 400, height: 861, alt: 'Kitabisa home page on mobile' },
      { src: kitabisaZakat, width: 400, height: 387, alt: 'Kitabisa zakat page with calculator on mobile' },
      { src: kitabisaCampaign, width: 400, height: 638, alt: 'Kitabisa fundraising campaign detail on mobile' },
      { src: salingjagaHome, width: 400, height: 866, alt: 'SalingJaga home page on mobile' },
      { src: salingjagaOnboarding, width: 400, height: 864, alt: 'SalingJaga membership health questionnaire on mobile' },
      { src: salingjagaImpact, width: 400, height: 589, alt: 'SalingJaga impact page on mobile' },
      { src: salingjagaReferral, width: 400, height: 868, alt: 'SalingJaga referral program page on mobile' },
    ],
  },
  {
    name: 'CNN Indonesia & CNBC Indonesia',
    links: [
      { label: 'CNN Indonesia', href: 'https://www.cnnindonesia.com' },
      { label: 'CNBC Indonesia', href: 'https://www.cnbcindonesia.com' },
    ],
    description:
      'Leading media platforms serving millions of readers across Indonesia, covering news, business, and lifestyle.',
    points: [
      'Built and improved web apps in a high-traffic production environment, using PHP, CodeIgniter, and Phalcon.',
      'Wrote the first React implementation references and shipped the first React-based apps.',
      'Laid the groundwork for component-based architecture and reusable UI.',
    ],
    tech: ['PHP', 'CodeIgniter', 'Phalcon', 'React.js', 'JavaScript', 'Webpack'],
    images: [
      { src: cnnDesktopHome, width: 1120, height: 650, alt: 'CNN Indonesia home page on web' },
      { src: cnnMobileHome, width: 400, height: 637, alt: 'CNN Indonesia home page on mobile' },
      { src: cnnMobileArticle, width: 400, height: 748, alt: 'CNN Indonesia article page on mobile' },
      { src: cnbcDesktopNews, width: 900, height: 530, alt: 'CNBC Indonesia latest news on web' },
      { src: cnbcMobileHome, width: 400, height: 812, alt: 'CNBC Indonesia home page with market data on mobile' },
    ],
    featured: true,
  },
]

export const contacts = [
  { label: 'Email', value: 'arprobi@gmail.com', href: 'mailto:arprobi@gmail.com', icon: 'mail' },
  { label: 'LinkedIn', value: 'arprobi', href: 'https://www.linkedin.com/in/arprobi/', icon: 'linkedin' },
  { label: 'GitHub', value: 'robbiand', href: 'https://github.com/robbiand', icon: 'github' },
  { label: 'WhatsApp', value: '+62 857-9056-7597', href: 'https://wa.me/6285790567597', icon: 'phone' },
]
