//function getWeather(cityId){

//};

const apiWeatherURL = 'api.openweathermap.org/data/2.5/weather?id=5604473&appid=&%units=imperial'

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
let windChill;


if(currentTemp < 50 && windSpeed > 3){
    windChill = 35.74 + 0.6215 * currentTemp - 35.75 * 
    Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
}

document.getElementById("currentTemp").innerHTML = currentTemp + "&deg;F";
document.getElementById("windSpeed").innerHTML = windSpeed + "mph";

if (windChill === 0){
    document.getElementById("windChill").innerHTML = 'N/A';
}
else{
    document.getElementById("windChill").innerHTML = Math.round(windChill) + "&deg;F";
}
        });
