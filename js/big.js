let x = 9999999999999999;
let y = BigInt("9999999999999999");
document.getElementById("nums").innerHTML = x + "<br/>" + y;

let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;

document.getElementById("hex").innerHTML = hex + "<br>" + oct + "<br>" + bin; 
/*
진법 : 숫자를 표현할 때 기준이 되는 숫자체계
10진법 - 우리가 일상에서 쓰는 건 10진법 0~9
2진법 - 0과 1 두 개의 숫자만 사용합니다.
5는 2진법으로 101
자바스크립트에서 0은 거짓값 0은 진실값
0 오류 1 성공 
 */