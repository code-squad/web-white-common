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

  // 에러메시지를 보여주는 함수
  function alertMessage(comment) {
    message.appendChild(document.createElement("p"));
    message.firstElementChild.innerHTML = '<span style="color: red">' + comment + '</span>';
    setTimeout(function() { message.removeChild(message.firstElementChild); }, 3000);
  }

  // 읽는 이를 생각하여 일부러 변수를 한 번에 선언하지 않고 사용하기 전에 선언 및 초기화
  let toDoList = [];

  // 이미 있는 작업을 배열에 할당
  for (let i = 0; i < $("section.basket > ol").children.length; i++) {
    toDoList.push($("section.basket > ol").children[i].innerHTML);
  }
  toDoList.sort(); // 가나다 정렬

  if (actionType === "add") {
    if (toDoList.indexOf(todoORnumber) === -1) {

      toDoList.push(todoORnumber);
      toDoList.sort(); // 같은 길이어도 가나다 순으로 보여지길 원함

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
    else if (toDoList.indexOf(todoORnumber) !== -1) { // 해당 줄 자체로 분기 조건을 명확히 보여주기 위해서 else가 아닌 else if 선호
      alertMessage("이미 있는 할 일입니다.");
    }
  }
  else if (actionType === "remove") {
    if (toDoList[todoORnumber - 1] === undefined) {
      alertMessage("삭제하려는 할 일이 없습니다.");
    }
    else if (toDoList[todoORnumber - 1] !== undefined) { // !와 같은 방식은 읽을 때 한 번 더 생각해야 하므로 사용하지 않음
      $("section.basket > ol").children[todoORnumber-1].remove();
    }
  }
}

/*
 * 3번문제는 여기에 자세히 설명을 넣으시면 됩니다.

 // querySelector 축약

 // element의 addEventListener(event, function) method를 호출해, eventHandler 등록

 // click 이벤트 발생시 target이
 // 버튼이 아닐 때는 return을 통해 Pass

 // button이 맞을 때는
 // button 태그 이전에 있는 Input Tag의 값을 inputValue에 할당
 // button의 클래스명은 actionType에 할당
 // 두 변수를 executeItemNode의 Parameter로 넘겨서 호출

 */

// 아래부터는 모두 문제 조건에 제시된 코드
var controller = document.querySelector(".controller");

controller.addEventListener("click", function(evt) {
  var btn = evt.target;
  if (btn.tagName !== "BUTTON") return;
  var inputValue = btn.previousElementSibling.value;
  var actionType = btn.className;
  executeItemNode(actionType, inputValue);
});


// 73행까지의 코드에 대한 피드백

/* executeItemNode 로 감싸서 전역변수를 없앴지만,

 * executeItemNode 에 너무 많은 로직이 다 들어가 있네요. 그 안에서도 함수를 나눠서 만들고 호출하세요.

* if문 안에 if를 없애보려고 노력하세요. 

* $("section.basket > ol") 이게 반복적으로 사용하는데, 변수에 담아두고 재사용하는게 더 빠릅니다.

* for 문안에  $("section.basket > ol").children.length 이렇게 있으니 좀 보기 어렵네요. 변수로 받아두고 쓰셔도 좋겠고요.

* $("section.basket > ol").children[i].innerHTML = toDoList[i]; 이거 제대로 화면에 들어가나요?

*/

// 하고 싶었지만 하지 못 한 반론

// 1. 한 번 정도 호출될 함수일 경우, 함수명에 프로세스와 리턴벨류를 아주 잘 담아낼 수 없다면,
//    함수를 선언하는 것이 가독성에 반대로 악영향을 줄 수 있다고 생각합니다. (함수명만으로 확 와닿지 않는다면 번거롭게 함수 선언 부분을 계속 찾아가야 하는 상황이 생길 수 있으므로)

// 2. if의 분기마다 한 번에 하나의 조건별로 분기를 하는 것이 독자 입장에서 더 좋다고 생각합니다.
//    T & T 또는 T & F 처럼 적게 되면, IF 안 IF를 없앨 수는 있겠지만, 한 번에 고려해야 하는 조건이 많아져서 나쁘다고 생각합니다.

// 3. $("section.basket > ol")은 변수로 담아서 사용하고 싶었지만, Call By Value가 되어버려서 결과가 잘못 나오게 되는 바람에 하지 못 했습니다.

// 4. 화면에 제대로 들어갑니다 :D
