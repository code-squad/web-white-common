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


// CLICK EVENT ON EACH TAB
for (i=0; i<tabs.length; i++){
    tabs[i].addEventListener("click", function() {
        var tabNum = tabs.indexOf(this);
        executeTabClass(tabNum, "selectedTab", "eleDisplayShow");
    });
}


// CHAGNE TAB/ CLASSES
function executeTabClass(num, tabClassName, sectionClassNum){
    tabs[num].classList.add(tabClassName);
    sections[num].classList.add(sectionClassNum);
    for (e=0; e<tabs.length; e++){
        if (e !== num){
            tabs[e].classList.remove(tabClassName);
            sections[e].classList.remove(sectionClassNum);
        }
    }
}


// LOAD DATA
window.addEventListener('load', function(){
    for (i=0; i<tabs.length; i++){
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
    var ul = parentNode.getElementsByTagName('ul');
    var content = '<ul><li><div class="myName">'+data.title+'</div><div class="myDesc">'+data.body+'</div></li></ul>'
    parentNode.insertAdjacentHTML('beforeend', content);
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