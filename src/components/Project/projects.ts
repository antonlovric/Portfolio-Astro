export interface IProject {
  title: string;
  description: string;
  image: string;
  frontend?: string;
  backend?: string;
  demo?: string;
}

export const projects: IProject[] = [
  {
    title: 'Tech Tales',
    description:
      'Tech Tales is the app I built as part of my masters thesis which focused on monolithic and client-server architectures. The frontend was built using Next.JS, while the backend was built using Express.JS.',
    image: 'assets/tech-tales.webp',
    frontend: 'https://github.com/antonlovric/tech-tales-client',
    backend: 'https://github.com/antonlovric/tech-tales-express',
  },
  {
    title: 'Free Bird Music',
    description:
      'This is a fullstack application created as part of my Bachelor’s Thesis. The backend is created using Laravel while the frontend is created using Nuxt 3.',
    image: 'assets/freebird.webp',
    frontend: 'https://github.com/antonlovric/freebird-front',
    backend: 'https://github.com/antonlovric/freebird-music',
  },
  {
    title: 'Portfolio',
    description:
      'This portfolio is my first project using Astro. I chose Astro since it offers good, lightweight SSG capabilities. Also used React to create componentes needed for this project and styled them using SCSS.',
    image: 'assets/portfolio.webp',
    frontend: 'https://github.com/antonlovric/Portfolio',
  },
];
