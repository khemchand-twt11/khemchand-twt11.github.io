const navbar = document.querySelector(".navbar");
const cross = document.querySelector(".cross");
const hameburger = document.querySelector(".hameburger");

function toggleNavigation() {
  navbar.classList.toggle("active");
  cross.classList.toggle("active");
  hameburger.classList.toggle("active");
}

function handleResize() {
  var windowWidth = window.innerWidth;

  if (windowWidth >= 48 * 16) {
    navbar.classList.remove("active");
    cross.classList.remove("active");
    hameburger.classList.remove("active");
  }
}

window.addEventListener("resize", handleResize);
