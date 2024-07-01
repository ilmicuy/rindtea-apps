// Navbar
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");
const searchForm = document.querySelector(".search-form");
const searchBox = document.getElementById("search-box");
const searchButton = document.getElementById("search-button");
const shoppingButton = document.getElementById("shopping-cart-button");
const shoppingCart = document.querySelector(".shopping-cart");

// Toggle Hamburger Menu
hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// Toggle Search
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchForm.classList.toggle("active");
  searchBox.focus();
});

// Toggle Shopping Cart
shoppingButton.addEventListener("click", (e) => {
  e.preventDefault();
  shoppingCart.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!shoppingButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.getElementById("item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const closeIcon = document.querySelector(".modal .close-icon");

itemDetailButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  });
});

closeIcon.addEventListener("click", (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
});

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
