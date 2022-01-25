const hamburger=document.getElementById('hamburger')
const menuItems=document.querySelector('.menu_items')
const mobileMenu=document.querySelector('.mobile_menu')
const closeButton=document.querySelector('.close_button')
const gotoItems=document.querySelectorAll('.goto')
hamburger.addEventListener('click',function(){
    menuItems.style.display="block";
    mobileMenu.classList.toggle("open");
})

function menu_dissapear(){
    menuItems.style.display="none";
    mobileMenu.classList.toggle("open");
}

closeButton.addEventListener('click',menu_dissapear)
for(let i =0; i<gotoItems.length;i++){
    gotoItems[i].onclick=menu_dissapear
}