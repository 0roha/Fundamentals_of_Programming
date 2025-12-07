// copy buttons
document.querySelectorAll('.copy').forEach(btn => {
  btn.addEventListener('click', async (e) => {
    const pre = e.target.previousElementSibling || e.target.parentElement.querySelector('code');
    const code = pre ? pre.innerText : '';
    try {
      await navigator.clipboard.writeText(code);
      btn.innerText = 'Copied!';
      setTimeout(()=> btn.innerText = 'Copy', 1200);
    } catch (err) {
      btn.innerText = 'Failed';
      setTimeout(()=> btn.innerText = 'Copy', 1200);
    }
  });
});

// print
document.getElementById('print').addEventListener('click', ()=> window.print());

// compact toggle
let compact = false;
document.getElementById('toggle').addEventListener('click', ()=> {
  compact = !compact;
  document.querySelectorAll('pre').forEach(p=> p.style.fontSize = compact ? '12px' : '13px');
});

    
/* // search
const search = document.getElementById('search');
search.addEventListener('input', (e)=>{
  const q = e.target.value.toLowerCase();
  document.querySelectorAll('main section').forEach(sec=>{
    const text = sec.innerText.toLowerCase();
    sec.style.display = text.includes(q) ? 'block' : 'none';
  });
});
---Delete if complete--- */

// smooth scroll for toc
document.querySelectorAll('#toc a').forEach(a=> a.addEventListener('click', (ev)=>{
  ev.preventDefault();
  const id = a.getAttribute('href').slice(1);
  document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'});
}));


// Get the query string (e.g., ?from=third-main)
const params = new URLSearchParams(window.location.search);
const from = params.get('from');

let backUrl = '../html/RWD.html'; // default fallback
if (from === 'eleventh-main') {
  backUrl = '../html/RGD.html';
} if (from === 'twelfth-main') {
  backUrl = '../html/RCS.html';
}

document.getElementById('exit').addEventListener('click', function() {
  window.location.href = backUrl;

});