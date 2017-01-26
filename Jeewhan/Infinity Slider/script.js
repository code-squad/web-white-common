var slideBox = document.querySelector(".slideBox");
var indicator = document.querySelector(".indicator");
var directionBox = document.querySelector(".directionBox")
var slideWidth = window.getComputedStyle(slideBox.firstElementChild).getPropertyValue("width").slice(0,-2) * 1;

var bifurcation = { left: slideWidth, right: -slideWidth };


function getSlideColor(element) {
  return window.getComputedStyle(element).getPropertyValue("background-color")
}

function getLeftValue(node) {
  return window.getComputedStyle(node).getPropertyValue("left").slice(0,-2) * -1;
}

function cloneGenerate(clone, color, direction, xValue) {
  if (direction === "left") { clone.innerHTML = slideBox.lastElementChild.innerHTML; }
  else if (direction === "right") { clone.innerHTML = slideBox.firstElementChild.innerHTML; }
  clone.style.background = color;
  clone.style.left = (xValue + bifurcation[direction]) * -1 + "px";
}


function moveSlide(direction, xValue) {
  if (direction === "left") {
    let lastSlideColor = getSlideColor(slideBox.lastElementChild);
    let clone = slideBox.lastElementChild.cloneNode();

    cloneGenerate(clone, lastSlideColor, direction, xValue);

    slideBox.insertBefore(clone, slideBox.firstElementChild);

    slideBox.lastElementChild.remove();
  }
  else if (direction === "right") {
    let firstSlideColor = getSlideColor(slideBox.firstElementChild);
    let clone = slideBox.firstElementChild.cloneNode();

    cloneGenerate(clone, firstSlideColor, direction, xValue);

    let referenceNode = slideBox.lastElementChild;
    referenceNode.parentNode.insertBefore(clone, referenceNode.nextSibling);

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
  slideBox.style.transition = "all 0.5s ease-in-out";
  slideBox.style.transform = "translate3d(" + (xValue + bifurcation[direction]) + "px, 0, 0)";
}


directionBox.addEventListener("click", function(evt) {
  controlBox(evt.target.className)
});


indicator.addEventListener("click", function(evt) {
  let slideAll = document.querySelectorAll("div.slide");
  let iconIndex = evt.target.className.replace(/circle(\d+)$/, "$1") * 1;

  for (slide of slideAll) {
    if (iconIndex === slide.className.slice(-1) * 1) {
      var location = window.getComputedStyle(slide).getPropertyValue("left").slice(0,-2) * -1;
      break;
    }
  }
  slideBox.style.transition = "none";
  slideBox.style.transform = "translate3d(" + location + "px, 0, 0)";
});
