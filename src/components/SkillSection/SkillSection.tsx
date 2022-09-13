import './SkillSection.scss';
import { skills } from './skills';
import Skill from '../Skill/Skill';

const SkillSection = () => {
    return (
        <div className='skills-container'>
            <h3>Skills</h3>
            {skills.map((skill, index) => (
                <Skill key={index} name={skill.name} rating={skill.rating} image={skill.image} />
            ))}
        </div>
    );
};

export default SkillSection;
