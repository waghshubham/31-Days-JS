const stars = document.querySelectorAll('.fa-star');
const emojis = document.querySelectorAll('.fa-regular');
const arr = ['red', 'orange', 'darkgoldenrod', 'yellowgreen', 'green'];

updateRating(0);

function updateRating(index) {
    stars.forEach((star, ind) => {
        if (ind <= index) {
            star.classList.add('active');
        }
        else {
            star.classList.remove('active');
        }
    });

    emojis.forEach(emoji => {
        emoji.style.transform = `translate(-${index*50}px)`;
        emoji.style.color = arr[index];
    })
}

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        updateRating(index);
    })
})