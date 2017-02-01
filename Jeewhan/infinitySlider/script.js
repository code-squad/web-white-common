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
    slideBox.insertBefore(slideBox.lastElementChild, slideBox.firstElementChild);
    slideBox.firstElementChild.style.left = `${(xValue + bifurcation[direction]) * -1}px`;
  } else {
    slideBox.appendChild(slideBox.firstElementChild);
    slideBox.lastElementChild.style.left = `${(xValue + bifurcation[direction]) * -1}px`;
  }
}

// 화살표에 따라 슬라이드 보여주는 박스를 이동
function moveBox(direction) {
  const xValue = slideBox.style.transform.replace(/translate3d\((.?\d+)px.+/, "$1") * 1;
  const firstSlideLeft = getLeftValue(slideBox.firstElementChild);
  const lastSlideLeft = getLeftValue(slideBox.lastElementChild);

  if ((direction === "left" && xValue === firstSlideLeft) ||
     (direction === "right" && xValue === lastSlideLeft)) {
    moveEdgeSlide(direction, xValue);
  }
  slideBox.style.transform = `translate3d(${xValue + bifurcation[direction]}px, 0, 0)`;
}

// DOM이 다 불려진 뒤에, 자동움직임과 화살표 그리고 인디케이터에 이벤트 등록
document.addEventListener("DOMContentLoaded", () => {
  directionBox.addEventListener("click",
    (evt) => { moveBox(evt.target.className); }
  );

  indicator.addEventListener("click", (evt) => {
    const iconIndex = evt.target.className.replace(/circle(\d+)$/, "$1") * 1;
    const slideAll = document.querySelectorAll("div.slide");

    // http://www.bsidesoft.com/?p=323
    const location = Array.prototype.slice.call(slideAll).filter((slide) => {
      if (iconIndex === slide.className.match(/\d+/)[0] * 1) { return true; }
      return false;
    });

    slideBox.style.transform = `translate3d(${getLeftValue(location[0])}px, 0, 0)`;
  });

  // 첫 번째 인자에 함수 호출이 아닌 함수 자체가 담겨야만 반복실행된다
  setInterval(() => { moveBox("right"); }, 3000);
});

// TODO: slide를 absoulute + left가 아닌 relative + float left로 바꿀 수 있는가?
// TODO: indicator 클릭시 무조건 오른쪽으로 흐르도록 수정
// (5->1->2->3->4, 현재 화면 1번에서 5번 indicator를 누르면 오른쪽으로 가면서 2,3,4를 스치고 5번을 만나도록)
// TODO: 몇 초마다 슬라이드가 넘어가도록 하고 싶다면, setTimeout을 사용할 것(재귀호출)
// 슬라이드 개수를 늘려도 잘 작동하는가?
