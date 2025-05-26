//1)
const name = "ABCDEFGHIJKLMN"
//상수네임 = 문자열 ; 이 경우엔 상수네임이 name

//상수를 활용하기 위해서 변수를 만든다.
let text= "" // 변수를 대입시키되 비어있는 값을 대입한다.
//정해진 것만큼(우리가 쓴 부분만큼) 반복하기 위해서 for문 사용
for (const x of name) {
    text += x + "<br>"; //변수개별에 줄바꿈 태그를 더해서 //+=: '더해서 대입하면'의 의미// text = text + x 이 의미!!!
}

document.write(text)
document.getElementById("one").innerHTML =text;

//2) 세트: 고유한 값만 출력
const letter = new Set(["a", "a","b", "c"])
// let은 재선언 재할당이 안 되므로 text가 아니라 다음은 txt로 해준다. //set이라 필터가 적용되어 a가 한 번만 출력되게 된다.
let txt =  "";
for (const q of letter){
    txt += q + "<br>";
}

document.getElementById("two").innerHTML =txt;

//3) 키와 밸류 => map
const fruits = new Map([
    ["apples", 1000],  //앞에 나오는 apples가 키값, 1000이 천원이나 천 개 등을 의미하는 밸류값
    ["banana", 500],
    ["orange",200]
]);

let nums = fruits.get("orange");
document.getElementById("three") .innerHTML = " 지금 창고에는 " + nums + " 개의 오렌지가 있습니다.";