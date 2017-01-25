// DATA URLS 
var urls = {
    "position" : "http://jsonplaceholder.typicode.com/posts/1",
    "friend" : "http://jsonplaceholder.typicode.com/posts/2",
    "theme" : "http://jsonplaceholder.typicode.com/posts/3",
    "news" : "http://jsonplaceholder.typicode.com/posts/4"
}


// TAB ELEMENTS
var tabs = Array.prototype.slice.call(document.getElementsByClassName("tab"));    
var tabNum;
var sections = Array.prototype.slice.call(document.getElementsByTagName("section")); 


// CLICK EVENT ON EACH TAB
var nav = document.getElementsByTagName("nav")[0]; 

nav.addEventListener("click", function(evt){
    var target = evt.target;
    if (target.tagName === "SPAN") { target = target.parentNode; }
    var tabNum = tabs.indexOf(target);
    switchTabClass(tabNum, "selectedTab", "eleDisplayShow");
    }
);


// CHAGNE TAB CLASSES
function switchTabClass(num, tabClassName, sectionClassName){
    tabs[num].classList.add(tabClassName);
    sections[num].classList.add(sectionClassName);
    for (var e=0; e<tabs.length; e++){
        if (e !== num){
            tabs[e].classList.remove(tabClassName);
            sections[e].classList.remove(sectionClassName);
        }
    }
}


// LOAD FIRST TAB DATA
window.addEventListener('load', function(){
    for (var i=0; i<tabs.length; i++){
        fecthData(i);
    }
});



// AJAX CALLS 
function fecthData(num) {
    var url = urls[Object.keys(urls)[num]];
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
    var content = '<ul><li><div class="myName">'+data.title+'</div><div class="myDesc">'+data.body+'</div></li></ul>'
    parentNode.insertAdjacentHTML('beforeend', content);
}


// SOCIAL ICONS //
var rootShareIcon = document.getElementsByClassName('icon-share')[0];
var socialIconsBox = document.getElementsByClassName('socialIcons')[0];
var socialIcons = socialIconsBox.children;


// MOUSE EVENT ON SOCIAL ICONS
rootShareIcon.addEventListener("mouseenter", showShare("eleDisplayShow"), false);
socialIconsBox.addEventListener("mouseleave", hideShare("eleDisplayShow"), false);


function showShare(addClassName){
 for (i=1; i<socialIcons.length; i++){
     socialIcons[i].classList.add(addClassName);
 }
}


function hideShare(removeClassName){
for (i=1; i<socialIcons.length; i++){
     socialIcons[i].classList.remove(removeClassName);
 }
}