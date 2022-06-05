const arr = ['banana', 'beans', 'eggs', 'mutton', 'flowers', 'pens', 'drivers'];
document.getElementById('list').innerHTML = arr.map(el => `<li>${el}</li>`).join('');

const btn = document.getElementById('btn');
const field = document.getElementById('field');
const order = document.getElementById('order');
const additems = document.getElementById('additems');
const del = document.getElementById('delete');
const par = document.getElementById('par');

const list = [];

const add = () => {
    if (field.value === "") {
        par.style.fontSize = "14px";
        par.style.color = "red";
        par.innerHTML = "input field cannot be empty";
    }
    else if (String(field.value).length>0 && arr.includes(field.value)) {
        const li = document.createElement("li");
        li.innerHTML = field.value;
        order.appendChild(li);
        field.value = "";
        additems.classList.add("orderbox");
        par.innerHTML = "";
    }
    else {
        par.style.fontSize = "14px";
        par.style.color = "red";
        par.innerHTML = "item does not exist in the list";
    }
}

const remove = () => {
    const list = document.querySelectorAll("#order li");
    if (list.length === 0) {
        additems.classList.remove("orderbox");
        par.style.fontSize = "14px";
        par.style.color = "red";
        par.innerHTML = "items does not exists";
    }
    else {
        par.innerHTML = "";
        order.removeChild(list[list.length-1]);
    }
}

btn.addEventListener('click', add);
del.addEventListener('click', remove);