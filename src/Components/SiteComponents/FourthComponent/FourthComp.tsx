import React from 'react';
import './fourth.styles.css'

const FourthComp = () => {

    const scrollToID = () => {
        const section = document.getElementById('fifthSection');
        if (section) {
            const yOffset = -80;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    return (
        <div className='fourthComponentDiv'>
            <h2>Вакумний пакувальник EASTAR v6</h2>

            <video controls  className='video'>
                <source src={'videos/eastar.mp4'} type="video/mp4" />
            </video>
            <button onClick={scrollToID}>Як замовити?</button>
        </div>
    );
};

export default FourthComp;