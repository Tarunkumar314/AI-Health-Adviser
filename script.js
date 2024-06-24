
// Toggle mobile navigation menu
const menuBtn = document.getElementById('menubar');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close mobile navigation menu when clicking on a link
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Adjust header style on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style.background = '#13575e'; // Change background color on scroll
    } else {
        header.style.background = 'var(--mainclr)'; // Revert to original background color
    }
});

// Smooth scroll functionality for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - header.clientHeight, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Handling window resize for responsiveness
window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
        navbar.classList.remove('active'); // Ensure menu is hidden on desktop view
    }
});
