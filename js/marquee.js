const marqueeContent = document.querySelector('.marquee-content');

if(marqueeContent) {
    const originalChildren = Array.from(marqueeContent.children);
    
    // Duplicate children to ensure seamless loop
    originalChildren.forEach(child => {
        const clone = child.cloneNode(true);
        marqueeContent.appendChild(clone);
    });
}
