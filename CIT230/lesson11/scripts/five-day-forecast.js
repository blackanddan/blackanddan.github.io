
// var todayString;
// const today = new Date();
// var weekDayDate = today.getDay();
//get name of the day
var daysOfWeek = [
"Sunday", 
"Monday", 
"Tuesday", 
"Wednesday", 
"Thursday", 
"Friday", 
"Saturday"];

// var weekDay = daysOfWeek[weekDayDate];

// todayString = weekDay + ", ";

// //__________________________________________________________________________________________________ 
// // create 5 day forecast
// let currentDay = weekDayDate;

// for (let i = 1; i < 6; i++) {
//     currentDay++;

//     if (currentDay > 6) {
//         currentDay = 0;
//     }

//     const element = document.getElementById(`day${i}`);

// }
const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast/?id=5604473&appid=a4de96eb4c9cdd8c0998596fbb5ae04d&units=imperial';

fetch(apiForecastURL)
    .then(
        (response) => response.json()
    )
    .then(
        (forecasts) => {
            // let tomorrowDate = new Date();
            // tomorrowDate.setDate(tomorrowDate.getDate() + 1);
            // let dateString = getDateString(tomorrowDate);
            let hourString = "18:00:00";
            let counter = 1;

            //loop through results
            forecasts.list.forEach(
                (forecast) => {

                    if (forecast.dt_txt.includes(hourString)) {

                        // add temp  of week
                        const tempElement = document.getElementById(`temp${counter}`);
                        tempElement.innerHTML = forecast.main.temp + '&deg';

                        // add day of the week
                        let nextDate = new Date(forecast.dt_txt)
                        
                        const dayElement = document.getElementById(`day${counter}`);
                        dayElement.innerHTML = daysOfWeek[nextDate.getDate()];

                        //add image
                    

                    
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