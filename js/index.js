// Navbar
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
