//Marquee
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

//motorbike animation
// Ambil elemen yang akan dianimasikan
const element = document.querySelector('.animate-on-scroll');

// Fungsi untuk memulai animasi saat elemen masuk ke dalam jangkauan scroll
function startAnimation() {
  element.classList.add('animated'); // Tambahkan kelas untuk memulai animasi
}

// Fungsi untuk mendeteksi peristiwa scroll
function handleScroll() {
  // Ambil posisi elemen dan posisi scroll
  const elementPosition = element.getBoundingClientRect().top;
  const scrollPosition = window.innerHeight;

  // Jika posisi elemen kurang dari atau sama dengan posisi scroll
  // Mulai animasi
  if (elementPosition <= scrollPosition) {
    startAnimation();
  }
}

// Panggil handleScroll saat terjadi peristiwa scroll
window.addEventListener('scroll', handleScroll);

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
