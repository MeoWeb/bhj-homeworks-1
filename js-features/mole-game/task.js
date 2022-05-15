const clicked = document.getElementsByClassName('hole_has-mole');
const holes = document.querySelectorAll('.hole');

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function handleClick() {
    console.log("click");

    if (this.classList.contains('hole_has-mole')) {
        dead.textContent++;
    } else {
        lost.textContent++;
    }

    if (lost.textContent >= 5) {
        alert("Проигрыш")
        lost.textContent = 0;
        dead.textContent = 0;
    } else if (dead.textContent >= 10) {
        alert("Победа");
        lost.textContent = 0;
        dead.textContent = 0;
    }

}

holes.forEach((hole) => {
    hole.addEventListener("click", handleClick);
});