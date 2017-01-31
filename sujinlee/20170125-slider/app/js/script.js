sections = Array.prototype.slice.call(document.getElementsByTagName('section'));
buttons = document.getElementsByClassName('btn-container')[0];
mainView = document.getElementsByClassName('mainView')[0];

var width = 100;
var i = 0;
var slides = sections.length;

buttons.addEventListener("click", function(evt){
    var target = evt.target;
    if (target.tagName === "SPAN") {
        target = target.parentNode;
    }
    if (target.className === "next"){
        if (i > slides-1) {i = slides % i;}
        if (i === slides) {i = 0;}
        else { i++; }
        moveNext(i);
    }
    if (target.className === "previous"){     
       if (i < 1) {i = slides - i;}
        movePrevious(i);
        i--; 
    }
});

function moveNext(i){
    if (i > slides-1) {
        mainView.style.transform = "translate(0vw, 0vh)";
        mainView.classList.add("fadeIn");
         setTimeout(function() {
            mainView.classList.remove("fadeIn");
        }, (1000)); 
        
    }
    else {
        mainView.classList.remove("fadeIn");
        mainView.style.transform = "translate(-"+width*i+"vw, 0vh)";
    }
}

function movePrevious(i){
    mainView.style.transform = "translate("+(width-(width*i))+"vw, 0vh)";
    if (i > slides-1) {
        mainView.classList.add("fadeIn");
        setTimeout(function() {
            mainView.classList.remove("fadeIn");
        }, (1000)); 
    }
    else {
        mainView.classList.remove("fadeIn");
    }
}

function fecthData(url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      try {
          var data = JSON.parse(this.responseText);
          console.log("Get Data Successfully.");
          parseData(data);
      } catch(err){
          console.log("Fail to get data.")
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function parseData(data){    
    for (var e=0; e < slides; e++){
        var randomNum = Math.floor(Math.random() * data.length);
        sections[e].insertAdjacentHTML('beforeend', '<p>'+data[randomNum]+'</p>');
    }
}

var quoteUrl = 'http://proverbs-app.antjan.us/'
fecthData(quoteUrl);

