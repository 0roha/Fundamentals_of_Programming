// copy buttons
    document.querySelectorAll('.copy').forEach(btn => {
      btn.addEventListener('click', ()=>{
        const id = btn.getAttribute('data-target');
        const code = document.getElementById(id).innerText;
        navigator.clipboard.writeText(code).then(()=>{
          const old = btn.innerText;
          btn.innerText = 'Copied!';
          setTimeout(()=> btn.innerText = old,1200);
        }).catch(()=> alert('Copy failed — try manually'));
      });
    });



    // minimal theme toggle
    let minimal = false;
    document.getElementById('toggleTheme').addEventListener('click', ()=>{
      minimal = !minimal;
      if(minimal){
        document.body.style.background='white';
        document.body.style.color='#f6f9ffff';
      } else {
        document.body.style.background='linear-gradient(180deg, #ab0d0dff 0%, #e34444ff 60%)';
        document.body.style.color='var(--text)';
      }
    });

    // smooth anchor scrolling
    document.querySelectorAll('nav a').forEach(a=>{
      a.addEventListener('click', (e)=>{
        e.preventDefault();
        const t = document.querySelector(a.getAttribute('href'));
        if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
      })
    });

 // Get the query string (e.g., ?from=third-main)
const params = new URLSearchParams(window.location.search);
const from = params.get('from');

// Determine where to go back
let backUrl = '../html/RWD.html'; // default fallback
if (from === 'fourth-main') {
  backUrl = '../html/RGD.html';
} if (from === 'seventh-main') {
  backUrl = '../html/RCS.html';
}

document.getElementById('downloadBtn').addEventListener('click', function() {
  window.location.href = backUrl;

});
