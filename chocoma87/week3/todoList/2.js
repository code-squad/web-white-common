/*
 * 1. executeItemNode 함수를 완성하세요
 * 이 함수의 actionType 매개변수는 'add' 또는 'remove'를 받습니다.  add를 받으면 추가하고, remove를 받으면 일을 삭제합니다.
 * todoORNumber 는 add일때는 새로운 일을 문자열로 받고, remove일때는 숫자를 받습니다.
 * 할일 목록은 할일의 문자열 길이 순으로 정렬됩니다. 목록이 추가될때마다 바로 정렬되야 합니다.(가장 긴 할일 내용이 뒤로 가야함)
 * 삭제하려는 경우 num과 일치하는 item번호가 없다면 'message' 영역에서 적당한 메시지를 붉은색으로 표시됐다 3초뒤 사라집니다.
 * 추가하려는 경우 이미 같은일이 있다면 message영역에서 적당한 메시지를 붉은색으로 표시했다 3초뒤 사라집니다.
 * 함수를 여러개로 나눠도 상관없습니다.
 * 참고로 1번을 풀기 위해서는 string조작과 setTimeout이라는 것을 공부해야 할 수도 있습니다.
 *
 * 2. 좀더 사용하기 쉬운 웹화면이 되도록, css에 다양한 스타일을 적용하면서 꾸며봅니다.
 *
 * 3. 아래 event 관련 코드를 학습해보고, 어떤 코드를 의미하는지 최대한 자세히 주석으로 설명을 넣어보세요.
 */

function doSomething(actionType, todoORnumber)  {
    if(actionType === "add"){
        addTask(todoORnumber);
    }
    if(actionType === "remove"){
        deleteTask(todoORnumber);
    }
}

function alertMessage(text){
    var messageDiv = document.querySelector(".message");

    messageDiv.innerHTML = text;

    window.setTimeout(function(){
        messageDiv.innerHTML = "";
    }, 3000);
}

function addTask (task){
    var taskLength = task.length;
    var taskWrapper = document.querySelector(".basket ol");
    var taskLists = taskWrapper.querySelectorAll("li");
    var tasksLength = taskLists.length;
    // var textNode = document.createTextNode(task);
    var newNode = document.createElement("li");
    var newDiv = newNode.innerHTML = '<div>' + task + '</div> <a href="#" class="button-close">닫기</a>';


    // 추가할 노드를 먼저 만든다.
    // newNode.appendChild(textNode);

    // 이미 등록되 있는 할 일이면 return
    for(var i = 0; i < tasksLength; i++){
        if(taskLists[i].innerHTML === task){
            alertMessage("이미 등록한 할 일 입니다.");
            return false;
        }
    }

    // 마지막 li 부터 루프 시작
    for(var i = tasksLength-1; i >= 0; i--){
        var el =  taskLists[i];
        var basketText = el.querySelector('.basket-text');  
        var elText = basketText.textContent;
        var elTextLength = elText.length;

        if(elTextLength <= taskLength){
            taskWrapper.insertBefore(newNode, el.nextSibling);
            break;
        }
    }
}


function deleteTask (itemIndex){
    var messageDiv = document.querySelector(".message");
    var taskWrapper = document.querySelector(".basket ol");
    var taskLists = taskWrapper.querySelectorAll("li");
    var tasksLength = taskLists.length;

    if(itemIndex < 0 || itemIndex > tasksLength){
        alertMessage("입력한 할 일이 없습니다.");
        return false;
    }
    taskLists[itemIndex-1].remove();
}



// 닫기 이벤트
var ol = document.querySelector("ol");
ol.addEventListener("click", deleteButton);

function deleteButton(event) {
    var eTarget = event.target.tagName.toLowerCase();
    if( eTarget !== "a" ) { return; }
    var liTarget = event.target.parentNode;
        liTarget.remove();
}



/*
 * 3번문제는 여기에 자세히 설명을 넣으시면 됩니다.
 *
    컨트롤러라는 돔 엘리먼트에 이벤트 리스너를 등록해 주고 있다.

    여기서 이벤트 리스너란, 브라우저에서 이벤트가 발생하면 그것을 감지하여 알려주는 존재로서,
    이벤트가 발생하면 어떤 동작을 실행하라는 명령을 실행 할 수 있다.
    예제에서는 클릭 이벤트에 이벤트 리스너를 등록하였기 때문에, 클릭 이벤트가 발생하면 콜백 함수가 실행되게 된다.

    [콜백 함수 상세]

    1. 콜백 함수는 이벤트에 관련된 정보를 담고 있는 오브젝트를 인자로 넘겨주는데,
    이 오브젝트를 evt 매게 변수로 받아서 target 프라퍼티에 접근하여 클릭된 돔 엘리먼트를 찾는데 사용하고 있다.

    2. 조건문을 이용해서 클릭된 타겟이 버튼일 경우에만 함수를 진행시키고 있다.
    클릭 이벤트는 클릭한 엘리먼트 자식 엘리먼트에서도 발생하기 때문에 버튼이 아닌 다른 자식 엘리먼트가 콜백함수를 실행하는 것을 방지하고 있다.

    3. 클릭된 버튼을 기준으로 바로 이전 자식에 입력된 값을 변수에 저장하고 있다. (이전 자식은 input 엘리먼트인데, 사용자가 입력한 값을 가져올 수 있다.)

    4. 버튼의 클래스를 변수에 저장하여, add와 remove 중 어떤 버튼을 눌렀는지 확인하기 위해 사용하고 있다.

    5. 마지막으로 입력된 값과 버튼 클래스를 인자로 넘겨주어 doSomething 함수를 실행시키고 있다.
 *
 */

var controller = document.querySelector(".controller");

controller.addEventListener("click", function(evt) {
  var btn = evt.target;

  if(btn.tagName !== "BUTTON") return;

  var inputValue = btn.previousElementSibling.value;
  var actionType = btn.className;
  doSomething(actionType, inputValue);
});