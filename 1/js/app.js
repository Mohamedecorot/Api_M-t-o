const APIKEY = '94c6cf0868fa5cb930a5e2d71baf0dbf';

var url = `https://api.openweathermap.org/data/2.5/weather?q=Marseille,fr&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) =>
response.json.then((data) =>
console.log(data)));