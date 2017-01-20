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
const li = document.createElement("li");


// -- ADD TASK IN LIST -- //
function addTask(newTask) {
    var arr = [];
    var msg;
    for (var i=0; i < taskList.length; i++){
        arr[i] = taskList[i].textContent;
    }

    // Emtpy List
    if (arr.indexOf(newTask) !== -1 ) {
        msg = ERROR_MSG.TODO.EXIST_TODO;
    }
    // Add task in list
    else{
        arr.push(newTask);
        arr.sort(function(a, b){ return a.length - b.length; });
        for (var i=0; i < taskList.length; i++){ 
            taskList[i].innerHTML = arr[i];
        }
        li.append(arr[arr.length - 1])
        taskNode.appendChild(li);
        msg = SUCCESS_MSG.TODO.ADD_TODO;
    }
    return msg;
}


// -- DELETE TASK IN LIST -- //
function removeTask(num) {
    var msg;
    if (taskList.length <= 0){
        msg = ERROR_MSG.TODO.EMPTY;
    }
    else {
        try { 
            taskNode.removeChild(taskList[num-1])
            msg = SUCCESS_MSG.TODO.REMOVE_TODO;
        }
        catch(err){
            return chkErrInput(num);         
        }
    }
    return msg;
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


// -- EXECUTE -- //
function executeItemNode(actionType, todoORNumber){
    if (actionType === "add") {
        var a = addTask(todoORNumber);
        showMessage(a);
    }
    else if (actionType === "remove") {
        var r = removeTask(todoORNumber);
        showMessage(r);
    }
    changeTasksNum();
}


// // 포커스
// var controller = document.querySelector(".controller");
// controller.addEventListener("click", function(evt) {
//   var btn = evt.target;
//   if (btn.tagName !== "BUTTON") return;
//   var inputValue = btn.previousElementSibling.value;
//   var actionType = btn.className;
//   executeItemNode(actionType, inputValue);
// });



// function setCSS(ele, styleObj) {
//     ele.style[styleName] = value;
//for in
//}
// setCSS(ele, {"opacity": 0.5, "display":"none"})
