document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const imageInput = document.getElementById('image-input');
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            
            img.onload = function() {
                const canvas = document.getElementById('canvas');
                const ctx = canvas.getContext('2d');
                
                canvas.width = width;
                canvas.height = height;
                
                ctx.drawImage(img, 0, 0, width, height);
            }
        }
        
        reader.readAsDataURL(imageInput.files[0]);
    }
});

document.getElementById('download-button').addEventListener('click', function() {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'imagen_redimensionada.png';
    link.click();
});
