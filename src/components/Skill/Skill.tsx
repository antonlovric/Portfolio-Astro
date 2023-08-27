import React from 'react';
import './Skill.scss';

export type SKILL_NAMES =
  | 'HTML'
  | 'CSS / SCSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'Vue / Nuxt.js'
  | 'React / Next.js / React Native'
  | 'NodeJS'
  | 'Laravel';

interface ISkillProps {
  name: SKILL_NAMES;
  rating: number;
  image: string;
}

const NUMBER_OF_STARS = 5;

const Skill = (props: ISkillProps) => {
  const { name, rating, image } = props;
  const ratings = [];
  for (let i = 1; i <= NUMBER_OF_STARS; i++) ratings.push(i <= rating);
  return (
    <div className='skill-container'>
      <div className='skill-info'>
        <img className='skill-icon' src={image} alt='' />
        <span className='name'>{name}</span>
      </div>
      <div className='skill-rating'>
        {ratings.map((rating, index) =>
          rating ? (
            <img key={index} className='rating-star' src='assets/colored-star.svg' alt='' />
          ) : (
            <img key={index} className='rating-star' src='assets/blank-star.svg' alt='' />
          )
        )}
      </div>
    </div>
  );
};

export default Skill;
