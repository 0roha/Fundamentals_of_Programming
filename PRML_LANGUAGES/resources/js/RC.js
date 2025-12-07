
// Add interactive effects to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = `0 0 20px ${getRandomNeonColor()}`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 0 15px var(--neon-blue)';
    });
});

function getRandomNeonColor() {
    const colors = ['#00f3ff', '#d100d1', '#ff00ff', '#00ff99'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add typing effect to title
const title = document.querySelector('h1');
const originalText = title.textContent;
title.textContent = '';
let i = 0;

function typeWriter() {
    if (i < originalText.length) {
        title.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}


setTimeout(typeWriter, 1000);

 // Get the query string (e.g., ?from=third-main)
const params = new URLSearchParams(window.location.search);
const from = params.get('from');

// Determine where to go back
let backUrl = '../html/RGD.html'; // default fallback
if (from === 'tenth-main') {
  backUrl = '../html/RCS.html';
}

document.getElementById('btnone').addEventListener('click', function() {
  window.location.href = backUrl;

});




