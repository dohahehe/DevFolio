document.addEventListener("DOMContentLoaded", () => {
  const typedEl = document.querySelector(".typed");
  if (!typedEl) return;

  const items = typedEl.getAttribute("data-typed-items").split(",").map(s => s.trim());
  let itemIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeEffect() {
    const currentItem = items[itemIndex];

    if (typing) {
      // Typing forward
      typedEl.textContent = currentItem.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentItem.length) {
        typing = false;
        setTimeout(typeEffect, 1500); 
        return;
      }
    } else {
      // Erasing backward
      typedEl.textContent = currentItem.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        typing = true;
        itemIndex = (itemIndex + 1) % items.length;
      }
    }

    setTimeout(typeEffect, typing ? 120 : 80); 
  }

  typeEffect();
});
