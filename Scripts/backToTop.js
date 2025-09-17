document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.querySelector(".top");

  // Hide button at start
  backToTop.classList.remove("active");

  // Show/hide on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }
  });

  // Smooth scroll to top on click
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
