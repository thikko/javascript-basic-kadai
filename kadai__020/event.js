const bTn = document.getElementById('btn');
const teXt = document.getElementById('text');

bTn.addEventListener('click',()=>{
  const newText = document.getElementById('text');
  newText.textContent= 'クリックされました';
});