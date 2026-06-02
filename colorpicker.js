const pickBtn = document.getElementById('pickBtn');
const colorPreview = document.getElementById('colorPreview');
const hexText = document.getElementById('hexText');
const copyBtn = document.getElementById('copyBtn');
const toast = document.getElementById('toast');
const errorMsg = document.getElementById('errorMsg');

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
            
            colorPreview.style.backgroundColor = colorHex;
            hexText.textContent = colorHex;
        } catch (err) {
            console.log("Selección cancelada o error:", err);
        }
    });
}

copyBtn.addEventListener('click', () => {
    const textToCopy = hexText.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    });
});