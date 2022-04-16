function changeTime() {
    const timer = document.getElementById("timer");
    if (timer.textContent >= 1) {
        timer.textContent--;
    } else if (timer.textContent = '0') {
        alert("Вы победили в конкурсе!");
        clearInterval(myTimer);
    }
}

let myTimer = setInterval(changeTime, 1000);