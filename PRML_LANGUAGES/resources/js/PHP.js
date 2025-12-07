// Matrix rain effect
const canvas = document.getElementById('matrixRain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$#@%&!?*';
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];
for(let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 18, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0ff';
    ctx.font = `${fontSize}px monospace`;
    
    for(let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        drops[i]++;
    }
}

setInterval(drawMatrix, 33);

// Interactive demos for the PHP fundamentals
function runVariableDemo() {
    const output = document.getElementById('variable-output');
    output.innerHTML = '<div class="terminal-prompt">Running variable demo...</div>';
    
    setTimeout(() => {
        output.innerHTML += '<div>$name = "Neo"</div>';
        output.innerHTML += '<div>$age = 30</div>';
        output.innerHTML += '<div>$message = $name . " is " . $age . " years old"</div>';
        output.innerHTML += '<div class="terminal-prompt">echo $message</div>';
        output.innerHTML += '<div>Neo is 30 years old</div>';
    }, 800);
}

function checkNumber() {
    const input = document.getElementById('number-input').value;
    const output = document.getElementById('control-output');
    const num = parseInt(input);
    
    output.innerHTML = '';
    
    if (num < 10) {
        output.innerHTML = `<div class="terminal-prompt">${num} is less than 10</div>`;
    } else if (num === 10) {
        output.innerHTML = `<div class="terminal-prompt">${num} is exactly 10</div>`;
    } else {
        output.innerHTML = `<div class="terminal-prompt">${num} is greater than 10</div>`;
    }
}

function countNumbers() {
    const input = document.getElementById('number-input').value;
    const output = document.getElementById('control-output');
    const num = parseInt(input);
    
    output.innerHTML = '<div class="terminal-prompt">Counting...</div>';
    
    let content = '';
    for (let i = 0; i <= num; i++) {
        content += `<div>Count: ${i}</div>`;
    }
    
    setTimeout(() => {
        output.innerHTML = content;
    }, 500);
}

function addNumbers() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const output = document.getElementById('function-output');
    
    output.innerHTML = `<div class="terminal-prompt">Adding ${num1} and ${num2}...</div>`;
    
    setTimeout(() => {
        output.innerHTML += `<div>Result: ${num1 + num2}</div>`;
    }, 600);
}

function processForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const output = document.getElementById('form-output');
    
    output.innerHTML = '<div class="terminal-prompt">Processing form data...</div>';
    
    setTimeout(() => {
        if(username && email) {
            output.innerHTML += `<div>Welcome, ${username}!</div>`;
            output.innerHTML += `<div>Your email is: ${email}</div>`;
        } else {
            output.innerHTML += '<div>Please fill all fields!</div>';
        }
    }, 600);
}

// Update canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});