window.onscroll = function() {
    let header = document.querySelector("header");
    let mainTitle = document.getElementById("main-title");
    let navButtons = document.getElementById("nav-buttons");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};
