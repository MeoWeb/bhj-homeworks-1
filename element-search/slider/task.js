const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");

let index = 0;

// ставим класс актив картинке
const activeSlide = (n) => {
    for (slider of sliders) {
        slider.classList.remove("slider__item_active");
    }
    sliders[n].classList.add("slider__item_active");
};

// ставим класс актив кружочку
const activeDot = (n) => {
    for (dot of dots) {
        dot.classList.remove("slider__dot_active");
    }
    dots[n].classList.add("slider__dot_active");
};


const prepareCurrentSlide = (ind) => {
    activeSlide(ind);
    activeDot(ind);
};

// вправо листаем
const nextSlide = () => {
    if (index == sliders.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

// влево листаем
const prevSlide = () => {
    if (index == 0) {
        index = sliders.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
};

// кружочки
dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

// вешаем клики на стрелки
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
