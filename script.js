window.addEventListener('scroll', function() {
    const titleContainer = document.getElementById('title-container');
    const title = document.getElementById('main-title');
    const buttonsContainer = document.getElementById('buttons-container');

    if (window.scrollY > 100) {
        title.style.fontSize = '1.5em';
        titleContainer.style.justifyContent = 'space-between';
        title.style.marginLeft = '20px';
        buttonsContainer.style.flexDirection = 'row';
    } else {
        title.style.fontSize = '3em';
        titleContainer.style.justifyContent = 'center';
        title.style.marginLeft = '0';
        buttonsContainer.style.flexDirection = 'column';
    }
});
