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
        image: 'assets/freebird.webp',
        frontend: 'https://github.com/antonlovric/freebird-front',
        backend: 'https://github.com/antonlovric/freebird-music',
        demo: 'https://freebird-music.vercel.app/',
    },
    {
        title: 'Alojzije Jankovic',
        description:
            'This is a frontend project made using vanilla HTML, SCSS and JavaScript. It is a personal website made for chess grandmaster Alojzije Jankovic. It includes general info, chess game overview and a phrase generator',
        image: 'assets/jankovic.webp',
        frontend: 'https://github.com/antonlovric/AlojzijeJankovic',
        demo: 'https://antonlovric.github.io/AlojzijeJankovic/',
    },
    {
        title: 'BMI Calculator',
        description:
            'This application allows you to calculate your BMI based on your weight and height. It was made using HTML, SCSS, vanilla JavaScript and ProgressBar.js for data visualization.',
        image: 'assets/bmi.webp',
        frontend: 'https://github.com/antonlovric/BMICalculator',
        demo: 'https://antonlovric.github.io/BMICalculator/',
    },
    {
        title: 'Portfolio',
        description:
            'This portfolio is my first project using Astro. I chose Astro since it offers good, lightweight SSG capabilities. Also used React to create componentes needed for this project and styled them using SCSS.',
        image: 'assets/portfolio.webp',
        frontend: 'https://github.com/antonlovric/Portfolio',
    },
];
