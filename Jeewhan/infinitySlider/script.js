const slideBox = document.querySelector(".slideBox");
const indicator = document.querySelector(".indicator");
const directionBox = document.querySelector(".directionBox");
const slideWidth = window.getComputedStyle(slideBox).getPropertyValue("width").slice(0, -2) * 1;

const bifurcation = { left: slideWidth, right: -slideWidth };

function getLeftValue(element) {
  return window.getComputedStyle(element).getPropertyValue("left").slice(0, -2) * -1;
}

// 무한스크롤을 위해 반대방향 끝에 있는 슬라이드를 이동
function moveEdgeSlide(direction, xValue) {
  if (direction === "left") {
    const clone = slideBox.lastElementChild.cloneNode();

    clone.innerHTML = slideBox.lastElementChild.innerHTML;
    clone.style.left = (xValue + bifurcation[direction]) * -1 + "px";

    slideBox.insertBefore(clone, slideBox.firstElementChild);
    slideBox.lastElementChild.remove();
  }
  else if (direction === "right") {
    const clone = slideBox.firstElementChild.cloneNode();

    clone.innerHTML = slideBox.firstElementChild.innerHTML;
    clone.style.left = (xValue + bifurcation[direction]) * -1 + "px";

    slideBox.appendChild(clone);
    slideBox.firstElementChild.remove();
  }
}

// 화살표에 따라 슬라이드 보여주는 박스를 이동
function controlBox(direction) {
  const xValue = slideBox.style.transform.replace(/translate3d\((.?\d+)px.+/, "$1") * 1;
  const firstSlideLeft = getLeftValue(slideBox.firstElementChild);
  const lastSlideLeft = getLeftValue(slideBox.lastElementChild);

  if ((direction === "left" && xValue === firstSlideLeft) ||
     (direction === "right" && xValue === lastSlideLeft)) {
    moveEdgeSlide(direction, xValue);
  }
  slideBox.style.transform = "translate3d(" + (xValue + bifurcation[direction]) + "px, 0, 0)";
}

directionBox.addEventListener("click",
  (evt) => { controlBox(evt.target.className); }
);

indicator.addEventListener("click", (evt) => {
  const iconIndex = evt.target.className.replace(/circle(\d+)$/, "$1") * 1;
  const slideAll = document.querySelectorAll("div.slide");

  // http://www.bsidesoft.com/?p=323
  const location = Array.prototype.slice.call(slideAll).filter((slide) => {
    if (iconIndex === slide.className.slice(-1) * 1) { return true; }
  });

  slideBox.style.transform = "translate3d(" + getLeftValue(location[0]) + "px, 0, 0)";
});

// TODO: slide를 absoulute + left가 아닌 relative + float left로 바꿀 수 있는가?
// TODO: indicator 클릭시 무조건 오른쪽으로 흐르도록 수정
// (5->1->2->3->4, 현재 화면 1번에서 5번 indicator를 누르면 오른쪽으로 가면서 2,3,4를 스치고 5번을 만남)
