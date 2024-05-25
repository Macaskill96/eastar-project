import React from 'react';
import './second.styles.css'
const SecondComp = () => {
    return (
        <div className='secondComponentDiv'>
            <div className='titles-block'>
                <h1 className='h1-title'>Вакумний пакувальник EASTAR v6</h1>
                <div className='opis'>
                    <p className='p-title'>Незамінний помічник на кухні, який дозволить:
                    </p>
                    <ul className='ul-title'>
                        <li>Збільшити термін зберігання продуктів в 5 разів!</li>
                        <li>Закономити місце в холодильнику і морозильній камері.</li>
                        <li>Дозволить забути про заморожування мяса та риби на великі терміни.
                        </li>
                        <li>Дозволить вакуумувати замариновані продукти.</li>
                        <li>Забути про намерзання льоду на продукти.
                        </li>
                        <li>Збереже продуктам корисній вміст, та перешкоджатиме їхньому пересиханню.</li>
                    </ul>
                </div>

            </div>
            <div>
                <img src={'images/sec.png'} className='img2'/>
            </div>
        </div>
    );
};

export default SecondComp;