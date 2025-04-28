import htmlString from "./weather-dashboard.html";
<<<<<<< HEAD
import "./weather-dashboard.css";
import DailyForecastWidget from "../current-forecast-widget/current-forecast-widget";
=======
import  './weather-dashboard.css';
import CurrentForecastWidget from "../current-forecast-widget/current-forecast-widget";
>>>>>>> cee14f74b5b3cf23b39468a26074aa88a8ffa608
import DomUtility from "../../utilities/DomUtility";
import WeatherAPI from "../../services/weatherAPI";

export default class WeatherDashboard {
  #container;
  #element;
  #weatherAPI;
  #currentForecastWidget;

  constructor(container, weatherAPI) {
    this.#container = container;
    this.#element = DomUtility.stringToHTML(htmlString);
    this.#weatherAPI = weatherAPI;
    (async () => {
      this.#dailyForecastWidget = await DailyForecastWidget.create(
        this.#element,
        weatherAPI,
      );
    })();

    this.render();
  
    (async () => {
      try {
        this.#currentForecastWidget = await CurrentForecastWidget.create(this.#element, this.#weatherAPI, "Sheffield,UK");

        const weatherData = await this.#weatherAPI.getFortnightData("Sheffield,UK");
        console.log(weatherData);
      } catch (error) {
        console.error("Initialization error:", error);
      }
    })();
  }

  render() {
    this.#container.appendChild(this.#element);
  }

  setDegreesUnit(unit) {
    if (unit.toLowerCase() !== c || unit.toLowerCase() !== f)
      throw new Error("Unit must be C or F");
    this.getDegreesUnit = unit;
  }
}
