import './SkillSection.scss';
import { skills } from './skills';
import Skill from '../Skill/Skill';
import { useFadeIn } from '../../hooks/useFadeIn';
import SkillCard from '../SkillCard/SkillCard';

const SkillSection = () => {
  const ref = useFadeIn();
  return (
    <section ref={ref} id='skills' className='invisible skills-container'>
      <h3>Skills</h3>
      <div className='skill-cards-container'>
        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
