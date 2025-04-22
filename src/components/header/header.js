import './header.css';
import html from './header.html';
import WeatherForm from '../weather-form/weather-form';

export default class Header {
  #container;
  #element;
  #weatherForm;

  constructor(container) {
    this.#container = container;
    this.#container.innerHTML = html;
    this.#element = this.#container.querySelector(".header-content");
    this.#weatherForm = new WeatherForm(this.#element);
  }
}
