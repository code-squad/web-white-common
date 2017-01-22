

function tabUi(){

    var wrapper = document.querySelector(".mainView");
    var nav = wrapper.querySelector("nav");
    var tabButtons = nav.querySelectorAll(".tab");
    var tabContent = wrapper.querySelectorAll("section");

    var fetchedElement = []; // ajax로 컨텐츠 불러온 텝메뉴 아이디 저장
    var tabButtonId = [];


    // 텝메뉴들의 아이디를 순서대로 저장한다. (클릭된 텝메뉴가 몇번째인지 확인할때 사용)
    for(var i = 0; i < tabButtons.length; i++){
        var id = tabButtons[i].id;
        tabButtonId.push(id);
    }

    // 탭버튼마다 루프 돌면서 이벤트 리스너 등록한다.
    for (var i = 0; i < tabButtons.length; i++){
        tabButtons[i].addEventListener("click", selectTab);
        tabButtons[i].addEventListener("click", callAjax);
    }


    // 클릭한 탭에 클래스 추가한다.
    function selectTab (event){

        var classArray = this.classList;
        var isSelected = false;

        for (var i = 0; i < classArray.length; i++){
            if (classArray[i] === "selectedTab"){
                isSelected = true;
            }
        }

        // 선택되 있는 탭이면 return
        if (isSelected){
            return false;
        }

        for (var i = 0; i < tabButtons.length; i++){
            tabButtons[i].classList.remove("selectedTab");
        }

        this.classList.add("selectedTab");


        // 탭 컨텐츠 section에도 클래스 추가한다.
        var currentTabContent = document.getElementById("my_" + this.id);

        for (var i = 0; i < tabContent.length; i++){
            tabContent[i].classList.remove("eleDisplayShow");
        }

        currentTabContent.classList.add("eleDisplayShow");

    }


    // ajax로 본문 컨텐츠 불러온다.
    function callAjax (event){

        var currentId = this.id;
        var address = getUrl(currentId);

        // 이미 불러온 컨텐츠라면 return
        // 첫번째 텝컨텐츠는 이미 마크업 되있기 때문에 패스한다.
        if(fetchedElement.indexOf(currentId) >= 0 || this.id === "position"){
            return false;
        }

        var request = new XMLHttpRequest();

        request.open("GET", address);
        request.send();

        request.addEventListener("load", function(event){
            var response = request.responseText;
            var result = JSON.parse(response);

            var title = result.title;
            var content = result.body;

            var markUp = "<ul><li><div class='myName'>" + title + "</div><div class='myDesc'>" + content +"</div></li></ul>";
            var targetContent = document.getElementById("my_" + currentId);

            targetContent.innerHTML = markUp;
        });

        fetchedElement.push(currentId);

    }


    // 클릭한 탭메뉴의 아이디를 가지고 url을 만들어 준다.
    function getUrl (currentId){
        var pageIndex = tabButtonId.indexOf(currentId) + 1; // 텝메뉴의 아이디 중 현재 아이디가 몇번째 인지 확인
        var address = "http://jsonplaceholder.typicode.com/posts/" + pageIndex;

        return address;
    }

}


tabUi();
