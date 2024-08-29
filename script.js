window.addEventListener('scroll', function() {
    const title = document.getElementById('main-title');
    const buttonsContainer = document.getElementById('buttons-container');

    if (window.scrollY > 100) {
        title.style.fontSize = '1.5em';
        title.style.textAlign = 'left';
        title.style.marginLeft = '20px';
        buttonsContainer.style.display = 'flex';
    } else {
        title.style.fontSize = '3em';
        title.style.textAlign = 'center';
        title.style.marginLeft = '0';
        buttonsContainer.style.display = 'none';
    }
});
