export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Add new projects here — when you wire up the Express/MongoDB backend later,
// replace this with a fetch call.
export const projects: Project[] = [
{
  id: 'autonexa',
  title: 'AutoNexa',
  description:
  'A modern automotive web experience with clean vehicle browsing, clear calls to action, and a fully responsive layout.',
  tech: ['React', 'JavaScript', 'Responsive Design'],
  liveUrl: 'https://autonexagb.netlify.app/'
},
{
  id: 'cowry-level-two',
  title: 'Cowry Level 2',
  description:
  'An expanded CowryWise-inspired product build showcasing a refined fintech interface and responsive customer flows.',
  tech: ['React', 'Fintech UI', 'Tailwind CSS', 'Bootstrap CSS'],
  liveUrl: 'https://cowrylevel2pro.netlify.app/'
},
{
  id: 'absolute-nutrition',
  title: 'Absolute Nutrition',
  description:
  'An online nutrition and supplements store built for smooth product discovery and a straightforward checkout experience.',
  tech: ['E-commerce', 'Responsive Design', 'Web Development'],
  liveUrl: 'https://absolutenutritiononline.com/'
},
{
  id: 'lifewatch',
  title: 'LifeWatch',
  description:
  'A product website presenting LifeWatch clearly — focused on trust, readable content, and conversion on every screen size.',
  tech: ['Web Development', 'Responsive Design', 'UI Design'],
  liveUrl: 'https://getlifewatch.com/'
},
{
  id: '95-nutrition',
  title: '95 Nutrition',
  description:
  'A nutrition brand storefront with bold product presentation, clean navigation, and a mobile-friendly shopping flow.',
  tech: ['E-commerce', 'Responsive Design', 'Web Development'],
  liveUrl: 'https://95nutrition.com/'
},
{
  id: 'anine-bing',
  title: 'ANINE BING',
  description:
  'A premium fashion e-commerce experience with editorial visuals, refined typography, and localized storefront pages.',
  tech: ['E-commerce', 'Fashion', 'Responsive Design'],
  liveUrl: 'https://www.aninebing.com/en-pk'
},
{
  id: 'mantle-project',
  title: 'Mantle Ecosystem',
  description:
  'A Web3 project built around the Mantle network — exploring on-chain interactions, wallet connections, and ecosystem-level dApp integrations on an L2.',
  tech: ['React', 'Web3', 'Mantle Network', 'Ethers.js'],
  githubUrl: 'https://github.com/Dev-emmy-001/mantleproject',
  liveUrl: 'https://mantlecosystem.netlify.app/'
},
{
  id: 'grade-checker',
  title: 'Sign-In Grade Checker',
  description:
  'A student grade-checking portal with authentication — users can sign in, see their academic scores, and track performance through a clean dashboard.',
  tech: ['React', 'Authentication', 'JavaScript', 'CSS'],
  githubUrl: 'https://github.com/Dev-emmy-001/signin_gradechecker',
  liveUrl: 'https://devemmygradechecker.netlify.app/'
},
{
  id: 'pwa-web3',
  title: 'Real Finance (PWA · Web3)',
  description:
  'A Progressive Web App combining Web3 functionality with offline-first capabilities — installable, fast, and crypto-enabled finance experience.',
  tech: ['React', 'PWA', 'Web3', 'Service Workers'],
  githubUrl: 'https://github.com/Dev-emmy-001/PWA-web3-project',
  liveUrl: 'https://realfinanceofficial.netlify.app/'
},
{
  id: 'my-portfolio-v1',
  title: 'My Portfolio (v1)',
  description:
  'My first developer portfolio — a clean showcase of who I am, what I build, and how to reach me. Built with a focus on simplicity and performance.',
  tech: ['React', 'JavaScript', 'CSS', 'Vercel'],
  githubUrl: 'https://github.com/Dev-emmy-001/my-portfolio'
},
{
  id: 'fashion-shop',
  title: 'Fashion Shop',
  description:
  'A polished online fashion storefront focused on product discovery, visual merchandising, and an easy shopping experience.',
  tech: ['React', 'E-commerce', 'Responsive Design'],
  liveUrl: 'https://fashionshoppp.netlify.app/'
},
{
  id: 'nexus-portal',
  title: 'Nexus Portal',
  description:
  'A modern portal experience that brings information, navigation, and user actions into one streamlined workspace.',
  tech: ['React', 'JavaScript', 'Dashboard UI'],
  liveUrl: 'https://nexusportalst.netlify.app/'
},
{
  id: 'printivo-clone',
  title: 'Printivo Clone',
  description:
  'A print-services interface inspired by the modern ordering experience, with clear product browsing and strong visual hierarchy.',
  tech: ['React', 'UI Design', 'Responsive Design'],
  liveUrl: 'https://printivoo.netlify.app/'
},
{
  id: 'figma-exclusive',
  title: 'Figma Exclusive',
  description:
  'A design-led web experience translating a high-fidelity visual concept into a responsive, production-style interface.',
  tech: ['React', 'Figma', 'CSS', 'Responsive Design'],
  liveUrl: 'https://figmaexclusive.netlify.app/'
}];