import WeatherAPI from "./services/WeatherAPI";
import WeatherDashboard from "./components/weather-dashboard/weather-dashboard";
import Header from "./components/header/header";
import "./styles/reset-modern.css";
import "./styles/styles.css";
import GeolocationAPI from "./services/LocationService";
import WeatherDataService from "./services/WeatherDataService";

(async () => {
  const data = await GeolocationAPI.fetchLocation();
  GeolocationAPI.saveLocation(data);

  const weatherAPI = new WeatherAPI();
  const weatherDataService = new WeatherDataService(weatherAPI);
  const dashboard = new WeatherDashboard(
    document.querySelector(".content"),
    weatherDataService,
  );
  new Header(dashboard, document.querySelector(".header"));
})();
