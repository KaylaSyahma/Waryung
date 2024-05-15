const marqueeOne = document.querySelector('.marqueeOne');
const marqueeTwo = document.querySelector('.marqueeTwo');

marqueeOne.addEventListener('mouseenter', () => {
    marqueeOne.style.animationPlayState = 'paused';
});

marqueeOne.addEventListener('mouseleave', () => {
    marqueeOne.style.animationPlayState = 'running';
});

marqueeTwo.addEventListener('mouseenter', () => {
    marqueeTwo.style.animationPlayState = 'paused';
});

marqueeTwo.addEventListener('mouseleave', () => {
    marqueeTwo.style.animationPlayState = 'running';
});

// script button slider
document.addEventListener('DOMContentLoaded', function () {
    const btnRight = document.getElementById('btn-right');
    const btnLeft = document.getElementById('btn-left');
    const cardContainer = document.getElementById('jajanan-card');
    const scrollDistance = 340; // Jarak yang ingin digulirkan setiap kali tombol diklik

    btnRight.addEventListener('click', function () {
        cardContainer.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    });

    btnLeft.addEventListener('click', function () {
        cardContainer.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
    });
});
