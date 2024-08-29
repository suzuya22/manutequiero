window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const title = document.getElementById('main-title');
    const buttonsContainer = document.getElementById('buttons-container');

    if (window.scrollY > 100) { // Ajusta el valor según cuándo quieres que empiece la animación
        title.style.fontSize = '1.5em';
        title.style.textAlign = 'left';
        title.style.paddingLeft = '20px'; // Ajusta el espaciado a la izquierda según lo necesites
        buttonsContainer.style.display = 'flex';
    } else {
        title.style.fontSize = '3em';
        title.style.textAlign = 'center';
        title.style.paddingLeft = '0';
        buttonsContainer.style.display = 'none';
    }
});
