import { SKILL_NAMES } from '../Skill/Skill';

export interface ISkillItem {
    name: SKILL_NAMES;
    rating: number;
    image: string;
}
export const skills: ISkillItem[] = [
    {
        name: 'HTML5',
        rating: 5,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
    },
    {
        name: 'CSS / SCSS',
        rating: 4,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    },
    {
        name: 'JavaScript',
        rating: 5,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
        name: 'TypeScript',
        rating: 4,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
        name: 'Vue / Nuxt.js',
        rating: 3,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    },
    {
        name: 'React / Next.js',
        rating: 4,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
        name: 'React Native',
        rating: 3,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
        name: 'Laravel',
        rating: 3,
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
    },
];
