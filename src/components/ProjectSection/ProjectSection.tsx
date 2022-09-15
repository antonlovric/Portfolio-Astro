import Project from '../Project/Project';
import './ProjectSection.scss';
import { projects } from '../Project/projects';
import { useElementAnimation } from '../../hooks/useElementAnimation';
const ProjectSection = () => {
    const ref = useElementAnimation();
    return (
        <section ref={ref} className='invisible' id='projects'>
            <h3>Projects</h3>
            {projects.map((project) => (
                <Project key={project.title} {...project} />
            ))}
            <a href='https://github.com/antonlovric' target={'_blank'} className='link'>
                <img src='/assets/github.svg' alt='' className='icon' />
                All Projects
            </a>
        </section>
    );
};

export default ProjectSection;
