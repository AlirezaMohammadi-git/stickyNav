const nav = document.querySelector(".navbar");
const backgroundImage = document.querySelector(".background-img");
const logo = document.querySelector(".logo");

function fixNavPosition() {
  if (this.scrollY > backgroundImage.clientHeight) {
    nav.classList.add("active");
    logo.classList.add("active");
  } else {
    nav.classList.remove("active");
    logo.classList.remove("active");
  }
}

window.addEventListener("scroll", fixNavPosition);
