document.addEventListener('DOMContentLoaded', () => {
    const decorations = document.querySelectorAll('.decoration');

    // Función para generar posiciones aleatorias
    function getRandomPosition() {
        const x = window.innerWidth - 100; // Ajusta 100 para evitar que se salgan de la pantalla
        const y = window.innerHeight - 100; // Ajusta 100 para evitar que se salgan de la pantalla
        const left = Math.floor(Math.random() * x) + 'px';
        const top = Math.floor(Math.random() * y) + 'px';
        return { left, top };
    }

    // Inicializa posiciones aleatorias
    decorations.forEach(decoration => {
        const { left, top } = getRandomPosition();
        decoration.style.left = left;
        decoration.style.top = top;
    });

    // Hacer las imágenes arrastrables
    decorations.forEach(decoration => {
        decoration.addEventListener('mousedown', (e) => {
            e.preventDefault();
            const { clientX: startX, clientY: startY } = e;
            const { offsetLeft: startLeft, offsetTop: startTop } = decoration;

            function onMouseMove(e) {
                const x = e.clientX - startX;
                const y = e.clientY - startY;
                decoration.style.left = `${startLeft + x}px`;
                decoration.style.top = `${startTop + y}px`;
            }

            function onMouseUp() {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });
});
