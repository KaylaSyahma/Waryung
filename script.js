const marqueeOne = document.querySelector('.marqueeOne');

marqueeOne.addEventListener('mouseenter', () => {
    marqueeOne.style.animationPlayState = 'paused';
});

marqueeOne.addEventListener('mouseleave', () => {
    marqueeOne.style.animationPlayState = 'running';
});

const marqueeTwo = document.querySelector('.marqueeTwo');

marqueeTwo.addEventListener('mouseenter', () => {
    marqueeTwo.style.animationPlayState = 'paused';
});

marqueeTwo.addEventListener('mouseleave', () => {
    marqueeTwo.style.animationPlayState = 'running';
});