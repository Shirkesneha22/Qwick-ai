const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

// Shrink navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = "14px 0";
        navbar.style.borderBottom = "1px solid var(--clr-card-border)";
    } else {
        navbar.style.padding = "24px 0";
        navbar.style.borderBottom = "1px solid transparent";
    }
    
    // Active link highlighting based on scroll position
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
let menuAnim;
const openMenu = () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; 
    
    // Stagger animation for mobile links
    menuAnim = gsap.fromTo(mobileLinks, 
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.1, ease: 'power2.out' }
    );
};

const closeMenu = () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
};

if(menuToggle) menuToggle.addEventListener('click', openMenu);
if(menuClose) menuClose.addEventListener('click', closeMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
