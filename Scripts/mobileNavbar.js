// Mobile menu open/close
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileNav = document.querySelector(".m-nav");

openMenu.addEventListener("click", () => {
  mobileNav.classList.add("active");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
});


document.querySelectorAll(".m-nav a").forEach(link => {
  link.addEventListener("click", e => {
    const parentLi = link.parentElement;


    if (parentLi.classList.contains("dropdown")) {
      e.preventDefault(); 
      const submenu = parentLi.querySelector("ul");
      submenu.classList.toggle("dropdown-active");
      return;
    }

    mobileNav.classList.remove("active");
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
  });
});

// Scroll Spy for Active Nav Links 
const sections = document.querySelectorAll("section[id]"); 
const navLinks = document.querySelectorAll(".navlink");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; 
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) { // adjust 50px to when you want the change
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
