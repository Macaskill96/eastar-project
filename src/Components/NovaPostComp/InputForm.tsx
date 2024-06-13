
import React, { useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {novaActions} from "../../redux";
import {useForm} from "react-hook-form";
import {ISetValuePost} from "../../interfaces/nova.interface";
import "firebase/compat/firestore";
import {setToStore} from "../../methods/firebase.methods";
import './inputForm.styles.css'
import {useNavigate} from "react-router-dom";



const InputForm = () => {
    const data = useAppSelector(state => state.nova.data)
    const dataWareHouse = useAppSelector(state => state.nova.dataTwo)
    const dispatch = useAppDispatch();
    const {handleSubmit, register, setValue, watch, getValues, formState: {errors} } = useForm<ISetValuePost>();


    const [cityList, setCityList] = useState(false);
    const [wareHouseParams, setWareHouseParams] = useState<string>('')
    const [stateInput, setStateInput] = useState<boolean>(true)
    const [warehouseListState, setWarehouseListState] = useState<boolean>(false)
    const [itemUser, setItemUser] = useState<ISetValuePost>();
    const navigate = useNavigate();



    let watchCityInput = watch('city');
    let watchWareHouseInput = watch('warehouse');

    useEffect(()=> {
        dispatch(novaActions.searchSettlements(watchCityInput))
    }, [dispatch, watchCityInput, watchWareHouseInput])


    function generateUserID (length:number) {
        let result = ''
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    const onSubmit = (data: ISetValuePost) => {
        setItemUser(data);
        setToStore(generateUserID(10), data.nameUser, data.lastName, data.phone, data.city, data.warehouse)
        navigate('/thanks')
    };


    const changeСityList = (value: string, params: string) => {
        setStateInput(false)
        setWareHouseParams(params)
        setValue('city', value);
        setCityList(false);
        setValue('warehouse', '')
    };
    const cityListTrue = () => {
        setCityList(true);
        setWarehouseListState(false)
    }

    let timerID: NodeJS.Timer | undefined;

    const findValue = (cityRef: string, findByString?: string) => {
            clearTimeout(timerID)
            timerID = setTimeout(() => {
                dispatch(novaActions.getWarehouses({cityRef, findByString}));
            }, 200);

    }

    const selectWarehouseList = (cityRef: string, value?: string) => {
        value = getValues('warehouse')
        findValue(cityRef, value)
        setWarehouseListState(true)

    }


    const selectWarehouse = (value:string) => {
        setValue('warehouse', value);
        setWarehouseListState(false)
    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type='text' placeholder=" Ім'я " {...register('nameUser', {pattern: /^[A-Za-zА-Яа-яІіЇїЄєҐґ']+$/}) } className='inputFormName' />
                    {errors.nameUser && <p>Введіть вірне ім'я, не використовуючи символи та цифри</p>}
                    <input type='text' placeholder='Прізвище' {...register('lastName', {pattern: /^[A-Za-zА-Яа-яІіЇїЄєҐґ']+$/})} className='inputFormName'/>
                    {errors.lastName && <p>Введіть вірне прізвище, не використовуючи символи та цифри</p>}
                </div>
                <div>
                    <input type='text' placeholder='Номер телефону' {...register('phone', {pattern: /^\+?380\d{9}$|^0\d{9}$/})} className='inputForm'/>
                    {errors.phone && <p>Введіть вірний номер у форматі +380 або починаючи з нуля</p>}
                </div>
                <div>
                    <input type='text' placeholder='Введіть назву населеного пункту' {...register('city')} onClick={cityListTrue} className='inputForm'
                      />
                    { cityList && (
                        <ul className='listul'>
                            {
                                data.map(value => (
                                    value.data.map(item => (
                                        item.Addresses.map(resultItem => (
                                            <li onClick={()=> changeСityList(resultItem.Present, resultItem.DeliveryCity) } className='listli'>{resultItem.Present}</li>
                                        ))
                                    ))
                                ))
                            }
                        </ul>
                    )}
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Виберіть або введіть потрібне відділення Нової пошти'
                        disabled={stateInput}
                        {...register('warehouse')}
                        onChange={(event) =>
                            findValue(wareHouseParams, event.target.value)}
                        onClick={() => selectWarehouseList(wareHouseParams)}
                        className='inputForm'

                    />
                    {warehouseListState && (
                        <ul className='listul2'>
                            {dataWareHouse.map(item => (
                                item.data.map(value => (
                                    <li onClick={() => selectWarehouse(value.Description)} className='listli2'>
                                        {value.Description}
                                    </li>
                                ))
                            ))}
                        </ul>
                    )}
                </div>
                <button type='submit' className='buttonInput'>Замовити!</button>
            </form>
        </div>
    );
};

export default InputForm;

