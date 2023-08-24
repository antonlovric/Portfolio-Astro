import React, { useState } from 'react';
import { skills } from '../SkillSection/skills';
import './SkillCard.scss';

const SkillCard = () => {
  const skill = skills[0];
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => setShowDescription(!showDescription);

  return (
    <div className='skill-card-container' onClick={toggleDescription}>
      <div
        className={`skill-description-container ${showDescription && 'skill-description-shown'}`}
      >
        <div className='description-title'>
          <img src={skill.image} alt={`${skill.name} logo`} />
          <p>{skill.name}</p>
        </div>
        <div className='description-text'>{skill.text}</div>
      </div>
      <div className='skill-overview'>
        <img src={skill.image} alt={`${skill.name} logo`} />
        <p>{skill.name}</p>
      </div>
    </div>
  );
};

export default SkillCard;
