 // Cyber JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Transmission received. Neural connection established.');
            form.reset();
        });
    }
    
    // Add cyber effects on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0, 255, 255, 0.3)';
        } else {
            header.style.boxShadow = '0 0 10px var(--neon-blue)';
        }
        
        // Parallax effect for hero image
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${window.scrollY * 0.1}px)`;
        }
    });
    
    // Add glitch effect randomly to titles
    const glitchTitles = document.querySelectorAll('.section-title');
    setInterval(() => {
        glitchTitles.forEach(title => {
            if (Math.random() > 0.7) {
                title.classList.add('glitch');
                setTimeout(() => {
                    title.classList.remove('glitch');
                }, 300);
            }
        });
    }, 5000);
});