import './SkillSection.scss';
import { skills } from './skills';
import Skill from '../Skill/Skill';
import { useFadeIn } from '../../hooks/useFadeIn';

const SkillSection = () => {
    const ref = useFadeIn();
    return (
        <section ref={ref} id='skills' className='invisible skills-container'>
            <h3>Skills</h3>
            {skills.map((skill, index) => (
                <Skill key={index} name={skill.name} rating={skill.rating} image={skill.image} />
            ))}
        </section>
    );
};

export default SkillSection;
