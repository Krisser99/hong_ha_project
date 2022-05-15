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
  
  if(window.scrollY >= 300) {
    scrollEl.classList.add('active')
  } else {
    scrollEl.classList.remove('active')
  }
}


scrollEl.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
})
window.addEventListener('scroll', handleGoToTop)

// sticky

const productNavEl = $('.product-nav')

let shouldStickyPosition = productNavEl.offsetTop
console.log(shouldStickyPosition)

const addOrRemoveStickyClass = () => {
  if (window.pageYOffset >= shouldStickyPosition) {
    productNavEl.classList.add('sticky')
  } else {
    productNavEl.classList.remove('sticky')
  }
}

window.onscroll = () => {
  addOrRemoveStickyClass();
}

window.onresize = () => {
  shouldStickyPosition = productNavEl.offsetTop
  console.log(shouldStickyPosition)
}



