import React from 'react'

function DepositForm() {
	return (
		<form className='form container'>
			<div className='form__field'>
				<label>Вид Депозита</label>
				<select>
					<option>Отзывный</option>
					<option>Безотзывный</option>
				</select>
			</div>
			<div className='form__field'>
				<label>Номер Договора</label>
				<input type='text'/>
			</div>
			<div className='form__field'>
				<label>Вид Валюты</label>
				<select>
					<option>Рубли</option>
					<option>Доллары</option>
					<option>Юани</option>
				</select>
			</div>
			<div className='form__field'>
				<label>Дата Начала Депозита</label>
				<input type='date'/>
			</div>
			<div className='form__field'>
				<label>Дата Окончания Депозита</label>
				<input type='date'/>
			</div>
			<div className='form__field'>
				<label>Срок Договора</label>
				<input type='text'/>
			</div>
			<div className='form__field'>
				<label>Сумма Вклада</label>
				<input type='text'/>
			</div>
			<div className='form__field'>
				<label>Процент По Вкладу</label>
				<input type='text'/>
			</div>
			<div className='form__field'>
            	<button className='btn btn-primary' type='submit'>Отправить</button>
        	</div>
		</form>
	)
}

export default DepositForm