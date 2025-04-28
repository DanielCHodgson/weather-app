import htmlString from "./weather-dashboard.html";
import "./weather-dashboard.css";
import DailyForecastWidget from "../current-forecast-widget/current-forecast-widget";
import DomUtility from "../../utilities/DomUtility";

export default class WeatherDashboard {
  #container;
  #element;
  #weatherAPI;
  #dailyForecastWidget;

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
