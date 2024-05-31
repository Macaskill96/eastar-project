import React from 'react';
import './third.styles.css'

const ThirdComp = () => {

    const scrollToID = () => {
        const section = document.getElementById('fifthSection');
        if (section) {
            const yOffset = -80;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    return (
        <div className='thirdComponentDiv'>
            <button onClick={scrollToID} className='buttonForSeller'>Як замовити?</button>
            <div className='rama'>
                <img src={'images/block1.webp'} className='blockImg'/>
                <h2>Компактнійсть та простота</h2>
                <p>Ти можеш в любий момент його використати, коли завгодно, і де завгодно</p>
            </div>
            <div className='rama'>
                <img src={'images/block2.webp'} className='blockImg'/>
                <h2>Збереже вітаміни</h2>
                <p>Вакумація дозволить довше зберегти твої продукти свіжими  та смачними</p>
            </div>
            <div className='rama'>
                <img src={'images/block3.jpg'} className='blockImg'/>
                <h2>Догляд</h2>
                <p>Своєю простою конструкцією дозволяє легко тримати помічника в чистоті</p>
            </div>
        </div>
    );
};

export default ThirdComp;