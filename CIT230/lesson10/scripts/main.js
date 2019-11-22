var currentDate = new Date();
var currentDateString;


// get dat of week
var weekDayNumber = currentDate.getDay();

var daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var weekDay = daysOfWeek[weekDayNumber];

currentDateString = weekDay + ', ';

currentDateString += currentDate.getDate();

var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'

];

var monthNumber = currentDate.getMonth();

var month = months[monthNumber];

currentDateString += ' ' + month;

currentDateString += ' ' + currentDate.getFullYear();

document.getElementById("currentDate").innerHTML = currentDateString;

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

//create 5 day forcast//
let currentDay = weekDayNumber;

for(let i = 1; i < 6; i++){
    //add one day to current day
    currentDay++;

    //if current day is greater than 6(Saturday), reset it to 0
    if (currentDay > 6){
        currentDay = 0;
    }
    //assign value to placeholder in HTML
    const element = document.getElementById(`day${i}`);

    element.innerHTML = daysOfWeek[currentDay];
}


const apiForecastURL = 'api.openweathermap.org/data/2.5/forecast?id=5604473&appid=7562150fca9c12449c8bcc7aa39839fd&%units=imperial'

fetch(apiForecastURL)
    .then(
        (response) => {
            response.json()
        }
        )
    .then(
        (forecasts) => {
            console.log(currentWeather);

            let tomorrowDate = new Date();
            tomorrow.setDate(tomorrowDate.getDate() + 1);


            let dateString = 
                    // get full year
                    tomorrowDate.getFullYear() + '-' +
                    // get month
                    (tomorrowDate.getMonth() + 1) + '-' +
                    // get day
                    tomorrowDate.getDate();
                    // DEBUG:
                    console.log(dateString);

            let hourString = '18:00:00';

            let counter = 1;

            //loop through results
            forecasts.list.forEach(
                (forecast) => {
                    if (forecast,dt_txt.includes(dateString) &&
                    forecast.gt_txt.includes(hourString)){
                        console.log(forecast.main.temp);
                    }
                }
            );
        }
    );

//show/hide pancake

if(weekDayNumber === 5){
    document.getElementById("pancake").removeAttribute("class",'hidden');
}
WebFont.load({google: {families: ['Anton', 'Rubik']}});
