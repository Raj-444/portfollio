// Header Scroll Effect
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Smooth Scroll for Navigation Links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add staggered animation to category items
const categoryItems = document.querySelectorAll('.category-item');
categoryItems.forEach((item, index) => {
    item.style.animation = `fadeIn 1s ease forwards ${0.8 + (index * 0.1)}s`;
    item.style.opacity = '0';
});

// Mouse tracking effect for hero glow (optional premium touch)
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // You could add a custom glow element that follows the mouse here
});
