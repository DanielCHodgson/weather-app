import htmlString from './current-forecast-widget.html';
import './current-forecast-widget.css';
import DomUtility from '../../utilities/DomUtility';
import WeatherIcons from '../../res/weather-icons';

export default class DailyForecastWidget {
  #container;
  #element;
  #weatherData;
  #fields;

  constructor(container, weatherData) {
    this.#container = container;
    this.#element = DomUtility.stringToHTML(htmlString);
    this.#weatherData = weatherData;
    this.#fields = this.cacheFields() || {};
    this.setData();
    this.render();
  }

  static async create(container, weatherAPI) {
    const weatherData = await weatherAPI.getDailyForecast("London,UK");
    return new DailyForecastWidget(container, weatherData);
  }

  cacheFields() {
    return {
      temperature: this.#element.querySelector(".temperature"),
      sunrise: this.#element.querySelector(".sunrise"),
      sunset: this.#element.querySelector(".sunset"),
      humidity: this.#element.querySelector(".humidity"),
      wind: this.#element.querySelector(".wind"),
      pressure: this.#element.querySelector(".pressure"),
      uv: this.#element.querySelector(".uv"),
    };
  }

  setTemperature() {
    const current = this.#fields.temperature.querySelector(".current");
    const feelsLike = this.#fields.temperature.querySelector(".feels-like");

    current.textContent = `Current:${this.#weatherData.temp}`;
    feelsLike.textContent = `Feels like: ${this.#weatherData.feelslike}`;
  }

  setDaytime() {
    const sunrise = this.#fields.sunrise;
    const sunset = this.#fields.sunset;

    sunrise.querySelector(".value").textContent = this.#weatherData.sunrise;
    sunset.querySelector(".value").textContent = this.#weatherData.sunset;

    sunrise.querySelector("svg").replaceWith(DomUtility.renderSvg(WeatherIcons().sunrise));
    sunset.querySelector("svg").replaceWith(DomUtility.renderSvg(WeatherIcons().sunset));
  }

  setConditions() {
    const humidity = this.#fields.humidity;
    const wind = this.#fields.wind;
    const pressure = this.#fields.pressure;
    const uv = this.#fields.uv;

    humidity.querySelector("svg").replaceWith(DomUtility.renderSvg(WeatherIcons().humidity));
    wind.querySelector("svg").replaceWith(DomUtility.renderSvg(WeatherIcons().wind));
    pressure.querySelector("svg").replaceWith(DomUtility.renderSvg(WeatherIcons().pressure));
    uv.querySelector("svg").replaceWith(DomUtility.renderSvg(WeatherIcons().uv));

    humidity.querySelector(".value").textContent = this.#weatherData.humidity;
    wind.querySelector(".value").textContent = this.#weatherData.windspeed;
    pressure.querySelector(".value").textContent = this.#weatherData.pressure;
    uv.querySelector(".value").textContent = this.#weatherData.uvindex;
    
  }

  setData() {
    this.setTemperature();
    this.setDaytime();
    this.setConditions();
  }

  render() {
    this.#container.appendChild(this.#element);
  }
}
