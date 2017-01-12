/* object - iteration */
// 1. 배열의 정보를 forEach를 활용해서 출력해보기
/*
var arr = [1, 2, 3];
function print_element(element){
  console.log(element);
}
arr.forEach(print_element);
*/

// 2. object.keys()를 활용하여 object value를 출력하기
/*
var obj = {
  a : 1,
  b : 2,
  c : 3
};
var arr = {};
arr = Object.keys(obj);
arr.forEach(print_obj_value);

function print_obj_value(element){
  console.log(obj[element]);
}
*/

/* 미프4 */

MycontentsList = [
  {
    "id" : 23,
    "name" : "honux",
    "content" : "오늘의 커피는 왜 항상 맛있지?",
    "like" : 2,
    "comment" : ["^^", "i like this"]
  },
  {
    "id" : 55,
    "name" : "nigayo",
    "content" : "드디어 출근!",
    "like" : 4,
    "comment" : ["이직 하셨나봐요? "]
  },
  {
    "id" : 93,
    "name" : "jk",
    "content" : "어제 읽은 책이 아직도 ",
    "like" : 20,
    "comment" : ["잠자기 전에 만화책은 금물..", "그게 뭘까?"]
  },
  {
    "id" : 4,
    "name" : "crong",
    "content" : "코드스쿼드가 정말 좋은 곳일까? 믿을 수가 없다..",
    "like" : 0,
    "comment" : ["누가 그러디"]
  }
];



function addComment(contentsList, id, comment){
    var index = isContent(MycontentsList, id);
    var comment_array = contentsList[index].comment;
    comment_array.push(comment);
}

function addLike(contentsList, id, likeNumber){
    var index = isContent(contentsList, id);
    contentsList[index].like += likeNumber;

}
function addContent(friendsList, name, content){

    friendsList[index].content = content;

}
function removeContent(friendsList, name){
    var index = isContent(MycontentsList, id);
    friendsList.splice(index,1);
}

function isContent(List, id){
  for(var i=0; i<List.length; i++){
    if(List[i].id !== id) continue;
    return i;
  }
}

var chaeyun = {
    "id" : 27,
    "name" : "chaeyun",
    "content" : "뉴비입니다. 잘부탁드려요",
    "like" : 1,
    "comment" : ["네, 반가워요"]
  }
function addFriend(friendsList, newFriend){
  friendsList.push(newFriend);
}

//addComment(MycontentsList, 93, "추가추가추가");
//addLike(MycontentsList, 93, 1);
//addFriend(myFriends, chaeyun);
//addContent(myFriends, "chaeyun", "반갑습니다. 새로왔구요. 잘 부탁드려요~ 댓글도 남겨주세요!");
//removeContent(myFriends, "jk");
console.log(MycontentsList);
