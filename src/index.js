import WeatherDashboard from "./components/weather-dashboard/weather-dashboard";
import Nav from "./components/nav/nav";
import "./styles/reset-modern.css";
import "./styles/styles.css";


new Nav(document.querySelector(".header"));
new WeatherDashboard(document.querySelector(".content"));