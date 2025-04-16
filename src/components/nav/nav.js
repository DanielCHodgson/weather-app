import  './nav.css';

export default class Nav {
  #container;

  constructor(container) {
    this.#container = container;
    this.#loadHTML();
  }

  async #loadHTML() {
    const res = await fetch('components/nav/nav.html?cacheBust=' + Date.now());
    this.#container.innerHTML = await res.text();
  }
}
