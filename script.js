window.addEventListener('scroll', function() {
    const title = document.getElementById('main-title');
    const buttonsContainer = document.getElementById('buttons-container');
    const titleContainer = document.getElementById('title-container');

    if (window.scrollY > 100) {
        title.style.fontSize = '1.5em';
        titleContainer.style.justifyContent = 'space-between';
        buttonsContainer.style.display = 'flex';
    } else {
        title.style.fontSize = '3em';
        titleContainer.style.justifyContent = 'center';
        buttonsContainer.style.display = 'none';
    }
});
