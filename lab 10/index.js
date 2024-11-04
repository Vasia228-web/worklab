// Додаємо подію для кнопок "Дізнатися більше"
document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Цей курс допоможе вам поглибити знання в програмуванні!");
    });
});

// Додатковий приклад інтерактивності - кнопка прокрутки вгору
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerText = "Вгору";
scrollToTopBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});
