const lengthNo = document.getElementById('length-value');
const lengthInput = document.getElementById('length');

const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const checkBox = document.querySelectorAll('.sqare');
const checkImg = document.querySelectorAll('.checked');

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

uppercase.addEventListener('click',() => {
    checkBox[0].classList.toggle('hidden')
    checkImg[0].classList.toggle('hidden');
})
lowercase.addEventListener('click',() => {
    checkBox[1].classList.toggle('hidden')
    checkImg[1].classList.toggle('hidden');
})
numbers.addEventListener('click',() => {
    checkBox[2].classList.toggle('hidden')
    checkImg[2].classList.toggle('hidden');
})
symbols.addEventListener('click',() => {
    checkBox[3].classList.toggle('hidden')
    checkImg[3].classList.toggle('hidden');
})
updateGradient();
