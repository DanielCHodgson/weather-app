import htmlString from "./daily-forecast-element.html";
import "./daily-forecast-element.css";
import DomUtility from "../../utilities/DomUtility";

export default class FutureForecaseElement {
  #weatherData;
  #container;
  #element;
  #fields;

  constructor(weatherData, container) {
    this.#weatherData = weatherData;
    this.#container = container;
    this.#element = DomUtility.stringToHTML(htmlString);
    this.#fields = this.cacheFields();
    this.setData();
  }

  cacheFields() {
    return {
      day: this.#element.querySelector(".day"),
      icon: this.#element.querySelector(".icon"),
      temperature: this.#element.querySelector(".temperature"),
    };
  }

  setData() {
    
  }

  render() {
    this.#container.appendChild(this.#element);
  }
}
