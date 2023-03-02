const tooltip = document.querySelector(".tooltip");
const regions = document.querySelectorAll(".region");
const popupBg = document.querySelector(".info__bg");
const popup = document.querySelector(".info");

function moveInFront(element) {
  const svg = element.closest("svg");
  svg.appendChild(element);
}

regions.forEach((region) => {
  region.addEventListener("click", function () {
    popup.querySelector(".info__photo").setAttribute("src", this.dataset.photo);
    popup.querySelector(".info__title").innerText = this.dataset.title;
    popup.querySelector(".info__text").innerText = this.dataset.description;
    popupBg.classList.add("info__bg--active");
  });

  region.addEventListener("mousemove", function (e) {
    tooltip.innerText = this.dataset.title;
    tooltip.style.top = e.y + 20 + "px";
    tooltip.style.left = e.x + 20 + "px";
  });

  region.addEventListener("mouseenter", function () {
    tooltip.style.display = "block";
    moveInFront(region);
  });

  region.addEventListener("mouseleave", function () {
    tooltip.style.display = "none";
  });
});

document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("info__bg--active");
  }
});
