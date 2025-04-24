import htmlString from "./future-forecast-element.html";
import "./future-forecast-element.css";
import DomUtility from "../../utilities/DomUtility";

export default class FutureForecaseElement {
  #weatherData;
  #container;
  #element;

  constructor(weatherData, container) {
    this.#weatherData = weatherData;
    this.#container = container;
    this.#element = DomUtility.stringToHTML(htmlString);
  }


  setData() {
    
  }

  render() {
    this.#container.appendChild(this.#element);
  }
}
