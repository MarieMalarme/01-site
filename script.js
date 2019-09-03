const themeSwitch = document.getElementById('theme-switch')
const image = document.getElementById('image')
const logo = document.getElementById('logo')
const navbarGradient = document.getElementById('navbar-gradient')
const navbar = document.getElementById('navbar')
const body = document.querySelector('body')
const switchIcon = document.getElementById('switch-icon')
const switchText = document.getElementById('switch-text')

themeSwitch.addEventListener('click', () => {
  if (image.src.includes(`light`)) {
    body.style.background = `rgb(37, 37, 37)`
    image.src = `img/20190830-site-vitrine-dark.jpg`
    logo.src = `img/01-white.svg`
    body.style.color = `white`
    navbarGradient.style.background = `linear-gradient(to bottom, rgb(30, 30, 30) 0%, rgba(30, 30, 30, 0.35) 70%, transparent 100%)`
    switchIcon.src = `img/01-icon-light.svg`
    switchText.innerHTML = `Light`
  } else {
    body.style.background = `white`
    image.src = `img/20190830-site-vitrine-light.jpg`
    logo.src = `img/01-black.svg`
    body.style.color = `black`
    navbarGradient.style.background = `linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0.35) 70%, transparent 100%)`
    switchIcon.src = `img/01-icon-dark.svg`
    switchText.innerHTML = `Dark`
  }
})

document.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    navbar.classList.add('fade-in')
    navbarGradient.classList.add('fade-in')
    navbar.classList.remove('hidden')
    navbarGradient.classList.remove('hidden')
  } else {
    navbar.classList.remove('fade-in')
    navbarGradient.classList.remove('fade-in')
    navbar.classList.add('hidden')
    navbarGradient.classList.add('hidden')
  }
})
