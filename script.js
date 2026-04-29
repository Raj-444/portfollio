// Header Scroll Effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
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
