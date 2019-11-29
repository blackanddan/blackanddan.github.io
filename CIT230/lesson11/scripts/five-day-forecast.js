function getFiveDayForecast(cityId){
const today = new Date();
var weekDayDate = today.getDay();
//get name of the day
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var daysOfWeek = daysOfWeek[weekDayDate];



const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast/?id=' + cityId + '&appid=a4de96eb4c9cdd8c0998596fbb5ae04d&units=imperial';

fetch(apiForecastURL)
    .then(
        (response) => response.json()
    )
    .then(
        (forecasts) => {

            let hourString = "18:00:00";
            let counter = 1;

            //loop through results
            forecasts.list.forEach(
                (forecast) => {

                    if (forecast.dt_txt.includes(hourString)) {

                        //Add temp
                        const tempElement = document.getElementById(`temp${counter}`);
                        tempElement.innerHTML = forecast.main.temp_max + '&deg';
                        
                        //add image
                        const imageElement = document.getElementById(`img${counter}`);
                        imageElement.setAttribute('src', 'https://openweathermap.org/img/w/' +
                        forecast.weather[0].icon + '.png');
                        imageElement.setAttribute('alt', forecast.weather[0].main);

                        //increment variable
                        counter += 1;
                    }
                }
            )

        });


function getDateString(date) {

let dateString =
    //  find full year
    date.getFullYear() + "-" +
    //get month
    (date.getMonth() + 1) + "-" +
    //get day
    date.getDate();
    
    return dateString;
}
};