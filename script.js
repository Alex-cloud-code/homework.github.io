const popup = document.querySelector('.popup');
const button = document.querySelector('.button');

button.addEventListener('click', function (e) {
    button.textContent = popup.classList.contains("visible") ? `Войти` : `Закрыть`;
    popup.classList.toggle('visible');
});

const enterButton = document.querySelector('.popup_button');

enterButton.addEventListener('click', function (e) {
    button.textContent = popup.classList.contains("visible") ? `Войти` : `Закрыть`;
    popup.classList.remove('visible');
});

const enterClose = document.querySelector('.close');

enterClose.addEventListener('click', function (e) {
    button.textContent = popup.classList.contains("visible") ? `Войти` : `Закрыть`;
    popup.classList.remove('visible');
});

const navigateHidebutton = document.querySelector('.navigate_hide_button');
const navigateHide = document.querySelector('.navigate_hide');

navigateHidebutton.addEventListener('click', function (e) {
    navigateHide.classList.toggle('visible_mobile');
});

const studentSmith = document.querySelector('.student__smith');
const studentRoll1 = document.querySelector('.student__roll1');

studentRoll1.addEventListener('click', function (e) {
    studentSmith.classList.toggle('visible_student');
    studentRoll1.classList.toggle('invisible_student');
});

studentSmith.addEventListener('click', function (e) {
    studentSmith.classList.toggle('visible_student');
    studentRoll1.classList.toggle('invisible_student');
});

const studentDjohn = document.querySelector('.student__djohn');
const studentRoll2 = document.querySelector('.student__roll2');

studentRoll2.addEventListener('click', function (e) {
    studentDjohn.classList.toggle('visible_student');
    studentRoll2.classList.toggle('invisible_student');
});

studentDjohn.addEventListener('click', function (e) {
    studentDjohn.classList.toggle('visible_student');
    studentRoll2.classList.toggle('invisible_student');
});

const studentTomm = document.querySelector('.student__tomm');
const studentRoll3 = document.querySelector('.student__roll3');

studentRoll3.addEventListener('click', function (e) {
    studentTomm.classList.toggle('visible_student');
    studentRoll3.classList.toggle('invisible_student');
});

studentTomm.addEventListener('click', function (e) {
    studentTomm.classList.toggle('visible_student');
    studentRoll3.classList.toggle('invisible_student');
});

const studentLeo = document.querySelector('.student__leo');
const studentRoll4 = document.querySelector('.student__roll4');

studentRoll4.addEventListener('click', function (e) {
    studentLeo.classList.toggle('visible_student');
    studentRoll4.classList.toggle('invisible_student');
});

studentLeo.addEventListener('click', function (e) {
    studentLeo.classList.toggle('visible_student');
    studentRoll4.classList.toggle('invisible_student');
});

const studentRobert = document.querySelector('.student__robert');
const studentRoll5 = document.querySelector('.student__roll5');

studentRoll5.addEventListener('click', function (e) {
    studentRobert.classList.toggle('visible_student');
    studentRoll5.classList.toggle('invisible_student');
});

studentRobert.addEventListener('click', function (e) {
    studentRobert.classList.toggle('visible_student');
    studentRoll5.classList.toggle('invisible_student');
});