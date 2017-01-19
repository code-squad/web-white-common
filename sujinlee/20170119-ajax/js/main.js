var url = "../data/data.json"

function fecthData(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    //서버연결 확인
  if (this.readyState == 4 && this.status == 200) {
      //JSON파싱 확인
      try {
          var data = JSON.parse(this.responseText);
          console.log("데이터 읽기를 성공했습니다.")
      } catch(err){
          console.log("데이터 읽기를 실패했습니다.")
          return;
      }
    parseData(data);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function parseData(data){
  text = data.owner;
  taskNode = document.getElementsByTagName("dl")[0];
  for (i in text) {
    var dt = document.createElement("dt");
    var dd = document.createElement("dd");
    dt.innerText = i;        // title
    dd.innerText = text[i];  // contents
    taskNode.appendChild(dt);
    taskNode.appendChild(dd);
  }
}

var btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", function(evt) {
  var btn = evt.target;
  if(btn.tagName != "BUTTON") return false;
  fecthData(url);
});