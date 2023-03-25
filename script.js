const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

/*
hamburger.addEventListener("click", () => {
    alert("TEST ALERT");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
*/

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


var trump = 0;
var hillary = 0;
var one = 0;
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;
var seven = 0;
var eight = 0;
var nine = 0;

function refreshResults () {
    var results = document.getElementById('results');
    results.innerHTML = 'total: ' + (one + two + three + four + five + six + seven + eight + nine);
    results.innerHTML += '<br />1: ' + one;
    results.innerHTML += '<br />2: ' + two;
    results.innerHTML += '<br />3: ' + three;
    results.innerHTML += '<br />4: ' + four;
    results.innerHTML += '<br />5: ' + five;
    results.innerHTML += '<br />6: ' + six;
    results.innerHTML += '<br />7: ' + seven;
    results.innerHTML += '<br />8: ' + eight;
    results.innerHTML += '<br />9: ' + nine;
}

document.getElementById('one-button').addEventListener('click', function () {
    one++;
    refreshResults();
});

document.getElementById('two-button').addEventListener('click', function () {
    two++;
    refreshResults();
});

document.getElementById('three-button').addEventListener('click', function () {
    three++;
    refreshResults();
});

document.getElementById('four-button').addEventListener('click', function () {
    four++;
    refreshResults();
});

document.getElementById('five-button').addEventListener('click', function () {
    five++;
    refreshResults();
});

document.getElementById('six-button').addEventListener('click', function () {
    six++;
    refreshResults();
});

document.getElementById('seven-button').addEventListener('click', function () {
    seven++;
    refreshResults();
});

document.getElementById('eight-button').addEventListener('click', function () {
    eight++;
    refreshResults();
});

document.getElementById('nine-button').addEventListener('click', function () {
    nine++;
    refreshResults();
});