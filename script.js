document.addEventListener('DOMContentLoaded', function() {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorBox = document.getElementById('colorBox');
    const hexCode = document.getElementById('hexCode');

    function updateColor() {
        const red = parseInt(redRange.value) || 0;
        const green = parseInt(greenRange.value) || 0;
        const blue = parseInt(blueRange.value) || 0;

        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        colorBox.style.backgroundColor = rgbColor;

        const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`.toUpperCase();
        hexCode.textContent = hexColor;

        // Sincronizar valores de los inputs con los sliders
        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;
    }

    function updateSliders() {
        const red = parseInt(redInput.value) || 0;
        const green = parseInt(greenInput.value) || 0;
        const blue = parseInt(blueInput.value) || 0;

        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;

        updateColor();
    }

    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);

    redInput.addEventListener('input', updateSliders);
    greenInput.addEventListener('input', updateSliders);
    blueInput.addEventListener('input', updateSliders);

    // Inicializar el color al cargar la página
    updateColor();
});
