import Project from '../Project/Project';
import './ProjectSection.scss';
import { projects } from '../Project/projects';
import { useFadeIn } from '../../hooks/useFadeIn';
const ProjectSection = () => {
    const ref = useFadeIn({ threshold: 0.1 });
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
