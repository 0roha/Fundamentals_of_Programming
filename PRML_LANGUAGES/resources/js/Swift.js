// Tab functionality
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    const tablinks = document.getElementsByClassName("tab");
    for (let i = 0; i < tablinks.length; i++) {
tablinks[i].classList.remove("active");
    }
    
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Interactive functions
function createVariable() {
    const name = document.getElementById('varName').value;
    const value = document.getElementById('varValue').value;
    const type = document.getElementById('varType').value;
    const output = document.getElementById('varOutput');
    
    if (!name || !value) {
        output.innerHTML = "Please enter both name and value";
        return;
    }
    
    let formattedValue = value;
    if (type === 'String') {
        formattedValue = `"${value}"`;
    } else if (type === 'Bool') {
        formattedValue = value.toLowerCase() === 'true' ? 'true' : 'false';
    }
    
    output.innerHTML = `
        <span class="keyword">var</span> <span class="type">${name}</span>: <span class="type">${type}</span> = <span class="string">${formattedValue}</span><br>
        <span class="comment">// Variable '${name}' created with value ${formattedValue} of type ${type}</span>
    `;
}

function checkEven() {
    const input = document.getElementById('numberInput').value;
    const output = document.getElementById('funcOutput');
    
    if (!input) {
        output.innerHTML = "Please enter a number";
        return;
    }
    
    const number = parseInt(input);
    const isEven = number % 2 === 0;
    
    output.innerHTML = `
        <span class="keyword">func</span> isEven(_ number: <span class="type">Int</span>) -> <span class="type">Bool</span> {<br>
        &nbsp;&nbsp;<span class="keyword">return</span> number % 2 == 0<br>
        }<br><br>
        <span class="keyword">let</span> result = isEven(<span class="type">${number}</span>)<br>
        <span class="comment">// The number ${number} is ${isEven ? 'even' : 'odd'}</span><br>
        <span class="string">"${number} is ${isEven ? 'even' : 'odd'}"</span>
    `;
}
        
function checkAccess() {
    const input = document.getElementById('accessInput').value;
    const output = document.getElementById('accessOutput');
    
    if (!input) {
        output.innerHTML = "Please enter an access level";
        return;
    }
    
    const level = parseInt(input);
    let message = "";
    
    if (level >= 9) {
        message = "Root access granted. Welcome, Admin.";
    } else if (level >= 7) {
        message = "Elevated privileges granted.";
    } else if (level >= 5) {
        message = "Standard access granted.";
    } else {
        message = "Access denied. Insufficient privileges.";
    }
    
    output.innerHTML = `
        <span class="keyword">let</span> accessLevel = <span class="type">${level}</span><br>
        <span class="keyword">if</span> accessLevel >= 9 {<br>
        &nbsp;&nbsp;print(<span class="string">"${message}"</span>)<br>
        } <span class="keyword">else if</span> accessLevel >= 7 {<br>
        &nbsp;&nbsp;print(<span class="string">"${message}"</span>)<br>
        } <span class="keyword">else if</span> accessLevel >= 5 {<br>
        &nbsp;&nbsp;print(<span class="string">"${message}"</span>)<br>
        } <span class="keyword">else</span> {<br>
        &nbsp;&nbsp;print(<span class="string">"${message}"</span>)<br>
        }<br><br>
        <span class="string">"${message}"</span>
    `;
}
        
// Add glitch effect to header periodically
setInterval(() => {
    const glitch = document.querySelector('.glitch');
    glitch.style.animation = 'none';
    setTimeout(() => {
        glitch.style.animation = '';
    }, 100);
}, 5000);