import React from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import './ExperienceSection.scss';
import { ExperienceCard } from './ExperienceCard/ExperienceCard';

const experiences = [
  {
    role: 'Engineering Lead',
    company: 'Burai',
    location: 'Zagreb',
    startDate: 'April 2025',
    endDate: 'present',
    highlight:
      'Leading frontend, backend, and AI teams while building the foundation for scalable engineering. Established hiring pipelines, onboarding processes, and performance systems that align technical execution with product vision across all development areas.',
    tags: [
      'Engineering Leadership',
      'Process Optimization',
      'Team Building',
      'Hiring & Onboarding',
      'Cross-team Alignment',
      'Product Vision',
      'Performance Management',
    ],
    fullDescription:
      "After successfully leading the Frontend team, I was promoted to Engineering Lead, now overseeing frontend, backend, and AI development teams. My focus shifted to optimizing our engineering organization by implementing standardized processes for hiring, onboarding, and performance improvement across all technical areas. I'm responsible for ensuring all developer teams understand and work toward our universal product vision, while also managing recruitment for all development positions. This role has allowed me to shape the entire engineering culture and create scalable processes that support our rapid growth.",
  },
  {
    role: 'Frontend Lead',
    company: 'Burai',
    location: 'Varaždin',
    startDate: 'November 2024',
    endDate: 'April 2025',
    highlight:
      'Built and mentored a high-performing frontend team while fostering a winning engineering culture. Leveraged educational background to develop technical skills across the team and established strong cross-departmental relationships that improved organizational effectiveness.',
    tags: ['Leadership', 'Team Building', 'Mentorship', 'Cross-functional'],
    fullDescription:
      "After a very successful year of working as a developer in Burai, I took on the leadership position in the Frontend team. I was tasked with mentoring other developers, managing team performance, and organizing workshops. My Master's in Informatics in Education has proved to be very helpful and allowed me to build up the skills of other team members. Other than building technical skills of other team members, I also put in a lot of focus of building a winning culture inside the Engineering department and built a strong relationship with other departments within the organization.",
  },
  {
    role: 'Frontend Developer',
    company: 'Burai',
    location: 'Varaždin',
    startDate: 'November 2023',
    endDate: 'November 2024',
    highlight:
      'Made the leap from enterprise stability to startup velocity and grew rapidly as a developer. Worked primarily on frontend with occasional backend contributions in a fast-paced environment where learning and execution happened simultaneously.',
    tags: ['Frontend', 'Backend', 'Fast-paced'],
    fullDescription:
      "Moving to Burai was a big decision in my career since I held a very stable and prosperous position at Ericsson. Regardless, I felt I needed more so I moved to Burai to improve as a developer and it proved to be a correct decision. I have been growing every day since joining, working primarily on the frontend and occasionally doing backend work. We're working at a very high pace but the work has been rewarding and I can't wait to see what the future has in store for us.",
  },
  {
    role: 'Frontend Developer',
    company: 'Ericsson Nikola Tesla',
    location: 'Varaždin',
    startDate: 'November 2022',
    endDate: 'November 2023',
    highlight:
      'Sole frontend engineer on a global project, responsible for all architectural decisions and technical direction. Worked across multiple projects using various component libraries, Tailwind, and Vite, gaining experience in large-scale enterprise development.',
    tags: ['React', 'Architecture', 'Tailwind', 'Vite'],
    fullDescription:
      "After taking a short break to work on my Bachelor's thesis I joined Ericsson Nikola Tesla as a frontend developer. My past experience at Info3 helped me to settle in quickly and instantly deliver results. Soon after joining the company I started working on a global project as the only frontend engineer on my team, and I was tasked with making all major architectural frontend decisions and it was a big step for me. Working on such major projects was an exciting experience and allows me to improve in various facets of development. Since I worked on multiple projects I used various tools, such as multiple component libraries, Tailwind and Vite.",
  },
  {
    role: 'Frontend Developer',
    company: 'Info3',
    location: 'Varaždin',
    startDate: 'January 2022',
    endDate: 'July 2022',
    highlight:
      'First professional frontend role where I was thrown into the deep end with React Native, React, and Next.js. Learned not just the technical fundamentals, but the importance of maintaining high standards and continuous improvement as a developer.',
    tags: ['React Native', 'Next.js', 'React'],
    fullDescription:
      'Info3 gave me my first chance as a frontend developer and it was a brilliant learning experience. I was assigned to a React Native project to get the project going. Later on I moved on to React and Next.JS projects to further improve my knowledge. I was thrown into the deep end which allowed me to grow as a developer and as a person. During my time at Info3 I learned a lot about React but also learned a lot about keeping high standards and continuously improving as a developer.',
  },
];

const ExperienceSection = () => {
  const ref = useFadeIn();
  return (
    <section ref={ref} id='experience' className='professional-experience'>
      <div className='experience-container'>
        <h3 className='main-title'>Professional Experience</h3>

        <div className='timeline'>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
