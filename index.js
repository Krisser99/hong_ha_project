
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Show/hide menu mobile

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

// Scroll To Top
const scrollEl = $('.scroll')

const handleGoToTop = () => {

  if (window.scrollY >= 300) {
    scrollEl.classList.add('active')
  } else {
    scrollEl.classList.remove('active')
  }
}


scrollEl.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
window.addEventListener('scroll', handleGoToTop)

// Switch News Page
let activeNewsPage = window.location.pathname;

const pageLink = $$('.news__switch-btn')

console.log(activeNewsPage)
pageLink.forEach(link => {
  
  if(link.href.includes(`${activeNewsPage}`)) {
    link.classList.add('active')
  }
})



// activeNavLink
const activePage = window.location.pathname;

const navLinks = $$('.nav__item-link')

navLinks.forEach(link => {
  if(link.href.includes(`${activePage}`)) {
    link.classList.add('active')
  }
})





