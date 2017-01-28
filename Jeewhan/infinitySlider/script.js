var slideBox = document.querySelector(".slideBox");
var indicator = document.querySelector(".indicator");
var directionBox = document.querySelector(".directionBox");
const slideWidth = window.getComputedStyle(slideBox.firstElementChild).getPropertyValue("width").slice(0,-2) * 1;

const bifurcation = { left: slideWidth, right: -slideWidth };


function getLeftValue(node) {
  return window.getComputedStyle(node).getPropertyValue("left").slice(0,-2) * -1;
}

function moveSlide(direction, xValue) {
  if (direction === "left") {
    let clone = slideBox.lastElementChild.cloneNode();
    clone.innerHTML = slideBox.lastElementChild.innerHTML;
    clone.style.left = (xValue + bifurcation[direction]) * -1 + "px";

    slideBox.insertBefore(clone, slideBox.firstElementChild);

    slideBox.lastElementChild.remove();
  }
  else if (direction === "right") {
    let clone = slideBox.firstElementChild.cloneNode();
    clone.innerHTML = slideBox.firstElementChild.innerHTML;
    clone.style.left = (xValue + bifurcation[direction]) * -1 + "px";

    slideBox.appendChild(clone);

    slideBox.firstElementChild.remove();
  }
}


function controlBox(direction) {
  let xValue = slideBox.style.transform.replace(/translate3d\((.?\d+)px.+/, "$1") * 1;
  let firstSlideLeft = getLeftValue(slideBox.firstElementChild);
  let lastSlideLeft = getLeftValue(slideBox.lastElementChild);

  if ((direction === "left" && xValue === firstSlideLeft) ||
     (direction === "right" && xValue === lastSlideLeft)) {
       moveSlide(direction, xValue);
  }
  slideBox.style.transform = "translate3d(" + (xValue + bifurcation[direction]) + "px, 0, 0)";
}


directionBox.addEventListener("click",
  (evt) => { controlBox(evt.target.className); }
);


indicator.addEventListener("click", (evt) => {
  let slideAll = document.querySelectorAll("div.slide");
  let iconIndex = evt.target.className.replace(/circle(\d+)$/, "$1") * 1;
  let location = 0;

  for (let slide of slideAll) {
    if (iconIndex === slide.className.slice(-1) * 1) {
      location = window.getComputedStyle(slide).getPropertyValue("left").slice(0,-2) * -1;
      break;
    }
  }
  slideBox.style.transform = "translate3d(" + location + "px, 0, 0)";
});
