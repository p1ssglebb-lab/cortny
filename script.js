// --- 1. ЛОГИКА МОДАЛЬНОГО ОКНА ---
const modal = document.getElementById('terminalModal');
const closeBtn = document.getElementById('closeModalBtn');
const openButtons = [
    document.getElementById('heroInitBtn'),
    document.getElementById('heroConnBtn'),
    document.getElementById('navTerminalBtn')
];

function openTerminal() { modal.classList.add('active'); }
function closeModal() { modal.classList.remove('active'); }

openButtons.forEach(button => {
    if (button) button.addEventListener('click', openTerminal);
});
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });


// --- 2. ИЗМЕНЕНИЕ ШАПКИ ПРИ СКРОЛЛЕ ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// --- 3. АНИМАЦИЯ ПОЯВЛЕНИЯ БЛОКОВ (SCROLL REVEAL) ---
const reveals = document.querySelectorAll('.reveal');
function checkReveal() {
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150; // блок появится, когда его край будет в 150px от низа экрана

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}
window.addEventListener('scroll', checkReveal);
checkReveal(); // Запускаем один раз при старте, если блоки уже видны


// --- 4. ХАКЕРСКИЙ ЭФФЕКТ ПЕРЕБОРА БУКВ ПРИ НАВЕДЕНИИ ---
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789//--";
const scrambleElements = document.querySelectorAll('.data-scramble');

scrambleElements.forEach(element => {
    // Сохраняем изначальный текст элемента
    const originalText = element.innerText;
    let interval = null;

    element.addEventListener('mouseenter', () => {
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            element.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return originalText[index]; // Оставляем правильную букву
                    }
                    return letters[Math.floor(Math.random() * letters.length)]; // Берем случайный символ
                })
                .join("");

            if (iteration >= originalText.length) {
                clearInterval(interval);
            }
            
            iteration += 1 / 3; // Скорость расшифровки
        }, 30);
    });

    element.addEventListener('mouseleave', () => {
        clearInterval(interval);
        element.innerText = originalText; // Возвращаем исходный текст при уходе мыши
    });
});