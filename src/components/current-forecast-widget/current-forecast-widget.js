import htmlString from "./current-forecast-widget.html";
import "./current-forecast-widget.css";
import DomUtility from "../../utilities/DomUtility";
import WeatherIcons from "../../res/weather-icons";
import WeatherIconPicker from "../../utilities/WeatherIconPicker";

export default class DailyForecastWidget {
  #container;
  #element;
  #weatherData;
  #fields;
  #degreesUnit = 'F';
  

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
      icon: this.#element.querySelector(".icon"),
    };
  }

  renderIcons() {
    this.#fields.sunrise
      .querySelector("svg")
      .replaceWith(DomUtility.renderSvg(WeatherIcons().sunrise));
    this.#fields.sunset
      .querySelector("svg")
      .replaceWith(DomUtility.renderSvg(WeatherIcons().sunset));
    this.#fields.humidity
      .querySelector("svg")
      .replaceWith(DomUtility.renderSvg(WeatherIcons().humidity));
    this.#fields.wind
      .querySelector("svg")
      .replaceWith(DomUtility.renderSvg(WeatherIcons().wind));
    this.#fields.pressure
      .querySelector("svg")
      .replaceWith(DomUtility.renderSvg(WeatherIcons().pressure));
    this.#fields.uv
      .querySelector("svg")
      .replaceWith(DomUtility.renderSvg(WeatherIcons().uv));
  }

  setTemperatureData() {
    this.#fields.temperature.querySelector(".current").textContent =
      `${this.#weatherData.temp}°${this.#degreesUnit}`;

    this.#fields.temperature.querySelector(".feels-like").textContent =
      `Feels like: ${this.#weatherData.feelslike}°${this.#degreesUnit}`;
  }

  setSunsetData() {
    this.#fields.sunrise.querySelector(".value").textContent =
      this.#weatherData.sunrise;
    this.#fields.sunset.querySelector(".value").textContent =
      this.#weatherData.sunset;
  }

  setConditionsData() {
    this.#fields.humidity.querySelector(".value").textContent =
      this.#weatherData.humidity;

    this.#fields.wind.querySelector(".value").textContent =
      this.#weatherData.windspeed;

    this.#fields.pressure.querySelector(".value").textContent =
      this.#weatherData.pressure;

    this.#fields.uv.querySelector(".value").textContent =
      this.#weatherData.uvindex;
  }

  setWeatherIcon() {
    this.#fields.icon.replaceWith(DomUtility.renderSvg(WeatherIconPicker.getIcon(this.#weatherData.datetime, this.#weatherData.cloudcover, this.#weatherData.precip)));
  }

  setData() {
    this.setTemperatureData();
    this.setSunsetData();
    this.setConditionsData();
    this.setWeatherIcon();
  }

  render() {
    this.renderIcons();
    this.#container.appendChild(this.#element);
  }
}
