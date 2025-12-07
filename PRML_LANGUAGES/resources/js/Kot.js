function scrollToSection(sectionId) 
{
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelectorAll('.code-block').forEach(block => 
{
    block.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 15px rgba(255, 0, 255, 0.4)';
    });
    
    block.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 0 10px rgba(255, 0, 255, 0.2)';
    });
});

document.addEventListener('DOMContentLoaded', function() 
{
    const title = document.querySelector('h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a brief delay
    setTimeout(typeWriter, 500);
});