const api = {
   key: "fd693284847e8c9b51cf211c825cafe5",
   baseurl: "https://api.openweathermap.org/data/2.5/",

}
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.keycode == 13) {
        getResults(searchbox.value);
}
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metrics&APPID=${api.key}`)
    .then (weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
    let city =document.querySelector('.location .city');
    city.innerText =   `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>℃</span>`;


    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather [0].main

    let hilow = documment.querySelector('.hi-low');
    hi-low.innerText = `${weather.main.temp_min}℃ / ${weather.main.temp_max}℃`;

} 

function dateBuilder (d) {
    let months = ["January", "Febuary", "March", "April", "May", "June", 
    "July", "August", "september", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonths()];
    let year = d.getFullYear();

    return `${date} ${month} ${year}`;
}