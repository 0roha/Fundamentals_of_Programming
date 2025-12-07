// Simple terminal text animation
document.addEventListener('DOMContentLoaded', function() {
    const terminal = document.querySelector('.terminal');
    const terminalText = document.querySelector('.terminal-text');
    const texts = [
        'Compiling Go modules...',
        'Starting goroutines...',
        'Initializing cyber environment...',
        'Ready for code injection.'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            terminalText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            terminalText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingDelay = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingDelay = 500;
        }
        
        setTimeout(type, typingDelay);
    }
    
    // Start the typing effect after a delay
    setTimeout(type, 1000);
    
    // Add glitch effect randomly to headers
    setInterval(() => {
        const headers = document.querySelectorAll('h1, h2, h3');
        const randomHeader = headers[Math.floor(Math.random() * headers.length)];
        
        randomHeader.classList.add('glitch');
        setTimeout(() => {
            randomHeader.classList.remove('glitch');
        }, 300);
    }, 5000);
});

 // Get the query string (e.g., ?from=third-main)
const params = new URLSearchParams(window.location.search);
const from = params.get('from');

// Determine where to go back
let backUrl = '../html/RWD.html'; // default fallback
if (from === 'ztwo-main') {
  backUrl = '../html/RCS.html';
} 

document.getElementById('exit').addEventListener('click', function() {
  window.location.href = backUrl;

});