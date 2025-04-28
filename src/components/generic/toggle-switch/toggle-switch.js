import htmlString from "./toggle-switch.html";
import "./toggle-switch.css";
import DomUtility from "../../../utilities/DomUtility";

export default class ToggleSwitch {
  #container;
  #element;
  #label;

  constructor(container, label) {
    this.#container = container;
    this.#label = label;
    this.#element = DomUtility.stringToHTML(htmlString);

    this.render();
  }

  render() {
    const labelElement = this.#element.querySelector(".switch-label");

    if (labelElement) {
      if (typeof this.#label !== "undefined" && this.#label !== null) {
        labelElement.textContent = this.#label;
        console.log(this.#label);
      } else {
        labelElement.remove();
      }
    }

    this.#container.appendChild(this.#element);
  }

  getElement() {
    return this.#element;
  }
}
