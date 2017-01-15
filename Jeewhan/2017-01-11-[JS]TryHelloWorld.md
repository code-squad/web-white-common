---
layout: post
title:  "[JS] Try Hello World"
date:   2017-01-11 21:13:00 +0900
categories: Front-End
---

### 1-2. [Window Object](tryhelloworld.co.kr/courses/자바스크립트와-웹-프론트엔드/lessons/window-object)

window 객체
Javascript 실행시 가장 상위에 존재하는 객체
변수를 선언하거나 함수 선언시 window 객체안에 선언됨
표시된 웹 페이지의 정보에 접근하거나 변경을 할 수 있음
window.location : 현재 브라우저 창의 주소를 나타내는 객체
window.location.href : 브라우저 창에 입력된 주소, 변경 가능
window.navigator : 브라우저 자체에 대한 정보
window.screen : 디스플레이의 사이즈
window.document : 웹 페이지 문서의 HTML, CSS 등에 대한 접근 가능

document.head : head tag
document.body : body tag
document.styleSheets : CSS 파일

웹 프론트엔드 사이드 자바스크립트 프로그래밍이란, 자바스크립트 언어로 로직을 작성하고, 브라우저가 제공하는 window 객체에 접근해서 HTML과 CSS를 조작하는 것이다

---

### 1-3. [CSS 다루기](tryhelloworld.co.kr/courses/자바스크립트와-웹-프론트엔드/lessons/css-다루기)

Cascading Style Sheet
- HTML 문서의 요소가 어떻게 표시될지 정의

##### 문법
`[selector] { [property_name]:[value]; ... }`

- selector : tag이름, id, class로 작성 가능 (동시에 적용시키고 싶다면 , 로 구분하면 됨)
  - tag이름 : 태그 이름 그대로 사용(h1, h2, p, img, ...)
  - id : #을 붙이고 id 사용(#name, #id, ... )
  - class : .을 붙이고 class 이름 사용 (.lyric, ...)
- property_name : selector에 해당하는 엘리먼트의 style 속성
- value : 앞에 정의한 style property의 값

##### 적용하기
- head 태그 안에 `<link>` 태그 사용
  -`<link rel="stylesheet" href="[css file]">`
- head 태그 안에 `<style>` 태그를 사용해 직접 정의
```css
 <style>
       #lyric{
         text-align: right;
       }
 </style>
```
- html element안에 직접 속성으로 정의
    `<p style="color:red">...</p>`

##### CSS 적용 우선순위
- html element 안에서 적용한 스타일
- style tag안에서 적용한 스타일
- link를 통해 외부 파일에서 적용한 스타일

---

### 2-1. [Dom 소개 및 탐색](http://tryhelloworld.co.kr/courses/자바스크립트와-웹-프론트엔드/lessons/dom-소개-및-탐색)

HTML 문서가 DOM에 따라 기술됨
이러한 HTML 문서가 객체로서 JS와 연결되어 조작 가능한 것

#### DOM, Document Object Model

- 컴퓨터가 문서를 잘 처리할 수 있도록 문서의 구조를 약속한 것
  - Tree 형태를 따름 : 족보나 가계도와 비슷함

##### document object

- javascript에서 `document`로 접근 가능
- children에는 문서의 최상위 엘리먼트인 html이 존재

#### Element API

##### 자식, 부모 엘리먼트에 접근하는 방법

- .children[0] : 해당 object의 첫 번째 자식 노드에 대한 배열
- window.document.children[0] : 문서 전체
- window.document.children[0].children[0] : `head` tag
- .parentNode : 부모 노드
- .firstElementChild : 첫 자식 엘리먼트
- .lastElementChild : 마지막 자식 엘리먼트

##### 같은 레벨의 형제 엘리먼트에 접근하는 방법

- .nextElementSibling
- .previousElementSibling

#### 실습에 사용된 코드

##### css

```
h1 {
    color : blue;
}

h2 {
    color : green;
}

p {
    margin-left: 10px;
}
```

##### html

```
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css.css">
        <style>
            #songwriter, #lyricist{ text-align: right; }
        </style>
    </head>
    <body>

        <h1>애국가</h1>

        <p id="songwriter">작곡 : 안익태</p>
        <p id="lyricist" style="color:red;">작사: 미상</p>

        <h2>1절</h2>
        <p class="lyric">
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.<br>
            무궁화 삼천리 화려강산대한 사람, 대한으로 길이 보전하세.
        </p>

        <h2>2절</h2>
        <p class="lyric">
            남산 위에 저 소나무, 철갑을 두른 듯 바람서리 불변함은 우리 기상일세. <br>
            무궁화 삼천리 화려강산대한 사람, 대한으로 길이 보전하세.
        </p>


    </body>
</html>
```

