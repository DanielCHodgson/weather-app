import { weatherIconSvgs } from '../res/weather-icons-animated/weather-icon-svgs.js';

export default class WeatherIconPicker {
  static getIcon(datetime, cloudCover, precip) {
    const hour = new Date(datetime).getHours();
    const isNight = hour < 6 || hour > 18;

    let condition = "";

    if (precip > 0) {
      return weatherIconSvgs[this.determineRainIcon(precip)] || "";
    } else if (cloudCover > 0.6) {
      return weatherIconSvgs[this.determineCloudIcon(cloudCover)] || "";
    } else {
      condition = isNight ? "night" : "day";
    }

    return weatherIconSvgs[condition] || "";
  }

  static determineRainIcon(precip) {
    if (precip > 0 && precip < 20) return "rainy4";
    if (precip < 40) return "rainy5";
    if (precip < 60) return "rainy6";
    return "rainy7";
  }

  static determineCloudIcon(cloudCover) {
    if (cloudCover >= 25 && cloudCover <= 50) return "cloudyDay3";
    return "cloudy";
  }
}
