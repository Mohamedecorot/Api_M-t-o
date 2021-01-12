const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-sunny",
    "Snow": "wi wi-day-snow",
    "mist": "wi wi-day-fog",
    "Drizzle": "wi wi-day-sleet",
}

function capitalize(str) {
    return str[0].tuUpperCase() + str.slice(1);
}

const APIKEY = '94c6cf0868fa5cb930a5e2d71baf0dbf';

async function main(withIp = true) {
    var ville;

    if(withIp) {
        // Trouver l'adress Ip de l'utilisateur
        const ip = await fetch('https://api.ipify.org?format=json')
                            .then(resultat => resultat.json())
                            .then(json => json.ip);
        console.log(ip);

        // Trouver la ville de l'utilisateur
        ville = await fetch('https://freegeoip.live/json/' + ip)
                            .then(resultat => resultat.json())
                            .then(json => json.city);
        console.log(ville);

    } else {
        //ville = document.querySelector('#ville').textContent;
    }

    // Trouver la météo de l'utilisateur
    const meteo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville},fr&appid=${APIKEY}&units=metric&lang=fr`)
                            .then(resultat => resultat.json())
                            .then(json => json.city);
    console.log(meteo);

}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=marseille,fr&appid=94c6cf0868fa5cb930a5e2d71baf0dbf&units=metric&lang=fr`).then(resultat =>
    resultat.json().then(json => console.log(json)));
main();