const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    const isOpen = mobileMenu.classList.contains("active");
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );
});

const mobileMenuLinks = mobileMenu.querySelectorAll("a");

mobileMenuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });
});
