import React, { useState, useEffect } from 'react'
import {useForm} from "react-hook-form"
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Form() {

    const id = useParams().id;
    const [user, setUser] = useState(null);

    const sendToServer = (data) => {
        fetch(`http://localhost:4000/users/${id}`, {method: 'PATCH', body: JSON.stringify(data), headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },});
    }

    useEffect( () => {
        fetch('http://localhost:4000/users/' + id).then( (response) => response.json()).then(data => setUser(data));
    }, []);

    const {
        register, 
        handleSubmit
    } = useForm();

    if (!user) {
        return <></>
    }

  return (
    <form className='form container' onSubmit={handleSubmit(sendToServer)}>
    <div className='form__field'>
        <label>Фамилия</label>
        <input defaultValue={user.name} type='text' {...register("surname", {required: true})}/>
    </div>
    <div className='form__field'>
        <label>Имя</label>
        <input defaultValue={user.surname} type='text' {...register("name", {required: true})}/>
    </div>
    <div className='form__field'>
        <label>Отчество</label>
        <input defaultValue={user.fatherName} type='text' {...register("fatherName", {required: true})}/>
    </div>
    <div className='form__field'>
        <label>Дата Рождения</label>
        <input defaultValue={user.birthDate} type='date' value='1233-01-03' {...register("birthDate", {required: true})} />
    </div>
    <div className='form__field'>
        <label>Пол</label>
        <div>
            <div>
                <input type='radio' name='sex' value={0} {...register("sex", {required: true})}/>
                <label>Мужской</label>
            </div>
            <div>
                <input type='radio' name='sex' value={1} checked {...register("sex", {required: true})}/>
                <label>Женский</label>
            </div>
        </div>
    </div>
    <div className='form__field'>
        <label>Серия Паспорта</label>
        <input defaultValue={user.passportSeries} type='text' {...register("passportSeries", {required: true})}/>
    </div>
    <div className='form__field'>
        <label>№ Паспорта</label>
        <input defaultValue={user.passportNumber} type='text' {...register("passportNumber", {required: true})}/>
    </div>
    <div className='form__field'>
        <label>Кем выдан</label>
        <input defaultValue={user.passportAuthority} type='text' {...register("passportAuthority", {required: true})}/>
    </div>
    <div className='form__field'>
        <label>Дата Выдачи</label>
        <input defaultValue={user.passportDate} type='date' value='4433-04-12' {...register("passportDate", {required: true})} />
    </div>
    <div className='form__field'>
        <label>Идентификационный Номер</label>
        <input defaultValue={user.idNumber} type='text' {...register("idNumber", {required: true})}/>
    </div>
    <div className='form__field'>
        <label>Место Рождения</label>
        <input defaultValue={user.birthPlace} type='text' {...register("birthPlace", {required: true})}/>
    </div>
    <div className='form__field'>
        <label>Город Факт. Проживания</label>
            <select {...register("cityResidence", {required: true})}>
                <option value='Минск'>Минск</option>
                <option selected value='Ханой'>Ханой</option>
                <option value='Париж'>Париж</option>
                <option value='Москва'>Москва</option>
                <option value='Киев'>Киев</option>
            </select>
    </div>
    <div className='form__field'>
        <label>Адрес Факт. Проживания</label>
        <input defaultValue={user.addressResidence} type='text' {...register("addressResidence", {required: true})}/>
    </div>
    <div className='form__field'>
        <label>Телефон Дом</label>
        <input defaultValue={user.homePhone} type='text' {...register("homePhone", {required: false})}/>
    </div>
    <div className='form__field'>
        <label>Телефон Моб</label>
        <input defaultValue={user.mobilePhone} type='text' {...register("mobilePhone", {required: false})}/>
    </div>
    <div className='form__field'>
        <label>Email</label>
        <input defaultValue={user.email} type='text' {...register("email", {required: false})}/>
    </div>
    <div className='form__field'>
        <label>Место работы</label>
        <input defaultValue={user.workPlace} type='text' {...register("workPlace", {required: false})}/>
    </div>
    <div className='form__field'>
        <label>Должность</label>
        <input defaultValue={user.position} type='text' {...register("position", {required: false})}/>
    </div>
    <div className='form__field'>
        <label>Город Прописки</label>
            <select {...register("cityRegistration", {required: true})}>
                <option value='Минск'>Минск</option>
                <option value='Ханой'>Ханой</option>
                <option value='Париж'>Париж</option>
                <option selected value='Москва'>Москва</option>
                <option value='Киев'>Киев</option>
            </select>
    </div>
    <div className='form__field'>
        <label>Адрес Прописки</label>
        <input defaultValue={user.addressRegistration} type='text' {...register("addressRegistration", {required: true})}/>
    </div>
    <div className='form__field'>
        <label>Семейное Положение</label>
            <select {...register("familyState", {required: true})}>
                <option value='В Браке'>В Браке</option>
                <option value='Не В Браке'>Не В Браке</option>
                <option value='Разведен'>Разведен</option>
            </select>
    </div>
    <div className='form__field'>
        <label>Гражданство</label>
            <select {...register("citizenship", {required: true})}>
                <option value='Беларусь'>Беларусь</option>
                <option value='Вьетнам'>Вьетнам</option>
                <option selected value='Франция'>Франция</option>
                <option value='Россия'>Россия</option>
                <option value='Украина'>Украина</option>
            </select>
    </div>
    <div className='form__field'>
        <label>Инвалидность</label>
            <select {...register("disability", {required: true})}>
                <option value='1-я степень'>1-я степень</option>
                <option value='2-я степень'>2-я степень</option>
                <option value='3-я степень'>3-я степень</option>
                <option selected value='Нет Инвалидности'>Нет Инвалидности</option>
            </select>
    </div>
    <div className='form__field'>
        <label>Пенсионер</label>
        <div>
            <div>
                <input type='radio' name='retirement' value={0} {...register("retirement", {required: true})}/>
                <label>Да</label>
            </div>
            <div>
                <input type='radio' name='retirement' value={1} checked {...register("retirement", {required: true})}/>
                <label>Нет</label>
            </div>
        </div>
    </div>
    <div className='form__field'>
        <label>Ежемесячный Доход</label>
        <input defaultValue={user.salary} type='number' {...register("salary", {required: false})}/>
    </div>
    <div className='form__field'>
        <label>Военнообязанный</label>
        <div>
            <div>
                <input type='radio' name='army' value={0} {...register("army", {required: true})}/>
                <label>Да</label>
            </div>
            <div>
                <input type='radio' name='army' checked value={1} {...register("army", {required: true})}/>
                <label>Нет</label>
            </div>
        </div>
    </div>
    <div className='form__field'>
        <button className='btn btn-primary' type='submit'>Редактировать</button>
        <Link to='/add'>
            <button className='btn btn-primary'>Форма Создания</button>
        </Link>
    </div>
    </form>
  )
}

export default Form