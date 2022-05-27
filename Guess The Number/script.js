const submit = document.getElementById('submit');
const start = document.getElementById('start');
const inp = document.getElementById('num');
const success = document.getElementById('success');

let random = Math.floor(Math.random()*100);
success.style.fontWeight = '600';
success.style.fontSize = '15px';

const startGame = () => {
    start.disabled = true;
    submit.disabled = false;
    inp.value = "";
    success.innerHTML = "";
    random = Math.floor(Math.random()*100);
    success.style.color = 'red';
}

const checkNumber = () => {
    start.disabled = true;
    success.style.color = 'red';
    let val = inp.value;
    if (String(val).length === 0) {
        success.innerHTML = "Input cannot be empty";
    }
    else if (Number(val) === random) {
        submit.disabled = true;
        success.style.color = '#28A644';
        success.innerHTML = "Success! You Guessed the Correct Number";
        start.disabled = false;
    }
    else if(val < random) {
        success.innerHTML = "Number Guessed is Lower than Correct Number";
    }
    else {
        success.innerHTML = "Number Guessed is Higher than Correct Number";
    }
}

submit.addEventListener('click', checkNumber);
start.addEventListener('click', startGame);
