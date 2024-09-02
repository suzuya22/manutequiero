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

    // Función para manejar el arrastre de las imágenes
    function makeDraggable(event) {
        event.preventDefault();
        const { clientX: startX, clientY: startY } = event;
        const { offsetLeft: startLeft, offsetTop: startTop } = this;

        function onMove(e) {
            const x = e.clientX - startX;
            const y = e.clientY - startY;
            this.style.left = `${startLeft + x}px`;
            this.style.top = `${startTop + y}px`;
        }

        function onEnd() {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onEnd);
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('touchend', onEnd);
        }

        document.addEventListener('mousemove', onMove.bind(this));
        document.addEventListener('mouseup', onEnd);
        document.addEventListener('touchmove', onMove.bind(this));
        document.addEventListener('touchend', onEnd);
    }

    // Hacer las imágenes arrastrables
    decorations.forEach(decoration => {
        decoration.addEventListener('mousedown', makeDraggable);
        decoration.addEventListener('touchstart', makeDraggable);
    });
});


