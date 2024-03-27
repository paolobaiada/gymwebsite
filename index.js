//gestione hamburger menu
const toggleButton = () => {
  const sidebar = document.querySelector(".sidebar");
  const isOpen = sidebar.classList.toggle("open");
  if (isOpen) {
    setTimeout(() => {
      document.body.style.overflow = "hidden"; // Blocca lo scroll del body
    }, 600);
  } else {
    setTimeout(() => {
      document.body.style.overflow = "auto"; // Riattiva lo scroll del body
    }, 100);
  }
};
//animazione navbar allo scorrimento
const toggleNavbar = () => {
  const nav = document.querySelector(".nav");
  const navBar = document.querySelector(`.navbar`);
  const logo = document.querySelector(".logo img");
  console.log("logo" + logo);
  const hamburgers = document.querySelectorAll(".hamburger");
  const info = document.querySelector(".info");

  if (window.scrollY > 50) {
    nav.style.backgroundColor = "#ffffff";
    logo.src = "assets/virgin-active-logo-black.svg";
    hamburgers.forEach((hamburger) => {
      hamburger.style.backgroundColor = "#000000";
    });
    info.style.filter = "invert(0)";
    navBar.style.color = "#000000";
  } else {
    nav.style.backgroundColor = "transparent";
    logo.src = "assets/virgin-active-logo-black.svg";
    hamburgers.forEach((hamburger) => {
      hamburger.style.backgroundColor = "#ffffff";
    });
    info.style.filter = "invert(100)";
    navBar.style.color = "#ffffff";
  }
};

//animazioni immagini scroll
const toggleImage = () => {
  let images = document.querySelectorAll(".animation");
  for (let i = 0; i < images.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = images[i].getBoundingClientRect().top;
    if (elementTop < windowHeight) {
      images[i].classList.add("active");
    } else {
      images[i].classList.remove("active");
    }
  }
};



