// Simple parallax effect for hero section (creative touch)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

// Form submission (placeholder - add real backend later)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - integrate with email service.)');
});