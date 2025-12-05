// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Force all content to be visible on page load
window.addEventListener('DOMContentLoaded', function() {
    console.log('Loading portfolio...');
    
    // Ensure all sections are visible
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'block';
        section.style.visibility = 'visible';
        section.style.opacity = '1';
    });
    
    // Ensure hero section is visible
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.display = 'flex';
        hero.style.visibility = 'visible';
        hero.style.opacity = '1';
    }
    
    // Remove any hidden or display:none elements
    document.querySelectorAll('*').forEach(el => {
        const style = window.getComputedStyle(el);
        if (style.display === 'none' && el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE' && el.tagName !== 'LINK') {
            el.style.display = 'block';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
            header.style.background = 'rgba(15, 15, 15, 0.98)';
        } else {
            header.style.background = 'linear-gradient(to bottom, rgba(15, 15, 15, 0.95), rgba(10, 10, 10, 0.9))';
        }
    }
});

// Current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('.copyright p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2024', currentYear);
    }
});