import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import { Link } from 'react-router-dom';

function Form() {

    const sendToServer = (data) => {
        fetch('http://localhost:4000/users', {method: 'POST', body: JSON.stringify(data), headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },}).then( response => setOk(response.ok));
    }

    const [ok, setOk] = useState(true);
    

    const {
        register, 
        handleSubmit
    } = useForm();

    if (!ok) {
        setOk(true);
        alert('Не Зачтено');
    }

  return (
    <form className='form container' onSubmit={handleSubmit(sendToServer)}>
        <div className='form__field'>
            <label>Фамилия</label>
            <input type='text' {...register("surname", {required: true})}/>
        </div>
        <div className='form__field'>
            <label>Имя</label>
            <input type='text' {...register("name", {required: true})}/>
        </div>
        <div className='form__field'>
            <label>Отчество</label>
            <input type='text' {...register("fatherName", {required: true})}/>
        </div>
        <div className='form__field'>
            <label>Дата Рождения</label>
            <input type='date' {...register("birthDate", {required: true})} />
        </div>
        <div className='form__field'>
            <label>Пол</label>
            <div>
                <div>
                    <input type='radio' name='sex' value={0} {...register("sex", {required: true})}/>
                    <label>Мужской</label>
                </div>
                <div>
                    <input type='radio' name='sex' value={1} {...register("sex", {required: true})}/>
                    <label>Женский</label>
                </div>
            </div>
        </div>
        <div className='form__field'>
            <label>Серия Паспорта</label>
            <input type='text' {...register("passportSeries", {required: true})}/>
        </div>
        <div className='form__field'> 
            <label>№ Паспорта</label>
            <input type='text' {...register("passportNumber", {required: true})}/>
        </div>
        <div className='form__field'>
            <label>Кем выдан</label>
            <input type='text' {...register("passportAuthority", {required: true})}/>
        </div>
        <div className='form__field'>
            <label>Дата Выдачи</label>
            <input type='date' {...register("passportDate", {required: true})} />
        </div>
        <div className='form__field'>
            <label>Идентификационный Номер</label>
            <input type='text' {...register("idNumber", {required: true})}/>
        </div>
        <div className='form__field'>
            <label>Место Рождения</label>
            <input type='text' {...register("birthPlace", {required: true})}/>
        </div>
        <div className='form__field'>
            <label>Город Факт. Проживания</label>
                <select {...register("cityResidence", {required: true})}>
                    <option value='Минск'>Минск</option>
                    <option value='Ханой'>Ханой</option>
                    <option value='Париж'>Париж</option>
                    <option value='Москва'>Москва</option>
                    <option value='Киев'>Киев</option>
                </select>
        </div>
        <div className='form__field'>
            <label>Адрес Факт. Проживания</label>
            <input type='text' {...register("addressResidence", {required: true})}/>
        </div>
        <div className='form__field'>
            <label>Телефон Дом</label>
            <input type='text' {...register("homePhone", {required: false})}/>
        </div>
        <div className='form__field'>
            <label>Телефон Моб</label>
            <input type='text' {...register("mobilePhone", {required: false})}/>
        </div>
        <div className='form__field'>
            <label>Email</label>
            <input type='text' {...register("email", {required: false})}/>
        </div>
        <div className='form__field'>
            <label>Место работы</label>
            <input type='text' {...register("workPlace", {required: false})}/>
        </div>
        <div className='form__field'>
            <label>Должность</label>
            <input type='text' {...register("position", {required: false})}/>
        </div>
        <div className='form__field'>
            <label>Город Прописки</label>
                <select {...register("cityRegistration", {required: true})}>
                    <option value='Минск'>Минск</option>
                    <option value='Ханой'>Ханой</option>
                    <option value='Париж'>Париж</option>
                    <option value='Москва'>Москва</option>
                    <option value='Киев'>Киев</option>
                </select>
        </div>
        <div className='form__field'>
            <label>Адрес Прописки</label>
            <input type='text' {...register("addressRegistration", {required: true})}/>
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
                    <option value='Франция'>Франция</option>
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
                    <option value='Нет Инвалидности'>Нет Инвалидности</option>
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
                    <input type='radio' name='retirement' value={1} {...register("retirement", {required: true})}/>
                    <label>Нет</label>
                </div>
            </div>
        </div>
        <div className='form__field'>
            <label>Ежемесячный Доход</label>
            <input type='number' {...register("salary", {required: false})}/>
        </div>
        <div className='form__field'>
            <label>Военнообязанный</label>
            <div>
                <div>
                    <input type='radio' name='army' value={0} {...register("army", {required: true})}/>
                    <label>Да</label>
                </div>
                <div>
                    <input type='radio' name='army' value={1} {...register("army", {required: true})}/>
                    <label>Нет</label>
                </div>
            </div>
        </div>
        <div className='form__field'>
            <button className='btn btn-primary' type='submit'>Добавить</button>
            <Link to='/list'>
                <button className='btn btn-primary'>Посмотреть Список</button>
            </Link>
        </div>
    </form>
  )
}

export default Form