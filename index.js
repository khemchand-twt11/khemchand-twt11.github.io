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

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = sID;
  const templateID = tID;

  emailjs.send(serviceID, templateID, params).then((res) => {
    name.value = "";
    email.value = "";
    message.value = "";
    console.log(res);
    document.getElementById("name").value,
      document.getElementById("email").value,
      document.getElementById("message").value,
      alert("your message sent successfy");
  });
}
