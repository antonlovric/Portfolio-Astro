import './Hero.scss';

const Hero = () => {
    return (
        <section id='home' className='hero-section'>
            <div className='text-container'>
                <h1>Hi, my name is Anton!</h1>
                <h2>Frontend Developer</h2>
            </div>
            <div className='image-container'>
                <picture>
                    <source srcSet='/assets/avatar-blob.png' media='(min-width: 800px)' />
                    <img src='/assets/avatar-blob-2.png' alt='' />
                </picture>
            </div>
        </section>
    );
};

export default Hero;
