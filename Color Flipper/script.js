const btn = document.getElementById('btn');
const container = document.getElementById('cnt');

const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];


const getRandomNumber = () => {
    return Math.floor(Math.random()*arr.length);
}

const changeColor = () => {
    let str = "#";
    for (let i=0; i<6; i++) {
        str+=arr[getRandomNumber()];
    }
    // container.style.backgroundColor = str;
    document.body.style.backgroundColor = str;
}

btn.addEventListener('click', changeColor);
