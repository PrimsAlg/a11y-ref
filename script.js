const menuButton = document.getElementsByClassName('menu-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const wordButton = document.getElementsByClassName('word-button')[0]
const wordLinks = document.getElementsByClassName('word-links')[0]
const pptButton = document.getElementsByClassName('ppt-button')[0]
const pptLinks = document.getElementsByClassName('ppt-links')[0]
const pdfButton = document.getElementsByClassName('pdf-button')[0]
const pdfLinks = document.getElementsByClassName('pdf-links')[0]
const videoButton = document.getElementsByClassName('video-button')[0]
const videoLinks = document.getElementsByClassName('video-links')[0]
const otherButton = document.getElementsByClassName('other-button')[0]
const otherLinks = document.getElementsByClassName('other-links')[0]

menuButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
wordButton.addEventListener('click', () => {
    wordLinks.classList.toggle('active')
    wordButton.classList.toggle('active')
})
pptButton.addEventListener('click', () => {
    pptLinks.classList.toggle('active')
    pptButton.classList.toggle('active')
})
pdfButton.addEventListener('click', () => {
    pdfLinks.classList.toggle('active')
    pdfButton.classList.toggle('active')
})
videoButton.addEventListener('click', () => {
    videoLinks.classList.toggle('active')
    videoButton.classList.toggle('active')
})
otherButton.addEventListener('click', () => {
    otherLinks.classList.toggle('active')
    otherButton.classList.toggle('active')
})
