const apiKey = "a4de96eb4c9cdd8c0998596fbb5ae04d";
let cityID = document.getElementById("cityID").value;
const unit = "imperial";

const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=${unit}&appid=${apiKey}`;

fetch(apiWeatherURL)
    .then(
        (response) => response.json()
    )
    .then(
        (currentWeather) => {
            let current = currentWeather
            let currentTemp = currentWeather.main.temp;
            let windSpeed = currentWeather.wind.speed;
            let humidity = currentWeather.main.humidity;
            let windChill;

            if (currentTemp < 50 && windSpeed > 3) {
                windChill = 35.74 + (0.6215 * currentTemp) - (35.75 * Math.pow(windSpeed, .16)) + (0.4275 * currentTemp * Math.pow(windSpeed, .16));
            } 
            document.getElementById("currentTemp").innerHTML = currentTemp + '&deg;';
            document.getElementById("windSpeed").innerHTML = windSpeed + ' MPH';
            document.getElementById("humidity").innerHTML = humidity + '%';


            if (windChill === 0) {
                document.getElementById("windChill").innerHTML = 'N/A';
            } else {
                document.getElementById("windChill").innerHTML = Math.round(windChill) + '&deg;';
            }
        }
    );