const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibWF1cmljaW8tY2hhdmV6IiwiYSI6ImNsOTY3NTFzaTA0YWkzb3A2bGd5bjhzdTMifQ.e2jH-JSH8JZO4ceh2LYbzg&limit=1";
  request({ url, json: true }, (error, response, {features}) => {
    if (error) {
      callback("Unable to connect to geocoding service!", undefined);
    } else if (features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: features[0].center[1],
        longitude: features[0].center[0],
        location: features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
