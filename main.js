const hamburger = document.getElementById('hamburger')
const menuItems = document.querySelector('.menu_items')
const mobileMenu = document.querySelector('.mobile_menu')
const closeButton = document.querySelector('.close_button')
const gotoItems = document.querySelectorAll('.goto')
function toggling() {
    menuItems.classList.toggle("appear");
    mobileMenu.classList.toggle("open");
}
hamburger.addEventListener('click', toggling)
closeButton.addEventListener('click', toggling)
for (let i = 0; i < gotoItems.length; i++) {
    gotoItems[i].onclick = toggling
}