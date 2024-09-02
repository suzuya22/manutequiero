document.addEventListener('DOMContentLoaded', () => {
    const decorations = document.querySelectorAll('.decoration');
    const usedPositions = new Set();

    // Función para generar una posición única aleatoria
    function getRandomUniquePosition() {
        let left, top;
        let unique = false;

        while (!unique) {
            left = Math.floor(Math.random() * (window.innerWidth - 100)) + 'px';
            top = Math.floor(Math.random() * (window.innerHeight - 100)) + 'px';
            const position = `${left}-${top}`;
            if (!usedPositions.has(position)) {
                usedPositions.add(position);
                unique = true;
            }
        }

        return { left, top };
    }

    // Inicializa posiciones aleatorias únicas
    decorations.forEach(decoration => {
        const { left, top } = getRandomUniquePosition();
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

