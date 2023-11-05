const tooltip = document.querySelector(".tooltip");
const tooltipContainer = document.querySelector(".tooltip-container");

tooltipContainer.addEventListener("mouseout", () => {
  tooltip.textContent = "Click here to see more info";
});