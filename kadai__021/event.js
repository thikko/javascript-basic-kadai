const bTn = document.getElementById('btn');
const teXt = document.getElementById('text');

bTn.addEventListener('click',()=>{
  const newText = document.getElementById('text');
  setTimeout(()=>{
    newText.textContent= 'クリックされました';
  }, 2000);
});