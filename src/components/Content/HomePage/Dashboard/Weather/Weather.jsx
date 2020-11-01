import React from 'react'
import style from './Weather.module.css'
import WeatherForm from './WeatherForm/WeatherForm';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import WeatherState from './WeatherState/WeatherState'

const API_KEY = "3b1e99a843c9496a0267566c612d8e99";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined,
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Введите название города",
      });
    }
  };

  render() {
    return (
      <div className={style.main}>
        <div className="wraper">
          <div className="container">
            <WeatherInfo />
            <div className='main__block'>
                <WeatherState
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  pressure={this.state.pressure}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
                <div className="form__style">
                  <WeatherForm weatherMethod={this.gettingWeather} />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App