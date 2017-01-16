// -- 목록 추가 -- //
function addItem(newItem) {
    // <li>요소 확인
    const node = document.getElementsByTagName("ol")[0];
    const li = document.createElement("li");
    var h3 = document.getElementsByTagName("h3")[0];
    var arr = [],
        elements = node.children;
    for (var i = 0; i < elements.length; i++){
        arr[i] = elements[i].textContent;
    }

    // 목록 내 중복 값 확인
    if (arr.indexOf(newItem) !== -1 ) {
        msg = "이미 등록된 할일입니다.";
        return showMessage(msg);
    }
    else{
        arr.push(newItem);
        // elements 개수 확인 후, string길이 오름차순 목록 정렬
        arr.sort(function(a, b){ return a.length - b.length; });
        for (var i = 0; i < elements.length; i++){ 
            elements[i].innerHTML = arr[i];
        }
        li.append(arr[arr.length - 1])
        node.appendChild(li);
        h3.innerHTML = elements.length+" TASKS";
        
        msg = "새로운 할일 '"+newItem+"' 을 추가했습니다.";
        return showMessage(msg);
    } 
}

// -- 목록 삭제 -- //
function removeItem(num) {
    const node = document.getElementsByTagName("ol")[0];
    var h3 = document.getElementsByTagName("h3")[0];
    var elements = node.children;
    // 입력 값이 string일 경우
    if (num.match(/^[0-9]+$/) === null){
        msg = "숫자를 입력하세요.";
        showMessage(msg);
    }
    // 입력 값이 숫자일 경우 : typeof(num) = string
    else {
        // 목록 숫자보다 큰 숫자를 입력할 경우, 번호 없음 메시지 호출
        if(elements.length >= 1 && num >= elements.length+1) {
            msg = "목록에 없는 번호입니다.";
            showMessage(msg);
        }

        // 목록이 없는 경우, 목록 없음 메시지 호출
        else if (elements.length <= 0){
            msg = "현재 할일이 없습니다. 새로운 할일을 추가하세요.";
            h3.innerHTML = " 0 TASK";
            showMessage(msg);
        }
        // 0을 입력할 경우
        else if (num == 0) {
            msg = "1부터 입력하세요";
            showMessage(msg);
        } 
        // 목록 숫자보다 작은 숫자를 입력할 경우 아이템 삭제
        else {  
            node.removeChild(elements[num-1])
            // 마지막 아이템 삭제 시, 목록 없음 메시지 호출
            if (elements.length <= 0){
                msg = "현재 할일이 없습니다. 새로운 할일을 추가하세요.";
                showMessage(msg);
            }
            // 할일 삭제 시, 메세지 호출
            else {
                msg = " ' "+elements[num-1].textContent+"'할일이 삭제되었습니다."; 
                h3.innerHTML = elements.length+" TASKS";
                showMessage(msg);
            }
                
        }
    }
}


// -- 메시지 호출 -- //
function showMessage(text){
    node = document.getElementsByClassName("message")[0];
    elements = node.children;
    p = document.createElement("p");
    p.innerHTML = text;
    node.appendChild(p);
    setTimeout(function(){ 
        p.style.display = "none";
}, 2000);
}


// -- 버튼 이벤트 -- //
var controller = document.querySelector(".controller");
controller.addEventListener("click", function(evt) {
  var btn = evt.target;
  if (btn.tagName !== "BUTTON") return;
  var inputValue = btn.previousElementSibling.value;
  var actionType = btn.className;
  executeItemNode(actionType, inputValue);
});

function executeItemNode(actionType, todoORNumber){
    if (todoORNumber.length >= 1) {
        if (actionType === "add") {
            return addItem(todoORNumber);
        }
        if (actionType === "remove") {
            return removeItem(todoORNumber);
        }
    }
    else {
        msg = "입력하세요."
        showMessage(msg);
    }
}