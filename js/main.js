
/*==================== FECHA COPYRIGHT FOOTER ====================*/

function setFecha() {
    document.getElementById('fecha').innerHTML = new Date().getFullYear();
}

setFecha();


/*==================== MENU SHOW Y HIDDEN ====================*/

/* Validate if constant exists */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navLink = document.querySelectorAll('.nav-link');

/*==================== REMOVE OR ADD MENU MOBILE ====================*/

if (navToggle) {
    navToggle.addEventListener('click', () => {
        itemList = navMenu.classList.contains("show-menu");
        if(itemList){
            navMenu.classList.remove('show-menu');
        }else{
            navMenu.classList.add('show-menu');
        }
     
    });
}
/*==================== REMOVE MENU NEW PAGE MOBILE ====================*/
navLink.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));
