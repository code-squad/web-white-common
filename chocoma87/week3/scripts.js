
var els = {
    wrapper: document.querySelector(".writeBox"),
    inputEl: document.querySelector(".writeBox-input"),
    buttonEl: document.querySelector(".writeBox-buttons"),
    cancleEl: document.querySelector(".writeBox-cancle"),
    errorEl: document.querySelector(".writeBox-error")
};

var errorMessages = {
    exceed: "글자수가 초과되었습니다",
    language: "한글만 입력할 수 있습니다."
};

var callBacks = {
    showCancleBtn: function (){
        toggleElement(els.buttonEl, els.cancleEl);
    },
    showButton: function(){
        toggleElement(els.cancleEl, els.buttonEl);
    },
    addErrorMessage: function(){
        var val = this.value;
        var valLength = val.length;

        els.errorEl.innerHTML = errorMessages.exceed;

        if (valLength > 20){
            els.errorEl.style.display = "block";
        } else {
            els.errorEl.style.display = "none";
        }
    }
};

function toggleElement (hideEl, showEl){
    hideEl.style.display = "none";
    showEl.style.display = "block";
}

function attatchEvent (){
    els.inputEl.addEventListener("focus", callBacks.showCancleBtn);
    els.cancleEl.addEventListener("click", callBacks.showButton);
    els.inputEl.addEventListener("input", callBacks.addErrorMessage);
}


attatchEvent();
