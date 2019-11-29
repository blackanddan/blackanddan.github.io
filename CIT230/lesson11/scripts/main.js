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


currentDay = (currentDate.getDay())+1;
var daysInputted = 0;
for( i=1; currentDay <= 6; i++){
        var nameOfDay= daysOfWeek[currentDay++];
        var c = String(i);
        document.getElementById("day"+ c).innerHTML = nameOfDay;
        daysInputted++;
    }
    var remaniderDays = 5 - daysInputted;  
   currentDay = 0;
    while (remaniderDays > 0) {
        weekDay = daysOfWeek[currentDay]
        var c = String(++daysInputted);
        document.getElementById("day"+ c).innerHTML = weekDay; 
        currentDay++;
        remaniderDays--;
    }
 



//show/hide pancake

if(weekDayNumber === 5){
    document.getElementById("pancake").removeAttribute("class",'hidden');
}
WebFont.load({google: {families: ['Anton', 'Rubik']}});
