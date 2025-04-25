import htmlString from "./weather-dashboard.html";
import  './weather-dashboard.css';
import CurrentForecastWidget from "../current-forecast-widget/current-forecast-widget";
import DomUtility from "../../utilities/DomUtility";
import WeatherAPI from "../../services/weatherAPI";

export default class WeatherDashboard {
  #container;
  #element;
  #weatherAPI;
  #currentForecastWidget;

  constructor(container) {
    this.#container = container;
    this.#element = DomUtility.stringToHTML(htmlString);
    this.#weatherAPI = new WeatherAPI();
  
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
    this.#container.appendChild(this.#element)
  }

 
}
