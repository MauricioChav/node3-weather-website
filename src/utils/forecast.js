const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=f56e3ef51b30629c9b6c0db5725dde97&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (mainError, response, { current, error }) => {
    if (mainError) {
      callback("Unable to connect to weather service!", undefined);
    } else if (error) {
      callback("Unable to find location. Try the coordinates again", undefined);
    } else {
      callback(
        undefined,
        current.weather_descriptions[0] +
          ". It is currently " +
          current.temperature +
          " degrees out. It feels like " +
          current.feelslike +
          " degrees out. The humidity is " +
          current.humidity +
          "% and the wind speed is " +
          current.wind_speed +
          " km/hr."
      );
    }
  });
};

module.exports = forecast;
