 // Simple animation for code blocks
/*document.querySelectorAll('.code-block').forEach(block => {
    block.addEventListener('mouseover', () => {
        block.style.boxShadow = '0 0 15px rgba(240, 0, 255, 0.4)';
    });
    
    block.addEventListener('mouseout', () => {
        block.style.boxShadow = 'none';
    });
});

// Terminal animation effect
const terminalContent = document.querySelector('.terminal-content');
const prompts = terminalContent.innerHTML.split('<br>');
let currentIndex = 0;

function typeTerminal() {
    if (currentIndex < prompts.length) {
        terminalContent.innerHTML = prompts.slice(0, currentIndex + 1).join('<br>');
        terminalContent.scrollTop = terminalContent.scrollHeight;
        currentIndex++;
        setTimeout(typeTerminal, Math.random() * 400 + 100);
    }
}
*/
       
 // Get the query string (e.g., ?from=third-main)
const params = new URLSearchParams(window.location.search);
const from = params.get('from');

// Determine where to go back
let backUrl = '../html/RWD.html'; // default fallback
if (from === 'sixth-main') {
  backUrl = '../html/RCS.html';
}

document.getElementById('runcode').addEventListener('click', function() {
  window.location.href = backUrl;

});
