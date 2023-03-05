const realTime = document.querySelector("#real-time");


function handleClock() {
    const date = new Date();
    
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2,"0");

    realTime.innerText = `${hours}:${minutes}`;

}


handleClock()
setInterval(handleClock,1000);