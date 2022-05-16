
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

// activeNavLink
const activePage = window.location.pathname;

const navLinks = $$('.nav__item-link')

console.log(navLinks)
navLinks.forEach(link => {
  if(link.href.includes(`${activePage}`)) {
    link.classList.add('active')
  }
})

// Validate form

const formEl = document.getElementById('form')
const userName = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')




// Show Error
const showError = (input, message) => {
  const formControl = input.parentElement
  formControl.className = 'contact__form-control error'
  const small = formControl.querySelector('small')

  small.innerText = message
}

const showSuccess = (input) => {
  const formControl = input.parentElement
  formControl.className = 'contact__form-control success'
  const small = formControl.querySelector('small')
  small.innerText = ''
}

// Required Valid 

const isRequired = (inputArr) => {
  let isRequired = false
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
      isRequired = true
    } else {
      showSuccess(input)
    }
  })
  return isRequired
}

// Get Field Name

const getFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// validate email
function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    showSuccess(email)
  }
  showError(email, "You have entered an invalid email address!")
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  if (!isRequired([userName, email, phone])) {
    ValidateEmail(email)
  }

})




