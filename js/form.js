const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = contactForm.querySelector('.btn-submit');
        const originalText = btn.innerHTML;
        
        // Simulating submission
        btn.innerHTML = 'Sending...';
        btn.style.opacity = '0.7';
        
        setTimeout(() => {
            btn.innerHTML = 'Message Sent &check;';
            btn.style.opacity = '1';
            btn.style.backgroundColor = 'var(--clr-accent-dark)';
            btn.style.color = 'var(--clr-bg)';
            contactForm.reset();
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.opacity = '1';
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }, 3000);
        }, 1500);
    });
}
