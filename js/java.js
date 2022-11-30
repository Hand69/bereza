const menu = document.querySelector('.burger_menu2')
const menuBtn = document.querySelector('.burger_menu')
const popap = document.querySelector('.popappp')

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        popap.classList.toggle('active')
    })
}

if (menu && menuBtn) {
    popap.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        popap.classList.toggle('active')
    })
}





