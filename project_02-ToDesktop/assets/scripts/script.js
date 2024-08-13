const hamburger_menu = document.getElementById('hamburger-menu');
const hamburger_links = document.getElementById('links');

hamburger_menu.addEventListener('click', function() {
    hamburger_menu.classList.toggle('toggle');
    hamburger_links.classList.toggle('links');
})