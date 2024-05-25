import React from 'react';
import './first.styles.css'
import ButtonBuy from "../ButtonBuy/ButtonBuy";
import PriceComponent from "../PriceComponent/PriceComponent";


const FirstComp = () => {
    return (
        <div className='firstComponentDiv'>
            <div className='header'>
                <h3>TechnoChopik</h3>
            </div>
            <div className='main-part'>
                <div className='titles'>
                    <h1>Vacuum Sealer</h1>
                    <p>EASTAR v6</p>
                    <ButtonBuy/>
                </div>
                <img src={'images/first.png'} className='img'/>
            </div>
            <div className='divPrice'>
                <PriceComponent/>
            </div>
        </div>
    );
};

export default FirstComp;