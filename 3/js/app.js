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
                // On récupère les données de l'api et on les affiches

                // Nom de la ville
                document.querySelector('#general').innerHTML = data.name + ' : ' + '<br/>' + capitalize(data.weather[0].description);
                // Température de la ville
                document.querySelector('#temp').innerHTML =
                  "<i class='fas fa-thermometer-half'></i>" + 'Température : '  + '<br/>' +  + data.main.temp + ' °C';
                // Vent de la ville
                document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + 'Vent : '  + '<br/>' + data.wind.speed + ' km/h';
                // Humidité de la ville
                document.querySelector('#humidity').innerHTML =
                  "<i class='fas fa-tint'></i>" + 'Humidité : '  + '<br/>' +  + data.main.humidity + ' %';
                // Ciel de la ville
                  document.getElementById('img').setAttribute('src',"http://openweathermap.org/img/wn/" + data.weather[0].icon + '@2x.png');
                // Option
                // Pression de la ville
                document.querySelector('#pressure').innerHTML =
                  "<i class='fas fa-thermometer-full'></i>" + 'Pression : '  + '<br/>' + (data.main.pressure)/1000 + ' bar';
                // Lever de soleil de la ville
                let sunriseDate = new Date(data.sys.sunrise*1000);
                let sunriseLocale = sunriseDate.toLocaleString('fr-FR',{
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'});
                document.querySelector('#sunrise').innerHTML =
                    "<i class='fas fa-sun'></i>" + "Lever du soleil : "  + '<br/>' + sunriseLocale;
                // Coucher de soleil de la ville
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

// On écoute l'évenement sur la soumission du formulaire
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apiCall(ville);
});

// On récupère les id des boutons pour afficher ou cacher des paramètres optionnels
var btn_pressure = document.getElementById("pression");
var btn_sunrise = document.getElementById("leverSoleil");
var btn_sunset = document.getElementById("coucherSoleil");

// On récupère les div contenant les paramètres optionnels
var div_pressure = document.getElementById("pressure");
var div_sunrise = document.getElementById("sunrise");
var div_sunset = document.getElementById("sunset");

// Fonction qui permet de cacher ou d'afficher un des paramètres optionnels
function showHide (button, div) {
  button.addEventListener("click", () => {
    if(getComputedStyle(div).display != "none"){
      div.style.display = "none";
    } else {
      div.style.display = "flex";
    }
  })
}

// Appel à la fonction showHide sur les paramètres optionnels
showHide(btn_pressure, div_pressure);
showHide(btn_sunrise, div_sunrise);
showHide(btn_sunset, div_sunset);

//  On appel par défaut au chargement de la page
apiCall('Marseille');
