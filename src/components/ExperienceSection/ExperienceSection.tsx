import React from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import './ExperienceSection.scss';

const ExperienceSection = () => {
  const ref = useFadeIn();
  return (
    <section ref={ref} id='experience'>
      <h3>Professional Experience</h3>
      <div className='experience-container'>
        <div className='work-section'>
          <div className='work-info'>
            <div className='circle'></div>
            <img src='/assets/work-icon.svg' alt='' />
            <div className='info-container'>
              <div className='work-name'>Info3 - Frontend developer</div>
              <div className='work-period'>Varaždin, January 2022 - July 2022</div>
            </div>
          </div>
          <p className='work-description'>
            Info3 gave me my first chance as a frontend developer and it was a brilliant learning
            experience. I was assigned to a React Native project and had to learn quickly to keep
            the project going. Later on I moved on to React and Next.JS projects to further improve
            my knowledge. I was thrown into the deep end which allowed me to grow as a developer and
            as a person. During my time at Info3 I learned a lot about React but also learned a lot
            about keeping high standards and continuously improving as a developer.
          </p>
        </div>
        <div className='work-section'>
          <div className='work-info'>
            <div className='circle'></div>
            <img src='/assets/work-icon.svg' alt='' />
            <div className='info-container'>
              <div className='work-name'>Ericsson Nikola Tesla - Frontend developer</div>
              <div className='work-period'>Varaždin, November 2022 - November 2023</div>
            </div>
          </div>
          <p className='work-description'>
            After taking a short break to work on my Bachelor's thesis I joined Ericsson Nikola
            Tesla as a frontend developer. My past experience at Info3 helped me to settle in
            quickly and instantly deliver results. Soon after joining the company I started working
            on a global project as the only frontend developer on my team. I was tasked with making
            all major architectural frontend decisions and it was a big step for me. Working on such
            major projects was an exciting experience and allowed me to improve in various facets of
            development. Since I worked on multiple projects I used various tools, such as multiple
            component libraries, Tailwind and Vite.
          </p>
        </div>
        <div className='work-section'>
          <div className='work-info'>
            <div className='circle'></div>
            <img src='/assets/work-icon.svg' alt='' />
            <div className='info-container'>
              <div className='work-name'>Burai - Frontend developer</div>
              <div className='work-period'>Varaždin, November 2023 - present</div>
            </div>
          </div>
          <p className='work-description'>
            Moving to Burai was a big decision in my career since I held a very stable and
            prosperous position at Ericsson. Regardless, I felt I needed more so I moved to Burai to
            improve as a developer and it proved to be a correct decision. I have been growing every
            day since joining, working primarily on the frontend and occasionally doing backend
            work. We're working at a very high pace but the work has been rewarding and I can't wait
            to see what the future has in store for us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
