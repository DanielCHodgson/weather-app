export default class WeatherDataService {
  #weatherAPI;

  constructor(weatherAPI) {
    this.#weatherAPI = weatherAPI;

    const locationDataRaw = localStorage.getItem("userLocation");
    if (!locationDataRaw) {
      console.warn("No user location found.");
      return;
    }

    const locationData = JSON.parse(locationDataRaw);
    if (!locationData?.latitude || !locationData?.longitude) {
      console.warn("Invalid location data.");
      return;
    }

    this.setData(`${locationData.latitude},${locationData.longitude}`);
  }

  setData(location) {
    return this.#weatherAPI
      .getWeatherData(location)
      .then((data) => {
        localStorage.setItem("weatherData", JSON.stringify(data));
      })
      .catch((err) => console.error("Weather fetch error:", err));
  }

  getAllData() {
    try {
      const data = localStorage.getItem("weatherData");
      return data ? JSON.parse(data) : null;
    } catch (err) {
      console.error("Error parsing weatherData:", err);
      return null;
    }
  }

  getFortnightData() {
    return this.getAllData()?.days ?? null;
  }

  getDailyForecast() {
    return this.getAllData()?.currentConditions ?? null;
  }
}
