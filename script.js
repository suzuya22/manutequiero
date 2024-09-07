document.addEventListener('DOMContentLoaded', () => {
    const decorations = document.querySelectorAll('.decoration');
    const usedPositions = new Set();
    let selectedDecoration = null; // Para rastrear la imagen seleccionada

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

    // Inicializa posiciones aleatorias únicas dentro del área visible
    decorations.forEach(decoration => {
        const { left, top } = getRandomUniquePosition();
        decoration.style.left = left;
        decoration.style.top = top;
    });

    // Función para manejar el arrastre de las imágenes
    function makeDraggable(event) {
        event.preventDefault();

        if (selectedDecoration) {
            return; // Si ya hay una imagen seleccionada, no hacer nada
        }

        selectedDecoration = this;

        const startX = event.clientX || event.touches[0].clientX;
        const startY = event.clientY || event.touches[0].clientY;
        const startLeft = this.offsetLeft;
        const startTop = this.offsetTop;

        function onMove(e) {
            e.preventDefault();
            const x = (e.clientX || e.touches[0].clientX) - startX;
            const y = (e.clientY || e.touches[0].clientY) - startY;

            // Actualizar las posiciones de la imagen sin restricciones
            selectedDecoration.style.left = (startLeft + x) + 'px';
            selectedDecoration.style.top = (startTop + y) + 'px';
        }

        function onEnd() {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onEnd);
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('touchend', onEnd);
            selectedDecoration = null; // Deseleccionar al finalizar el arrastre
        }

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onEnd);
        document.addEventListener('touchmove', onMove);
        document.addEventListener('touchend', onEnd);
    }

    // Función para manejar el doble clic (deseleccionar imagen)
    function deselectImage(event) {
        event.preventDefault();
        if (selectedDecoration === this) {
            selectedDecoration = null;
        }
    }

    // Hacer las imágenes arrastrables solo cuando se mantenga presionado el clic
    decorations.forEach(decoration => {
        decoration.addEventListener('mousedown', makeDraggable);
        decoration.addEventListener('touchstart', makeDraggable);
        decoration.addEventListener('dblclick', deselectImage);
    });
});

