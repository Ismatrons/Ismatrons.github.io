document.querySelector('.dropbtn').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
});

document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target) && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
});
