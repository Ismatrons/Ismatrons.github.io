const pickBtn = document.getElementById('pickBtn');
const colorPreview = document.getElementById('colorPreview');
const hexText = document.getElementById('hexText');
const hslText = document.getElementById('hslText');
const copyBtns = document.querySelectorAll('.btn-copy');
const toast = document.getElementById('toast');
const errorMsg = document.getElementById('errorMsg');

// Función para convertir HEX a HSL
function hexToHSL(hex) {
    let r = parseInt(hex.substring(1, 3), 16) / 255;
    let g = parseInt(hex.substring(3, 5), 16) / 255;
    let b = parseInt(hex.substring(5, 7), 16) / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // acromático (gris)
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;
}

if (!('EyeDropper' in window)) {
    errorMsg.style.display = 'block';
    pickBtn.disabled = true;
    pickBtn.style.background = '#e0e0e0';
    pickBtn.style.color = '#a0a0a0';
    pickBtn.style.boxShadow = 'none';
    pickBtn.style.cursor = 'not-allowed';
} else {
    const eyeDropper = new EyeDropper();

    pickBtn.addEventListener('click', async () => {
        try {
            const result = await eyeDropper.open();
            const colorHex = result.sRGBHex.toUpperCase();
            const colorHSL = hexToHSL(colorHex);
            
            colorPreview.style.backgroundColor = colorHex;
            hexText.textContent = colorHex;
            hslText.textContent = colorHSL;
        } catch (err) {
            console.log("Selección cancelada o error:", err);
        }
    });
}

// Evento para los botones de copia
copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const textToCopy = document.getElementById(targetId).textContent;

        navigator.clipboard.writeText(textToCopy).then(() => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
        });
    });
});