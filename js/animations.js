// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initial Load Animation
window.addEventListener("load", () => {
    const tl = gsap.timeline();

    // Fade in logo & nav
    tl.fromTo(".nav-logo, .nav-links li, .nav-cta, .menu-toggle", 
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    )
    // Hero Title words stagger
    .fromTo(".hero-title .word",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" },
        "-=0.2"
    )
    // Subtext & CTAs
    .fromTo(".hero-sub, .hero-ctas",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
        "-=0.4"
    )
    // Stats and Scroll Indicator
    .fromTo(".hero-stats, .scroll-indicator",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.2"
    );
});

// Scroll Reveal Animations for sections (Fade up)
const revealElements = document.querySelectorAll(".section-revealer");
revealElements.forEach((el) => {
    gsap.fromTo(el,
        { y: 40, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%", 
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Service Cards Stagger
if(document.querySelector(".services-grid")) {
    gsap.fromTo(".service-card-stagger",
        { y: 40, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".services-grid",
                start: "top 80%"
            }
        }
    );
}

// Work Bento Cards Stagger (Fade + Scale)
if(document.querySelector(".bento-grid")) {
    gsap.fromTo(".feature-card-stagger",
        { scale: 0.9, opacity: 0, y: 30 },
        {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".bento-grid",
                start: "top 80%"
            }
        }
    );
}



// Testimonials Cards Stagger
if(document.querySelector(".testimonials-grid")) {
    gsap.fromTo(".testimonial-card-stagger",
        { y: 40, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".testimonials-grid",
                start: "top 80%"
            }
        }
    );
}
