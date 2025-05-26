const time = new Date().getHours();
//getHours 상수 시간은 = 데이트 객체를 얻고 거기서 시간만을 얻어온다.
let greeting; // let이라 재선언 재할당이 금지된다.
if (time<10) {
    greeting = "굿모닝"
}else if (time<20) {
    greeting="비가 오는 날이네요."
} else {
    greeting = "학원 끝나고 좋은밤"
}
document.getElementById("con").innerHTML =greeting;

let text;
if(Math.random() < 0.5) {
    text = "전 0.5보다 작아요."
} else {
    text = "<a href= 'https://youtube.com'>유튜브</a>";
}
document.getElementById("txt").innerHTML = text; //변수명이 text

let dat;
switch ( new Date().getDay()){
     case 0:
        day = "일요일"
        break;
     case 1:
        day = "월요일"
        break;
     case 2:
        day = "화요일"
        break;
     case 3:
        day = "수요일"
        break;
     case 4:
        day = "목요일"
        break;
     case 5:
        day = "금요일"
        break;
     default :
     day = "오늘은 아마도 토요일인 거 같아."
}
document.getElementById("day").innerHTML = day;
