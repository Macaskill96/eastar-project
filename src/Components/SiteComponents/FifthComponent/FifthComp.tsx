import React from 'react';
import './fifth.styles.css'
import InputForm from "../../NovaPostComp/InputForm";
const FifthComp = () => {
    return (
        <div className='fifthComponentDiv' id='fifthSection'>
            <div className='howCreate'>
                <h1>Як замовити EASTAR v6?</h1>
                <ul>
                    <li>Введіть ПІБ</li>
                    <li>Введіть номер телефону (у форматі +380...)</li>
                    <li>Введіть назву населеного пункту і виберіть зі списку Ваш пункт</li>
                    <li>Виберіть потрібне відділення або поштомат</li>
                    <li>Для зручності, Ви можете ввести в полі відділення одразу номер того відділення або поштомату</li>
                </ul>
            </div>
            <div className='divInputForm'>
                <InputForm/>
            </div>
        </div>
    );
};

export default FifthComp;