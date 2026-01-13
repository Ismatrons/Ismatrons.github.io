function login() {
const user = document.getElementById('user').value;
const pass = document.getElementById('pass').value;


if (user === 'debo' && pass === 'prueba1') {
document.getElementById('login').style.display = 'none';
document.getElementById('page').style.display = 'block';
} else {
document.getElementById('error').style.display = 'block';
}
}