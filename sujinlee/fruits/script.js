// 미션 3. 

function addFruits() {
    var node = document.createElement("li");
    var textnode = document.createTextNode("pineapple");
    node.appendChild(textnode);
    document.querySelectorAll('ul')[0].appendChild(node);
}

// 미션 4.
function removeFruits() {
    var lst = document.querySelectorAll('ul')[0], item = lst.lastElementChild;
    lst.removeChild(item);
}



// 미션 5. apple 을 grape와 strawberry 사이로 옮김
function changeFruits(){
    var node = document.querySelectorAll("ul")[0],
        x = node.firstElementChild,
        y = node.children[4];
    node.insertBefore(x, y);
}


// 미션 6. class가 'red'인 노드만 삭제
function removeRed(){
    var node = document.querySelectorAll('ul')[1],
        elements = node.getElementsByClassName('red');
    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// 미션 7. section 태그 자손 중에 blue라는 클래스가 있는 노드가 있으면, 하위 h2 노드 삭제
function removeHeader(){
    var node = document.querySelectorAll('section');
    for(var i=0; i<node.length; i++) {
        title = node[i].querySelectorAll('h2');
        if (node[i].getElementsByClassName('blue').length >= 1){
            title[0].parentNode.removeChild(title[0]);
        }
    }
}

