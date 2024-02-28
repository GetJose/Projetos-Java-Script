let currentDate = new Date();
let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let monthOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let dayOfMonth = currentDate.getDate();
let dayOfWeek = daysOfWeek[currentDate.getDay()];
let month = monthOfYear[currentDate.getMonth()];
let year = currentDate.getFullYear();
let day = currentDate.getDay();
let hour = currentDate.getHours();
let minute = String(currentDate.getMinutes()).padStart(2, '0');

function updateClock() {
    let clockText = `${dayOfWeek} ${dayOfMonth} ${month} ${year}`
    document.querySelector('.date').innerText = clockText;
    let time = `${hour}:${minute}`
    document.querySelector('.time').innerText = time;
}


setInterval(updateClock, 1000);
updateClock();