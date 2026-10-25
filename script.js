document.getElementById('copy').addEventListener('click',function(){
  var b=this,t=document.getElementById('mail').textContent;
  function done(){b.textContent='Gekopieerd';setTimeout(function(){b.textContent='Kopieer e-mailadres'},1800)}
  function sel(){var r=document.createRange();r.selectNodeContents(document.getElementById('mail'));var s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Geselecteerd, kopieer met Ctrl+C'}
  try{navigator.clipboard.writeText(t).then(done,sel)}catch(e){sel()}
});
