import { SKILL_NAMES } from '../Skill/Skill';

export interface ISkillItem {
  name: SKILL_NAMES;
  image: string;
  text: string;
}
export const skills: ISkillItem[] = [
  {
    name: 'HTML',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    text: 'I see HTML as the fundamental building block of every web application and I pay a lot of attention to proper HTML semantics. I spent a lot of time studying HTML early on in my career, which helped me understand proper HTML principles and allowed me to write functional and accessible applications.',
  },
  {
    name: 'CSS / SCSS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    text: 'Just like I spent a lot of time studying HTML, I also focused heavily on CSS. Later on I moved on to SCSS and now I prefer using Tailwind. Improving styling skills is a priority of mine and something I definitely plan to improve in the coming years.',
  },
  {
    name: 'JavaScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    text: "Since I was coming over from C++, JavaScript was a great next step for my personal development. It allowed me to quickly solve various tasks and now it's an irreplaceable part of my day-to-day life.",
  },
  {
    name: 'TypeScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    text: 'I initially came across TypeScript at my first job in a company called Info3 and I loved it. I firmly believe TypeScript is the way to go when building web applications and I try to improve my knowledge every single day.',
  },
  {
    name: 'React / Next.js / React Native',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    text: "React was the first framework I learned and it's still my framework of choice when building web applications. It's an importan part of my skillset and allowed me to move on to Next.JS and Remix. I also have experience in working with React Native / Expo and I love the fact that React allows me to build more than just web applications.",
  },
  {
    name: 'Vue / Nuxt.js',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    text: "I first learned Vue and Nuxt.JS while writing my bachelor's thesis and I found it very useful. React is still my go-to framework, but I love using Vue since it also allows me to build great applications.",
  },
  {
    name: 'Laravel',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
    text: "I learned a bit of PHP at University but I truly embraced it when working with Laravel. Laravel was a joy to work with and allowed me to quickly build out the backend for my bachelor's thesis. It was my entry to backend development and I truly enjoyed it.",
  },
  {
    name: 'NodeJS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    text: 'Node is another backend technology I worked with in different side projects. I never built out a medium - large sized project with it but I would love to have the opportunity to improve my backend skills.',
  },
];