document Object에서부터 자식에 접근하면서, 원하는 엘리먼트에 순차적으로 접근할 수도 있지만,
다양한 DOM API를 활용하면 원하는 엘레먼트에 한 번에 접근할 수 있으니 앞으로 알아보자

---

2-2. [단일 Element 선택](http://tryhelloworld.co.kr/courses/자바스크립트와-웹-프론트엔드/lessons/단일-element-선택)

#### Document API

#####DOM API를 활용해 문서에서 엘리먼트를 선택하는 방법
- document.getElementBy~ : 단일 엘리먼트를 선택하는 메소드
- document.getElementsBy~ : 다중 엘리먼트를 선택하는 메소드

##### document.getElementById 메소드
- 인자로 HTML element 태그의 id를 전달하면 해당 엘리먼트가 반환됨

##### Element API
- .innerHTML 속성
  - 엘리먼트 안의 HTML코드를 변경
- .innerText 속성
  - 엘리먼트 안의 텍스트를 변경
- .style 속성
  - css를 변경 가능
      - .style.color
      - .style.fontSize
- img tag와 같이 원래 지정되어있는 요소들에 대해서는 src를 비롯한 attribute들을 동기화해준다

##### getAttribute 메소드
- element의 속성의 값을 얻어옴
- 하나의 인자 : attribute 이름을 받음
- 직접 객체에 동기화되지 않는 속성에 대해서도 접근이 가능(p tag에는 원래 src attribute가 지정되어 있지 않기에 동기화되지 않지만, 따로 지정하여 값이 있는 경우 getAttribute로 가져올 수 있다)
- 단, input tag에 접근해서 value를 가져오려고 하면 null이 나오는 것은 input tag에 입력된 값은 실제 tag의 atrribute로 동기화가 되지 않기 때문 

##### setAttribute 메소드
- element의 속성의 값을 설정함
- 두개의 인자 : attribute 이름, 설정할 속성의 값을 받음
- 직접 객체에 동기화되지 않는 속성에 대해서도 값 설정이 가능

---

2-3. [다중 Element 선택](http://tryhelloworld.co.kr/courses/자바스크립트와-웹-프론트엔드/lessons/다중-element-선택)

#### Document API
- document.getElementsBy~ : 다중 엘리먼트를 선택하는 메소드. 배열형태로 값을 반환함

##### document.getElementsByTagName 메소드
- 인자로 HTML element 태그의 이름을 전달하면 해당 엘리먼트들이 반환됨

##### document.getElementsClassName 메소드
- 인자로 class의 이름을 전달하면, 해당 class의 모든 엘리먼트가 배열로 반환됨

##### document.getElementsByName 메소드
- 인자로 name을 전달하면, 해당 name 속성을 가진 모든 엘리먼트가 배열로 반환됨.
- - Name 속성은 주로 Input tag에 사용됨
- document.getElementsByName("author")[0].value 로 해당 텍스트를 가져올 수 있음

#### Element API
- .value 속성
- input element에 입력된 값은 .value를 통해 얻어올 수 있음
- getAttribute 메소드로는 받아올 수 없다는 점 주의

---

2-4. [CSS Seletor를 이용한 Element 선택](http://tryhelloworld.co.kr/courses/자바스크립트와-웹-프론트엔드/lessons/css-selector를-이용한-element-선택)

#### Document API
- document.querySelector : css selector를 기반으로 엘리먼트를 선택
  - 조건에 부합하는 element가 여러개인 경우 첫 엘리먼트만 반환.
- document.querySelectorAll : css selector를 기반으로 만족하는 모든 엘리먼트를 선택

#### CSS Selector
- \# : name 기반으로 선택 `document.querySelector("#songwriter")

- . : class 기반으로 선택 `document.querySelector(".lyric")

- , : 여러개의 셀렉터를 사용 `document.querySelectorAll("h1, h2")

- [] : Attribute filter

- > : child 대상으로 검색

- [관련 아티클](http://m.mkexdev.net/107)

- Crong 마스터님께서는 다른 API가 아닌, Selector를 우선적으로 사용하길 권장해주셨음

---

2-5. [Element 추가/삭제](http://tryhelloworld.co.kr/courses/자바스크립트와-웹-프론트엔드/lessons/element-추가삭제)

#### Document API
- document.createElement() : 문자열 인자로 element tag를 입력하면 해당 엘리먼트가 생성돼 반환됨

#### Element API
- .appendChild(인자) : 추가할 element를 인자로 받아 호출된 element의 자식으로 인자를 추가함
- .removeChild(인자) : 삭제할 element를 인자로 받아 호출된 element의 자식중에서 해당 element를 삭제
- .insertBefore(인자1, 인자2) : 인자1로 받은 element를 호출된 element의 자식중 인자2의 이전에 추가함
- .cloneNode() : 호출된 element를 복사해서 반환함

