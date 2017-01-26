// TODO: 오른쪽을 누르면 0번을, 왼쪽을 누르면 MAX번을 가져오도록 할 것

var slideBox = document.querySelector(".slideBox");
var indicator = document.querySelector(".indicator");
var slideWidth = window.getComputedStyle(slideBox.firstElementChild).getPropertyValue("width").slice(0,-2) * 1;

var bifurcation = {
  left: slideWidth,
  right: -slideWidth
}

function getSlideColor(element) {
  return window.getComputedStyle(element).getPropertyValue("background-color")
}

function cloneGenerate(clone, color, xValue, direction) {
  clone.innerHTML = slideBox.firstElementChild.innerHTML;
  clone.style.background = color;
  clone.style.left = (xValue + bifurcation[direction]) * -1 + "px";
}

function moveSlide(direction, xValue, refer) {
  if (direction === "left" && xValue === refer) {
    let lastSlideColor = getSlideColor(slideBox.lastElementChild);
    let clone = slideBox.lastElementChild.cloneNode();

    cloneGenerate(clone, lastSlideColor, xValue, direction);

    slideBox.insertBefore(clone, slideBox.firstElementChild);

    slideBox.lastElementChild.remove();
  }
  else if (direction === "right" && xValue === refer) {
    let firstSlideColor = getSlideColor(slideBox.firstElementChild);
    let clone = slideBox.firstElementChild.cloneNode();

    cloneGenerate(clone, firstSlideColor, xValue, direction);

    let referenceNode = slideBox.lastElementChild;
    referenceNode.parentNode.insertBefore(clone, referenceNode.nextSibling);

    slideBox.firstElementChild.remove();
  }
}

function controlBox(direction) {
  let xValue = slideBox.style.transform.replace(/translate3d\((.?\d+)px.+/, "$1") * 1;
  let firstSlideLeft = window.getComputedStyle(slideBox.firstElementChild).getPropertyValue("left").slice(0,-2) * -1;
  let lastSlideLeft = window.getComputedStyle(slideBox.lastElementChild).getPropertyValue("left").slice(0,-2) * -1;

  if (direction === "left" && xValue === firstSlideLeft) { moveSlide(direction, xValue, firstSlideLeft); slideBox.style.transition = "none"; }
  else if (direction === "right" && xValue === lastSlideLeft) { moveSlide(direction, xValue, lastSlideLeft); slideBox.style.transition = "none"; }

  slideBox.style.transition = "all 0.5s ease-in-out";
  slideBox.style.transform = "translate3d(" + (xValue + bifurcation[direction]) + "px, 0, 0)";
}

document.querySelector(".directionBox").addEventListener("click", function(evt) { controlBox(evt.target.className) });

indicator.addEventListener("click", function(evt) {
  let slideAll = document.querySelectorAll("div.slide");
  let iconIndex = evt.target.className.replace(/circle(\d+)$/, "$1") * 1;

  for (slide of slideAll) {
    if (iconIndex === slide.className.slice(-1) * 1) {
      var location = window.getComputedStyle(slide).getPropertyValue("left").slice(0,-2) * -1;
      break;
    }
  }
  slideBox.style.transition = "all 0.5s ease-in-out";
  slideBox.style.transform = "translate3d(" + location + "px, 0, 0)";
});
