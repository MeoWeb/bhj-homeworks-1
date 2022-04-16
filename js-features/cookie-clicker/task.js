const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

let counter = 0;
cookie.addEventListener("click", function() {
    counter++;
    clickerCounter.textContent = counter;
    cookie.width = 300;
    setTimeout(backToNormalSize, 100);
})

const backToNormalSize = function() {
    cookie.width = 200;
}

cookie.onclick = function changeSizes() {
    cookie.width = 250;
    setTimeout(backToNormalSize, 1000);
}