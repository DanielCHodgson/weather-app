export default class weatherAPI {
  #apiKey;

  constructor() {
    this.#apiKey = 'G68GFGKVW4WNQHG4WESJWAUKV';
  }

  async getWeatherDataForLocation(location) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${this.#apiKey}`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    console.log(weatherData);
  }
}
