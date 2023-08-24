import { SKILL_NAMES } from '../Skill/Skill';

export interface ISkillItem {
  name: SKILL_NAMES;
  image: string;
  text?: string;
}
export const skills: ISkillItem[] = [
  {
    name: 'HTML',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    text: 'I possess a strong command of HTML. My proficiency encompasses effective content structuring, form integration, multimedia embedding, and resource linking. Augmenting my expertise in CSS and JavaScript stands as the next logical step to create even more sophisticated and dynamic web experiences.',
  },
  {
    name: 'CSS / SCSS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  },
  {
    name: 'JavaScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React / Next.js / React Native',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Vue / Nuxt.js',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'Laravel',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  },
];
