var years = document.getElementById("years");
var months = document.getElementById("months");
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
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
