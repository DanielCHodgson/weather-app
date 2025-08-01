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
  #degreeUnitToggle;

  constructor(dashboard, container) {
    this.#dashboard = dashboard;
    this.#container = container;
    this.#element = DomUtility.stringToHTML(html);
    this.#weatherForm = new WeatherForm(this.#element);
    this.#degreeUnitToggle = this.#createToggleSwitch();

    this.#bindEvents();
    this.render();

    EventBus.on("updatePreferredUnit", () =>
      this.#degreeUnitToggle.setLabelText(
        `°${localStorage.getItem("userPrefferedUnit").toUpperCase()}`,
      ),
    );
  }

  #createToggleSwitch() {
    const preferredUnit = localStorage.getItem("userPrefferedUnit");

    const preferredUnitLabel =
      preferredUnit === null
        ? `°C`
        : `°${localStorage.getItem("userPrefferedUnit").toUpperCase()}`;

    const toggle = new ToggleSwitch(this.#element, preferredUnitLabel);
    if (preferredUnit === "c") toggle.check();

    return toggle;
  }

  #bindEvents() {
    this.#degreeUnitToggle
      .getElement()
      .querySelector("input")
      .addEventListener("click", () => this.#handleUnitToggleClick());
  }

  #handleUnitToggleClick() {
    localStorage.getItem("userPrefferedUnit") === "c"
      ? localStorage.setItem("userPrefferedUnit", "f")
      : localStorage.setItem("userPrefferedUnit", "c");

    EventBus.emit("updatePreferredUnit");
  }

  render() {
    this.#container.appendChild(this.#element);
  }
}
