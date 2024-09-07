document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('changePageBtn');
    const pageContent = document.getElementById('pageContent');
    
    btn.addEventListener('click', () => {
        window.location.href = 'pagina2.html'; // Redirige a la segunda página
    });

    // Script para mover las imágenes
    const decorations = document.querySelectorAll('.decoration');

    decorations.forEach(img => {
        img.addEventListener('mousedown', function (e) {
            const rect = img.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;

            function moveAt(e) {
                img.style.left = e.clientX - offsetX + 'px';
                img.style.top = e.clientY - offsetY + 'px';
            }

            function stopMove() {
                document.removeEventListener('mousemove', moveAt);
                document.removeEventListener('mouseup', stopMove);
            }

            document.addEventListener('mousemove', moveAt);
            document.addEventListener('mouseup', stopMove);
        });

        img.addEventListener('dblclick', () => {
            img.style.left = '';
            img.style.top = '';
        });
    });
});
