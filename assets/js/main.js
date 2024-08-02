/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle =  document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// function to remove the 'show-menu' on the nav-menu
const removeShowMenu = () => {
    navMenu.classList.remove('show-menu')
}
    //   menu show
if (navToggle) {
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

// menu hidden
if (navClose) {
    navClose.addEventListener('click',removeShowMenu)
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
// const linkAction = () => {
//     const navMenu = document.getElementById('nav-menu')
// }
navLink.forEach(link => link.addEventListener('click', removeShowMenu))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the 'scroll-header', otherwise remove 'scroll-header'
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollup = document.getElementById('scroll-up')
    // when scroll is higher than 350 viewport
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll') : scrollup.classList.remove('show-scroll') 
}

window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
              } else {
                sectionsClass.classList.remove('active-link')
              }
    })
}

window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true, // Animations repeat
})

sr.reveal(`.home__data, .footer`)
sr.reveal(`.home__dish`, {delay: 500, distance: '100px', origin: 'bottom'})
sr.reveal(`.home__burger`, {delay: 1200, distance:'100px', duration:1500})
sr.reveal(`.home__ingredient`, {delay: 1600, interval:100})
sr.reveal(`.recipe__img, .delivery__img, .contact__image`, {origin: 'left'})
sr.reveal(`.recipe__data, .delivery__data, .contact__data`, {origin: 'right'})
sr.reveal(`.popular__card`, {interval: 100})