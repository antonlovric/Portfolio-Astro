import { IProject } from './projects';
import './Project.scss';
const Project = (props: IProject) => {
    return (
        <div className='project-container'>
            <img src={props.image} alt='' className='project-image' />
            <div className='project-info'>
                <div>
                    <h4 className='project-title'>{props.title}</h4>
                    <hr />
                    <p className='project-description'>{props.description}</p>
                </div>
                <div className='buttons'>
                    <a target={'_blank'} href={props.frontend} className='project-button'>
                        <img src='src\assets\github.svg' alt='' className='icon' />
                        Frontend
                    </a>
                    {props.backend && (
                        <a target={'_blank'} href={props.backend} className='project-button'>
                            <img src='src\assets\github.svg' alt='' className='icon' />
                            Backend
                        </a>
                    )}
                    {props.demo && (
                        <a target={'_blank'} href={props.demo} className='project-button'>
                            <img src='src\assets\play-circle.svg' alt='' className='icon' />
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
