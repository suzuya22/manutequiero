window.addEventListener('scroll', function() {
    const title = document.getElementById('main-title');
    const navButtons = document.getElementById('nav-buttons');

    if (window.scrollY > 50) {
        title.style.fontSize = '1.5em';
        title.style.textAlign = 'left';
        navButtons.style.display = 'block';
    } else {
        title.style.fontSize = '3em';
        title.style.textAlign = 'center';
        navButtons.style.display = 'none';
    }
});
