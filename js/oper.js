//1) 거듭제곱
let x = 10;
x **= 5;
//2) 나눈 나머지는
let q = 10;
q %= 5;     //q를 5로 나눈 나머지는

document.getElementById("one").innerHTML =
" 1)번 거듭제곱의 값 " + x + "<br/>"
document.getElementById("two").innerHTML =
" 2)번 나눈 나머지의 값은 " + q +"<br/>"

let num1 = 1; //실수 1 
let num2 = "1"; //문자열 1
let result1 = num1 == num2; 
let result2 = num1 === num2;
let num3 = 3; let num4 =4;
let result3 = num4 > num3;
document.getElementById("compare1").innerHTML = "타입을 고려하지 않은 같음의 결과값은 " + result1 + "<br/>"
document.getElementById("compare2").innerHTML = "타입을 고려하지 않은 같음의 결과값은 " + result2 + "<br/>"
document.getElementById("compare3").innerHTML = "타입을 고려하지 않은 같음의 결과값은 " + result1 + "<br/>" +
"타입을 고려하지 않은 같음의 결과값은 " + result2 + "<br/>" +
"변수에 수를 비교할 때 " + result3+"<br/>"

//3) 논리연산자
let w= 6;
let e= 3;

document.getElementById("three").innerHTML =
"&&는 and(그리고)라서 두 개의 조건이 일치해야 됩니다. " + "<br/>" +
"w=6, e=3일 때 (w < 10 && e>1)는" + (w < 10 && e>1) + "입니다." + "<br/>" + 
"w=6, e=3일 때 (w<10 && e<1)는" + (w<10 && e<1) + "입니다." + "<br/>" +
"(w==10 && e==1)는 " + (w==10 && e==1) + "입니다." + "<br/>" +
"(w==10 && e==3)는 " + (w==10 && e==3) + "입니다." + "<br/>" +
"!(w === e)는 " + !(w === e) + "입니다. (w === e)가 본래 거짓이기에 그 반대니까." + "<br/>" +
"!(w > e)는 " + !(w > e) + "입니다."

