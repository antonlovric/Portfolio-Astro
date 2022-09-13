import './ContactSection.scss';
const ContactSection = () => {
    return (
        <section>
            <h3>Contact</h3>
            <p className='subheading'>Feel Free to get in contact with me!</p>
            <div className='contact-container'>
                <a href='https://www.linkedin.com/in/anton-lovric/' className='contact'>
                    <img src='src\assets\linkedin.svg' alt='' className='contact__icon' />
                    <span className='contact__text'>anton_lovric</span>
                </a>
                <a href='mailto:antonlovric7@gmail.com' className='contact'>
                    <img src='src\assets\gmail.svg' alt='' className='contact__icon' />
                    <span className='contact__text'>antonlovric7@gmail.com</span>
                </a>
                <a href='tel:+385919825264' className='contact'>
                    <img src='src\assets\phone.svg' alt='' className='contact__icon' />
                    <span className='contact__text'>+385919825264</span>
                </a>
            </div>
        </section>
    );
};

export default ContactSection;
