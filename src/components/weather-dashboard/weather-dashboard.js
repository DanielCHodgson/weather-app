import html from "./weather-dashboard.html";
import  './weather-dashboard.css';

export default class WeatherDashboard {
  #container;
  #api

  constructor(container) {
    this.#container = container;
    this.#container.innerHTML = html;

  }

 
}
