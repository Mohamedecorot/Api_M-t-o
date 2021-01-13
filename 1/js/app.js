const APIKEY = '94c6cf0868fa5cb930a5e2d71baf0dbf';


// fonction d'appel à l'API OpenWeather
let apiCall = function(city) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city},fr&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
        .then((response) =>
            response.json().then((data) => {
                console.log(data);
                document.querySelector('#city').innerHTML = data.name;
                document.querySelector('#temp').innerHTML =
                  "<i class='fas fa-thermometer-half'></i>" + data.main.temp + ' °C';
                document.querySelector('#humidity').innerHTML =
                  "<i class='fas fa-tint'></i>" + data.main.humidity + ' %';
                document.querySelector('#wind').innerHTML =
                  "<i class='fas fa-wind'></i>" + data.wind.speed + ' km/h';
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
