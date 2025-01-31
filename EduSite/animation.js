// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully! We will respond within 24 hours.');
    this.reset();
});

// Hide/Show Navigation Bar on Scroll
let lastScrollTop = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        nav.style.top = '-60px'; // Hide the navigation bar
    } else {
        // Scrolling up
        nav.style.top = '0'; // Show the navigation bar
    }

    lastScrollTop = scrollTop;
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle mobile menu
});