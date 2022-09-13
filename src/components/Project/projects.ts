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
        title: 'Free Bird Music',
        description:
            'This is a fullstack application created as part of my Bachelor’s Thesis. The backend is created using Laravel while the frontend is created using Nuxt 3.',
        image: 'src/assets/freebird.png',
        frontend: 'https://github.com/antonlovric/freebird-front',
        backend: 'https://github.com/antonlovric/freebird-music',
        demo: 'https://freebird-music.vercel.app/',
    },
    {
        title: 'Alojzije Janković',
        description:
            'This is a frontend project made using vanilla HTML, SCSS and JS. It is a personal website made for chess grandmaster Alojzije Janković. It includes general info, chess game overview and a phrase generator',
        image: 'src/assets/jankovic.png',
        frontend: 'https://github.com/antonlovric/AlojzijeJankovic',
        demo: 'https://antonlovric.github.io/AlojzijeJankovic/',
    },
    {
        title: 'BMI Calculator',
        description:
            'Simple BMI calculator application made using vanilla HTML, SCSS and JS and ProgressBar js for progress bar animation. ',
        image: 'src/assets/bmi.png',
        frontend: 'https://github.com/antonlovric/BMICalculator',
        demo: 'https://antonlovric.github.io/BMICalculator/',
    },
    {
        title: 'Portfolio',
        description:
            'This portfolio was made using Astro since it offers good, lightweight SSG capabilities. Also used React to create componentes needed for this project and styled them using SCSS.',
        image: 'src/assets/portfolio.png',
        frontend: 'https://github.com/antonlovric/Portfolio',
    },
];
