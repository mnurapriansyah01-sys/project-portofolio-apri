function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}
