// Navigation functionality
        document.querySelectorAll('.nav-btn').forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and sections
                document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
                
                // Add active class to clicked button and corresponding section
                button.classList.add('active');
                const targetId = button.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active');
            });
        });
        
        // Console demo functionality
        document.getElementById('consoleDemo').addEventListener('click', () => {
            const terminal = document.getElementById('terminalOutput');
            terminal.innerHTML = '<span class="terminal-prompt">$ </span>node app.js<br>';
            
            setTimeout(() => {
                terminal.innerHTML += '<span style="color: var(--neon-green);">Hello, Cyber World!</span><br>';
                terminal.innerHTML += '<span class="terminal-prompt">$ </span>';
            }, 500);
        });
        
        // Event loop demo functionality
        document.getElementById('eventLoopDemo').addEventListener('click', () => {
            const output = document.getElementById('eventLoopOutput');
            output.innerHTML = '';
            
            const messages = [
                { text: 'Start', delay: 0 },
                { text: 'Scheduling setTimeout', delay: 500 },
                { text: 'Scheduling setImmediate', delay: 800 },
                { text: 'End', delay: 1000 },
                { text: 'setImmediate callback', delay: 1200 },
                { text: 'setTimeout callback', delay: 1500 }
            ];
            
            messages.forEach(msg => {
                setTimeout(() => {
                    output.innerHTML += `<div style="margin-bottom: 5px;">${msg.text}</div>`;
                    output.scrollTop = output.scrollHeight;
                }, msg.delay);
            });
        });
        
        // Server demo functionality
        document.getElementById('serverDemo').addEventListener('click', () => {
            const output = document.getElementById('serverOutput');
            output.innerHTML = '';
            
            const messages = [
                { text: '> node server.js', delay: 0 },
                { text: 'Server running at http://localhost:3000/', delay: 800 },
                { text: 'GET / - 200', delay: 1500 },
                { text: 'GET /about - 200', delay: 2000 },
                { text: 'GET /contact - 404', delay: 2500 }
            ];
            
            messages.forEach(msg => {
                setTimeout(() => {
                    output.innerHTML += `<div style="margin-bottom: 5px; color: ${msg.text.includes('200') ? 'var(--neon-green)' : msg.text.includes('404') ? 'var(--neon-pink)' : 'var(--neon-blue)'}">${msg.text}</div>`;
                    output.scrollTop = output.scrollHeight;
                }, msg.delay);
            });
        });