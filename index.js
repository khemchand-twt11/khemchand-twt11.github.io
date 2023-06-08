gsap.to("#basic-info >div:nth-child(1)", {
  duration: 1.7,
  ease: "back.out(1.5)",
  x: 80,
});

//smooth scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main-container"),
  smooth: true,
  direction: "vertical",
  scrollFromAnywhere: true,
});
scroll.scrollTo("top");
