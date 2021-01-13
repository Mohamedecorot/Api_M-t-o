const APIKEY = '94c6cf0868fa5cb930a5e2d71baf0dbf';
const weatherIcons = {
  "Rain": "wi wi-day-rain",
  "Clouds": "wi wi-day-cloudy",
  "Clear": "wi wi-day-sunny",
  "Snow": "wi wi-day-snow",
  "mist": "wi wi-day-fog",
  "Drizzle": "wi wi-day-sleet",
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// fonction d'appel à l'API OpenWeather
let apiCall = function(city) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city},fr&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
        .then((response) =>
            response.json().then((data) => {
                console.log(data);
                //document.querySelector('#city').innerHTML = data.name;
                document.querySelector('#general').innerHTML = data.name + ' : ' + '<br/>' + capitalize(data.weather[0].description);
                document.querySelector('#temp').innerHTML =
                  "<i class='fas fa-thermometer-half'></i>" + 'Température : '  + '<br/>' +  + data.main.temp + ' °C';
                // document.querySelector('#sky').innerHTML =
                //   "<i class='fas fa-wind'></i>" + data.weather[0].description;
                document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + 'Vent : '  + '<br/>' + data.wind.speed + ' km/h';
                document.querySelector('#humidity').innerHTML =
                  "<i class='fas fa-tint'></i>" + 'Humidité : '  + '<br/>' +  + data.main.humidity + ' %';
                document.getElementById('img').setAttribute('src',"http://openweathermap.org/img/wn/" + data.weather[0].icon + '@2x.png');
                //optionnal
                document.querySelector('#pressure').innerHTML =
                  "<i class='fas fa-thermometer-full'></i>" + 'Pression : '  + '<br/>' + (data.main.pressure)/1000 + ' bar';

                let sunriseDate = new Date(data.sys.sunrise*1000);
                let sunriseLocale = sunriseDate.toLocaleString('fr-FR',{
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'});
                document.querySelector('#sunrise').innerHTML =
                    "<i class='fas fa-sun'></i>" + "Lever du soleil : "  + '<br/>' + sunriseLocale;

                let sunsetDate = new Date(data.sys.sunset*1000);
                let sunsetLocale = sunsetDate.toLocaleString('fr-FR',{
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'});
                document.querySelector('#sunset').innerHTML =
                  "<i class='far fa-moon'></i>" + 'Coucher du soleil : '  + '<br/>' + sunsetLocale;
        })
    )
    .catch((err) => console.log('Erreur : ' + err));
}

// Ecouteur d'évenement sur la soumission du formulaire
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apiCall(ville);
});

//  Appel par défaut au chargement de la page
apiCall('Marseille');
