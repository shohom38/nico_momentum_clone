const clockContainer = document.querySelector(".js-clock");
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const set = hours - 12;
    const am = "AM";
    const pm = "PM";
    clockTitle.innerText = `${
        hours <= 12 ? `${am}` : `${pm}`} ${hours < 10 ? `0${hours}` : hours > 12 ? `${set}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    
}


function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();

