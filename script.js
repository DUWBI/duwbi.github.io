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
    if(backgroundVal == 3) {
        document.body.style.backgroundImage = "url('https://i1.sndcdn.com/artworks-sxpwdOSrkSzysVzx-rhQcaA-t500x500.jpg')";
    }
    if(backgroundVal == 4) {
        document.body.style.backgroundImage = "url('https://c.tenor.com/Uyw54N0sldkAAAAM/explode-heart-heart-fading.gif')";
    }
    if(backgroundVal == 5) {
        document.body.style.backgroundImage = "url('https://ichef.bbci.co.uk/news/976/cpsprodpb/140B3/production/_111699028_gettyimages-1168451046.jpg')";
    }
    if(backgroundVal == 6) {
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/ac/2a/ab/ac2aab4b58cd4472edcfd62bd4618177.gif')";
    }
    if(backgroundVal == 7) {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1564415900645-30612d54dd0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFuZ2VyaW5lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')";
    }
    backgroundVal++;
    if(backgroundVal == 8) {
        backgroundVal = 1;
    }
}

document.body.addEventListener("click", changeBackground);
