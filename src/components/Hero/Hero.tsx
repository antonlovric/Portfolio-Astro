import { useEffect, useRef } from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import './Hero.scss';

const Hero = () => {
    const ref = useFadeIn();
    return (
        <section ref={ref} id='home' className='hero-section invisible'>
            <div className='text-container'>
                <h1>Hi, my name is Anton!</h1>
                <h2>Frontend Developer</h2>
            </div>
            <div className='image-container'>
                <img src='/assets/avatar-blob.webp' alt='' />
            </div>
        </section>
    );
};

export default Hero;
