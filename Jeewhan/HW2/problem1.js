/*
 * 1. executeItemNode 함수를 완성하세요
 * 이 함수의 actionType 매개변수는 'add' 또는 'remove'를 받습니다.  add를 받으면 추가하고, remove를 받으면 일을 삭제합니다.
 * todoORnumber 는 add일때는 새로운 일을 문자열로 받고, remove일때는 숫자를 받습니다.
 * 할 일 목록은 할일의 문자열 길이 순으로 정렬됩니다. 목록이 추가될때마다 바로 정렬되야 합니다.(가장 긴 할일 내용이 뒤로 가야함)
 * 추가하려는 경우 이미 같은 일이 있다면 message영역에서 적당한 메시지를 붉은색으로 표시했다 3초뒤 사라집니다.
 * 삭제하려는 경우 num과 일치하는 item번호가 없다면 'message' 영역에서 적당한 메시지를 붉은색으로 표시됐다 3초뒤 사라집니다.
 * 함수를 여러개로 나눠도 상관없습니다.
 * 참고로 1번을 풀기 위해서는 string조작과 setTimeout이라는 것을 공부해야 할 수도 있습니다.
 */

function executeItemNode(actionType, todoORnumber) {

  const ERROR_MSG = {
    "add" : {
      "EXIST_TODO" : "이미 등록한 일입니다."
    },
    "remove" : {
      "NON_EXIST_TODO" : "삭제하려는 할 일이 없습니다."
    },
  };

  function $(element) {
    return document.querySelector(element);
  }

  function alertMessage(target, comment) {
    target.insertAdjacentHTML("afterbegin", "<p>" + comment + "</p>");
    setTimeout(function() { target.removeChild(target.firstElementChild); }, 3000);
  }

  function pushToDo(toDo) {
    toDoList.push(toDo);
    toDoList.sort();

    toDoList.sort(function(firstElement, secondElement) {
        return firstElement.length - secondElement.length;
    });

    sectionBasketOl().remove();
    $("section.basket").appendChild(document.createElement("ol"));

    for (let i = 0; i < toDoList.length; i++) {
      sectionBasketOl().insertAdjacentHTML("beforeend", "<li>" + toDoList[i] + "</li>");
    }
  }

  let message = $("div.message");

  // --------------------

  if (actionType === "add" && toDoList.indexOf(todoORnumber) === -1) {
    pushToDo(todoORnumber);
  }
  else if (actionType === "add" && toDoList.indexOf(todoORnumber) !== -1) {
    alertMessage(message, ERROR_MSG[actionType].EXIST_TODO);
  }
  else if (actionType === "remove" && toDoList[todoORnumber - 1] === undefined) {
    alertMessage(message, ERROR_MSG[actionType].NON_EXIST_TODO);
  }
  else if (actionType === "remove" && toDoList[todoORnumber - 1] !== undefined) {
    sectionBasketOl().children[todoORnumber-1].remove();
  }
}


var sectionBasketOl = function(element) {
  return document.querySelector("section.basket > ol");
};

var toDoList = [];

for (let i = 0; i < sectionBasketOl().children.length; i++) {
  toDoList.push(sectionBasketOl().children[i].innerHTML);
}
toDoList.sort();


var controller = document.querySelector(".controller");

controller.addEventListener("click", function(evt) {
  var btn = evt.target;
  if (btn.tagName !== "BUTTON") return;
  var inputValue = btn.previousElementSibling.value;
  var actionType = btn.className;
  executeItemNode(actionType, inputValue);
});

// 개선해야 할 점 : 전체를 다시 구현하지 않고, 추가해야 할 지점만 찾아서 넣어주기

const actionObj = {
  "add" : function() {
    // do something
  },
  "remove" : function() {
    // do something
  },
};
