const form = document.querySelector('.form');
const list = document.querySelector('.list');
const inp = document.querySelector('.input');


form.addEventListener('submit', (event) => {

    event.preventDefault();
    const val = inp.value;
    const el = document.createElement('li');
    el.innerHTML = val;
    list.appendChild(el);
    inp.value = "";

    const check = document.createElement('span');
    check.innerHTML = `<i class="fa-solid fa-square-check">`;
    el.appendChild(check);
    const trash = document.createElement('span');
    trash.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    el.appendChild(trash);

    check.addEventListener('click', () => {
        el.classList.toggle('checked');
    });

    trash.addEventListener('click', () => {
        list.removeChild(el);
    })
});