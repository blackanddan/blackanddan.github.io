//function getWeather(cityId){

//};

const apiWeatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=7562150fca9c12449c8bcc7aa39839fd&units=imperial";

fetch(apiWeatherURL)
    .then(
        (response) => {
            response.json()
        }
        )
    .then(
        (currentWeather) => {

//Wind Chill Calculation//

let currentTemp = currentWeather.main.temp;
let windSpeed = currentWeather.wind.speed;
let highTemp = currentWeather.main.temp_max;
let currently = currentWeather.weather[0].main;
let humility = currentWeather.main.humidity;
let windChill = 0;


if(currentTemp < 50 && windSpeed > 3){
    windChill = 35.74 + 0.6215 * currentTemp - 35.75 * 
    Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
}

document.getElementById("currentTemp").innerHTML =
  Math.ceil(currentTemp) + "&degF";
document.getElementById("highTemp").innerHTML =
  Math.ceil(highTemp) + "&degF";
document.getElementById("windSpeed").innerHTML = windSpeed + " mph";
document.getElementById("currently").innerHTML = currenly;
document.getElementById("humility").innerHTML = humility + "%";

if (windChill === 0){
    document.getElementById("windChill").innerHTML = 'N/A';
}
else{
    document.getElementById("windChill").innerHTML = Math.round(windChill) + "&deg;F";
}
        });
