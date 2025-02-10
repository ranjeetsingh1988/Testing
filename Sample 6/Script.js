const heart = document.getElementById('heart');

heart.addEventListener('mouseover', () => {
    heart.style.backgroundColor = 'pink';
});

heart.addEventListener('mouseout', () => {
    heart.style.backgroundColor = 'red';
});