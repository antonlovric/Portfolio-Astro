import React from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import './ExperienceSection.scss';

const ExperienceSection = () => {
  const ref = useFadeIn();
  return (
    <section ref={ref}>
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
          <div className='work-description'>
            At Info3, I excelled as a frontend developer, translating designs into captivating web
            experiences. Proficient in HTML, CSS, and JavaScript, I optimized responsiveness and
            performance for an enhanced user journey.
          </div>
        </div>
        <div className='work-section'>
          <div className='work-info'>
            <div className='circle'></div>
            <img src='/assets/work-icon.svg' alt='' />
            <div className='info-container'>
              <div className='work-name'>Ericsson Nikola Tesla - Frontend developer</div>
              <div className='work-period'>Varaždin, November 2022 - present</div>
            </div>
          </div>
          <div className='work-description'>
            At Ericsson Nikola Tesla, I showcased my frontend skills by translating designs into
            compelling web experiences. I adeptly utilized HTML, CSS, and JavaScript to enhance
            responsiveness and ensure seamless user interactions.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
