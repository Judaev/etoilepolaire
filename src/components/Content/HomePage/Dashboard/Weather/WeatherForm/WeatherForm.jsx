import React from 'react'
import style from './WeatherForm.module.css'

const WeatherForm = (props) => (
  <form onSubmit={props.weatherMethod} className="form__style">
    <input
      className={style.input}
      type="text"
      name="city"
      placeholder="Введите ваш город"
    />
    <button className={style.button} >Узнать погоду</button>
  </form>
)

export default WeatherForm
