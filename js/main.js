
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


/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


