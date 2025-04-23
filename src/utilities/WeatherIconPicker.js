const svgModules = import.meta.glob("../res/weather-icons-animated/*.svg", {
  as: "raw",
  eager: true,
});

const iconMap = {};

for (const path in svgModules) {
  const key = path.split("/").pop().replace(".svg", "");
  iconMap[key] = svgModules[path];
}

export default class WeatherIconPicker {
  static getIcon(datetime, cloudCover, precip, snow) {
    const hour = new Date(datetime).getHours();
    const isNight = hour < 6 || hour > 18;

    let condition = "";

    if (snow > 0) {
      condition = "snow";
    } else if (precip > 0) {
      condition = "rain";
    } else if (cloudCover > 0.6) {
      condition = "cloudy";
    } else {
      condition = isNight ? "night-clear" : "sunny";
    }

    return iconMap[condition] || "";
  }
}
