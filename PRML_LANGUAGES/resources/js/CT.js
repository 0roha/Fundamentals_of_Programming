// Add interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.borderColor = '#ff0080';
                    this.style.boxShadow = '0 0 25px rgba(255, 0, 128, 0.4)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.borderColor = '#00ffea';
                    this.style.boxShadow = '0 0 15px rgba(0, 255, 234, 0.2)';
                });
            });
            
            // Add typing effect to terminal
            const terminalContent = document.querySelector('.terminal-content');
            const originalContent = terminalContent.innerHTML;
            terminalContent.innerHTML = '';
            
            let i = 0;
            function typeWriter() {
                if (i < originalContent.length) {
                    terminalContent.innerHTML += originalContent.charAt(i);
                    i++;
                    setTimeout(typeWriter, 10);
                }
            }
            
            // Start typing after a short delay
            setTimeout(typeWriter, 1000);
        });