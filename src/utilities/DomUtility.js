const iconContext = require.context('../res/weather-icons/animated', false, /\.svg$/);

export default class DomUtility {
  static stringToHTML(string) {
    if (typeof string !== "string" || string.trim() === "") {
      throw new Error("loadHTML: Input must be a non-empty HTML string.");
    }

    const temp = document.createElement("div");
    temp.innerHTML = string.trim();

    const element = temp.firstElementChild;

    if (!element) {
      throw new Error(
        "loadHTML: Failed to convert HTML string to a DOM element.",
      );
    }

    return element;
  }

  static renderSvg(svgString) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = svgString;
    return tempDiv.firstChild;
  }

  static loadAnimatedWeatherIcon(name) {
    const filename = `./${name}.svg`;

  
    if (!iconContext.keys().includes(filename)) {
      throw new Error(`Icon "${name}" not found in assets/icons.`);
    }

    const iconSrc = iconContext(filename);
    const img = document.createElement("img");
    img.src = iconSrc;
    return img;
  }

}

