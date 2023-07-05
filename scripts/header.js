const header = document.querySelector('.header')
const menu = document.querySelector('.burger__menu')
const menuIcon = document.querySelector('.menuIcon')
const closeIcon = document.querySelector('.closeIcon')
const hamburger = document.querySelector('.humburger')

function toggleMenu () {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu')
        closeIcon.style.display = 'none'
        menuIcon.style.display = 'block'
        header.style.background = 'none'
    } else {
        menu.classList.add('showMenu')
        closeIcon.style.display = 'block'
        menuIcon.style.display = 'none'
        header.style.background = '#181E1A'
    }
}
hamburger.addEventListener('click', toggleMenu)

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) {
        header.style.background = '#181E1A'
    } else {
        header.style.background = 'none'
    }
});