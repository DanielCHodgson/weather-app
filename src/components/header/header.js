import "./header.css";
import html from "./header.html";
import WeatherForm from "../weather-form/weather-form";
import DomUtility from "../../utilities/DomUtility";
import ToggleSwitch from "../generic/toggle-switch/toggle-switch";
import EventBus from "../../utilities/EventBus";

export default class Header {
  #dashboard;
  #container;
  #element;
  #weatherForm;
  #toggleSwitch;
  #toggleElement;

  constructor(dashboard, container) {
    this.#dashboard = dashboard;
    this.#container = container;
    this.#element = DomUtility.stringToHTML(html);
    this.#weatherForm = new WeatherForm(this.#element);
    this.#toggleSwitch = this.#createToggleSwitch();
    this.#toggleElement = this.#toggleSwitch.getElement();
    this.#bindEvents();
    this.render();

    EventBus.on("updatePreferredUnit", () =>
      this.#toggleSwitch.setLabelText(
        `°${localStorage.getItem("userPrefferedUnit").toUpperCase()}`,
      ),
    );
  }

  #createToggleSwitch() {
    const preferredUnit =
      localStorage.getItem("userPrefferedUnit") === null
        ? `°C`
        : localStorage.getItem("userPrefferedUnit").toUpperCase();

    return new ToggleSwitch(this.#element, preferredUnit);
  }

  #bindEvents() {
    const isChecked = this.#toggleElement.querySelector("input").checked;

    this.#toggleElement.addEventListener("click", () =>
      this.#handleUnitToggleClick(isChecked),
    );
  }

  #handleUnitToggleClick(isChecked) {

    console.log(isChecked)

    isChecked
      ? localStorage.setItem("userPrefferedUnit", "f")
      : localStorage.setItem("userPrefferedUnit", "c");

    EventBus.emit("updatePreferredUnit");
  }

  render() {
    this.#container.appendChild(this.#element);
  }
}
