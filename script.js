// Находим элементы на странице
const modal = document.getElementById('terminalModal');
const closeBtn = document.getElementById('closeModalBtn');

// Список кнопок, которые должны открывать наш терминал
const openButtons = [
    document.getElementById('heroInitBtn'),
    document.getElementById('heroConnBtn'),
    document.getElementById('navTerminalBtn')
];

// Функция открытия окна
function openTerminal() {
    modal.classList.add('active');
}

// Функция закрытия окна
function closeModal() {
    modal.classList.remove('active');
}

// Навешиваем событие клика на каждую кнопку открытия
openButtons.forEach(button => {
    if (button) {
        button.addEventListener('click', openTerminal);
    }
});

// Навешиваем закрытие на крестик
closeBtn.addEventListener('click', closeModal);

// Закрывать окно, если кликнули по пустому месту вокруг терминала
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});