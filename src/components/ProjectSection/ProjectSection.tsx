import Project from '../Project/Project';
import { projects } from '../Project/projects';
const ProjectSection = () => {
    return (
        <section>
            <h3>Projects</h3>
            {projects.map((project) => (
                <Project {...project} />
            ))}
        </section>
    );
};

export default ProjectSection;
