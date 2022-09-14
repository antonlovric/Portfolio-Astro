import './Hero.scss';

const Hero = () => {
    return (
        <section id='home' className='hero-section'>
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
