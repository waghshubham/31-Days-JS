const hr = document.getElementById('Hrs');
const timer = document.getElementById('timer');
const btn = document.getElementById('btn');


const startTimer = () => {
    if (String(hr.value.length) == 0) {
        document.getElementById('msg').innerHTML = `<code>number required</code>`;
    }
        btn.disabled = true;
        let h = Math.floor(hr.value/60);
        let m = hr.value%60;
        if (h==0) {
            h = String(0)+h;
        }
        if (h>0 && h<10) {
            h = String(0)+h;
        }
        if (m<10) {
            m = String(0)+m;
        }
        timer.innerHTML = `${h} : ${m}`;
        
        if (m!=0 || h!=0) {
            setTimeout(startTimer, 1000);
            hr.value--;
        }
}
btn.addEventListener('click', startTimer);
