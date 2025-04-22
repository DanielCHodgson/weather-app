import html from "./weather-form.html";
import "./weather-form.css";
import FormValidator from "../../services/FormValidator";

export default class WeatherForm {
  #container;
  #element;
  #fields;
  #submit;

  constructor(container) {
    this.#container = container;
    this.#container.innerHTML = html;
    this.#element = this.#container;
    this.#fields = this.#cacheFields();
    this.#submit = this.#element.querySelector("#submit");
    this.#bindEvents();
  }

  #cacheFields() {
    return {
      country: this.#element.querySelector("#country"),
      postcode: this.#element.querySelector("#postcode"),
    };
  }

  #bindEvents() {
    this.#fields.country.addEventListener("input", () => {
      FormValidator.validateCountry(this.#fields.country);
    });

    /*
    this.#fields.postcode.addEventListener("input", () => {
      FormValidator.validatePostcode(
        this.#fields.postcode,
        this.#fields.country.value,
      );
    });
    */
    this.#element.addEventListener("submit", (event) =>
      this.#handleSubmit(event),
    );
  }

  #handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting form...");

    const allValid = FormValidator.validateCountry(this.#fields.country);

    /*
      FormValidator.validatePostcode(
        this.#fields.postcode,
        this.#fields.country.value,
      );
    */
    if (allValid) {
      console.log("High five!");
    } else {
      console.log("Invalid fields!");
    }
  }
}
