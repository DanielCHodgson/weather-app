import "./header.css";
import html from "./header.html";
import WeatherForm from "../weather-form/weather-form";
import DomUtility from "../../utilities/DomUtility";
import ToggleSwitch from "../generic/toggle-switch/toggle-switch";

export default class Header {
  #dashboard;
  #container;
  #element;
  #weatherForm;
  #toggleSwitch;

  constructor(dashboard, container) {
    this.#dashboard = dashboard;
    this.#container = container;
    this.#element = DomUtility.stringToHTML(html);
    this.#weatherForm = new WeatherForm(this.#element);
    this.#toggleSwitch = new ToggleSwitch(
      this.#element,
      `°${this.#dashboard.getDegreesUnit()}`,
    );
    this.render();
  }

  render() {
    this.#container.appendChild(this.#element);
  }
}
