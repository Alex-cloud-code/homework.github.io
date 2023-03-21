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