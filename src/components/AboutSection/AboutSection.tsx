import { useElementAnimation } from '../../hooks/useElementAnimation';
import './AboutSection.scss';
const AboutSection = () => {
    const ref = useElementAnimation();
    return (
        <div className='invisible' ref={ref}>
            <h3>About Me</h3>
            <div className='container'>
                <div className='text-container'>
                    <p>
                        I was born on May 1st 1999. and have always felt a strong passion towards
                        computers. After graduating high school as a mechanical engineer and
                        participating in various competitions in mechanics and mechanical
                        constructions, I decided to enroll at Faculty of Organization and
                        Informatics in Varazdin. I earned my Bachelor’s degree in September 2022.
                        and I am currently working on my masters degree.
                    </p>
                    <p>
                        I have been working on my development skills for years, seriously focusing
                        on frontend development in 2020. Since then I have worked in various
                        environments with different tools. I also have 7 months of professional
                        experience in frontend development where I primarily used Next.js, React and
                        React Native. Other than frontend development, I'm also working on my
                        backend skills primarily using Laravel.
                    </p>
                </div>
                <img src='/assets/profilna.webp' alt='' />
            </div>
        </div>
    );
};

export default AboutSection;
