document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".card-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      window.open(button.dataset.url, "_blank");
    });
  });
});