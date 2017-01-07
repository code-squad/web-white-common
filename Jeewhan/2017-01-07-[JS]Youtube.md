유튜브 재생목록 총 재생시간 구하는 방법

```javascript
var times = document.querySelectorAll('.pl-video .pl-video-time .timestamp span');
var duration = 0;
for (var i = 0; i < times.length; i++) {
var t = times[i];
t = t.innerText;
t = t.split(':');

var min = t[0];
var sec = t[1];

duration = duration + parseInt(sec) + parseInt(min)*60;
}
hh = duration/60/60;
hh = parseInt(hh);
mm = (duration - hh*60*60)/60;
mm = parseInt(mm);
ss = duration - hh*60*60 - mm*60;
console.log(hh + '시간', mm + '분', ss + '초');
```

