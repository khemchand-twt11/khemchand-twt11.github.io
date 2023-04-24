gsap.to("#basic-info >div:nth-child(1)", {
  duration: 1.7,
  ease: "back.out(1.5)",
  x: 80,
});

const menu = document.getElementById("menu");
const navbar = document.getElementById("nav-menu");

menu.addEventListener("click", () => {
  navbar.classList.toggle("show");
  menu.classList.toggle("active");
});
