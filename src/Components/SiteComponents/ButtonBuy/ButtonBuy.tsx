import React from 'react';
import './button.styles.css'


const ButtonBuy= () => {
    const scrollToID = () => {
        const section = document.getElementById('fifthSection');
        if (section) {
            const yOffset = -80;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    return (
        <div className='divButton'>
            <button className='buttonBuy' onClick={scrollToID}>Купити зараз!</button>
        </div>
    );
};

export default ButtonBuy;