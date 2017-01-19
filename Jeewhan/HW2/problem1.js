function $(element) {
  return document.querySelector(element);
}

var sectionBasketOl = function(element) {
  return $("section.basket > ol");
};



const ERROR_MSG = {
  "add" : "이미 등록한 일입니다.",
  "remove" : "삭제하려는 할 일이 없습니다."
};

function checkError(type, value) {
  if (type === "add" && toDoArr.indexOf(value) !== -1) {
    alertMessage($("div.message"), ERROR_MSG.add); return true;
  }
  else if (type === "remove" && value > toDoArr.length) {
    alertMessage($("div.message"), ERROR_MSG.remove); return true;
  }
}

function alertMessage(target, comment) {
  target.insertAdjacentHTML("afterbegin", "<p>" + comment + "</p>");
  setTimeout(function() { target.removeChild(target.firstElementChild); }, 3000);
}

var buttonTag = '<button type="button" class="xButton">x</button></li>';

function addToDo(todo) {

  let todoNode = "<li>" + todo + buttonTag + "</li>";

  for (let i = 0; i < toDoArr.length; i++) {
    if (todo.length <= toDoArr[i].length) {
      let insertIndex = i + 1;
      let nextNode = $("li:nth-child(" + insertIndex + ")");

      nextNode.insertAdjacentHTML("beforebegin", todoNode);
      toDoArr.splice(insertIndex, 0, todo);
      return;
    }
  }

  if (toDoArr.length === 0) {
    $(".toDoList").appendChild(document.createElement("li"));
    $(".toDoList > li").innerHTML = todo + buttonTag;
    toDoArr.push(todo);
    return;
  }

  $(".toDoList").lastElementChild.insertAdjacentHTML("afterend", todoNode);
}

function removeToDo(index) {
  toDoArr.splice(index-1, 1);
  sectionBasketOl().children[index-1].remove();
}

function xToDo(eventObj) {
  let node = eventObj.parentNode;
  let xNodeText = toDoArr.indexOf(node.textContent.slice(0,-1));

  toDoArr.splice(xNodeText, 1);
  node.remove();
}

function determineType(type, value) {
  if (type === "add") { addToDo(value); }
  else if (type === "remove") { removeToDo(value); }
  else if (type === "xButton") { xToDo(value); }
}

var toDoArr = [];

for (let i = 0; i < sectionBasketOl().children.length; i++) {
  toDoArr.push(sectionBasketOl().children[i].textContent.slice(0,-1));
}

$(".controller").addEventListener("click", function(evt) {
  let btn = evt.target;
  let actionType = btn.className;
  let inputValue = btn.previousElementSibling.value;

  if (btn.tagName !== "BUTTON" || checkError(actionType, inputValue)) return;

  determineType(actionType, inputValue);
});

$(".toDoList").addEventListener("click", function(evt) {
  let btn = evt.target;
  let actionType = btn.className;
  if (btn.tagName !== "BUTTON" || btn.className !== "xButton") return;

  determineType(actionType, btn);
});
