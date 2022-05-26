const btn = document.getElementById('check');
const box = document.getElementById('box');

btn.addEventListener('change', ()=> {
    if (btn.checked) {
        document.getElementById('txt').innerHTML = 'Light Mode';
        box.style.backgroundColor = 'white';
        document.querySelector('label').style.color = 'black';
        console.log("checkbox checked");
    }
    else {
        document.getElementById('txt').innerHTML = 'Dark Mode';
        box.style.backgroundColor = 'black';
        document.querySelector('label').style.color = 'white';
        console.log("checkbox not checked");
    }
})

const btn2 = document.getElementById('btn2');
btn2.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

const btn3 = document.getElementById('sm-chk');
btn3.addEventListener('change', () => {
    if (btn3.checked) {
        document.getElementById('box2').classList.toggle('white');
    }
    else {
        document.getElementById('box2').classList.remove('white');
    }
})