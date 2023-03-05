const APIKEY = "c8275e52e5f87f6973bdbdaba1726f50";


function loSuccess(event) {
    const lat = event.coords.latitude;
    const lon = event.coords.longitude;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    fetch(weatherUrl)
        .then((response)=> response.json())
        .then((data)=>{
            const location = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            location.innerText = data.name;
            weather.innerText = `/ ${data.weather[0].main} / ${data.main.temp_max}°C - ${data.main.temp_min}°C`;
        });
}


function lofail() {
    console.log("sorry");
}


navigator.geolocation.getCurrentPosition(loSuccess,lofail);