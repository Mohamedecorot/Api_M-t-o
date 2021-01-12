const APIKEY = '94c6cf0868fa5cb930a5e2d71baf0dbf';

var url = `https://api.openweathermap.org/data/2.5/weather?q=Marseille,fr&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) =>
    response.json().then((data) => {
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML =
          "<i class='fas fa-thermometer-half'></i>" + data.main.temp + ' °C';
        document.querySelector('#humidity').innerHTML =
          "<i class='fas fa-tint'></i>" + data.main.humidity + ' %';
        document.querySelector('#wind').innerHTML =
          "<i class='fas fa-wind'></i>" + data.wind.speed + ' km/h';
    })
);