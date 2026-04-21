const portfolio = document.getElementById('portfolio');

const projects = [
{
titulo: "IsmaConvert",
descripcion: "Convierte tus mejores momentos a otra escala.",
imagen: "./images/ismaconvert.jpg",
link: "https://ismatrons.com/ismaconvert"
},
{
titulo: "IsmatronsPack",
descripcion: "¡Descarga ya mi texturepack! ¡IsmatronsPack!",
imagen: "./images/ismatronspack.jpg",
link: "https://pack.ismatrons.com"
}
];

projects.forEach(project => {
const div = document.createElement('div');
div.className = 'item';

div.innerHTML = `
    <img src="${project.imagen}" style="width:100%; height:100%; object-fit:cover;">
    <div class="overlay">
    <strong>${project.titulo}</strong><br>
    ${project.descripcion}
    </div>
`;

div.onclick = () => {
    window.open(project.link, "_blank");
};

portfolio.appendChild(div);
});

function sobremi() {
window.location.href = "sobre-mi.html";
}

function proyectos() {
window.location.href = "proyectos.html";
}

function mailto(){
window.open('mailto:business@ismatrons.com', '_blank');
}

function openLink(url) {
window.open(url, "_blank");
}

function cositas() {
window.location.href = "cositas.html";
}

function home() {
window.location.href = "index.html";
}