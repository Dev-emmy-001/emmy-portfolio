export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
{
  category: 'Frontend',
  items: [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Bootstrap CSS',
  'Next.js',
  'Framer Motion',
  'HTML/CSS']

},
{
  category: 'Backend',
  items: [
  'Node.js',
  'Express',
  'MongoDB',
  'REST APIs',
  'PostgreSQL',
  'GraphQL']

},
{
  category: 'Tools & DevOps',
  items: ['Git', 'GitHub Actions', 'Docker', 'AWS', 'Vercel', 'Linux']
}];