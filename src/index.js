import WeatherDashboard from "./components/weather-dashboard/weather-dashboard";
import Nav from "./components/header/header";
import "./styles/reset-modern.css";
import "./styles/styles.css";


new Nav(document.querySelector(".header"));
new WeatherDashboard(document.querySelector(".content"));
