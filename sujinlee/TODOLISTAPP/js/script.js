// MESSAGES
var ERROR_MSG = {
    "TODO": {
        "EXIST_TODO" : "이미 등록한 일입니다.",
        "EMPTY" : "현재 할일이 없습니다. 새로운 할일을 추가하세요."
    },
    "INPUT": {
        "EMPTY" : "입력하세요.",
        "ZERO" : "1부터 입력하세요.",
        "NOT_NUMBER" : "숫자를 입력하세요.",
        "NOT_IN_LIST" : "목록에 없는 번호입니다."
    }
}

var SUCCESS_MSG = {
    "TODO" : {
        "ADD_TODO" : "새로운 할일을 추가했습니다",
        "REMOVE_TODO" : "할일이 삭제되었습니다."
    }
}

//RAISE ERROR MESSAGE
function chkErrInput(num){
    var msg;
    if (num.length == 0) {
        msg = ERROR_MSG.INPUT.EMPTY;
    }
    else if (num.match(/^[0-9]+$/) === null){
        msg = ERROR_MSG.INPUT.NOT_NUMBER;
    }
    else if(taskList.length >= 1 && num >= taskList.length+1) {
        msg = ERROR_MSG.INPUT.NOT_IN_LIST;
    }
    else if (num == 0) {
        msg = ERROR_MSG.INPUT.ZERO;
    }
    return msg;   
}


// -- DOM ELEMENTS -- //
const taskNode = document.getElementsByTagName("ol")[0];
var taskList = taskNode.children;
var countTask = document.getElementsByTagName("h3")[0];

// -- ADD TASK IN LIST -- //
function addItem(newItem) {
    const btn = document.createElement("button");
    const li = document.createElement("li");
    const p = document.createElement("p");

    var arr = [];
    var msg;

    for (var i=0; i < taskList.length; i++){
        arr[i] = taskList[i].textContent;
    }

    // Check Duplicate Task Element
    if (arr.indexOf(newItem) !== -1 ) {
        msg = ERROR_MSG.TODO.EXIST_TODO;
    }
    // Add New task in List
    else {
        arr.push(newItem);
        arr.sort(function(a, b){ return a.length - b.length; });
        taskNode.appendChild(li);
        
        for (var i=0; i < taskList.length; i++){
            taskList[i].innerHTML = '<span>'+arr[i]
            taskList[i].insertAdjacentHTML('beforeend', '<button class="remove"></button>')
        }

        changeTasksNum();
        msg = SUCCESS_MSG.TODO.ADD_TODO;

    }
    showMessage(msg);
}


// -- DELETE TASK IN LIST -- //
function removeItem(num) {
    if (taskList.length <= 0){
        msg = ERROR_MSG.TODO.EMPTY;
    }
    else {
        try { 
            taskNode.removeChild(taskList[num-1])
            changeTasksNum();
            msg = SUCCESS_MSG.TODO.REMOVE_TODO;
        }
        catch(err){
            return chkErrInput(num);         
        }
    }
    showMessage(msg);
}

    
// -- TASK NUMBERING -- //
function changeTasksNum(){
    countTask.innerHTML = taskList.length+" TASKS";
}


// -- CALL MESSAGES -- //
function showMessage(text){
    tasknode = document.getElementsByClassName("message")[0];
    p = document.createElement("p");
    p.innerHTML = text;
    tasknode.appendChild(p);
    setTimeout(function(){ p.style.display = "none"; }, 2000);
}


// -- BUTTON EVENT -- //
var controller = document.querySelector(".controller");
controller.addEventListener("click", function(evt) {
    var btn = evt.target;
    if (btn.tagName !== "BUTTON") return;
    var inputValue = btn.previousElementSibling.value;
    var actionType = btn.className;
    executeItemNode(actionType, inputValue);
});


// -- DELETE TASK WITH BUTTON PANNEL -- 
var basket = document.querySelector(".basket");
basket.addEventListener("click", function(evt) {
    var btn = evt.target;
    if (btn.tagName !== "BUTTON") return;
    btn.parentNode.parentNode.removeChild(btn.parentNode);
    msg = SUCCESS_MSG.TODO.REMOVE_TODO;
    showMessage(msg);
});


// -- EXECUTE -- //
function executeItemNode(actionType, todoORNumber){
    if (actionType === "add") {
        addItem(todoORNumber);
    }
    else if (actionType === "remove") {
        removeItem(todoORNumber);

    }
    changeTasksNum();
}


