import htmlString from "./weather-dashboard.html";
import "./weather-dashboard.css";
import CurrentForecastWidget from "../current-forecast-widget/current-forecast-widget";
import DomUtility from "../../utilities/DomUtility";

export default class WeatherDashboard {
  #container;
  #element;
  #weatherDataService;
  #currentForecastWidget;

  constructor(container, weatherDataService) {
    this.#container = container;
    this.#element = DomUtility.stringToHTML(htmlString);
    this.#weatherDataService = weatherDataService;
    this.render();
    this.initDailyForecastWidget();
  }

  async initDailyForecastWidget() {
    this.#currentForecastWidget = new CurrentForecastWidget(
      this.#element,
      this.#weatherDataService.getDailyForecast(),
    );
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
