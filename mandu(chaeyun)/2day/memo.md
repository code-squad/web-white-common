2016.01.03.화요일  
# 검색하는 법
1. 영어로
2. 가장 신뢰성 있는 사이트
3. '요약', '코드예시'부터 읽기
# 추천책
1. 프론트엔드 개발자를 위한 자바스크립트 프로그래밍 JavaScript for Web Developers
2. [자바스크립트를 말하다](http://www.yes24.com/24/goods/14533820)
3. [자바스크립트 패턴](http://www.yes24.com/24/goods/5871083)
# 강의 속 짧은 팁
- TDD 테스트 자동화 : 테스트를 자동으로 해주는 프로그램. 취업도움
- 소프트웨어 방법론 : 협업하는 법
## 많은 메소드들과 문법들 외워야 하나요?
- 검색하면 된다.
- Design and Code. 로직과 설계만을 생각해야 한다. '다른 좋은 방법은 무엇이 있을까?'
- 코딩을 많이 해봐라. 로직의 디자인에 신경을 많이 써서.
- 아무 생각 없이 메소드를 쓰지 마라. 이것이 무엇인지. 왜 저렇게 만들어졌는지 생각해보기.
# About Javascript
## console.log(c);
- console : 무엇인가들의 집합. 객체.
- log : 매소드
- () : 함수라는 뜻.
- console 객체에 있는 log를 찍다. 크롬에서 제공하는.
- name space : 정리정돈. 객체. ex) 바탕화면 정리
  name space javascript pattern.
  이름 공간. 중복 충돌을 방지하기 위해서.
## Type Casting.
암묵적 형변환. 자바스크립트의 특징.
## undefined
- 함수를 선언하고 리턴했을 때는 안 뜬다. 왜?
- 자바스크립트에선느 리턴값이 없을 때, undefined 디폴트값이 출력된다.
    function log(){
      return "hello";
    }
    log();
    function log(){
    }
    log();

## debugger
디버깅 중단점

# 온라인 코드 사이트
- [jsbin.com](http://jsbin.com)
- [jsfiddle.net](jsfiddle.net)
- [codepen.io](codeopen.io)

# 수업 시간 코딩
## calculation 함수
### 로직
  1. 매개변수 A, B, op 입력
  2. 만약 op와 "plus"가 같다면, A와 B를 더한다. 결과값을 result에 저장한다.
  3. 만약 op와 "minus"가 같다면, A와 B를 뺀다. 결과값을 result에 저장한다.
  4. 만약 op와 "multiply"이 같다면, A와 B를 곱한다. 결과값을 result에 저장한다.
  5. result를 리턴한다.

### +에러 처리
  1. 매개변수 A, B, op 입력.
  2. error_handle 함수 실행.
  3. 만약 true 리턴 시, 아래사항 실행. 아니라면 실행 안함.
  4. 만약 op와 "plus"가 같다면, A와 B를 더한다. 결과값을 result에 저장한다.
  5. 만약 op와 "minus"가 같다면, A와 B를 뺀다. 결과값을 result에 저장한다.
  6. 만약 op와 "multiply"이 같다면, A와 B를 곱한다. 결과값을 result에 저장한다.
  7. result를 리턴한다.

#### [handle_error]
  1. 매개변수 A,B,C, arg_leng
  2. 만약 arg_leng 이 3이 아니라면, "인자는 3개가 되어야합니다" 출력.
  2. 만약 A 타입이 number 라면, true 값 반환.
      그 이외라면 에러출력."숫자를 입력해주세요"  false값 반환.
  3. 만약 B 타입이 number 라면, 정상실행. true 값 반환.
      그 이외라면 에러출력. "숫자를 입력해주세요" false 값 반환.
  4. 만약 op 타입이 string 이라면, 정상실행. true 값 반환.
      그 이외라면 에러출력. "문자열을 입력해주세요"  false 값 반환.
