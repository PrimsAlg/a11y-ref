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

function getFileName() {
    var url = document.location.pathname;
    url = url.substring(url.lastIndexOf("/") + 1, url.length);
    return url;
}

menuButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
wordButton.addEventListener('click', () => {
    if ($(window).width() < 800) {
        wordLinks.classList.toggle('active')
        wordButton.classList.toggle('active')
    } else if (getFileName() == "index.html") {
        window.location.href = 'word/word.html'
    } else {
        window.location.href = '../word/word.html'
    }
})
pptButton.addEventListener('click', () => {
    if ($(window).width() < 800) {
        pptLinks.classList.toggle('active')
        pptButton.classList.toggle('active')
    } else if (getFileName() == "index.html") {
        window.location.href = 'ppt/ppt.html'
    } else {
        window.location.href = '../ppt/ppt.html'
    }
})
pdfButton.addEventListener('click', () => {
    if ($(window).width() < 800) {
        pdfLinks.classList.toggle('active')
        pdfButton.classList.toggle('active')
    } else if (getFileName() == "index.html") {
        window.location.href = 'pdf/pdf.html'
    } else {
        window.location.href = '../pdf/pdf.html'
    }
})
videoButton.addEventListener('click', () => {
    if ($(window).width() < 800) {
        videoLinks.classList.toggle('active')
        videoButton.classList.toggle('active')
    } else if (getFileName() == "index.html") {
        window.location.href = 'video/video.html'
    } else {
        window.location.href = '../video/video.html'
    }
})
otherButton.addEventListener('click', () => {
    if ($(window).width() < 800) {
        otherLinks.classList.toggle('active')
        otherButton.classList.toggle('active')
    } else if (getFileName() == "index.html") {
        window.location.href = 'other/other.html'
    } else {
        window.location.href = '../other/other.html'
    }
})
