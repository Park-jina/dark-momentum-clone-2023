const dDay = document.querySelector("#d-day");




function dDayTime() {
    const christmas = new Date(2023,11,25,0,0,0);
    const today = new Date();   

    const dDayCh = christmas - today;

    const dDaySeceond = String(Math.floor(dDayCh/1000%60)).padStart(2,"0");
    const dDayMinutes = String(Math.floor((dDayCh/(1000*60))%60)).padStart(2,"0");
    const dDayhours = String(Math.floor((dDayCh/(1000*60*60))%24)).padStart(2,"0");
    const dDayDate = Math.floor(dDayCh/(1000*60*60*24));

    dDay.innerText = `${dDayDate}d ${dDayhours}h ${dDayMinutes}m ${dDaySeceond}s`;
}



dDayTime();

setInterval(dDayTime, 1000);



/*html
<h1>Time Until Christmas Eve</h1>
<h3 id="d-day"> d h m s</h3>
*/
