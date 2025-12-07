 // Get the query string (e.g., ?from=third-main)
const params = new URLSearchParams(window.location.search);
const from = params.get('from');

// Determine where to go back
let backUrl = '../html/RWD.html'; // default fallback
if (from === 'second-main') {
  backUrl = '../html/RGD.html';
} if (from === 'zthree-main') {
  backUrl = '../html/RCS.html';
}

document.getElementById('exit').addEventListener('click', function() {
  window.location.href = backUrl;

});
