const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuMobileEl = $('.mobile__menu')
const closeMobileEl = $('.close-icon-mobile')
const navEl = $('.nav')

const handleShowMobileNav = () => {
  navEl.classList.add('active')
}

const handleHideMobileNav = () => {
  navEl.classList.remove('active')
}


menuMobileEl.addEventListener('click', handleShowMobileNav)
closeMobileEl.addEventListener('click', handleHideMobileNav)