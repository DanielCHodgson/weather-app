import htmlString from "./toggle-switch.html";
import "./toggle-switch.css";
import DomUtility from "../../../utilities/DomUtility";

export default class ToggleSwitch {
  #container;
  #element;
  #label;
  #labelElement;

  constructor(container, label) {
    this.#container = container;
    this.#label = label;
    this.#element = DomUtility.stringToHTML(htmlString);
    this.#labelElement = this.#element.querySelector(".switch-label");

    this.render();
  }

  render() {
  
    if (this.#labelElement) {
      if (typeof this.#label !== "undefined" && this.#label !== null) {
        this.#labelElement.textContent = this.#label;
        console.log(this.#label);
      } else {
        this.#labelElement.remove();
      }
    }

    this.#container.appendChild(this.#element);
  }

  getElement() {
    return this.#element;
  }


  setLabelText(value) {
    this.#labelElement.textContent = value;
  }
}
