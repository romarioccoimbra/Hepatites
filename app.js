document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(
        ".expandable-card, .disease-card, .faq-item, .container",
      );

      if (!card) return;

      let content = null;

      if (button.classList.contains("full")) {
        content = button.nextElementSibling;
      } else {
        content = card.querySelector(".card-content");
      }

      if (!content) return;

      const isOpen = content.style.maxHeight;

      button.classList.toggle("active");

      if (isOpen) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  document.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  const shareButton = document.getElementById("shareButton");

  if (shareButton && navigator.share) {
    shareButton.addEventListener("click", async () => {
      try {
        await navigator.share({
          title: "Julho Amarelo | Hepatites Virais",
          text: "Conheça as hepatites virais e saiba como se prevenir.",
          url: window.location.href,
        });
      } catch (e) {}
    });
  } else if (shareButton) {
    shareButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copiado!");
      } catch (e) {
        alert(window.location.href);
      }
    });
  }
});
