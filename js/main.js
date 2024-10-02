const body = document.querySelector('.body')

const burgerMenu = document.querySelector('.burger-menu')
const openBurgerMenuButton = document.querySelector('.burger-button__img')
const closeBurgerMenuButton = document.querySelector('.burger-menu__close-button')

openBurgerMenuButton.addEventListener('click', () => {
  burgerMenu.classList.add('menu-open')
  body.classList.add('overflow')
})

closeBurgerMenuButton.addEventListener('click', () => {
  burgerMenu.classList.remove('menu-open')
  body.classList.remove('overflow')
})

function link() {
  burgerMenu.classList.remove('menu-open')
  body.classList.remove('overflow')
}