const lengthNo = document.getElementById('length-value');
const lengthInput = document.getElementById('length');

const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');

const checkBox = document.querySelectorAll('.sqare');
const checkImg = document.querySelectorAll('.checked');

const strenghtText = document.getElementById('strenght-text');
const bar = document.querySelectorAll('.bar');
let checked = [false,false,false,false];

const generateBtn = document.getElementById('generate');
const password = document.getElementById('password');
const copiedText = document.getElementById('copied-text');
const copiedImg = document.getElementById('copied-img');


function updateSlider() { 
  const value = (lengthInput.value - lengthInput.min) / (lengthInput.max - lengthInput.min) * 100;
  lengthInput.style.backgroundImage = 'linear-gradient(var(--green-200), var(--green-200))';
  lengthInput.style.backgroundSize = value + '% 100%';
  lengthInput.style.backgroundRepeat = 'no-repeat';
  lengthInput.style.backgroundColor = 'var(--grey-850)';
}


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
function generatePassword(){
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{};:,.<>/?";
    
    let characters = "";

    if (checked[0]) {characters += upper};
    if (checked[1]) {characters += lower};
    if (checked[2]) {characters += numbers};
    if (checked[3]) {characters += symbols};

    if (characters.length === 0 || lengthInput.value === 0) {
        return "password";
    }
    let pass = "";
    

    for (let i=0; i < lengthInput.value; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        pass += characters[randomIndex];
    }
    return pass;
}

updateSlider();

lengthInput.addEventListener('input', () => {
    lengthNo.innerText = lengthInput.value;
    updateSlider();
})

uppercaseCheck.addEventListener('click',() => {
    checkBox[0].classList.toggle('hidden');
    checkImg[0].classList.toggle('hidden');
    checked[0] = !checked[0];
    updateStrenght();
});
lowercaseCheck.addEventListener('click',() => {
    checkBox[1].classList.toggle('hidden');
    checkImg[1].classList.toggle('hidden');
    checked[1] = !checked[1];
    updateStrenght();
});
numbersCheck.addEventListener('click',() => {
    checkBox[2].classList.toggle('hidden');
    checkImg[2].classList.toggle('hidden');
    checked[2] = !checked[2];
    updateStrenght();
});
symbolsCheck.addEventListener('click',() => {
    checkBox[3].classList.toggle('hidden');
    checkImg[3].classList.toggle('hidden');
    checked[3] = !checked[3];
    updateStrenght();
});

generateBtn.addEventListener('click', ()=>{
    const text = generatePassword();
    password.innerText = text;
    copiedImg.addEventListener('click',() => {
        copiedText.classList.remove('hidden');
        navigator.clipboard.writeText(text);
    })
})

