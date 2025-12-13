/*atividade2.1.html*/
const carouselTrack = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const indicatorsContainer = document.querySelector('.carousel-indicators');
let currentImage = 0;
const imageCount = images.length;
let autoSlideInterval;

images.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToImage(index));
    indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicator');

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentImage);
    });
}

function goToImage(index) {
    currentImage = index;
    updateCarousel();
    resetAutoSlide();
}

function nextImage() {
    currentImage = (currentImage + 1) % imageCount;
    updateCarousel();
}

function prevImage() {
    currentImage = (currentImage - 1 + imageCount) % imageCount;
    updateCarousel();
}

function updateCarousel() {
    const translateX = -currentImage * 100 + '%';
    carouselTrack.style.transform = `translateX(${translateX})`;
    updateIndicators();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextImage, 5000);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

resetAutoSlide();

carouselTrack.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

carouselTrack.addEventListener('mouseleave', () => {
    resetAutoSlide();
});

/*skills.html*/
/*projetos.html*/
/*contato.html*/