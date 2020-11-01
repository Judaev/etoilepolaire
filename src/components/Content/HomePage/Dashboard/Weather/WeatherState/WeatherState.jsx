import React from 'react'
import style from './WeatherState.module.css'

const WeatherState = (props) => (
  <div>
    {props.city && (
      <div className={style.weatherStyle}>
        <p className={style.city}>
          Местоположение: {props.city}, {props.country}
        </p>
        <p className="weather__temp">{props.temp} C</p>
        <p>Давление: {props.pressure}</p>
        <p>Закат солнца: {props.sunset}</p>
      </div>
    )}
    <p className="error">{props.error}</p>
  </div>
)

export default WeatherState
