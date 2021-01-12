//     "Clear": "wi wi-day-sunny",
//     "Snow": "wi wi-day-snow",
//     "mist": "wi wi-day-fog",
//     "Drizzle": "wi wi-day-sleet",
// }

function capitalize(str) {
    return str[0].tuUpperCase() + str.slice(1);
}

const APIKEY = '94c6cf0868fa5cb930a5e2d71baf0dbf';
console.log("salut")
function main() {
    // Trouver l'adress Ip de l'utilisateur
    fetch('https://api.ipify.org?format=json')
        .then(resultat => resultat.json())
        .then(json => {
            const ip = json.ip;

            fetch('https://freegeoip.live/json/' + ip)
                .then(resultat => resultat.json())
                .then(json => {
                    const ville = json.city;

                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville},fr&appid=${APIKEY}&units=metric&lang=fr`)
                        .then(resultat => resultat.json())
                        .then(json => {
                            console.log(json);
            })
        })
    })
}





// fetch('https://api.ipify.org?format=json')
// .then(resultat => resultat.json())
// .then(json => {
//     console.log(json.ip);
// })

// fetch('https://freegeoip.live/json/' + "81.57.53.204")
// .then(resultat => resultat.json())
// .then(json => {
//     console.log(json.city);
// })

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=Marseille,fr&appid=${APIKEY}&units=metric&lang=fr`)
// .then(resultat => resultat.json())
// .then(json => {
//     console.log(json);
// })