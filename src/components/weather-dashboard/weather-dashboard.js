import htmlString from "./weather-dashboard.html";
import "./weather-dashboard.css";
import CurrentForecastWidget from "../current-forecast-widget/current-forecast-widget";
import DomUtility from "../../utilities/DomUtility";
import WeatherAPI from "../../services/WeatherAPI";

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
      this.#currentForecastWidget = await CurrentForecastWidget.create(
        this.#element,
        weatherAPI,
      );
    })();

    this.render();
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
