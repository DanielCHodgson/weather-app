import WeatherAPI from "./services/WeatherAPI";
import WeatherDashboard from "./components/weather-dashboard/weather-dashboard";
import Header from "./components/header/header";
import "./styles/reset-modern.css";
import "./styles/styles.css";
import GeolocationAPI from "./services/LocationService";

await GeolocationAPI.fetchLocation();
const api = new WeatherAPI();
const dashboard = new WeatherDashboard(document.querySelector(".content"), api);
new Header(dashboard, document.querySelector(".header"));
