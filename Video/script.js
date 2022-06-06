const btn = document.getElementById('btn');
const vid = document.querySelector('video');

const pause = () => {
    if (vid.paused) {
        vid.play();
        btn.innerHTML = "Pause";
    }
    else {
        vid.pause();
        btn.innerHTML = "Play";
    }
}

btn.addEventListener('click', pause);