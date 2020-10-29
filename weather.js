//Connect
//Read
//Parse
//Print

const https = require("https");
const querystring = require("querystring");
const api = require("./api.json");

function printMessage(weather) {
  const message = `${weather.id}'s weather report: ${weather.temp} with ${weather.description}`;
  console.log(message);
}

function printError(error) {
  console.error(error.message);
}

function get(query) {
  const parameters = {
    APPID: api.key,
    units: "imperial",
  };

  const zipCode = parseInt(query);
  if (!isNaN(zipCode)) {
    parameters.zip = zipCode + ",us";
  } else {
    parameters.q = query + ",us";
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?${querystring.stringify(
    parameters
  )}`;
  console.log(url);

  const request = https.get(url, (response) => {
    let body = "";
    response.on("data", (chunk) => {
      body += chunk;
    });
    response.on("end", () => {
      const weather = JSON.parse(body);
      printMessage(weather);
    });
  });

  request.on("error", printError);
}

module.exports.get = get;
