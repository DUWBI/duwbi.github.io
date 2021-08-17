var years = document.getElementById("years");
var months = document.getElementById("months");
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var backgroundVal = 1;
var goalDate = new Date("Dec 20, 2025 12:00:00").getTime();

let timer = setInterval(tick, 1000);

function tick() {
    let now = new Date().getTime();
    let dif = goalDate - now;
    years.innerText = Math.floor(dif / (1000 * 60 * 60 * 24 * 365.25));
    dif = dif % (1000 * 60 * 60 * 24 * 365);
    months.innerText = Math.floor(dif / (1000 * 60 * 60 * 24 * 30));
    dif = dif % (1000 * 60 * 60 * 24 * 30);
    days.innerText = Math.floor(dif / (1000 * 60 * 60 * 24));
    dif = dif % (1000 * 60 * 60 * 24);
    hours.innerText = Math.floor(dif / (1000 * 60 * 60));
    dif = dif % (1000 * 60 * 60);
    minutes.innerText = Math.floor(dif / (1000 * 60));
    dif = dif % (1000 * 60);
    seconds.innerText = Math.floor(dif / 1000);
}

function changeBackground() {
    if(backgroundVal == 1) {
        document.body.style.backgroundImage = "url('https://media4.giphy.com/media/xTcnT2ZYSaCTdkTSmI/giphy.gif')";
    }
    if(backgroundVal == 2) {
        document.body.style.backgroundImage = "url('https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg')";
    }
    backgroundVal++;
    if(backgroundVal == 3) {
        backgroundVal = 1;
    }
}

document.body.addEventListener("click", changeBackground);
