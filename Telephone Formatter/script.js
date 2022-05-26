const num = document.getElementById('NUM');
const inp = document.getElementById('INP');

const getStringWithNumberOnly = (str) => [...str].filter((item) => Number.isInteger(+item) && item!= " ").join("");

const formatNumber = (str) => {
    const numberString = getStringWithNumberOnly(str);
    return numberString.length > 3 ? "+(" + numberString.substring(0, 3) + ") - " + numberString.substring(3, 6) + " " + numberString.substring(6) : numberString
    
}

inp.addEventListener('input', () => {
    num.innerHTML = formatNumber(inp.value);
});
