/**
 * A function that handles the navigation bar menu
 */
window.onload=function(){
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

    // disables active dropdowns
    function clearActive() {
    if (wordLinks.classList.contains('active')) {
        wordLinks.classList.toggle('active')
        wordButton.classList.toggle('active')
    }
    if (pptLinks.classList.contains('active')) {
        pptLinks.classList.toggle('active')
        pptButton.classList.toggle('active')
    }
    if (pdfLinks.classList.contains('active')) {
        pdfLinks.classList.toggle('active')
        pdfButton.classList.toggle('active')
    }
    if (videoLinks.classList.contains('active')) {
        videoLinks.classList.toggle('active')
        videoButton.classList.toggle('active')
    }
    if (otherLinks.classList.contains('active')) {
        otherLinks.classList.toggle('active')
        otherButton.classList.toggle('active')
    }
    }

    // clears content dropdowns when window is resized
    $(window).resize(function() {
    clearActive()
    })

    menuButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    clearActive() // clears content dropdowns when closed
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

};

/**
 * A function that sets header title of the page according to the parent <title> tag
 *
 * it takes the @parent_title object (<title>) from the parent page and puts its text in
 * the current page's <h1> that is inside top.html <header> tag with @page_title id
 */
window.onload = function(){
        const parent_title = document.getElementsByTagName("title");
        const page_title = document.getElementById("page_title");

        page_title.innerText = $(parent_title).text();
    };

/**
 * A function that loads header and footer
 *
 * top.html contains the header (a local directory file)
 * footer.html contains the footer (a parent directory file)
 */
window.onload = function(){
    $(function(){
        $("#header-file").load("top.html");
        $("#footer-file").load("../footer.html")
    });
}
