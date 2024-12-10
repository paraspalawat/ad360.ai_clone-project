// script.js

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// script.js
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function toggleNav() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

let isDown = false;
let startX, scrollLeft;

// Mouse Down Event
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// Mouse Leave Event
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Mouse Up Event
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Mouse Move Event
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed multiplier
  slider.scrollLeft = scrollLeft - walk;
});


const slider = document.querySelector('.testimonial-slider');

// Auto-scroll function
let scrollAmount = 0;
let maxScroll = slider.scrollWidth - slider.clientWidth;

function autoScroll() {
  scrollAmount += 1; // Speed of auto-scroll
  if (scrollAmount >= maxScroll) {
    scrollAmount = 0; // Reset to the beginning when reaching the end
  }
  slider.scrollLeft = scrollAmount;
}

// Start auto-scrolling every 20ms
setInterval(autoScroll, 20);

const track = document.querySelector('.testimonial-track');

let start = 0;
const moveSlider = () => {
  start -= 1; // Speed of scrolling
  if (Math.abs(start) >= track.offsetWidth / 2) {
    start = 0; // Reset to the start
  }
  track.style.transform = `translateX(${start}px)`;
};

setInterval(moveSlider, 20); // Adjust the speed of animation



// Duplicate the testimonial cards for smooth infinite scrolling
const sliderWidth = slider.offsetWidth;
slider.innerHTML += slider.innerHTML;

let scrollPosition = 0;

// Animate the slider
function moveSlider() {
  scrollPosition -= 1; // Speed of sliding
  if (Math.abs(scrollPosition) >= sliderWidth) {
    scrollPosition = 0; // Reset the position
  }
  slider.style.transform = `translateX(${scrollPosition}px)`;
}

setInterval(moveSlider, 20); // Lower interval = faster scrolling
