import  './weather-dashboard.css';

export default class WeatherDashboard {
  #container;

  constructor(container) {
    this.#container = container;
    this.#loadHTML();
  }

  async #loadHTML() {
    const res = await fetch('components/weather-dashboard/weather-dashboard.html?cacheBust=' + Date.now());
    this.#container.innerHTML = await res.text();
  }
}
