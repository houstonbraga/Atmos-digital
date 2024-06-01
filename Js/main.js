//slider para projetos realizados

let currentIndex = 0;

document.querySelector('.slider::after').addEventListener('click', () => {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.projeto').length;
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        slides.style.transform = `translateX(-${currentIndex * 400}px)`;
    }
});

document.querySelector('.slider::before').addEventListener('click', () => {
    const slides = document.querySelector('.slides');
    if (currentIndex > 0) {
        currentIndex--;
        slides.style.transform = `translateX(-${currentIndex * 400}px)`;
    }
});

