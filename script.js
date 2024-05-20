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
    let scrollDistance = 340; // Default scroll distance

    // Function to set the scroll distance based on screen width
    function checkScreenWidth() {
        if (window.innerWidth <= 450) {
            scrollDistance = 20; // Adjust scroll distance for screens 450px or less
        } else if (window.innerWidth <= 617) {
            scrollDistance = 458; // Adjust scroll distance for screens 451px to 617px
        } else if (window.innerWidth <= 768) {
            scrollDistance = 580; // Adjust scroll distance for screens 618px to 768px
        } else {
            scrollDistance = 340; // Default scroll distance for screens larger than 768px
        }
    }

    // Initial check of screen width
    checkScreenWidth();

    // Add click event listeners to buttons
    btnRight.addEventListener('click', function () {
        checkScreenWidth(); // Re-check screen width before scrolling
        cardContainer.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    });

    btnLeft.addEventListener('click', function () {
        checkScreenWidth(); // Re-check screen width before scrolling
        cardContainer.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
    });

    // Update scroll distance when the window is resized
    window.addEventListener('resize', function () {
        checkScreenWidth();
    });
});


