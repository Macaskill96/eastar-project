import React from 'react';
import FirstComp from "../Components/SiteComponents/FirstComponent/FirstComp";
import SecondComp from "../Components/SiteComponents/SecondComponent/SecondComp";
import ThirdComp from "../Components/SiteComponents/ThirdComponent/ThirdComp";
import FourthComp from "../Components/SiteComponents/FourthComponent/FourthComp";
import FifthComp from "../Components/SiteComponents/FifthComponent/FifthComp";
import './pages.styles.css'

const MainPage = () => {
    return (
        <div className='mainPage'>
            <FirstComp/>
            <SecondComp/>
            <ThirdComp/>
            <FourthComp/>
            <FifthComp/>
        </div>
    );
};

export default MainPage;