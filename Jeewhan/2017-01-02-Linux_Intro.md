---
layout: post
title:  "Linux Intro"
date:   2017-01-02 11:45:00 +0900
categories: Linux
---

# 리눅스

```
리눅스는 다양한 배포판이 존재

한국에서 가장 많이 쓰이는 것은 Ubuntu

Kernel 은 운영체제의 핵심

OS와 대화를 위한 프로그램이 Shell
```



### 명령어 모음

```
pwd : 현재 디렉토리

mkdir : 새로운 디렉토리 생성

ls : 디렉토리의 내용을 보여줌 ( 보통 ls -al 의 형태로 활용 )

cat 파일명 : 파일 내용 출력
cat filename | pbcopy : 파일 내용을 읽어서 클립보드로 복사

echo "Hello, World" : 화면에 "~"을 출력

echo "Hello, World" > hello.txt : 출력한 "~" 내용을 hello.txt에 저장

history : 명령어 이력 출력
history로 확인한 뒤, !1105 를 입력하면 그 번호에 해당하는 명령어를 다시 동작시킬 수 있음

cp, mv, rm : 복사, 이동, 삭제

find 디렉토리 -name "파일명" : 지정한 디렉토리와 그 하위 디렉토리에서 파일명으로 검색

touch 파일명 : 0바이트 파일 생성
```



### 더 공부할 수 있는 사이트

- [Learning The Shell](http://linuxcommand.org/lc3_learning_the_shell.php)
- [Linux Journey](https://linuxjourney.com/)
- [edX Introduction to Linux](https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-0)
- [vim adventures](http://vim-adventures.com/)