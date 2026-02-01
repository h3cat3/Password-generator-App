const lengthNo = document.getElementById('length-value');
const lengthInput = document.getElementById('length');

lengthInput.addEventListener('input', () => {
    lengthNo.innerText = lengthInput.value;
    updateGradient();
})

function updateGradient() { 
  const value = (lengthInput.value - lengthInput.min) / (lengthInput.max - lengthInput.min) * 100;
  lengthInput.style.backgroundImage = 'linear-gradient(var(--green-200), var(--green-200))';
  lengthInput.style.backgroundSize = value + '% 100%';
  lengthInput.style.backgroundRepeat = 'no-repeat';
  lengthInput.style.backgroundColor = 'var(--grey-850)';
}


updateGradient();
