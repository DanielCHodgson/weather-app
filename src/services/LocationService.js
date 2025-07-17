export default class GeolocationAPI {
  static getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  }

  static async fetchLocation() {
    try {
      const position = await this.getLocation();
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const locationData = {
        latitude,
        longitude,
        timestamp: new Date().toISOString(),
      };

      return locationData;
    } catch (error) {
      console.error("Error getting location:", error.message);
    }
  }

  static saveLocation(locationData) {
    localStorage.setItem("userLocation", JSON.stringify(locationData));
  }

  static getSavedLocation() {
    const savedLocation = localStorage.getItem("userLocation");
    return savedLocation ? JSON.parse(savedLocation) : null;
  }
}
