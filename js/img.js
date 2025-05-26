//1)커지는 함수
function bigImg(x) {
    x.style.height = "164px";
    x.style.width = "164px";
}
//2)작아지는 함수
function normalImg(X){ //자바스크립트에서 css 스타일 주는 것 하는 중
    X.style.height = "32px";
    X.style.width = "32px";
}

function bigDora(x) {
    x.style.height ="100px"
    x.style.width ="100px"
    x.style.transition ="transform 0.5s ease-in-out";
    x.style.transform = "rotate(360deg)"; // 360도 회전
}
function smallDora(x) {
    x.style.height="40px"
    x.style.width ="40px"
    x.style.transform = 'rotate(0deg)'; // 마우스 아웃 시 회전 초기화
}