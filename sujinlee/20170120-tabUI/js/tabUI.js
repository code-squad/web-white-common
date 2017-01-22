// DATA URLS 
var urls = {
    "position" : "http://jsonplaceholder.typicode.com/posts/1",
    "friend" : "http://jsonplaceholder.typicode.com/posts/2",
    "theme" : "http://jsonplaceholder.typicode.com/posts/3",
    "news" : "http://jsonplaceholder.typicode.com/posts/4"
}


// TAB UI
var tabs = Array.prototype.slice.call(document.getElementsByClassName("tab"));    
var tabNum;
var sections = Array.prototype.slice.call(document.getElementsByTagName("section")); 

// The first tab should be loaded always.
window.addEventListener('load', function(){
        var tabNum = 0;
        executeTabClass(tabNum);
});

// CLICK EVENT ON EACH TAB
for (i=0; i<tabs.length; i++){
    tabs[i].addEventListener("click", function() {
        var tabNum = tabs.indexOf(this);
        executeTabClass(tabNum);
    });
}


// SELECT TAB EVENT CLASS
function executeTabClass(num){
    tabs[num].classList.add("selectedTab");
    sections[num].classList.add("eleDisplayShow");
    for (e=0; e<tabs.length; e++){
        if (e !== num){
            tabs[e].classList.remove("selectedTab");
            sections[e].classList.remove("eleDisplayShow");
        }
    }
    var eachUrl = urls[Object.keys(urls)[num]];
    fecthData(eachUrl, num);
}


// AJAX CALLS 
function fecthData(url, num) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      try {
          var data = JSON.parse(this.responseText);
      } catch(err){
          console.log("fail to read data")
          return false;
      }
    insertData(data, num);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}


// PARSE DATA
function insertData(data, num) {
    var parentNode = Array.prototype.slice.call(document.getElementsByTagName('section'))[num];
    var ul = parentNode.getElementsByTagName('ul');
    if (ul.length == 0) {
        parentNode.insertAdjacentHTML('beforeend', '<ul><li><div class="myName">'+data.title+'</div><div class="myDesc">'+data.body+'</div></li></ul>')
   }
}


// SOCIAL ICONS //
var rootShareIcon = document.getElementsByClassName('icon-share')[0];
var socialIconsBox = document.getElementsByClassName('socialIcons')[0];
var socialIcons = socialIconsBox.children;

// MOUSE EVENT ON SOCIAL ICONS
rootShareIcon.addEventListener("mouseenter", showShare, false);
socialIconsBox.addEventListener("mouseleave", hideShare, false);

function showShare(){
 for (i=1; i<socialIcons.length; i++){
     socialIcons[i].classList.add("eleDisplayShow");
 }
}

function hideShare(){
for (i=1; i<socialIcons.length; i++){
     socialIcons[i].classList.remove("eleDisplayShow");
 }
}