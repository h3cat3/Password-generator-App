const lengthNo = document.getElementById('length-value');
const lengthInput = document.getElementById('length');

const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const checkBox = document.querySelectorAll('.sqare');
const checkImg = document.querySelectorAll('.checked');

const strenghtText = document.getElementById('strenght-text');
const bar = document.querySelectorAll('.bar');
let checked = [false,false,false,false];


lengthInput.addEventListener('input', () => {
    lengthNo.innerText = lengthInput.value;
    updateSlider();
})

function updateSlider() { 
  const value = (lengthInput.value - lengthInput.min) / (lengthInput.max - lengthInput.min) * 100;
  lengthInput.style.backgroundImage = 'linear-gradient(var(--green-200), var(--green-200))';
  lengthInput.style.backgroundSize = value + '% 100%';
  lengthInput.style.backgroundRepeat = 'no-repeat';
  lengthInput.style.backgroundColor = 'var(--grey-850)';
}

uppercase.addEventListener('click',() => {
    checkBox[0].classList.toggle('hidden');
    checkImg[0].classList.toggle('hidden');
    checked[0] = !checked[0];
    updateStrenght();
});
lowercase.addEventListener('click',() => {
    checkBox[1].classList.toggle('hidden');
    checkImg[1].classList.toggle('hidden');
    checked[1] = !checked[1];
    updateStrenght();
});
numbers.addEventListener('click',() => {
    checkBox[2].classList.toggle('hidden');
    checkImg[2].classList.toggle('hidden');
    checked[2] = !checked[2];
    updateStrenght();
});
symbols.addEventListener('click',() => {
    checkBox[3].classList.toggle('hidden');
    checkImg[3].classList.toggle('hidden');
    checked[3] = !checked[3];
    updateStrenght();
});

function updateStrenght() { 
    let strenght = 0;
    checked.forEach(el => {
    if (el) { strenght ++;
    }
});
if (strenght === 4) {
    strenghtText.innerText = 'very-strong';
    bar[3].classList.add('bar-full');
    
} 
 if (strenght === 3) {
    strenghtText.innerText = 'strong';
    bar[2].classList.add('bar-full');
    bar[3].classList.remove('bar-full');
}
 if (strenght === 2) {
    strenghtText.innerText = 'medium';
    bar[1].classList.add('bar-full');
    bar[2].classList.remove('bar-full');
} 
if (strenght === 1) {
    strenghtText.innerText = 'weak';
    bar[0].classList.add('bar-full');
    bar[1].classList.remove('bar-full');
} 
if (strenght === 0) {
    strenghtText.innerText = '';
    bar.forEach(el => {el.classList.remove('bar-full')})
} 
}
updateSlider();
