const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
const interactiveEls = document.querySelectorAll('a, button, .cursor-hover, input, textarea, select');

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Dot follows immediately but we use gsap for smoother rendering
    gsap.to(cursorDot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1
    });
});

// Ring follows with slight lag
gsap.ticker.add(() => {
    // Lerp for the ring
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    
    gsap.set(cursorRing, {
        x: ringX,
        y: ringY
    });
});

// Hover states
interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
        cursorRing.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorRing.style.backgroundColor = 'rgba(127, 237, 216, 0.1)';
        cursorRing.style.borderColor = 'rgba(127, 237, 216, 0.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorRing.style.backgroundColor = 'transparent';
        cursorRing.style.borderColor = 'var(--clr-accent-dark)';
    });
});
