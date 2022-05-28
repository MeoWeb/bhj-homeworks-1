const elemMain = document.getElementById('modal_main');
elemMain.classList.add('modal_active');

const elemSuccess = document.getElementById('modal_success');


const btnClose = document.getElementsByClassName('modal__close_times');
const btnChange = document.getElementsByClassName('btn');

let arrClose = Array.from(btnClose);
let arrChange = Array.from(btnChange);

arrClose.forEach(function(btnClose) {
    btnClose.onclick = function() {
        elemMain.classList.remove('modal_active');
        elemSuccess.classList.toggle('modal_active');
        console.log(`hey, we're closed`);
    }
});

arrChange.forEach(function(btnChange) {
    btnChange.onclick = function() {
        elemMain.classList.remove('modal_active');
        elemSuccess.classList.toggle('modal_active');
        console.log('hey, change');
    }
});