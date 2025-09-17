document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-content p");
  const speed = 100; // lower = faster

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      // how much to increment each step
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20); // update every 20ms
      } else {
        counter.innerText = target; // make sure it stops exactly
      }
    };

    updateCount();
  });
});
