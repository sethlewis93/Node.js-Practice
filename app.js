//Connect
//Read
//Parse
//Print

const https = require("https");
const apiKey = "d7ab0017bca5bf3dfb4318dc4b94f913";

function getLocation(city, key) {
  const message = `${city}'s current weather report: ${key}`;
}

https.get(
  `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
  (res) => {
    let body;
    res.on("data", (d) => {
      body += d.toString();
      console.log(body);
    });

    // res.on('end', () => {
    //   const weather = JSON.parse(body)
    //   getLocation()

    // })
  }
);
