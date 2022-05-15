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
const currentPage = {
  currentNewsPage: 1,
}

window.localStorage.setItem('newsPage', JSON.stringify(currentPage))

let numberPage = JSON.parse(window.localStorage.getItem('newsPage'));

const activePageNews = (number) => {
  const pageEl = document.getElementById(`${number.currentNewsPage}`)
  pageEl.classList.add('active')
}

const newsBtnsEl = $$('.news__switch-btn')
newsBtnsEl.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let btnHasActive = $('.news__switch-btn.active')
    if (e.target.classList.contains('active')) {
      return
    } else {
      btnHasActive.classList.remove('active')
      currentPage.currentNewsPage = Number(e.target.id)
      console.log(currentPage)

      window.localStorage.setItem('newsPage', JSON.stringify(currentPage))

      let numberPage = JSON.parse(window.localStorage.getItem('newsPage'));

      activePageNews(numberPage)
    }
  })

})

activePageNews(numberPage)



