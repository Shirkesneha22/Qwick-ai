// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    ScrollTrigger.create({
        trigger: counter,
        start: "top 90%",
        onEnter: () => {
            const target = +counter.getAttribute("data-target");
            gsap.to(counter, {
                innerHTML: target,
                duration: 2,
                snap: { innerHTML: 1 },
                ease: "power2.out",
                onUpdate: function() {
                    counter.innerHTML = Math.round(this.targets()[0].innerHTML);
                }
            });
        },
        once: true
    });
});
