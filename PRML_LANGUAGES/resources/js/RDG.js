function activateButton(button) 
{
    // Remove active class from all buttons
    document.querySelectorAll('.cyber-button').forEach(btn => {
        btn.classList.remove('active-button');
    });
    
    // Add active class to clicked button
    button.classList.add('active-button');
    
    // Create a cyber sound effect (using browser's AudioContext)
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.value = 392; // G4
        gainNode.gain.value = 0.1;
        
        oscillator.start();
        
        // Stop after short duration
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        console.log("Web Audio API not supported in this browser");
    }
    
    // Create a visual effect
    const effect = document.createElement('div');
    effect.style.position = 'absolute';
    effect.style.width = '100%';
    effect.style.height = '100%';
    effect.style.background = 'radial-gradient(circle, rgba(0, 255, 204, 0.3) 0%, transparent 70%)';
    effect.style.top = '0';
    effect.style.left = '0';
    effect.style.pointerEvents = 'none';
    effect.style.zIndex = '5';
    effect.style.borderRadius = '5px';
    
    button.appendChild(effect);
    
    setTimeout(() => {
        effect.remove();
    }, 500);
}
        
// Add some random glitch effects to the header
setInterval(() => {
    const header = document.querySelector('.dashboard-header h1');
    if (Math.random() > 0.7) {
        header.style.textShadow = '0 0 20px #ff00ff';
        setTimeout(() => {
            header.style.textShadow = '0 0 15px #00ccff';
        }, 100);
    }
}, 3000);