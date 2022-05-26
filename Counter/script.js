const num = document.getElementById('NUM');
const inp = document.getElementById('INP');
const inc = document.getElementById('INC');
const dec = document.getElementById('DEC');
const res = document.getElementById('RES');

inc.addEventListener('click', () => {
    let value = inp.value > 1 ? Number(inp.value) : 1;
    num.innerHTML = Number(num.innerHTML)+value;
})

dec.addEventListener('click', () => {
    let value = inp.value > 1 ? Number(inp.value) : 1;
    num.innerHTML = Number(num.innerHTML)-value;
})

res.addEventListener('click', () => {
    num.innerHTML = "0";
    inp.value = "";
})