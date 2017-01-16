/*
 * 1. executeItemNode 함수를 완성하세요
 * 이 함수의 actionType 매개변수는 'add' 또는 'remove'를 받습니다.  add를 받으면 추가하고, remove를 받으면 일을 삭제합니다.
 * todoORnumber 는 add일때는 새로운 일을 문자열로 받고, remove일때는 숫자를 받습니다.
 * 할 일 목록은 할일의 문자열 길이 순으로 정렬됩니다. 목록이 추가될때마다 바로 정렬되야 합니다.(가장 긴 할일 내용이 뒤로 가야함)
 * 추가하려는 경우 이미 같은 일이 있다면 message영역에서 적당한 메시지를 붉은색으로 표시했다 3초뒤 사라집니다.
 * 삭제하려는 경우 num과 일치하는 item번호가 없다면 'message' 영역에서 적당한 메시지를 붉은색으로 표시됐다 3초뒤 사라집니다.
 * 함수를 여러개로 나눠도 상관없습니다.
 * 참고로 1번을 풀기 위해서는 string조작과 setTimeout이라는 것을 공부해야 할 수도 있습니다.
 *
 * 2. 좀더 사용하기 쉬운 웹화면이 되도록, css에 다양한 스타일을 적용하면서 꾸며봅니다.
 *
 * 3. 아래 event 관련 코드를 학습해보고, 어떤 코드를 의미하는지 최대한 자세히 주석으로 설명을 넣어보세요.
 */

// 이미 있는 할 일 목록을 Array에 할당하여 초기화

function executeItemNode(actionType, todoORnumber) {

  function $(element) {
    return document.querySelector(element);
  }

  let message = $("div.message");

  function alertMessage(comment) {
    message.appendChild(document.createElement("p"));
    message.firstElementChild.innerHTML = '<span style="color: red">' + comment + '</span>';
    setTimeout(function() { message.removeChild(message.firstElementChild); }, 3000);
  }

  let toDoList = [];

  for (let i = 0; i < $("section.basket > ol").children.length; i++) {
    toDoList.push($("section.basket > ol").children[i].innerHTML);
  }
  toDoList.sort();

  if (actionType === "add") {
    if (toDoList.indexOf(todoORnumber) === -1) {

      toDoList.push(todoORnumber);
      toDoList.sort();

      toDoList.sort(function(firstElement, secondElement) {
          return firstElement.length - secondElement.length;
      });

      $("section.basket > ol").remove();
      $("section.basket").appendChild(document.createElement("ol"));

      for (let i = 0; i < toDoList.length; i++) {
        $("section.basket > ol").appendChild(document.createElement("li"));
        $("section.basket > ol").children[i].innerHTML = toDoList[i];
      }

    }
    else if (toDoList.indexOf(todoORnumber) !== -1) {
      alertMessage("이미 있는 할 일입니다.");
    }
  }
  else if (actionType === "remove") {
    if (toDoList[todoORnumber - 1] === undefined) {
      alertMessage("삭제하려는 할 일이 없습니다.");
    }
    else if (toDoList[todoORnumber - 1] !== undefined) {
      $("section.basket > ol").children[todoORnumber-1].remove();
    }
  }
}

/*
 * 3번문제는 여기에 자세히 설명을 넣으시면 됩니다.

 * querySelector 축약

 * element의 addEventListener(event, function) method를 호출해, eventHandler 등록

 * click 이벤트 발생시 target이
 * 버튼이 아닐 때는 return을 통해 Pass

 * button이 맞을 때는
 * button 태그 이전에 있는 Input Tag의 값을 inputValue에 할당
 * button의 클래스명은 actionType에 할당
 * 두 변수를 executeItemNode의 Parameter로 넘겨서 호출

 */

var controller = document.querySelector(".controller");

controller.addEventListener("click", function(evt) {

  var btn = evt.target;
  if (btn.tagName !== "BUTTON") return;
  var inputValue = btn.previousElementSibling.value;
  var actionType = btn.className;
  executeItemNode(actionType, inputValue);

});
