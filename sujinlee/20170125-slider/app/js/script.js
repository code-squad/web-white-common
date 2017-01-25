section = Array.prototype.slice.call(document.getElementsByTagName('section'));
buttons = document.getElementsByClassName('btn-container')[0];
mainView = document.getElementsByClassName('mainView')[0];

var width = 600;
var i = 0;



buttons.addEventListener("click", function(evt){
    var target = evt.target;
    
    if (target.className === "next"){
        console.log(i);
        if (i>3){i = i;}
        else { i++; }
        moveNext(i);
    }
   
    if (target.className === "previous"){
        movePrevious(i);
        i--;
    }
    //moveNext(i);
});
function moveNext(i){

    if (i < section.length) {
        mainView.style.transform = "translate(-"+width*i+"px, 0px)";
    }
    else { return; }
}

function movePrevious(i){
    if ( 0 < i && i < section.length) {
        mainView.style.transform = "translate("+(width-(width*i))+"px, 0px)";
    }

    else { return; }
}


// var width = 600;
// var count = 0;
// previousBtn.addEventListener("click", function(evt){
//     var target = evt.target;
//     count ++ ;
 
//     if (count < section.length) {
//         //console.log(width*count);
//         console.log(count);
//         console.log(width-(width*count));
//         mainView.style.transform = "translate("+(width-(width*count))+"px, 0px)";
//         mainView.style.animation = "moveSilde";
//         // mainView.removeClass("animation");
//         //console.log(mainView.style.transform);
//     }
//     else { return; }
//     }
// );



