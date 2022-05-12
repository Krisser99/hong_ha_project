

const scrollEl = $('.scroll')

const handleGoToTop = () => {
  
  if(window.scrollY >= 640) {
    scrollEl.classList.add('active')
  } else {
    scrollEl.classList.remove('active')
  }
}


scrollEl.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
})
window.addEventListener('scroll', handleGoToTop)